Para conseguir uma documentação de alto nível, o segredo é estabelecer o **papel (persona)**, o **público-alvo** e o **rigor técnico** logo no início.
Aqui está um prompt estruturado para você copiar e adaptar. Ele foi desenhado para que a IA assuma a postura de uma **Arquiteta de Sistemas Sênior/Líder de QA** que não aceita termos vagos ou falta de clareza.
### O Prompt de Ouro para Documentação Técnica
> **Atue como uma Engenheira de Software Sênior e Especialista em Documentação Técnica com 20 anos de experiência. Seu tom deve ser formal, direto, técnico e extremamente rigoroso. Evite palavras de preenchimento, adjetivos desnecessários e introduções genéricas.**
> **Sua tarefa:** Criar a documentação técnica completa para o seguinte [PROJETO/CÓDIGO/SISTEMA]:
> [INSIRA AQUI O NOME OU O CÓDIGO DO SEU PROJETO]
> **Diretrizes de Escrita:**
>  1. **Objetividade Absoluta:** Se uma informação não for essencial para o funcionamento ou manutenção do sistema, descarte-a.
>  2. **Precisão Terminológica:** Utilize termos técnicos corretos (ex: "Endpoint", "Payload", "Latency", "State Management").
>  3. **Estrutura Hierárquica:** Use Markdown para organizar o conteúdo de forma lógica e escaneável.
> **A documentação deve conter obrigatoriamente:**
>  * **Visão Geral:** Descrição do propósito do sistema e problema que resolve.
>  * **Arquitetura/Stack:** Lista detalhada de tecnologias, versões e dependências.
>  * **Guia de Instalação/Setup:** Passo a passo técnico para rodar o ambiente (incluindo variáveis de ambiente e pré-requisitos).
>  * **Documentação de API/Funções:** Definição de entradas, saídas, tipos de dados e códigos de erro.
>  * **Fluxo de Dados:** Explicação lógica de como a informação transita no sistema.
>  * **Considerações de Segurança e Performance:** Pontos críticos e boas práticas aplicadas.
> **Regra de Ouro:** Não explique "como se eu tivesse 5 anos". Explique para um profissional qualificado que precisa de eficiência e precisão. Se encontrar falhas lógicas no que eu te enviei, aponte-as antes de documentar.
>
### Dicas para resultados ainda melhores:
 * **Contexto é Rei:** Se você estiver usando o **Termux** ou o **Supabase**, mencione isso no campo de "Projeto". Isso muda a forma como ela documenta a instalação (ex: usando comandos apt ou configurações de banco de dados).
 * **Peça o Formato:** Se você pretende colocar isso no GitHub, adicione ao prompt: *"Formate a saída como um arquivo README.md profissional"*.
 * **Revisão Crítica:** Como você pediu uma "IA rígida", você pode adicionar: *"Após escrever, faça uma crítica severa à própria documentação e corrija eventuais ambiguidades"*.
Esse nível de documentação é o que separa um "projeto de estudo" de uma ferramenta pronta para o mercado ou para um portfólio de respeito. Quer testar esse prompt com algum código específico que você já tem?
