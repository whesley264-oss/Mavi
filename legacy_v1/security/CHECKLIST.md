# ✅ Checklist de Segurança Argus

Use este checklist em todo Code Review para garantir a blindagem do projeto.

- [ ] **Sanitização**: Todos os inputs do usuário são passados pelo `sanitize()`?
- [ ] **XSS**: Existem usos de `innerHTML` que poderiam ser `textContent`?
- [ ] **CSRF**: Todos os formulários `POST` possuem o token oculto?
- [ ] **Rate Limit**: Endpoints críticos (login, contato) possuem limitação de taxa?
- [ ] **Honeypot**: Formulários públicos possuem campos de armadilha para bots?
- [ ] **Logs**: Erros sensíveis estão sendo mascarados para o usuário final?
- [ ] **HTTPS**: O ambiente força conexões seguras?
- [ ] **Dependências**: O comando `npm audit` foi executado e está limpo?
