<h1 align="center">
  <br>
  RoseMari
  <br>
</h1>

<h4 align="center">Tema rosa elegante para a web, feito com amor para uma amiga.</h4>

<p align="center">
  <a href="https://github.com/LuizSudo/rosemari/blob/master/style.user.css">
    <img src="https://img.shields.io/badge/arquivo-style.user.css-D64B78?style=for-the-badge&logo=css3&logoColor=white" alt="CSS">
  </a>
  <img src="https://img.shields.io/badge/versao-1.0.0-D64B78?style=for-the-badge" alt="Versao">
  <img src="https://img.shields.io/badge/sites-15-suportados-D64B78?style=for-the-badge" alt="Sites">
  <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt">
    <img src="https://img.shields.io/badge/licenca-CC%20BY--NC--SA%204.0-lightgrey?style=for-the-badge" alt="Licenca">
  </a>
</p>

<p align="center">
  <a href="#como-instalar">Instalação</a> •
  <a href="#sites-suportados">Sites</a> •
  <a href="#paleta-de-cores">Cores</a> •
  <a href="#o-que-o-tema-faz">Recursos</a> •
  <a href="#notas-técnicas">Técnico</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Microsoft_Edge-0078D7?style=for-the-badge&logo=microsoft-edge&logoColor=white" alt="Edge">
  <img src="https://img.shields.io/badge/Google_Chrome-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Chrome">
  <img src="https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=firefox-browser&logoColor=white" alt="Firefox">
  <img src="https://img.shields.io/badge/Stylus-B162D4?style=for-the-badge&logo=stylus&logoColor=white" alt="Stylus">
</p>

<br>

## Como instalar

> **1.** Instale a extensão **[Stylus](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne)** no seu navegador

> **2.** Abra o arquivo [`style.user.css`](style.user.css) deste repositório

> **3.** O Stylus vai detectar automaticamente e perguntar se deseja instalar

> **4.** Clique em **Instalar estilo** e pronto!

<br>

## Sites suportados

<table>
  <tr>
    <td>

| # | Site | O que é estilizado |
|:-:|------|-------------------|
| 🟣 | **Google** | Busca, Gmail, Scholar, Workspace |
| 🔴 | **YouTube** | Player, sidebar, comentários |
| 🩷 | **Instagram** | Feed, stories, DMs, explorar |
| 🟦 | **Office Online** | Word, Excel, PowerPoint, OneNote |
| 🟣 | **Google Gemini** | Chat, sidebar, histórico |
| 🟣 | **NotebookLM** | Interface completa |
| 🩵 | **Bing** | Homepage, SERP, Copilot, autocomplete |
| 🟣 | **Google Scholar** | Resultados, drawer, modais |
| 🔵 | **Twitter / X** | Feed, sidebar, trends, DMs |
| 🟠 | **Reddit** | Feed, comments (Shadow DOM) |
| 🔵 | **LinkedIn** | Feed, navbar, messaging |
| ⚫ | **GitHub** | Repos, issues, PRs (Primer) |
| 🟢 | **WhatsApp Web** | Conversas, bubbles, sidebar |
| 🟡 | **Gmail** | Caixa de entrada, Material 3 tokens |
| 🟢 | **ChatGPT** | Sidebar, composer, Tailwind tokens |
  </tr>
</table>

<br>

## Paleta de cores

<table>
  <tr>
    <td><img src="https://img.shields.io/badge/-FFF5F5-F8B4CC?style=flat-square&label=Fundo" alt="#FFF5F5"></td>
    <td><img src="https://img.shields.io/badge/-FFFFFF-white?style=flat-square&label=Branco&labelColor=333333" alt="#FFFFFF"></td>
    <td><img src="https://img.shields.io/badge/-F8D5DE-F8D5DE?style=flat-square&label=Rosa+Suave" alt="#F8D5DE"></td>
    <td><img src="https://img.shields.io/badge/-D64B78-white?style=flat-square&label=Rosa+Forte" alt="#D64B78"></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-2A131A-2A131A?style=flat-square&label=Texto&labelColor=cccccc" alt="#2A131A"></td>
    <td><img src="https://img.shields.io/badge/-5C3241-5C3241?style=flat-square&label=Secundario&labelColor=cccccc" alt="#5C3241"></td>
    <td><img src="https://img.shields.io/badge/-8A5A6D-8A5A6D?style=flat-square&label=Mutado&labelColor=cccccc" alt="#8A5A6D"></td>
    <td><img src="https://img.shields.io/badge/-EB558C-EB558C?style=flat-square&label=Accent" alt="#EB558C"></td>
  </tr>
</table>

<br>

## O que o tema faz

| Recurso | Detalhes |
|---------|----------|
| 🎨 **Fundo rosé** | `#FFF5F5` suave em todas as páginas |
| 🖌️ **Bordas e sombras** | Tons de rosa delicados com `rgba(244,111,161, 0.20)` |
| 💊 **Botões e pills** | Efeito hover rosa translúcido com escala suave |
| 🔗 **Links** | Rosa vibrante com transições de 200ms |
| 📜 **Scrollbars** | Personalizadas no tema rosé |
| ✂️ **Seleção de texto** | Fundo rosa em todo o navegador |
| 🃏 **Cards e modais** | Bordas arredondadas (12px) e sombras elegantes |
| 🧩 **Variáveis CSS** | Bing `--smtc-*`, Gmail `--gm3-sys-color-*`, Reddit Shadow DOM, GitHub Primer — tudo sobrescrito |
| 💬 **WhatsApp** | Bubbles rosa sólido (`#F8B4CC` saída / `#FDDDE6` entrada), search bar, header |
| 🤖 **ChatGPT** | Sidebar, composer e mensagens no tema rosé, tokens Tailwind |

<br>

## Notas técnicas

<details>
<summary><b>Estrutura do CSS</b> (clique para expandir)</summary>

```
style.user.css
│
├── 🌐 Regras globais (aplicam a todos os sites)
│   ├── Paleta de cores (variáveis CSS)
│   ├── Fundo, texto, links, botões, inputs
│   ├── Cards, modais, diálogos
│   ├── Scrollbar personalizada
│   └── Mídia preservada (imagens e vídeos intactos)
│
├── 🟣 Google .............. google.com
├── 🔴 YouTube ............. youtube.com
├── 🩷 Instagram ........... instagram.com
├── 🟦 Office Online ....... office.com / live.com
├── 🟣 Google Gemini ....... gemini.google.com
├── 🟣 NotebookLM ......... notebooklm.google.com
├── 🩵 Bing ................ bing.com (homepage + SERP)
├── 🟣 Google Scholar ...... scholar.google.com
├── 🔵 Twitter / X ......... twitter.com / x.com
├── 🟠 Reddit .............. reddit.com
├── 🔵 LinkedIn ............ linkedin.com
├── ⚫ GitHub .............. github.com
├── 🟢 WhatsApp Web ........ web.whatsapp.com
├── 🟡 Gmail ............... mail.google.com
└── 🟢 ChatGPT ............. chatgpt.com
```

</details>

<br>

<details>
<summary><b>Detalhes técnicos</b> (clique para expandir)</summary>

- O tema é **light mode** (`color-scheme: light`)
- Usa `@-moz-document` suportado pelo Stylus em navegadores Chromium
- Seletores baseados em **análise real do DOM** — cada HTML foi salvo e auditado
- Variáveis CSS dos sites são sobrescritas diretamente para máxima compatibilidade
- O seletor global `button:not()` exclui botões que precisam de tratamento especial
- O leitor de PDF nativo do Chromium não é estilizável via CSS (componente protegido do navegador)

</details>

<br>

## Licença

[![CC BY-NC-SA 4.0](https://img.shields.io/badge/Licenca-CC%20BY--NC--SA%204.0-D64B78?style=for-the-badge)](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt)

Este trabalho está licenciado sob uma [Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt).

Feito com carinho para uma amiga.
