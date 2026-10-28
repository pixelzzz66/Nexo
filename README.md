# NEXO · Desafio Lógico

Jogo web de raciocínio lógico baseado em diagramas de Venn. Duas (ou três) regras são sorteadas, e o jogador precisa classificar palavras nas regiões corretas do diagrama.

**Site:** [https://nexogame.duckdns.org](https://nexogame.duckdns.org)

---

## Sobre o projeto

NEXO é um projeto independente desenvolvido por um estudante de Engenharia de Produção da Unicamp nas horas vagas. É um PWA (Progressive Web App) construído em HTML5, CSS e JavaScript puro, sem frameworks, sem backend e sem dependências externas além do AdSense.

- **Gratuito e sem login.**
- **Funciona offline** após a primeira visita.
- **Instalável** no celular e no desktop.
- **Progresso salvo localmente** no dispositivo do jogador.

---

## Modos de jogo

| Modo | Como funciona | Frequência |
|---|---|---|
| **Clássico** | Fases infinitas com dificuldade crescente (8 → 12 → 16 palavras). Distribuição de palavras aleatória por região. | Contínuo |
| **Diário** | Um puzzle por dia, igual para todos os jogadores, gerado deterministicamente a partir da data. | Novo à meia-noite (hora local) |
| **Hardcore Semanal** | Diagrama de 3 círculos com 8 regiões. O jogador precisa alocar as palavras periféricas **e** descobrir a palavra central digitando-a. | Novo toda segunda-feira |

---

## Recursos

- Sistema de vidas (3 por padrão) com recompensa simulada (+3 vidas)
- Dica com custo de -5 pontos (1 por fase)
- Ofensiva (streak de acertos consecutivos)
- Streak diário (dias consecutivos jogando o desafio diário) com aviso de risco após as 20h
- Compartilhamento de resultado em formato de grid (estilo Wordle) com preview
- Onboarding em 3 telas na primeira visita
- Contadores de tempo até o próximo puzzle (diário e semanal)
- Interface responsiva, mobile-first, com suporte a leitores de tela

---

## Stack

- **HTML5 + CSS + JavaScript** (vanilla, sem build)
- **PWA** via Service Worker (cache-first para arquivos locais)
- **localStorage** para persistência (sem servidor)
- **Hospedagem:** GitHub Pages
- **Domínio:** DuckDNS com HTTPS via Enforce HTTPS do GitHub Pages

---

## Estrutura de arquivos
nexo/
├── index.html # Página principal do jogo
├── script.js # Toda a lógica (catálogo, geração, UI, PWA)
├── style.css # Estilos
├── manifest.json # Configuração do PWA
├── sw.js # Service Worker (cache offline)
├── icon.svg # Ícone do app
├── ads.txt # Autorização de venda de anúncios
├── robots.txt # Diretivas para crawlers
├── sitemap.xml # Mapa do site
├── sobre.html # Sobre o projeto
├── privacidade.html # Política de Privacidade
└── termos.html # Termos de Uso

---

## Como rodar localmente

O jogo é 100% estático. **Abrir o `index.html` com duplo clique** já permite jogar a maior parte das funcionalidades, mas o Service Worker (PWA/offline) **só funciona em `https://` ou `localhost`**.

### Opção 1 — Python (mais simples)

```bash
# Na raiz do repositório
python -m http.server 8000
