/* =========================================
   NEXO - JOGO + SALVAMENTO LOCAL + PWA
   A recompensa de anúncio está em modo demonstração.
   Nenhum anúncio real é exibido nesta versão.
   ========================================= */

const CHAVE_SALVAMENTO = "nexo-progresso-v1";
let chaveSalvamentoAtual = CHAVE_SALVAMENTO;
let modoDiario = false;
const CHAVE_DIARIO = "nexo-diario-v1";
const CHAVE_BACKUP_CAMPANHA = "nexo-campanha-backup-v1";
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
  { termo: "GUITARRA", tags: ["Instrumento", "Musical"] },
  { termo: "LARANJA", tags: ["Comida", "Fruta", "Cor Laranja"] },
  { termo: "PERA", tags: ["Comida", "Fruta"] },
  { termo: "MAMÃO", tags: ["Comida", "Fruta"] },
  { termo: "MANGA", tags: ["Comida", "Fruta"] },
  { termo: "KIWI", tags: ["Comida", "Fruta", "Verde"] },
  { termo: "COCO", tags: ["Comida", "Fruta"] },
  { termo: "PÊSSEGO", tags: ["Comida", "Fruta"] },
  { termo: "AMEIXA", tags: ["Comida", "Fruta"] },
  { termo: "GOIABA", tags: ["Comida", "Fruta"] },
  { termo: "MARACUJÁ", tags: ["Comida", "Fruta"] },
  { termo: "ABÓBORA", tags: ["Comida", "Vegetal"] },
  { termo: "PEPINO", tags: ["Comida", "Vegetal", "Verde"] },
  { termo: "BRÓCOLIS", tags: ["Comida", "Vegetal", "Verde"] },
  { termo: "ESPINAFRE", tags: ["Comida", "Vegetal", "Verde"] },
  { termo: "BATATA", tags: ["Comida", "Vegetal"] },
  { termo: "CEBOLA", tags: ["Comida", "Vegetal"] },
  { termo: "ALHO", tags: ["Comida", "Vegetal"] },
  { termo: "MILHO", tags: ["Comida", "Vegetal", "Amarelo"] },
  { termo: "ARROZ", tags: ["Comida"] },
  { termo: "FEIJÃO", tags: ["Comida"] },
  { termo: "MACARRÃO", tags: ["Comida"] },
  { termo: "PIZZA", tags: ["Comida"] },
  { termo: "HAMBÚRGUER", tags: ["Comida"] },
  { termo: "SOPA", tags: ["Comida"] },
  { termo: "SORVETE", tags: ["Comida", "Doce"] },
  { termo: "BISCOITO", tags: ["Comida", "Doce"] },
  { termo: "PUDIM", tags: ["Comida", "Doce"] },
  { termo: "IOGURTE", tags: ["Comida"] },
  { termo: "LEITE", tags: ["Comida", "Bebida"] },
  { termo: "CAFÉ", tags: ["Comida", "Bebida"] },
  { termo: "CHÁ", tags: ["Comida", "Bebida"] },
  { termo: "SUCO", tags: ["Comida", "Bebida"] },
  { termo: "LOBO", tags: ["Animal", "Selvagem"] },
  { termo: "RAPOSA", tags: ["Animal", "Selvagem"] },
  { termo: "URSO", tags: ["Animal", "Selvagem"] },
  { termo: "TIGRE", tags: ["Animal", "Selvagem"] },
  { termo: "ELEFANTE", tags: ["Animal", "Selvagem"] },
  { termo: "GIRAFA", tags: ["Animal", "Selvagem"] },
  { termo: "ZEBRA", tags: ["Animal", "Selvagem"] },
  { termo: "MACACO", tags: ["Animal", "Selvagem"] },
  { termo: "COELHO", tags: ["Animal", "Doméstico"] },
  { termo: "HAMSTER", tags: ["Animal", "Doméstico"] },
  { termo: "TARTARUGA", tags: ["Animal"] },
  { termo: "COBRA", tags: ["Animal"] },
  { termo: "SAPO", tags: ["Animal"] },
  { termo: "BALEIA", tags: ["Animal", "Aquático"] },
  { termo: "TUBARÃO", tags: ["Animal", "Aquático"] },
  { termo: "POLVO", tags: ["Animal", "Aquático"] },
  { termo: "CARANGUEJO", tags: ["Animal", "Aquático"] },
  { termo: "FORMIGA", tags: ["Animal", "Inseto"] },
  { termo: "ABELHA", tags: ["Animal", "Inseto", "Voa"] },
  { termo: "MOSQUITO", tags: ["Animal", "Inseto", "Voa"] },
  { termo: "ARANHA", tags: ["Animal", "Inseto"] },
  { termo: "PINGUIM", tags: ["Animal", "Tem asas"] },
  { termo: "CAMINHÃO", tags: ["Veículo", "Tem rodas"] },
  { termo: "VAN", tags: ["Veículo", "Tem rodas"] },
  { termo: "TRATOR", tags: ["Veículo", "Tem rodas"] },
  { termo: "METRÔ", tags: ["Veículo", "Tem rodas"] },
  { termo: "FERRY", tags: ["Veículo", "Aquático"] },
  { termo: "SUBMARINO", tags: ["Veículo", "Aquático"] },
  { termo: "FOGUETE", tags: ["Veículo", "Voa", "Espaço"] },
  { termo: "BALÃO", tags: ["Veículo", "Voa"] },
  { termo: "PRANCHA", tags: ["Objeto"] },
  { termo: "SKATE", tags: ["Veículo", "Tem rodas"] },
  { termo: "TESOURA", tags: ["Escolar", "Ferramenta"] },
  { termo: "BORRACHA", tags: ["Escolar"] },
  { termo: "RÉGUA", tags: ["Escolar"] },
  { termo: "MOCHILA", tags: ["Escolar", "Objeto"] },
  { termo: "APONTADOR", tags: ["Escolar"] },
  { termo: "COMPUTADOR", tags: ["Tecnologia", "Eletrônico"] },
  { termo: "CELULAR", tags: ["Tecnologia", "Eletrônico"] },
  { termo: "TABLET", tags: ["Tecnologia", "Eletrônico"] },
  { termo: "TELEVISÃO", tags: ["Tecnologia", "Eletrônico"] },
  { termo: "RÁDIO", tags: ["Tecnologia", "Eletrônico"] },
  { termo: "CÂMERA", tags: ["Tecnologia", "Eletrônico"] },
  { termo: "FONE DE OUVIDO", tags: ["Tecnologia", "Eletrônico"] },
  { termo: "RELÓGIO", tags: ["Objeto"] },
  { termo: "ÓCULOS", tags: ["Objeto"] },
  { termo: "GUARDA-CHUVA", tags: ["Objeto"] },
  { termo: "ESCOVA", tags: ["Doméstico"] },
  { termo: "TOALHA", tags: ["Doméstico"] },
  { termo: "TRAVESSEIRO", tags: ["Doméstico"] },
  { termo: "GELADEIRA", tags: ["Doméstico", "Eletrônico"] },
  { termo: "FOGÃO", tags: ["Doméstico", "Eletrônico"] },
  { termo: "ASPIRADOR", tags: ["Doméstico", "Eletrônico"] },
  { termo: "VIOLINO", tags: ["Instrumento", "Musical"] },
  { termo: "VIOLONCELO", tags: ["Instrumento", "Musical"] },
  { termo: "HARPA", tags: ["Instrumento", "Musical"] },
  { termo: "SAXOFONE", tags: ["Instrumento", "Musical"] },
  { termo: "TROMPETE", tags: ["Instrumento", "Musical"] },
  { termo: "UKULELE", tags: ["Instrumento", "Musical"] },
  { termo: "FUTEBOL", tags: ["Esporte"] },
  { termo: "BASQUETE", tags: ["Esporte"] },
  { termo: "VÔLEI", tags: ["Esporte"] },
  { termo: "TÊNIS", tags: ["Esporte"] },
  { termo: "NATAÇÃO", tags: ["Esporte", "Aquático"] },
  { termo: "CORRIDA", tags: ["Esporte"] },
  { termo: "CICLISMO", tags: ["Esporte", "Veículo"] },
  { termo: "SURFE", tags: ["Esporte", "Aquático"] },
  { termo: "XADREZ", tags: ["Jogo"] },
  { termo: "DOMINÓ", tags: ["Jogo"] },
  { termo: "MERCÚRIO", tags: ["Espaço", "Planeta"] },
  { termo: "VÊNUS", tags: ["Espaço", "Planeta"] },
  { termo: "TERRA", tags: ["Espaço", "Planeta"] },
  { termo: "MARTE", tags: ["Espaço", "Planeta"] },
  { termo: "JÚPITER", tags: ["Espaço", "Planeta"] },
  { termo: "SATURNO", tags: ["Espaço", "Planeta"] },
  { termo: "URANO", tags: ["Espaço", "Planeta"] },
  { termo: "NETUNO", tags: ["Espaço", "Planeta"] },
  { termo: "LUA", tags: ["Espaço"] },
  { termo: "SOL", tags: ["Espaço", "Estrela"] },
  { termo: "ESTRELA", tags: ["Espaço", "Estrela"] },
  { termo: "COMETA", tags: ["Espaço"] },
  { termo: "ASTEROIDE", tags: ["Espaço"] },
  { termo: "OURO", tags: ["Metal"] },
  { termo: "PRATA", tags: ["Metal"] },
  { termo: "FERRO", tags: ["Metal"] },
  { termo: "COBRE", tags: ["Metal"] },
  { termo: "VIDRO", tags: ["Material"] },
  { termo: "MADEIRA", tags: ["Material"] },
  { termo: "PLÁSTICO", tags: ["Material"] },
  { termo: "PAPEL", tags: ["Material", "Escolar"] },
  { termo: "ALGODÃO", tags: ["Material", "Tecido"] },
  { termo: "LÃ", tags: ["Material", "Tecido"] },
  { termo: "SEDA", tags: ["Material", "Tecido"] },
  { termo: "MÉDICO", tags: ["Profissão"] },
  { termo: "PROFESSOR", tags: ["Profissão", "Escolar"] },
  { termo: "COZINHEIRO", tags: ["Profissão", "Comida"] },
  { termo: "MOTORISTA", tags: ["Profissão", "Veículo"] },
  { termo: "BOMBEIRO", tags: ["Profissão"] },
  { termo: "POLICIAL", tags: ["Profissão"] },
  { termo: "DENTISTA", tags: ["Profissão", "Corpo"] },
  { termo: "ARQUITETO", tags: ["Profissão"] },
  { termo: "ENGENHEIRO", tags: ["Profissão"] },
  { termo: "JORNALISTA", tags: ["Profissão"] },
  { termo: "VERDE", tags: ["Cor"] },
  { termo: "AZUL", tags: ["Cor"] },
  { termo: "AMARELO", tags: ["Cor", "Cor Laranja"] },
  { termo: "ROXO", tags: ["Cor"] },
  { termo: "BRANCO", tags: ["Cor"] },
  { termo: "PRETO", tags: ["Cor"] },
  { termo: "CINZA", tags: ["Cor"] },
  { termo: "ROSA-CHOQUE", tags: ["Cor"] },
  { termo: "CÍRCULO", tags: ["Forma"] },
  { termo: "QUADRADO", tags: ["Forma"] },
  { termo: "TRIÂNGULO", tags: ["Forma"] },
  { termo: "RETÂNGULO", tags: ["Forma"] },
  { termo: "CUBO", tags: ["Forma"] },
  { termo: "ESFERA", tags: ["Forma"] }
];

// Banco exclusivo do Desafio Diário. Estas palavras não entram na campanha clássica.
const desafiosDiarios = [
  {
    regraA: "Funciona com eletricidade",
    regraB: "Cabe em uma mochila",
    grupos: {
      A: [["GELADEIRA MINI", ["Funciona com eletricidade"]], ["LAVADORA", ["Funciona com eletricidade"]]],
      B: [["CADERNO DE BOLSO", ["Cabe em uma mochila"]], ["GARRAFA", ["Cabe em uma mochila"]]],
      AB: [["CELULAR DE BOLSO", ["Funciona com eletricidade", "Cabe em uma mochila"]], ["CALCULADORA", ["Funciona com eletricidade", "Cabe em uma mochila"]]],
      N: [["PEDRA", []], ["COLHER DE MADEIRA", []]]
    }
  },
  {
    regraA: "É usado na cozinha",
    regraB: "Pode ser feito de metal",
    grupos: {
      A: [["ESPONJA", ["É usado na cozinha"]], ["PANO DE PRATO", ["É usado na cozinha"]]],
      B: [["MOEDA", ["Pode ser feito de metal"]], ["PARAFUSO", ["Pode ser feito de metal"]]],
      AB: [["PANELA", ["É usado na cozinha", "Pode ser feito de metal"]], ["GARFO", ["É usado na cozinha", "Pode ser feito de metal"]]],
      N: [["TRAVESSEIRO", []], ["BOLA DE FUTEBOL", []]]
    }
  },
  {
    regraA: "É encontrado na natureza",
    regraB: "É usado para escrever",
    grupos: {
      A: [["CACHOEIRA", ["É encontrado na natureza"]], ["MONTANHA", ["É encontrado na natureza"]]],
      B: [["CANETA ARTESANAL", ["É usado para escrever"]], ["MARCADOR", ["É usado para escrever"]]],
      AB: [["LÁPIS DE CARVÃO", ["É encontrado na natureza", "É usado para escrever"]], ["GIZ", ["É encontrado na natureza", "É usado para escrever"]]],
      N: [["MICRO-ONDAS", []], ["CHINELO", []]]
    }
  },
  {
    regraA: "Tem rodas",
    regraB: "Transporta pessoas",
    grupos: {
      A: [["CARRINHO DE MÃO", ["Tem rodas"]], ["CARRINHO DE SUPERMERCADO", ["Tem rodas"]]],
      B: [["ELEVADOR", ["Transporta pessoas"]], ["ESCADA ROLANTE", ["Transporta pessoas"]]],
      AB: [["ÔNIBUS URBANO", ["Tem rodas", "Transporta pessoas"]], ["BICICLETA DE DOIS LUGARES", ["Tem rodas", "Transporta pessoas"]]],
      N: [["LIVRO", []], ["ABACAXI", []]]
    }
  },
  {
    regraA: "É um ser vivo",
    regraB: "Pode voar",
    grupos: {
      A: [["ÁRVORE", ["É um ser vivo"]], ["MINHOCA", ["É um ser vivo"]]],
      B: [["AVIÃO DE PAPEL", ["Pode voar"]], ["PIPA", ["Pode voar"]]],
      AB: [["ABELHA-DIÁRIO", ["É um ser vivo", "Pode voar"]], ["MORCEGO-DIÁRIO", ["É um ser vivo", "Pode voar"]]],
      N: [["CADEIRA", []], ["PEDRA-POMES", []]]
    }
  }
];

const palavrasExclusivasDiarias = desafiosDiarios.flatMap(desafio =>
  Object.values(desafio.grupos).flatMap(grupo =>
    grupo.map(([termo, tags]) => ({ termo, tags, exclusivaDiario: true }))
  )
);
bancoDePalavras.push(...palavrasExclusivasDiarias);


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
    localStorage.setItem(chaveSalvamentoAtual, JSON.stringify(estado));
    painelSalvamento.textContent = "Progresso salvo neste dispositivo.";
  } catch (erro) {
    painelSalvamento.textContent = "Não foi possível salvar neste navegador.";
  }
}

function lerSalvamento() {
  try {
    const bruto = localStorage.getItem(chaveSalvamentoAtual);
    if (!bruto) return null;
    const estado = JSON.parse(bruto);
    if (estado.versao !== 1 || !Array.isArray(estado.palavrasDaFase)) return null;
    return estado;
  } catch (erro) {
    return null;
  }
}

function apagarSalvamento() {
  try { localStorage.removeItem(chaveSalvamentoAtual); } catch (erro) { /* armazenamento indisponível */ }
}

function gerarFase() {
  if (modoDiario) return gerarFaseDiaria();
  const bancoClassico = bancoDePalavras.filter(item => !item.exclusivaDiario);
  const categorias = [...new Set(bancoClassico.flatMap(item => item.tags))];
  const quantidadeDesejada = Math.min(4, 2 + Math.floor((nivel - 1) / 3));
  const paresPossiveis = [];
  for (let i = 0; i < categorias.length; i++) {
    for (let j = i + 1; j < categorias.length; j++) paresPossiveis.push([categorias[i], categorias[j]]);
  }
  for (let quantidade = quantidadeDesejada; quantidade >= 1; quantidade--) {
    const paresValidos = [];
    for (const [categoriaA, categoriaB] of paresPossiveis) {
      const somenteA = bancoClassico.filter(item => item.tags.includes(categoriaA) && !item.tags.includes(categoriaB));
      const somenteB = bancoClassico.filter(item => item.tags.includes(categoriaB) && !item.tags.includes(categoriaA));
      const ambas = bancoClassico.filter(item => item.tags.includes(categoriaA) && item.tags.includes(categoriaB));
      const nenhuma = bancoClassico.filter(item => !item.tags.includes(categoriaA) && !item.tags.includes(categoriaB));
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


function gerarFaseDiaria() {
  const hoje = dataLocalISO();
  const indice = hashTexto("NEXO-DIARIO-DESAFIOS-" + hoje) % desafiosDiarios.length;
  const desafio = desafiosDiarios[indice];
  const palavras = Object.values(desafio.grupos).flatMap(grupo =>
    grupo.map(([termo]) => bancoDePalavras.find(item => item.termo === termo))
  ).filter(Boolean);
  if (palavras.length !== 8) return null;
  return { regraA: desafio.regraA, regraB: desafio.regraB, palavras: embaralhar(palavras) };
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
  if (modoDiario) {
    pontuacao += 50;
    travarPalavras();
    atualizarPainel();
    const registro = { data: dataLocalISO(), pontuacao, regraA, regraB, concluido: true };
    try { localStorage.setItem(CHAVE_DIARIO, JSON.stringify(registro)); } catch (e) {}
    mostrarMensagem("Desafio diário concluído! 🏆", `Você completou o desafio de hoje e fez ${pontuacao} pontos. Volte amanhã para um novo desafio!`, [
      { texto: "Voltar ao modo clássico", classe: "botao botao-secundario", acao: voltarModoClassico }
    ]);
    painelMensagem.textContent = "Desafio diário concluído. Seu resultado foi salvo neste dispositivo.";
    salvarProgresso();
    return;
  }
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

function dataLocalISO() {
  const agora = new Date();
  return `${agora.getFullYear()}-${String(agora.getMonth()+1).padStart(2,"0")}-${String(agora.getDate()).padStart(2,"0")}`;
}
function geradorComSemente(semente) {
  let estado = seemente >>> 0;
  return function() { estado = (estado * 1664525 + 1013904223) >>> 0; return estado / 4294967296; };
}
function hashTexto(texto) { let h = 2166136261; for (let i=0;i<texto.length;i++) { h ^= texto.charCodeAt(i); h = Math.imul(h,16777619); } return h >>> 0; }
function abrirDesafioDiario() {
  const hoje = dataLocalISO();
  let registro = null;
  try { registro = JSON.parse(localStorage.getItem(CHAVE_DIARIO) || "null"); } catch(e) {}
  if (registro && registro.data === hoje && registro.concluido) {
    document.getElementById("painel-diario").hidden = false;
    document.getElementById("painel-diario").innerHTML = `Você já concluiu o desafio de hoje! 🏆<br><strong>Pontuação:</strong> ${registro.pontuacao} pontos. Um novo desafio chega amanhã.`;
    mostrarMensagem("Desafio diário concluído", `Sua pontuação de hoje foi ${registro.pontuacao}. Volte amanhã para jogar novamente.`, [{texto:"Voltar ao modo clássico",classe:"botao botao-secundario",acao:voltarModoClassico}]);
    return;
  }
  // Mantém uma cópia do progresso clássico antes de mudar para o modo diário.
  try {
    const campanha = localStorage.getItem(CHAVE_SALVAMENTO);
    if (campanha) localStorage.setItem(CHAVE_BACKUP_CAMPANHA, campanha);
  } catch(e) {}
  modoDiario = true;
  chaveSalvamentoAtual = `nexo-diario-partida-${hoje}`;
  document.getElementById("painel-diario").hidden = false;
  document.getElementById("painel-diario").innerHTML = `<strong>Desafio Diário · ${hoje}</strong><br>O desafio de hoje é igual para todos os jogadores. Complete as palavras e tente bater seu próprio recorde!`;
  document.getElementById("botao-modo-diario").classList.add("modo-ativo");
  document.getElementById("botao-modo-normal").classList.remove("modo-ativo");
  const originalRandom = Math.random;
  Math.random = geradorComSemente(hashTexto("NEXO-DIARIO-" + hoje));
  try {
    vidas = VIDAS_INICIAIS; nivel = 1; pontuacao = 0; ofensiva = 0;
    jogoEncerrado = false; faseConcluida = false; recompensaUsada = false;
    if (!restaurarPartida(lerSalvamento())) iniciarFase();
  } finally { Math.random = originalRandom; }
  painelMensagem.textContent = "Desafio diário: as regras e palavras de hoje são fixas.";
}
function voltarModoClassico() {
  if (temporizadorFase) clearTimeout(temporizadorFase);
  modoDiario = false;
  chaveSalvamentoAtual = CHAVE_SALVAMENTO;
  document.getElementById("painel-diario").hidden = true;
  document.getElementById("botao-modo-diario").classList.remove("modo-ativo");
  document.getElementById("botao-modo-normal").classList.add("modo-ativo");
  const backup = (() => { try { return JSON.parse(localStorage.getItem(CHAVE_BACKUP_CAMPANHA) || "null"); } catch(e) { return null; } })();
  if (backup && restaurarPartida(backup)) {
    salvarProgresso();
    painelMensagem.textContent = "Você voltou ao modo clássico. Seu progresso foi preservado.";
  } else {
    const salvo = lerSalvamento();
    if (!salvo || !restaurarPartida(salvo)) iniciarFase();
  }
}
document.getElementById("botao-modo-diario").addEventListener("click", abrirDesafioDiario);
document.getElementById("botao-modo-normal").addEventListener("click", () => {
  if (modoDiario) voltarModoClassico();
  else { document.getElementById("painel-diario").hidden = true; }
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
