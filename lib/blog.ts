import fs from "fs";
import path from "path";
import { fillStats } from "./stats";

/**
 * Zero-dependency blog engine. Posts are .md files in content/blog with a
 * simple `---` frontmatter block. Markdown support is deliberately a subset —
 * see content/blog/README.md for what the writing agent may use.
 */

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  keyword: string;
  image: string; // name of a file in /public/images (no extension)
  readMinutes: number;
  metaTitle?: string; // <title> for Google when it should differ from the H1
  updated?: string; // YYYY-MM-DD of the last meaningful refresh
  type: "post" | "guide" | "case-study"; // guides and case studies get a quieter CTA
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Post extends PostMeta {
  html: string;
  faq: FaqItem[];
}

function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return { meta: {}, body: raw };
  const meta: Record<string, string> = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
  }
  return { meta, body: raw.slice(m[0].length) };
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** inline: bold, italic, links. Runs on already-escaped text. */
function inline(s: string): string {
  return s
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>")
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, h) => {
      const ext = /^https?:\/\//.test(h) && !h.includes("thatmarketingguyy.com");
      return `<a href="${h}"${ext ? ' target="_blank" rel="noopener noreferrer"' : ""}>${t}</a>`;
    });
}

/** Minimal markdown → HTML: h2/h3, p, ul/ol, blockquote, hr. */
export function renderMarkdown(md: string): string {
  const lines = escapeHtml(md).split("\n");
  const out: string[] = [];
  let list: "ul" | "ol" | null = null;
  let para: string[] = [];

  const flushPara = () => {
    if (para.length) {
      out.push(`<p>${inline(para.join(" "))}</p>`);
      para = [];
    }
  };
  const flushList = () => {
    if (list) {
      out.push(`</${list}>`);
      list = null;
    }
  };

  for (const line of lines) {
    const t = line.trim();
    if (!t) { flushPara(); flushList(); continue; }

    const img = t.match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/);
    if (img) {
      flushPara(); flushList();
      const src = img[2].startsWith("/") ? img[2] : `/images/${img[2]}.webp`;
      out.push(
        `<figure><img src="${src}" alt="${img[1]}" width="1200" height="800" loading="lazy" />` +
          (img[1] ? `<figcaption>${img[1]}</figcaption>` : "") +
          `</figure>`
      );
      continue;
    }
    const h3 = t.match(/^### (.+)/);
    const h2 = t.match(/^## (.+)/);
    const li = t.match(/^[-*] (.+)/);
    const oli = t.match(/^\d+\. (.+)/);
    const bq = t.match(/^> (.+)/);

    if (h2 || h3) {
      flushPara(); flushList();
      out.push(h2 ? `<h2>${inline(h2[1])}</h2>` : `<h3>${inline(h3![1])}</h3>`);
    } else if (t === "---") {
      flushPara(); flushList();
      out.push("<hr />");
    } else if (li || oli) {
      flushPara();
      const want = li ? "ul" : "ol";
      if (list !== want) { flushList(); out.push(`<${want}>`); list = want; }
      out.push(`<li>${inline((li || oli)![1])}</li>`);
    } else if (bq) {
      flushPara(); flushList();
      out.push(`<blockquote><p>${inline(bq[1])}</p></blockquote>`);
    } else {
      flushList();
      para.push(t);
    }
  }
  flushPara(); flushList();
  return out.join("\n");
}

function postType(t?: string): PostMeta["type"] {
  return t === "guide" || t === "case-study" ? t : "post";
}

/**
 * Questions under a "## Frequently asked questions" (or "## FAQ") section:
 * each "### Question" plus the text up to the next heading. Feeds FAQPage
 * structured data on the post page.
 */
export function extractFaq(md: string): FaqItem[] {
  const lines = md.split("\n");
  const start = lines.findIndex((l) => /^## (frequently asked questions|faqs?)\b/i.test(l.trim()));
  if (start < 0) return [];
  const items: FaqItem[] = [];
  let q: string | null = null;
  let a: string[] = [];
  const plain = (t: string) =>
    t.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*?([^*]+)\*\*?/g, "$1").replace(/^[-*] |^\d+\. /, "").trim();
  const push = () => {
    if (q && a.length) items.push({ q: plain(q), a: a.map(plain).join(" ") });
  };
  for (const raw of lines.slice(start + 1)) {
    const t = raw.trim();
    if (/^## /.test(t)) break;
    if (/^### /.test(t)) { push(); q = t.slice(4); a = []; continue; }
    if (q && t && !t.startsWith("![")) a.push(t);
  }
  push();
  return items;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") && f.toLowerCase() !== "readme.md")
    .map((f) => {
      const raw = fillStats(fs.readFileSync(path.join(BLOG_DIR, f), "utf8"));
      const { meta, body } = parseFrontmatter(raw);
      return {
        slug: f.replace(/\.md$/, ""),
        title: meta.title ?? f,
        description: meta.description ?? "",
        date: meta.date ?? "1970-01-01",
        keyword: meta.keyword ?? "",
        image: meta.image ?? "work_dashboard",
        readMinutes: Math.max(2, Math.round(body.split(/\s+/).length / 220)),
        metaTitle: meta.metaTitle || undefined,
        updated: meta.updated || undefined,
        type: postType(meta.type),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | null {
  const file = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fillStats(fs.readFileSync(file, "utf8"));
  const { meta, body } = parseFrontmatter(raw);
  return {
    slug,
    title: meta.title ?? slug,
    description: meta.description ?? "",
    date: meta.date ?? "1970-01-01",
    keyword: meta.keyword ?? "",
    image: meta.image ?? "work_dashboard",
    readMinutes: Math.max(2, Math.round(body.split(/\s+/).length / 220)),
    metaTitle: meta.metaTitle || undefined,
    updated: meta.updated || undefined,
    type: postType(meta.type),
    html: renderMarkdown(body),
    faq: extractFaq(body),
  };
}
