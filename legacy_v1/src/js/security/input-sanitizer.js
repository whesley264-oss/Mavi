// AI INTENT: Security layer to prevent Cross-Site Scripting (XSS) through input cleaning.
export function sanitize(input) {
  if (typeof input !== 'string') return '';
  return input
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;')
    .trim().slice(0, 1000);
}

export function sanitizeEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
  const clean = sanitize(email).toLowerCase();
  return emailRegex.test(clean) ? clean : null;
}

export function sanitizePhone(phone) {
  return phone.replace(/[^0-9+\-\s()]/g, '').trim().slice(0, 20);
}

export function sanitizeURL(url) {
  try {
    const parsed = new URL(url);
    if (!['http:', 'https:'].includes(parsed.protocol)) return null;
    return parsed.href;
  } catch { return null; }
}
