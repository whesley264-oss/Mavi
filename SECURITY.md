# 🛡️ Política de Segurança (Argus UI/UX)

A segurança não é um opcional no Argus UI/UX. Este repositório foi construído com uma postura de **Segurança Ofensiva (Red Team)**.

## Onde encontrar as diretrizes:
- **Checklist**: Veja `security/CHECKLIST.md`.
- **Vulnerabilidades**: Veja `security/VULNERABILITIES.md`.
- **Código**: Veja os módulos em `src/js/security/`.

## Reportando Vulnerabilidades
Se você encontrar uma falha, por favor abra uma Issue com o prefixo `[SECURITY]` ou entre em contato diretamente.

## Práticas Recomendadas
1. Sempre use `input-sanitizer.js` antes de processar dados do usuário.
2. Não desative a proteção CSRF em formulários de produção.
3. Mantenha as dependências atualizadas com `npm audit`.
