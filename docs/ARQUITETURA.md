# 🏗️ ARQUITETURA ARGUS v3 (NEXT.JS & AI-DRIVEN)

O Argus v3 abandona o HTML estático para adotar uma arquitetura de componentes de alta performance baseada em Next.js. IAs devem seguir esta estrutura para garantir escalabilidade e qualidade "Awwwards".

---

## 🧱 ESTRUTURA DE DIRETÓRIOS
- `app/`: Estrutura de rotas e layouts baseada em Server Components.
- `components/ui/`: Componentes atômicos com animações integradas (Framer Motion).
- `components/sections/`: Seções complexas de scrollytelling.
- `lib/`: Utilitários técnicos e configurações de engine (GSAP, Lenis).
- `docs/`: O cérebro da skill e manuais de estilo.

---

## 🌊 ENGINE DE MOVIMENTO
O movimento é o que separa o Argus do genérico.
1. **Lenis**: Smooth scroll mandatório para evitar "jank" em animações de scroll.
2. **GSAP + ScrollTrigger**: Engine principal para transformações complexas e scrollytelling.
3. **Framer Motion**: Micro-interações, hover effects e transições de página.

---

## 🛡️ PROTOCOLO DE SEGURANÇA NA EDGE
A segurança deve ser implementada no `middleware.ts` e em Server Actions.
- **CSP & Security Headers**: Configurados nativamente no middleware.
- **Sanitização**: Obrigatória para qualquer entrada do usuário (Zod + DOMPurify).
- **Rate Limiting**: Aplicado via middleware em rotas críticas.

---

## 🎯 PADRÃO DE ENTREGA
1. **Planejamento Deep**: Questionar o usuário até 100% de clareza.
2. **Setup do Framework**: Next.js + Tailwind + TypeScript.
3. **Assinatura Estética**: Aplicar um dos Signature Styles de `docs/ESTILOS.md`.
4. **Scrollytelling**: Implementar o protocolo de `docs/SCROLLYTELLING.md`.

*Argus v3: Onde a engenharia de software encontra o design cinematográfico.*
