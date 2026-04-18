# Sistema de Temas — premium-web-kit

## Como aplicar um tema

Adicione o atributo `data-theme` na tag `<html>` ou em qualquer elemento pai:

```html
<!-- Aplicar globalmente -->
<html lang="pt-BR" data-theme="glassmorphism">

<!-- Aplicar apenas em uma seção -->
<section data-theme="neobrutalism">...</section>
```

## Temas disponíveis

| Tema | data-theme | Descrição |
|------|-----------|-----------|
| Glassmorphism | `glassmorphism` | Vidro embaçado, blur, transparência |
| Neo-Brutalismo | `neobrutalism` | Bordas grossas, cores neon, sem filtros |
| Claymorfismo | `claymorphism` | 3D fofo, bordas arredondadas, sombras suaves |
| Minimalismo | `minimalism` | Espaço em branco, tipografia limpa |
| Liquid Glass | `liquid-glass` | Refração, orgânico, futurista (visionOS) |
| Aurora UI | `aurora` | Gradientes etéreos, roxo/ciano |
| Cyberpunk | `cyberpunk` | Neon, grid, anos 80 distópico |
| Neumorfismo | `neumorphism` | Soft UI, extrusão, plastic feel |
| Bento Grid | `bento` | Caixas encaixadas, assimétrico |
| Typographic | `typographic` | Fonte como design, sem imagens |
| Skeuomorphism | `skeuomorphism` | Realismo digital, texturas físicas |

## Importar temas

```html
<!-- No <head> — importe apenas os temas necessários -->
<link rel="stylesheet" href="./src/css/design-tokens.css">
<link rel="stylesheet" href="./src/css/components.css">

<!-- Temas opcionais -->
<link rel="stylesheet" href="./src/css/themes/theme-glassmorphism.css">
<link rel="stylesheet" href="./src/css/themes/theme-neobrutalism.css">
```

## Trocar tema dinamicamente (JS)

```javascript
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('preferred-theme', theme);
}

// Restaurar tema salvo
const saved = localStorage.getItem('preferred-theme');
if (saved) setTheme(saved);
```

## Combinar com animações

Os temas são CSS puro — todas as animações GSAP funcionam em qualquer tema.
O data-attribute não interfere nos data attributes de animação:

```html
<h1 data-reveal="text">Funciona em qualquer tema</h1>
<div data-reveal="clip" data-theme="cyberpunk">...</div>
```
