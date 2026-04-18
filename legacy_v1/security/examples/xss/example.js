// ❌ INCORRETO: Inserção direta de HTML
document.getElementById('welcome').innerHTML = "Olá, " + userInput;

// ✅ CORRETO: Sanitização e innerText
import { sanitize } from '../../src/js/security/input-sanitizer.js';
document.getElementById('welcome').textContent = "Olá, " + sanitize(userInput);
