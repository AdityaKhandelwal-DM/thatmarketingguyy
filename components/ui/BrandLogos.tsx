/**
 * Official brand marks, inlined as SVG (no external requests, exact brand
 * colors). Per the brand rule: when a design references a platform, show that
 * platform's real logo and colors — never a generic icon.
 */

interface LogoProps {
  className?: string;
}

/** Google "G" — official four-color mark */
export function GoogleLogo({ className = "w-4 h-4" }: LogoProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

/** Facebook "f" — official blue roundel */
export function FacebookLogo({ className = "w-4 h-4" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        fill="#fff"
        d="M16.67 15.47l.53-3.47h-3.33V9.75c0-.95.46-1.88 1.96-1.88h1.51V4.92s-1.37-.23-2.69-.23c-2.74 0-4.53 1.66-4.53 4.67V12H7.08v3.47h3.04v8.39a12.1 12.1 0 003.75 0v-8.39h2.8z"
      />
    </svg>
  );
}

/** Google Ads — yellow/blue bars + green dot */
export function GoogleAdsLogo({ className = "w-5 h-5" }: LogoProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#FBBC04" d="M5.87 32.06L18.94 9.4a6.5 6.5 0 015.63-3.25L11.5 28.81l-5.63 3.25z" transform="rotate(0)" />
      <rect x="14.5" y="5" width="13" height="35" rx="6.5" fill="#FBBC04" transform="rotate(30 21 22.5)" />
      <rect x="20.5" y="5" width="13" height="35" rx="6.5" fill="#4285F4" transform="rotate(-30 27 22.5)" />
      <circle cx="10.5" cy="35.5" r="6.5" fill="#34A853" />
    </svg>
  );
}

/** Google Analytics (GA4) — stepped orange bars */
export function AnalyticsLogo({ className = "w-5 h-5" }: LogoProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect x="32" y="4" width="12" height="40" rx="6" fill="#F9AB00" />
      <rect x="18" y="18" width="12" height="26" rx="6" fill="#E37400" />
      <circle cx="10" cy="38" r="6" fill="#E37400" />
    </svg>
  );
}

/** Google Tag Manager — blue diamond with tag arrows */
export function GTMLogo({ className = "w-5 h-5" }: LogoProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect x="10" y="10" width="28" height="28" rx="5" transform="rotate(45 24 24)" fill="#4285F4" />
      <rect x="16" y="16" width="16" height="16" rx="2.5" transform="rotate(45 24 24)" fill="#8AB4F8" />
      <circle cx="24" cy="40" r="6" fill="#246FDB" />
    </svg>
  );
}

/** Google Search Console — blue chart in grey frame */
export function SearchConsoleLogo({ className = "w-5 h-5" }: LogoProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect x="4" y="8" width="40" height="32" rx="4" fill="#E8EAED" />
      <rect x="4" y="8" width="40" height="8" rx="4" fill="#5F6368" />
      <rect x="10" y="26" width="6" height="10" rx="1.5" fill="#4285F4" />
      <rect x="21" y="21" width="6" height="15" rx="1.5" fill="#4285F4" />
      <rect x="32" y="24" width="6" height="12" rx="1.5" fill="#669DF6" />
    </svg>
  );
}

/** Meta — blue gradient infinity (simplified two-arc form) */
export function MetaLogo({ className = "w-5 h-5" }: LogoProps) {
  return (
    <svg viewBox="0 0 48 30" className={className} aria-hidden="true">
      <path
        fill="#0081FB"
        d="M13.4 2C7.1 2 2 9.4 2 17.8 2 23.2 4.6 27 9 27c3.1 0 5.4-1.6 9.2-7.5l2.9-4.5c.5.8 1 1.6 1.5 2.5l2 3.3C28.7 27 31.4 29 35 29c4.4 0 7-3.6 7-9.2C42 10 36.8 2 30.4 2c-3.6 0-6.4 2.2-9 5.6C18.9 4.1 16.6 2 13.4 2zm.4 5c1.7 0 3.2 1.3 5.6 4.7l-3 4.6c-2.7 4.2-3.9 5.2-5.6 5.2-1.8 0-2.9-1.6-2.9-4.2C7.9 11.6 10.6 7 13.8 7zm16.4 0c3.3 0 6.3 5.4 6.3 11.6 0 2.5-.9 4-2.6 4-1.6 0-2.5-1-5-5l-2.5-4C24.4 9.4 27 7 30.2 7z"
      />
    </svg>
  );
}

/** WhatsApp Business — green roundel with phone */
export function WhatsAppLogo({ className = "w-5 h-5" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#25D366" />
      <path
        fill="#fff"
        d="M12 4.5a7.4 7.4 0 00-6.35 11.2L4.5 19.5l3.9-1.1A7.4 7.4 0 1012 4.5zm0 1.6a5.8 5.8 0 110 11.6 5.8 5.8 0 01-3-.83l-.35-.2-2.06.58.56-1.98-.23-.37A5.8 5.8 0 0112 6.1zm-2.3 2.9c-.16 0-.4.06-.6.28-.2.22-.79.77-.79 1.87 0 1.1.8 2.17.92 2.32.11.15 1.58 2.4 3.83 3.37 1.87.8 2.25.64 2.66.6.4-.04 1.3-.53 1.49-1.05.18-.52.18-.96.13-1.05-.06-.1-.2-.15-.43-.26-.22-.11-1.3-.64-1.5-.72-.2-.07-.35-.11-.5.11-.15.22-.57.72-.7.86-.13.15-.26.17-.48.06a6.06 6.06 0 01-1.78-1.1 6.65 6.65 0 01-1.23-1.53c-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.4.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.4-.05-.1-.5-1.2-.68-1.65-.18-.43-.36-.37-.5-.38h-.42z"
      />
    </svg>
  );
}

/** Instagram — glyph in brand pink (mono, per IG brand kit) */
export function InstagramLogo({ className = "w-5 h-5" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5.5" fill="none" stroke="#E4405F" strokeWidth="2.4" />
      <circle cx="12" cy="12" r="4.6" fill="none" stroke="#E4405F" strokeWidth="2.4" />
      <circle cx="17.3" cy="6.7" r="1.5" fill="#E4405F" />
    </svg>
  );
}

/** YouTube — red rounded rect + white play */
export function YouTubeLogo({ className = "w-5 h-5" }: LogoProps) {
  return (
    <svg viewBox="0 0 28 20" className={className} aria-hidden="true">
      <rect width="28" height="20" rx="5" fill="#FF0000" />
      <path d="M11.5 5.8v8.4L19 10l-7.5-4.2z" fill="#fff" />
    </svg>
  );
}

/** Google Business Profile — blue storefront */
export function GBPLogo({ className = "w-5 h-5" }: LogoProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M6 16h36v24a3 3 0 01-3 3H9a3 3 0 01-3-3V16z" opacity=".25" />
      <path fill="#4285F4" d="M4 8a3 3 0 013-3h34a3 3 0 013 3v4l-3.2 6.4a4.4 4.4 0 01-8 .1 4.4 4.4 0 01-7.9 0 4.4 4.4 0 01-7.9 0 4.4 4.4 0 01-8-.1L4 12V8z" />
      <path fill="#FBBC04" d="M27 27h9v13h-9z" />
      <path fill="#4285F4" d="M12 27h10v8H12z" opacity=".7" />
    </svg>
  );
}
