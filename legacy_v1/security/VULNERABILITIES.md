# 🛡️ Guia de Vulnerabilidades Web (Argus UI/UX)

Este guia detalha as principais vulnerabilidades que esta Skill ajuda a mitigar, com foco em uma postura Red Team (Ataque e Defesa).

## 1. Injeção de SQL (SQL Injection)
- **O Ataque**: Inserção de comandos SQL maliciosos em campos de formulário para manipular o banco de dados.
- **A Defesa**: Uso obrigatório de *Prepared Statements* e ORMs seguros.
- **Exemplo**: `SELECT * FROM users WHERE id = ?` em vez de concatenar strings.

## 2. Cross-Site Scripting (XSS)
- **O Ataque**: Injeção de scripts (JS) que executam no navegador de outros usuários.
- **A Defesa**: Sanitização rigorosa de todo input e uso de bibliotecas como DOMPurify. Uso de `innerText` em vez de `innerHTML`.
- **Argus Check**: Verifique o arquivo `src/js/security/input-sanitizer.js`.

## 3. Cross-Site Request Forgery (CSRF)
- **O Ataque**: Fazer o usuário realizar ações indesejadas em um site onde ele está autenticado.
- **A Defesa**: Uso de tokens CSRF únicos por sessão e validação no servidor.
- **Argus Check**: Verifique o arquivo `src/js/security/csrf-protection.js`.

## 4. Rate Limiting (Brute Force)
- **O Ataque**: Tentativas exaustivas de adivinhar senhas ou abusar de APIs.
- **A Defesa**: Bloqueio temporário após X tentativas falhas.
- **Argus Check**: Verifique o arquivo `src/js/security/rate-limiter.js`.

## 5. Insecure Direct Object Reference (IDOR)
- **O Ataque**: Acessar recursos de outros usuários alterando IDs na URL (ex: `/api/user/10` para `/api/user/11`).
- **A Defesa**: Validação de posse do recurso no lado do servidor.

## 6. Security Headers
- **O Ataque**: Falta de cabeçalhos que instruem o navegador sobre políticas de segurança.
- **A Defesa**: Implementação de CSP (Content Security Policy), HSTS e X-Frame-Options.

## 7. Honeypot (Bot Protection)
- **O Ataque**: Preenchimento automático de formulários por bots/scrapers.
- **A Defesa**: Campos ocultos que, se preenchidos, invalidam a submissão.
- **Exemplo**: Verifique a classe `.honeypot-field` em `src/css/components.css`.
