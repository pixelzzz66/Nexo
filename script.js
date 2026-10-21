/* =========================================
   NEXO - JOGO + SALVAMENTO LOCAL + PWA
   A recompensa de anúncio está em modo demonstração.
   Nenhum anúncio real é exibido nesta versão.
   ========================================= */

const CHAVE_SALVAMENTO = "nexo-progresso-v1";
const VIDAS_INICIAIS = 3;
const VIDAS_RECOMPENSA = 3;

const bancoDePalavras = [
  { termo: "TOMATE", tags: ["Vermelho", "Comida", "Vegetal"] },
  { termo: "MORANGO", tags: ["Vermelho", "Comida", "Fruta", "Doce"] },
  { termo: "CEREJA", tags: ["Vermelho", "Comida", "Fruta", "Doce"] },
  { termo: "PIMENTÃO", tags: ["Vermelho", "Comida", "Vegetal"] },
  { termo: "BETERRABA", tags: ["Vermelho", "Comida", "Vegetal"] },
  { termo: "SANGUE", tags: ["Vermelho", "Corpo"] },
  { termo: "ROSA", tags: ["Vermelho", "Planta"] },
  { termo: "ALFACE", tags: ["Comida", "Vegetal"] },
  { termo: "CENOURA", tags: ["Comida", "Vegetal"] },
  { termo: "PÃO", tags: ["Comida"] },
  { termo: "QUEIJO", tags: ["Comida"] },
  { termo: "UVA", tags: ["Comida", "Fruta", "Doce"] },
  { termo: "MAÇÃ", tags: ["Comida", "Fruta"] },
  { termo: "BANANA", tags: ["Comida", "Fruta"] },
  { termo: "LIMÃO", tags: ["Comida", "Fruta"] },
  { termo: "ABACAXI", tags: ["Comida", "Fruta"] },
  { termo: "MELANCIA", tags: ["Comida", "Fruta"] },
  { termo: "CHOCOLATE", tags: ["Comida", "Doce"] },
  { termo: "BOLO", tags: ["Comida", "Doce"] },
  { termo: "MEL", tags: ["Comida", "Doce"] },
  { termo: "CARRO", tags: ["Veículo", "Tem rodas"] },
  { termo: "BICICLETA", tags: ["Veículo", "Tem rodas"] },
  { termo: "MOTO", tags: ["Veículo", "Tem rodas"] },
  { termo: "ÔNIBUS", tags: ["Veículo", "Tem rodas"] },
  { termo: "TREM", tags: ["Veículo", "Tem rodas"] },
  { termo: "PATINETE", tags: ["Veículo", "Tem rodas"] },
  { termo: "AVIÃO", tags: ["Veículo", "Voa", "Tem asas"] },
  { termo: "HELICÓPTERO", tags: ["Veículo", "Voa"] },
  { termo: "BARCO", tags: ["Veículo"] },
  { termo: "MALA COM RODINHAS", tags: ["Tem rodas", "Objeto"] },
  { termo: "CADEIRA DE ESCRITÓRIO", tags: ["Tem rodas", "Doméstico"] },
  { termo: "CACHORRO", tags: ["Animal", "Doméstico"] },
  { termo: "GATO", tags: ["Animal", "Doméstico"] },
  { termo: "GALINHA", tags: ["Animal", "Doméstico", "Tem asas"] },
  { termo: "PATO", tags: ["Animal", "Doméstico", "Voa", "Tem asas"] },
  { termo: "LEÃO", tags: ["Animal"] },
  { termo: "ÁGUIA", tags: ["Animal", "Voa", "Tem asas"] },
  { termo: "BORBOLETA", tags: ["Animal", "Voa", "Tem asas"] },
  { termo: "PENGUIM", tags: ["Animal", "Tem asas"] },
  { termo: "MORCEGO", tags: ["Animal", "Voa"] },
  { termo: "AVESTRUZ", tags: ["Animal", "Tem asas"] },
  { termo: "GOLFINHO", tags: ["Animal"] },
  { termo: "CAVALO", tags: ["Animal", "Doméstico"] },
  { termo: "MESA", tags: ["Doméstico"] },
  { termo: "SOFÁ", tags: ["Doméstico"] },
  { termo: "CAMA", tags: ["Doméstico"] },
  { termo: "LÂMPADA", tags: ["Doméstico"] },
  { termo: "FACA", tags: ["Doméstico"] },
  { termo: "CHAVE", tags: ["Doméstico"] },
  { termo: "CANETA", tags: ["Escolar"] },
  { termo: "CADERNO", tags: ["Escolar"] },
  { termo: "LIVRO", tags: ["Escolar"] },
  { termo: "LÁPIS", tags: ["Escolar"] },
  { termo: "VIOLÃO", tags: ["Instrumento", "Musical"] },
  { termo: "PIANO", tags: ["Instrumento", "Musical"] },
  { termo: "FLAUTA", tags: ["Instrumento", "Musical"] },
  { termo: "TAMBOR", tags: ["Instrumento", "Musical"] },
  { termo: "GUITARRA", tags: ["Instrumento", "Musical"] }
];

let vidas = VIDAS_INICIAIS;
let nivel = 1;
let pontuacao = 0;
let ofensiva = 0;
let jogoEncerrado = false;
let faseConcluida = false;
let recompensaUsada = false;
let regraA = "";
let regraB = "";
let elementoArrastado = null;
let termoSelecionado = "";
let palavrasRestantes = 0;
let palavrasDaFase = [];
let temporizadorFase = null;

const bancoHTML = document.getElementById("banco");
const painelVidas = document.getElementById("vidas");
const painelNivel = document.getElementById("nivel");
const painelPontuacao = document.getElementById("pontuacao");
const painelOfensiva = document.getElementById("ofensiva");
const painelMensagem = document.getElementById("mensagem");
const painelRegras = document.getElementById("regras");
const painelProgresso = document.getElementById("progresso");
const painelSalvamento = document.getElementById("estado-salvamento");
const mensagemFinal = document.getElementById("mensagem-final");
const tituloFinal = document.getElementById("titulo-final");
const textoFinal = document.getElementById("texto-final");
const acoesFinal = document.getElementById("acoes-final");
const zonas = [...document.querySelectorAll(".zona-drop")];

function embaralhar(lista) {
  const resultado = [...lista];
  for (let i = resultado.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [resultado[i], resultado[j]] = [resultado[j], resultado[i]];
  }
  return resultado;
}

function atualizarPainel() {
  painelVidas.textContent = `Vidas: ${"❤️".repeat(vidas)}${"🖤".repeat(Math.max(0, VIDAS_INICIAIS - vidas))}`;
  painelNivel.textContent = nivel;
  painelPontuacao.textContent = pontuacao;
  painelOfensiva.textContent = `${ofensiva} 🔥`;
  painelProgresso.textContent = `Palavras restantes: ${palavrasRestantes}`;
}

function mostrarMensagem(titulo, texto, botoes = []) {
  mensagemFinal.hidden = false;
  tituloFinal.textContent = titulo;
  textoFinal.textContent = texto;
  acoesFinal.replaceChildren();
  botoes.forEach(({ texto: rotulo, classe = "botao", acao, desabilitado = false }) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = classe;
    botao.textContent = rotulo;
    botao.disabled = desabilitado;
    botao.addEventListener("click", acao);
    acoesFinal.appendChild(botao);
  });
}

function esconderMensagem() {
  mensagemFinal.hidden = true;
  acoesFinal.replaceChildren();
}

function salvarProgresso() {
  const estado = {
    versao: 1,
    vidas, nivel, pontuacao, ofensiva,
    jogoEncerrado, faseConcluida, recompensaUsada,
    regraA, regraB, palavrasRestantes,
    palavrasDaFase: palavrasDaFase.map(item => item.termo),
    regioes: Object.fromEntries(palavrasDaFase.map(item => {
      const el = [...document.querySelectorAll(".palavra")].find(palavra => palavra.dataset.termo === item.termo);
      return [item.termo, el ? (el.closest(".zona-drop")?.dataset.zona || "BANCO") : "BANCO"];
    }))
  };
  try {
    localStorage.setItem(CHAVE_SALVAMENTO, JSON.stringify(estado));
    painelSalvamento.textContent = "Progresso salvo neste dispositivo.";
  } catch (erro) {
    painelSalvamento.textContent = "Não foi possível salvar neste navegador.";
  }
}

function lerSalvamento() {
  try {
    const bruto = localStorage.getItem(CHAVE_SALVAMENTO);
    if (!bruto) return null;
    const estado = JSON.parse(bruto);
    if (estado.versao !== 1 || !Array.isArray(estado.palavrasDaFase)) return null;
    return estado;
  } catch (erro) {
    return null;
  }
}

function apagarSalvamento() {
  try { localStorage.removeItem(CHAVE_SALVAMENTO); } catch (erro) { /* armazenamento indisponível */ }
}

function gerarFase() {
  const categorias = [...new Set(bancoDePalavras.flatMap(item => item.tags))];
  const quantidadeDesejada = Math.min(4, 2 + Math.floor((nivel - 1) / 3));
  const paresPossiveis = [];
  for (let i = 0; i < categorias.length; i++) {
    for (let j = i + 1; j < categorias.length; j++) paresPossiveis.push([categorias[i], categorias[j]]);
  }
  for (let quantidade = quantidadeDesejada; quantidade >= 1; quantidade--) {
    const paresValidos = [];
    for (const [categoriaA, categoriaB] of paresPossiveis) {
      const somenteA = bancoDePalavras.filter(item => item.tags.includes(categoriaA) && !item.tags.includes(categoriaB));
      const somenteB = bancoDePalavras.filter(item => item.tags.includes(categoriaB) && !item.tags.includes(categoriaA));
      const ambas = bancoDePalavras.filter(item => item.tags.includes(categoriaA) && item.tags.includes(categoriaB));
      const nenhuma = bancoDePalavras.filter(item => !item.tags.includes(categoriaA) && !item.tags.includes(categoriaB));
      if (somenteA.length >= quantidade && somenteB.length >= quantidade && ambas.length >= quantidade && nenhuma.length >= quantidade) {
        paresValidos.push({ categoriaA, categoriaB, somenteA, somenteB, ambas, nenhuma, quantidade });
      }
    }
    if (paresValidos.length) {
      const escolhido = paresValidos[Math.floor(Math.random() * paresValidos.length)];
      const palavras = [
        ...embaralhar(escolhido.somenteA).slice(0, quantidade),
        ...embaralhar(escolhido.somenteB).slice(0, quantidade),
        ...embaralhar(escolhido.ambas).slice(0, quantidade),
        ...embaralhar(escolhido.nenhuma).slice(0, quantidade)
      ];
      return { regraA: escolhido.categoriaA, regraB: escolhido.categoriaB, palavras: embaralhar(palavras) };
    }
  }
  return null;
}

function criarElementoPalavra(item, zonaDestino = "BANCO") {
  const palavra = document.createElement("button");
  palavra.type = "button";
  palavra.className = "palavra";
  palavra.textContent = item.termo;
  palavra.dataset.termo = item.termo;
  palavra.draggable = !jogoEncerrado && !faseConcluida && zonaDestino === "BANCO";
  palavra.setAttribute("aria-label", `Palavra ${item.termo}`);
  palavra.addEventListener("dragstart", evento => {
    if (jogoEncerrado || faseConcluida || palavra.classList.contains("acertada")) {
      evento.preventDefault();
      return;
    }
    elementoArrastado = palavra;
    termoSelecionado = item.termo;
    palavra.style.opacity = "0.5";
    evento.dataTransfer.setData("text/plain", item.termo);
    evento.dataTransfer.effectAllowed = "move";
  });
  palavra.addEventListener("dragend", () => {
    palavra.style.opacity = "1";
    elementoArrastado = null;
  });
  palavra.addEventListener("click", () => {
    if (jogoEncerrado || faseConcluida || palavra.classList.contains("acertada")) return;
    document.querySelectorAll(".palavra.selecionada").forEach(el => el.classList.remove("selecionada"));
    palavra.classList.add("selecionada");
    termoSelecionado = item.termo;
    painelMensagem.textContent = `Palavra ${item.termo} selecionada. Agora toque na região correta.`;
  });
  if (zonaDestino !== "BANCO") {
    palavra.classList.add("acertada");
    palavra.draggable = false;
  }
  return palavra;
}

function renderizarPalavras(regioes = {}) {
  bancoHTML.replaceChildren();
  zonas.forEach(zona => {
    zona.querySelectorAll(".palavra").forEach(el => el.remove());
  });
  // Mantém os rótulos dentro das regiões após limpar as palavras.
  const destino = { A: document.querySelector('.circulo-a[data-zona="A"]'), B: document.querySelector('.circulo-b[data-zona="B"]'), AB: document.querySelector('.intersecao[data-zona="AB"]'), N: document.querySelector('.zona-nenhuma[data-zona="N"]') };
  palavrasDaFase.forEach(item => {
    const regiao = regioes[item.termo] || "BANCO";
    const el = criarElementoPalavra(item, regiao);
    if (regiao !== "BANCO" && destino[regiao]) destino[regiao].appendChild(el);
    else bancoHTML.appendChild(el);
  });
}

function iniciarFase() {
  if (temporizadorFase) clearTimeout(temporizadorFase);
  temporizadorFase = null;
  jogoEncerrado = false;
  faseConcluida = false;
  elementoArrastado = null;
  termoSelecionado = "";
  recompensaUsada = false;
  esconderMensagem();
  const fase = gerarFase();
  if (!fase) {
    mostrarMensagem("Banco insuficiente", "Adicione mais palavras ou categorias ao banco para gerar novas fases.");
    painelMensagem.textContent = "Não foi possível montar uma fase válida.";
    return;
  }
  regraA = fase.regraA;
  regraB = fase.regraB;
  palavrasDaFase = fase.palavras;
  palavrasRestantes = palavrasDaFase.length;
  document.querySelector(".circulo-a .rotulo-regra").textContent = `A: ${regraA}`;
  document.querySelector(".circulo-b .rotulo-regra").textContent = `B: ${regraB}`;
  painelRegras.textContent = `Regra A: ${regraA} | Regra B: ${regraB}`;
  painelMensagem.textContent = "Arraste cada palavra para a região correta.";
  renderizarPalavras();
  atualizarPainel();
  salvarProgresso();
}

function validarJogada(item, zonaAlvo) {
  const temRegraA = item.tags.includes(regraA);
  const temRegraB = item.tags.includes(regraB);
  if (zonaAlvo === "A" && temRegraA && !temRegraB) return true;
  if (zonaAlvo === "B" && temRegraB && !temRegraA) return true;
  if (zonaAlvo === "AB" && temRegraA && temRegraB) return true;
  if (zonaAlvo === "N" && !temRegraA && !temRegraB) return true;
  return false;
}

function travarPalavras() {
  document.querySelectorAll(".palavra").forEach(palavra => {
    palavra.draggable = false;
    palavra.classList.remove("selecionada");
  });
}

function encerrarJogo() {
  jogoEncerrado = true;
  faseConcluida = true;
  elementoArrastado = null;
  termoSelecionado = "";
  travarPalavras();
  atualizarPainel();
  painelMensagem.textContent = "Suas vidas acabaram.";
  const botoes = [
    { texto: "Testar recompensa (+3 vidas)", classe: "botao", acao: simularAnuncioRecompensado, desabilitado: recompensaUsada },
    { texto: "Começar nova partida", classe: "botao botao-secundario", acao: novaPartida }
  ];
  mostrarMensagem("Fim de jogo! 💔", `Você chegou ao nível ${nivel} e fez ${pontuacao} pontos. A recompensa ainda está em modo de demonstração: nenhum anúncio real será exibido.`, botoes);
  salvarProgresso();
}

// Protótipo: simula a confirmação de um anúncio recompensado.
// Na integração real, só chamar a recompensa após o provedor confirmar a conclusão do anúncio.
function simularAnuncioRecompensado() {
  if (!jogoEncerrado || recompensaUsada) return;
  recompensaUsada = true;
  vidas = VIDAS_RECOMPENSA;
  jogoEncerrado = false;
  faseConcluida = false;
  termoSelecionado = "";
  elementoArrastado = null;
  document.querySelectorAll(".palavra").forEach(palavra => {
    palavra.classList.remove("selecionada");
    if (!palavra.classList.contains("acertada")) palavra.draggable = true;
  });
  atualizarPainel();
  painelMensagem.textContent = "Modo demonstração: 3 vidas restauradas. Você continua na mesma fase.";
  mostrarMensagem("Você voltou! ❤️", "3 vidas restauradas. Suas palavras já classificadas, pontuação, nível e estado da ofensiva foram preservados. A recompensa foi simulada, sem anúncio real.", [
    { texto: "Continuar jogando", classe: "botao", acao: () => { esconderMensagem(); painelMensagem.textContent = "Continue de onde parou!"; salvarProgresso(); } }
  ]);
  salvarProgresso();
}

function registrarErro(palavra) {
  palavra.style.backgroundColor = "#ff4757";
  vidas = Math.max(0, vidas - 1);
  ofensiva = 0; // Erros continuam zerando a ofensiva, conforme a regra atual do jogo.
  atualizarPainel();
  salvarProgresso();
  if (vidas === 0) {
    encerrarJogo();
    return;
  }
  painelMensagem.textContent = "Ops! Região incorreta. Tente novamente.";
  setTimeout(() => {
    if (palavra.isConnected && !palavra.classList.contains("acertada")) palavra.style.backgroundColor = "";
  }, 500);
}

function registrarAcerto(palavra, zona) {
  palavra.classList.add("acertada");
  palavra.classList.remove("selecionada");
  palavra.draggable = false;
  palavra.style.opacity = "1";
  palavra.style.cursor = "default";
  zona.appendChild(palavra);
  pontuacao += 10;
  ofensiva++;
  palavrasRestantes--;
  termoSelecionado = "";
  atualizarPainel();
  painelMensagem.textContent = "Boa! Você acertou. +10 pontos.";
  salvarProgresso();
  if (palavrasRestantes === 0) concluirFase();
}

function concluirFase() {
  if (faseConcluida || jogoEncerrado) return;
  faseConcluida = true;
  pontuacao += 50;
  travarPalavras();
  atualizarPainel();
  painelMensagem.textContent = "Parabéns! Você completou a fase.";
  mostrarMensagem(`Nível ${nivel} concluído! 🎉`, `Você ganhou 50 pontos extras. Total: ${pontuacao} pontos. Próxima fase em instantes...`);
  salvarProgresso();
  temporizadorFase = setTimeout(() => {
    if (jogoEncerrado) return;
    nivel++;
    iniciarFase();
  }, 1800);
}

function processarJogada(zona) {
  if (jogoEncerrado || faseConcluida) return;
  const termo = termoSelecionado || elementoArrastado?.dataset.termo;
  if (!termo) {
    painelMensagem.textContent = "Primeiro selecione uma palavra no banco.";
    return;
  }
  const item = palavrasDaFase.find(palavra => palavra.termo === termo);
  const palavra = [...document.querySelectorAll(".palavra")].find(el => el.dataset.termo === termo);
  if (!item || !palavra || palavra.classList.contains("acertada")) return;
  if (validarJogada(item, zona.dataset.zona)) registrarAcerto(palavra, zona);
  else registrarErro(palavra);
  elementoArrastado = null;
  termoSelecionado = "";
  document.querySelectorAll(".palavra.selecionada").forEach(el => el.classList.remove("selecionada"));
}

zonas.forEach(zona => {
  const zonaAlvo = zona.dataset.zona;
  const ehIntersecao = zonaAlvo === "AB";
  zona.addEventListener("dragover", evento => {
    evento.preventDefault();
    if (jogoEncerrado || faseConcluida) return;
    evento.dataTransfer.dropEffect = "move";
    zona.classList.add("hover-ativo");
    if (zonaAlvo === "A" || zonaAlvo === "B") zona.style.transform = "scale(1.03)";
  });
  zona.addEventListener("dragleave", () => {
    zona.classList.remove("hover-ativo");
    if (ehIntersecao) zona.style.transform = "translateX(-50%)";
    else zona.style.transform = "";
  });
  zona.addEventListener("drop", evento => {
    evento.preventDefault();
    zona.classList.remove("hover-ativo");
    if (ehIntersecao) zona.style.transform = "translateX(-50%)";
    else zona.style.transform = "";
    if (jogoEncerrado || faseConcluida) return;
    const termo = evento.dataTransfer.getData("text/plain");
    if (termo) termoSelecionado = termo;
    processarJogada(zona);
  });
  zona.addEventListener("click", () => {
    if (termoSelecionado) processarJogada(zona);
  });
});

function novaPartida() {
  if (temporizadorFase) clearTimeout(temporizadorFase);
  vidas = VIDAS_INICIAIS;
  nivel = 1;
  pontuacao = 0;
  ofensiva = 0;
  jogoEncerrado = false;
  faseConcluida = false;
  recompensaUsada = false;
  apagarSalvamento();
  iniciarFase();
}

document.getElementById("botao-nova-partida").addEventListener("click", () => {
  const existeProgresso = nivel > 1 || pontuacao > 0 || palavrasRestantes !== palavrasDaFase.length;
  if (existeProgresso && !jogoEncerrado && !faseConcluida) {
    mostrarMensagem("Começar de novo?", "Sua partida atual será reiniciada. O progresso salvo será substituído.", [
      { texto: "Sim, nova partida", classe: "botao", acao: novaPartida },
      { texto: "Continuar partida", classe: "botao botao-secundario", acao: esconderMensagem }
    ]);
  } else novaPartida();
});

function restaurarPartida(estado) {
  const itens = estado.palavrasDaFase.map(termo => bancoDePalavras.find(item => item.termo === termo)).filter(Boolean);
  if (itens.length !== estado.palavrasDaFase.length || !itens.length) return false;
  vidas = Math.max(0, Math.min(VIDAS_INICIAIS, Number(estado.vidas) || 0));
  nivel = Math.max(1, Number(estado.nivel) || 1);
  pontuacao = Math.max(0, Number(estado.pontuacao) || 0);
  ofensiva = Math.max(0, Number(estado.ofensiva) || 0);
  regraA = estado.regraA;
  regraB = estado.regraB;
  palavrasDaFase = itens;
  palavrasRestantes = Math.max(0, Number(estado.palavrasRestantes) || 0);
  jogoEncerrado = Boolean(estado.jogoEncerrado);
  faseConcluida = Boolean(estado.faseConcluida);
  recompensaUsada = Boolean(estado.recompensaUsada);
  document.querySelector(".circulo-a .rotulo-regra").textContent = `A: ${regraA}`;
  document.querySelector(".circulo-b .rotulo-regra").textContent = `B: ${regraB}`;
  painelRegras.textContent = `Regra A: ${regraA} | Regra B: ${regraB}`;
  renderizarPalavras(estado.regioes || {});
  atualizarPainel();
  if (jogoEncerrado) {
    travarPalavras();
    const botoes = [
      { texto: "Testar recompensa (+3 vidas)", classe: "botao", acao: simularAnuncioRecompensado, desabilitado: recompensaUsada },
      { texto: "Começar nova partida", classe: "botao botao-secundario", acao: novaPartida }
    ];
    mostrarMensagem("Fim de jogo! 💔", `Você chegou ao nível ${nivel} e fez ${pontuacao} pontos. Recompensa em modo de demonstração, sem anúncio real.`, botoes);
    painelMensagem.textContent = "Suas vidas acabaram. Seu estado foi recuperado do salvamento local.";
  } else if (faseConcluida) {
    travarPalavras();
    mostrarMensagem(`Nível ${nivel} concluído! 🎉`, "Fase concluída. A próxima fase será iniciada em instantes...");
    temporizadorFase = setTimeout(() => { nivel++; iniciarFase(); }, 1200);
  } else {
    esconderMensagem();
    painelMensagem.textContent = "Partida recuperada. Continue de onde parou!";
  }
  painelSalvamento.textContent = "Partida recuperada do armazenamento local deste dispositivo.";
  return true;
}

// Registro do service worker: necessário para cache offline e recursos de PWA.
if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      painelSalvamento.textContent = "Jogo disponível, mas não foi possível ativar o modo PWA/offline.";
    });
  });
}

const estadoSalvo = lerSalvamento();
if (!estadoSalvo || !restaurarPartida(estadoSalvo)) {
  iniciarFase();
}
