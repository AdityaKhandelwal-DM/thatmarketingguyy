import type { MetadataRoute } from "next";

// Every crawler is welcome, AI assistants included. The named list makes that
// explicit for crawlers that look for their own user agent; nothing is blocked.
const AI_CRAWLERS = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User", // OpenAI / ChatGPT
  "PerplexityBot", "Perplexity-User", // Perplexity
  "ClaudeBot", "Claude-SearchBot", "Claude-User", "anthropic-ai", // Anthropic / Claude
  "Google-Extended", "GoogleOther", // Gemini, Google AI
  "Bingbot", // Bing index, used by ChatGPT search and Copilot
  "Applebot", "Applebot-Extended", // Apple Intelligence
  "meta-externalagent", "FacebookBot", // Meta AI
  "Amazonbot", "DuckAssistBot", "MistralAI-User", "cohere-ai", "YouBot", "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_CRAWLERS, allow: "/" },
    ],
    sitemap: "https://www.thatmarketingguyy.com/sitemap.xml",
  };
}
