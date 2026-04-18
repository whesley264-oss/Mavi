# 🚫 O PURGATÓRIO DO GENÉRICO: GUIA ANTI-MEDIOCRIDADE

Se a sua aplicação se parece com um template gratuito de 2015, você falhou com o Argus. Aqui estão os padrões que as IAs "preguiçosas" usam e como o Argus os destrói.

---

## 1. O CARD GENÉRICO vs. O CARD ARGUS
- **❌ Purgatório**: Fundo branco, `border-radius: 8px`, `box-shadow: 0 4px 6px rgba(0,0,0,0.1)`.
- **💎 Argus**:
  - **Neobrutalism**: Bordas de 4px, sombra sólida `#000` sem blur.
  - **Glass**: `backdrop-filter: blur(40px)`, bordas internas com gradiente linear.
  - **Liquid**: Sombras coloridas difusas e texturas de ruído (noise).

## 2. A TIPOGRAFIA "ROBOTO/INTER" vs. O IMPACTO EDITORIAL
- **❌ Purgatório**: Usar a fonte padrão do sistema para tudo. Títulos pequenos e sem peso.
- **💎 Argus**:
  - Títulos em **Syne** ou **Clash Display** com `font-weight: 900`.
  - Escala fluida extrema (`clamp(4rem, 15vw, 12rem)`).
  - Texto vazado (`text-stroke`) e recortes de imagem no texto.

## 3. O SCROLL MORTO vs. O ORGANISMO VIVO
- **❌ Purgatório**: Elementos estáticos que simplesmente "estão lá".
- **💎 Argus**:
  - **Scroll Interlocking**: Elementos convergem conforme o usuário desce.
  - **Parallax Progressivo**: O fundo se move em velocidades diferentes das camadas de texto.
  - **Depth Zoom**: A tipografia cresce em escala, "engolindo" a câmera.

## 4. O BOTÃO "PRIMARY BLUE" vs. O HAPTIC VISUAL
- **❌ Purgatório**: `<button class="bg-blue-500 text-white">`.
- **💎 Argus**:
  - Botões magnéticos que seguem o cursor.
  - Efeitos de brilho (spotlight) dinâmicos.
  - Transições de iluminação física (Skeuomorphism).

## 5. O LAYOUT EM BLOCO vs. A COMPOSIÇÃO EM CAMADAS
- **❌ Purgatório**: Seções horizontais chatas (Navbar > Hero > Features > Footer).
- **💎 Argus**:
  - **Z-index Layering**: Texto atrás do sujeito, sujeito atrás de partículas de ruído.
  - **Bento Grid Assimétrico**: Nada é perfeitamente quadrado; o caos é controlado.

---

## 🏁 O TESTE DO "SAIR DA CAIXA"
Antes de entregar, a IA deve se perguntar:
1. *"Se eu tirar as cores, este design ainda é interessante pela estrutura?"*
2. *"Eu usaria este site para vender um produto de US$ 10.000?"*
3. *"Um desenvolvedor sênior da Apple/Vercel ficaria impressionado com o código?"*

**Se a resposta for "Não", o Argus exige refatoração imediata.**
