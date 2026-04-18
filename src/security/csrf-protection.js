// AI INTENT: Security layer to prevent Cross-Site Request Forgery (CSRF) via session tokens.
export function generateCSRFToken() {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, b => b.toString(16).padStart(2, '0')).join('');
}

export function injectCSRFToken(formEl) {
  const token = generateCSRFToken();
  sessionStorage.setItem('csrf_token', token);
  const input = document.createElement('input');
  input.type = 'hidden';
  input.name = '_csrf';
  input.value = token;
  formEl.appendChild(input);
}

export function validateCSRFToken(submittedToken) {
  const stored = sessionStorage.getItem('csrf_token');
  if (!stored || submittedToken !== stored) throw new Error('CSRF token inválido.');
  sessionStorage.removeItem('csrf_token');
}
