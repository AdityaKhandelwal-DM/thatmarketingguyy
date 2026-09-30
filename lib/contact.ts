/*
 * Single source for how visitors reach Aditya.
 *
 * The WhatsApp number is only ever used to build wa.me links — never render
 * it as visible text anywhere on the site (owner's instruction). The email IS
 * meant to be shown.
 */

const WHATSAPP_NUMBER = "917619763979";

export const CONTACT_EMAIL = "info.adityakhandelwal@gmail.com";

/** wa.me link that opens a chat with Aditya, optionally with a prefilled message. */
export function whatsappUrl(text?: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
}

export function mailtoUrl(subject: string, body?: string) {
  const q = new URLSearchParams({ subject, ...(body ? { body } : {}) });
  // URLSearchParams encodes spaces as "+", which mail clients show literally.
  return `mailto:${CONTACT_EMAIL}?${q.toString().replace(/\+/g, "%20")}`;
}

/** Window event any button can dispatch to open the lead-form popup. */
export const OPEN_LEAD_FORM_EVENT = "tmg:open-lead-form";

export function openLeadForm() {
  window.dispatchEvent(new Event(OPEN_LEAD_FORM_EVENT));
}

export const SERVICES = [
  "Facebook & Instagram ads",
  "Google Ads",
  "Local SEO (Google Business Profile)",
] as const;

// Target markets first, then every other ISO 3166 region (names resolved at
// runtime with Intl.DisplayNames so there's no giant hand-typed list).
export const PRIORITY_COUNTRIES = ["US", "GB", "AE", "AU", "SG", "CA", "NZ", "SA", "QA", "IN"];

export const ALL_COUNTRY_CODES =
  "AD AE AF AG AL AM AO AR AT AU AZ BA BB BD BE BF BG BH BI BJ BN BO BR BS BT BW BY BZ CA CD CF CG CH CI CL CM CN CO CR CU CV CY CZ DE DJ DK DM DO DZ EC EE EG ER ES ET FI FJ FM FR GA GB GD GE GH GM GN GQ GR GT GW GY HK HN HR HT HU ID IE IL IN IQ IR IS IT JM JO JP KE KG KH KI KM KN KR KW KZ LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MG MH MK ML MM MN MO MR MT MU MV MW MX MY MZ NA NE NG NI NL NO NP NR NZ OM PA PE PG PH PK PL PS PT PW PY QA RO RS RU RW SA SB SC SD SE SG SI SK SL SM SN SO SR SS ST SV SY SZ TD TG TH TJ TL TM TN TO TR TT TV TW TZ UA UG US UY UZ VA VC VE VN VU WS YE ZA ZM ZW".split(
    " "
  );
