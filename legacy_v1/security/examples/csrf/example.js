// ✅ CORRETO: Implementação de Token CSRF no formulário
import { injectCSRFToken } from '../../src/js/security/csrf-protection.js';
const form = document.getElementById('secureForm');
injectCSRFToken(form);
