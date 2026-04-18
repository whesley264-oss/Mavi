Para elevar o nível da sua documentação e do seu código, você precisa de um "Code Review" agressivo. Abaixo, organizei 50 vulnerabilidades críticas divididas por categorias.
Logo em seguida, preparei o **Prompt de Ataque e Defesa** para você usar com a IA, configurado para agir como uma especialista em Segurança Ofensiva (Red Team).
## 50 Erros de Segurança para Corrigir e Evitar
### 1. Injeção e Manipulação de Dados
 1. **SQL Injection:** Concatenar strings em queries em vez de usar *Prepared Statements*.
 2. **NoSQL Injection:** Não sanitizar filtros em bancos como MongoDB.
 3. **Command Injection:** Passar entradas do usuário direto para funções como exec() ou system().
 4. **LDAP Injection:** Falha ao filtrar caracteres em buscas de diretório.
 5. **Log Injection:** Permitir que o usuário escreva quebras de linha em logs para forjar eventos.
### 2. Autenticação e Gestão de Sessão
 6. **Senhas em Plain Text:** Não usar hashes fortes (como Argon2 ou BCrypt).
 7. **Hardcoded Credentials:** Chaves de API e senhas escritas direto no código.
 8. **Session Fixation:** Não renovar o ID da sessão após o login.
 9. **Tokens JWT Fracos:** Usar algoritmos como "none" ou chaves secretas curtas.
 10. **Falta de Rate Limiting:** Permitir ataques de força bruta no login.
 11. **IDs de Sessão Previsíveis:** Usar sequências lógicas em vez de UUIDs.
 12. **Insecure Password Recovery:** Perguntas de segurança fáceis ou links que não expiram.
### 3. Falhas de Autorização (Broken Access Control)
 13. **IDOR (Insecure Direct Object Reference):** Acessar /api/user/10 trocando o ID sem verificar se o usuário é o dono.
 14. **Escalação de Privilégio Vertical:** Usuário comum acessando rotas /admin.
 15. **Escalação de Privilégio Horizontal:** Usuário acessando dados de outro usuário de mesmo nível.
### 4. Cross-Site Scripting (XSS)
 16. **Stored XSS:** Salvar scripts maliciosos no banco que executam para outros usuários.
 17. **Reflected XSS:** Refletir dados da URL na página sem escapar o HTML.
 18. **DOM-based XSS:** Manipular o DOM via JS com dados inseguros da URL.
### 5. Configurações e Cabeçalhos
 19. **Missing Security Headers:** Falta de Content-Security-Policy (CSP).
 20. **CORS Misconfiguration:** Usar Access-Control-Allow-Origin: * em ambientes privados.
 21. **Cookies sem flag HttpOnly:** Permitir que scripts JS leiam cookies de sessão.
 22. **Cookies sem flag Secure:** Enviar cookies de sessão via HTTP (sem criptografia).
 23. **Exposição de Versão:** Cabeçalhos que dizem exatamente qual versão do servidor você usa.
### 6. Gestão de Arquivos e Uploads
 24. **Unrestricted File Upload:** Permitir upload de arquivos .php, .exe ou .sh.
 25. **Path Traversal:** Usar entradas do usuário para definir o caminho de um arquivo (ex: ../../etc/passwd).
 26. **Local File Inclusion (LFI):** Executar arquivos locais via parâmetros de URL.
 27. **Remote File Inclusion (RFI):** Carregar scripts de servidores externos.
### 7. Erros de Lógica e Processamento
 28. **Insecure Deserialization:** Executar objetos serializados vindos de fontes inseguras.
 29. **XXE (XML External Entity):** Processar entidades externas em parsers XML mal configurados.
 30. **Integer Overflow:** Não tratar números que excedem a capacidade da variável.
 31. **Race Conditions:** Falhas quando dois processos tentam acessar o mesmo recurso simultaneamente.
 32. **Falta de validação no Server-Side:** Confiar apenas na validação do JavaScript no navegador.
### 8. Vazamento de Informação
 33. **Verbose Error Messages:** Exibir stack traces ou erros de banco de dados para o usuário final.
 34. **Arquivos Temporários Expostos:** Deixar backups .bak ou arquivos .env acessíveis via web.
 35. **Comentários de Código Sensíveis:** Notas no HTML/JS sobre o funcionamento interno ou senhas.
### 9. Dependências e Terceiros
 36. **Bibliotecas Vulneráveis:** Usar pacotes NPM/Python com CVEs conhecidos.
 37. **Supply Chain Attacks:** Não verificar o hash das dependências.
### 10. Outros Ataques Comuns
 38. **CSRF (Cross-Site Request Forgery):** Realizar ações em nome do usuário sem o token de validação.
 39. **SSRF (Server-Side Request Forgery):** Fazer o servidor requisitar URLs internas da rede.
 40. **Open Redirects:** Redirecionar usuários para sites externos maliciosos via parâmetros.
 41. **Clickjacking:** Não usar X-Frame-Options para impedir que o site seja colocado em um iframe.
 42. **Insecure Randomness:** Usar Math.random() para funções de segurança.
 43. **Criptografia Fraca:** Usar MD5 ou SHA1.
 44. **Insufficient Logging:** Não logar tentativas falhas de login ou ações críticas.
 45. **Falta de Integridade em Subrecursos:** Carregar CDNs sem o atributo integrity.
 46. **Default Credentials:** Não trocar a senha padrão do admin do banco ou CMS.
 47. **Side-Channel Attacks:** Vazamento de informação através do tempo de resposta.
 48. **Insecure Storage:** Salvar chaves privadas em pastas públicas.
 49. **Falta de HSTS:** Não forçar o uso de HTTPS em todas as conexões.
 50. **Email Header Injection:** Permitir que usuários adicionem campos Bcc: em formulários de contato.
## O Prompt de "Ataque e Defesa" (Penetration Tester Persona)
Use este prompt quando quiser que a IA analise seu código como se estivesse tentando invadi-lo.
> **Persona:** Atue como um Hacker Ético (Pentesters) nível Red Team. Sua mentalidade é adversária, focada em encontrar brechas e explorar falhas de lógica, segurança e infraestrutura.
> **Tarefa:** Analise o código abaixo em duas etapas rigorosas:
> **Etapa 1: O Ataque (Audit)**
> Tente "quebrar" este sistema. Liste todas as superfícies de ataque. Identifique vulnerabilidades de injeção, quebra de autenticação, vazamento de dados e falhas de lógica. Para cada falha, explique como um atacante a exploraria na prática (ex: qual payload seria usado).
> **Etapa 2: A Defesa (Patching)**
> Para cada vulnerabilidade encontrada, forneça o código corrigido seguindo as melhores práticas (OWASP). Explique por que a correção funciona e como prevenir essa classe de erro no futuro.
> **Regra:** Seja técnico, agressivo na análise e preciso na correção. Se o código for "seguro", tente encontrar vetores obscuros ou falhas de configuração.
> **CÓDIGO PARA ANÁLISE:**
> [COLE SEU CÓDIGO AQUI]
>
