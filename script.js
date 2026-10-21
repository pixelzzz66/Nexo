/* =========================================
   NEXO - JOGO + SALVAMENTO LOCAL + PWA
   ========================================= */

const CHAVE_SALVAMENTO = "nexo-progresso-v1";
let chaveSalvamentoAtual = CHAVE_SALVAMENTO;
let modoDiario = false;
const CHAVE_DIARIO = "nexo-diario-v1";
const CHAVE_BACKUP_CAMPANHA = "nexo-campanha-backup-v1";
const VIDAS_INICIAIS = 3;
const VIDAS_RECOMPENSA = 3;

/* ---------- CATÁLOGO CLÁSSICO ---------- */
const bancoDePalavras = [
  // Vermelho
  { termo: "TOMATE", tags: ["Vermelho", "Comida", "Vegetal"] },
  { termo: "MORANGO", tags: ["Vermelho", "Comida", "Fruta", "Doce"] },
  { termo: "CEREJA", tags: ["Vermelho", "Comida", "Fruta", "Doce"] },
  { termo: "PIMENTÃO", tags: ["Vermelho", "Comida", "Vegetal"] },
  { termo: "BETERRABA", tags: ["Vermelho", "Comida", "Vegetal"] },
  { termo: "SANGUE", tags: ["Vermelho", "Corpo"] },
  { termo: "ROSA", tags: ["Vermelho", "Planta"] },
  // Comida
  { termo: "ALFACE", tags: ["Comida", "Vegetal", "Verde"] },
  { termo: "CENOURA", tags: ["Comida", "Vegetal", "Laranja"] },
  { termo: "PÃO", tags: ["Comida"] },
  { termo: "QUEIJO", tags: ["Comida"] },
  { termo: "UVA", tags: ["Comida", "Fruta", "Doce"] },
  { termo: "MAÇÃ", tags: ["Comida", "Fruta"] },
  { termo: "BANANA", tags: ["Comida", "Fruta", "Amarelo"] },
  { termo: "LIMÃO", tags: ["Comida", "Fruta", "Verde", "Azedo"] },
  { termo: "ABACAXI", tags: ["Comida", "Fruta"] },
  { termo: "MELANCIA", tags: ["Comida", "Fruta", "Verde"] },
  { termo: "CHOCOLATE", tags: ["Comida", "Doce"] },
  { termo: "BOLO", tags: ["Comida", "Doce"] },
  { termo: "MEL", tags: ["Comida", "Doce"] },
  { termo: "SAL", tags: ["Comida"] },
  { termo: "ARROZ", tags: ["Comida"] },
  { termo: "FEIJÃO", tags: ["Comida"] },
  { termo: "MACARRÃO", tags: ["Comida"] },
  { termo: "PIZZA", tags: ["Comida", "Redondo"] },
  { termo: "HAMBÚRGUER", tags: ["Comida"] },
  { termo: "SOPA", tags: ["Comida", "Quente"] },
  { termo: "SORVETE", tags: ["Comida", "Doce", "Frio"] },
  { termo: "BISCOITO", tags: ["Comida", "Doce"] },
  { termo: "PUDIM", tags: ["Comida", "Doce"] },
  { termo: "IOGURTE", tags: ["Comida"] },
  { termo: "LARANJA", tags: ["Comida", "Fruta", "Laranja"] },
  { termo: "PERA", tags: ["Comida", "Fruta"] },
  { termo: "MAMÃO", tags: ["Comida", "Fruta", "Laranja"] },
  { termo: "MANGA", tags: ["Comida", "Fruta"] },
  { termo: "KIWI", tags: ["Comida", "Fruta", "Verde"] },
  { termo: "COCO", tags: ["Comida", "Fruta"] },
  { termo: "PÊSSEGO", tags: ["Comida", "Fruta"] },
  { termo: "AMEIXA", tags: ["Comida", "Fruta"] },
  { termo: "GOIABA", tags: ["Comida", "Fruta"] },
  { termo: "MARACUJÁ", tags: ["Comida", "Fruta"] },
  { termo: "ABÓBORA", tags: ["Comida", "Vegetal", "Laranja"] },
  { termo: "PEPINO", tags: ["Comida", "Vegetal", "Verde"] },
  { termo: "BRÓCOLIS", tags: ["Comida", "Vegetal", "Verde"] },
  { termo: "ESPINAFRE", tags: ["Comida", "Vegetal", "Verde"] },
  { termo: "BATATA", tags: ["Comida", "Vegetal"] },
  { termo: "CEBOLA", tags: ["Comida", "Vegetal"] },
  { termo: "ALHO", tags: ["Comida", "Vegetal"] },
  { termo: "MILHO", tags: ["Comida", "Vegetal", "Amarelo"] },
  { termo: "GIRASSOL", tags: ["Planta", "Amarelo"] },
  // Veículos
  { termo: "CARRO", tags: ["Veículo", "Tem rodas"] },
  { termo: "BICICLETA", tags: ["Veículo", "Tem rodas"] },
  { termo: "MOTO", tags: ["Veículo", "Tem rodas"] },
  { termo: "ÔNIBUS", tags: ["Veículo", "Tem rodas"] },
  { termo: "TREM", tags: ["Veículo", "Tem rodas"] },
  { termo: "PATINETE", tags: ["Veículo", "Tem rodas"] },
  { termo: "SKATE", tags: ["Veículo", "Tem rodas"] },
  { termo: "CAMINHÃO", tags: ["Veículo", "Tem rodas"] },
  { termo: "VAN", tags: ["Veículo", "Tem rodas"] },
  { termo: "TRATOR", tags: ["Veículo", "Tem rodas"] },
  { termo: "METRÔ", tags: ["Veículo", "Tem rodas"] },
  { termo: "AVIÃO", tags: ["Veículo", "Voa", "Tem asas"] },
  { termo: "HELICÓPTERO", tags: ["Veículo", "Voa"] },
  { termo: "FOGUETE", tags: ["Veículo", "Voa", "Espaço"] },
  { termo: "BALÃO", tags: ["Veículo", "Voa"] },
  { termo: "BARCO", tags: ["Veículo", "Aquático"] },
  { termo: "FERRY", tags: ["Veículo", "Aquático"] },
  { termo: "SUBMARINO", tags: ["Veículo", "Aquático"] },
  // Rodas / objetos
  { termo: "MALA COM RODINHAS", tags: ["Tem rodas", "Objeto"] },
  { termo: "CADEIRA DE ESCRITÓRIO", tags: ["Tem rodas", "Doméstico"] },
  { termo: "CARRINHO DE MÃO", tags: ["Tem rodas"] },
  { termo: "RODA", tags: ["Redondo", "Tem rodas"] },
  { termo: "PNEU", tags: ["Redondo", "Tem rodas"] },
  // Animais
  { termo: "CACHORRO", tags: ["Animal", "Doméstico"] },
  { termo: "GATO", tags: ["Animal", "Doméstico"] },
  { termo: "GALINHA", tags: ["Animal", "Doméstico", "Tem asas"] },
  { termo: "PATO", tags: ["Animal", "Doméstico", "Voa", "Tem asas"] },
  { termo: "LEÃO", tags: ["Animal", "Selvagem"] },
  { termo: "ÁGUIA", tags: ["Animal", "Voa", "Tem asas"] },
  { termo: "BORBOLETA", tags: ["Animal", "Voa", "Tem asas"] },
  { termo: "PINGUIM", tags: ["Animal", "Tem asas", "Aquático"] },
  { termo: "MORCEGO", tags: ["Animal", "Voa"] },
  { termo: "AVESTRUZ", tags: ["Animal", "Tem asas"] },
  { termo: "GOLFINHO", tags: ["Animal", "Aquático"] },
  { termo: "CAVALO", tags: ["Animal", "Doméstico"] },
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
  { termo: "TARTARUGA", tags: ["Animal", "Aquático"] },
  { termo: "COBRA", tags: ["Animal", "Selvagem"] },
  { termo: "SAPO", tags: ["Animal", "Aquático"] },
  { termo: "BALEIA", tags: ["Animal", "Aquático"] },
  { termo: "TUBARÃO", tags: ["Animal", "Aquático"] },
  { termo: "POLVO", tags: ["Animal", "Aquático"] },
  { termo: "CARANGUEJO", tags: ["Animal", "Aquático"] },
  { termo: "FORMIGA", tags: ["Animal", "Inseto"] },
  { termo: "ABELHA", tags: ["Animal", "Inseto", "Voa"] },
  { termo: "MOSQUITO", tags: ["Animal", "Inseto", "Voa"] },
  { termo: "ARANHA", tags: ["Animal", "Inseto"] },
  // Doméstico / objetos
  { termo: "MESA", tags: ["Doméstico"] },
  { termo: "SOFÁ", tags: ["Doméstico"] },
  { termo: "CAMA", tags: ["Doméstico"] },
  { termo: "LÂMPADA", tags: ["Doméstico"] },
  { termo: "FACA", tags: ["Doméstico", "Metal"] },
  { termo: "CHAVE", tags: ["Doméstico", "Metal"] },
  { termo: "PRATO", tags: ["Doméstico", "Redondo"] },
  { termo: "TOALHA", tags: ["Doméstico"] },
  { termo: "TRAVESSEIRO", tags: ["Doméstico"] },
  { termo: "ESCOVA", tags: ["Doméstico"] },
  { termo: "GUARDA-CHUVA", tags: ["Doméstico", "Objeto"] },
  // Escolar
  { termo: "CANETA", tags: ["Escolar"] },
  { termo: "CADERNO", tags: ["Escolar"] },
  { termo: "LIVRO", tags: ["Escolar"] },
  { termo: "LÁPIS", tags: ["Escolar"] },
  { termo: "BORRACHA", tags: ["Escolar"] },
  { termo: "RÉGUA", tags: ["Escolar"] },
  { termo: "APONTADOR", tags: ["Escolar"] },
  { termo: "MOCHILA", tags: ["Escolar", "Objeto"] },
  { termo: "TESOURA", tags: ["Escolar", "Metal"] },
  { termo: "PAPEL", tags: ["Escolar", "Material"] },
  // Instrumentos
  { termo: "VIOLÃO", tags: ["Instrumento"] },
  { termo: "PIANO", tags: ["Instrumento"] },
  { termo: "FLAUTA", tags: ["Instrumento"] },
  { termo: "TAMBOR", tags: ["Instrumento"] },
  { termo: "GUITARRA", tags: ["Instrumento"] },
  { termo: "VIOLINO", tags: ["Instrumento"] },
  { termo: "VIOLONCELO", tags: ["Instrumento"] },
  { termo: "HARPA", tags: ["Instrumento"] },
  { termo: "SAXOFONE", tags: ["Instrumento"] },
  { termo: "TROMPETE", tags: ["Instrumento", "Metal"] },
  { termo: "UKULELE", tags: ["Instrumento"] },
  // Tecnologia
  { termo: "COMPUTADOR", tags: ["Tecnologia", "Eletrônico"] },
  { termo: "CELULAR", tags: ["Tecnologia", "Eletrônico"] },
  { termo: "TABLET", tags: ["Tecnologia", "Eletrônico"] },
  { termo: "TELEVISÃO", tags: ["Tecnologia", "Eletrônico"] },
  { termo: "RÁDIO", tags: ["Tecnologia", "Eletrônico"] },
  { termo: "CÂMERA", tags: ["Tecnologia", "Eletrônico"] },
  { termo: "FONE DE OUVIDO", tags: ["Tecnologia", "Eletrônico"] },
  { termo: "GELADEIRA", tags: ["Doméstico", "Eletrônico"] },
  { termo: "FOGÃO", tags: ["Doméstico", "Eletrônico"] },
  { termo: "ASPIRADOR", tags: ["Doméstico", "Eletrônico"] },
  // Objetos
  { termo: "RELÓGIO", tags: ["Objeto", "Redondo"] },
  { termo: "ÓCULOS", tags: ["Objeto"] },
  // Corpo
  { termo: "CORAÇÃO", tags: ["Corpo"] },
  { termo: "PULMÃO", tags: ["Corpo"] },
  { termo: "CÉREBRO", tags: ["Corpo"] },
  { termo: "OLHO", tags: ["Corpo", "Redondo"] },
  { termo: "MÃO", tags: ["Corpo"] },
  { termo: "PÉ", tags: ["Corpo"] },
  { termo: "OSSO", tags: ["Corpo"] },
  // Plantas
  { termo: "MARGARIDA", tags: ["Planta"] },
  { termo: "SAMAMBAIA", tags: ["Planta", "Verde"] },
  { termo: "CACTOS", tags: ["Planta", "Verde"] },
  { termo: "ORQUÍDEA", tags: ["Planta"] },
  { termo: "PALMEIRA", tags: ["Planta", "Verde"] },
  // Tecidos
  { termo: "ALGODÃO", tags: ["Material", "Tecido"] },
  { termo: "LÃ", tags: ["Material", "Tecido"] },
  { termo: "SEDA", tags: ["Material", "Tecido"] },
  { termo: "LINHO", tags: ["Material", "Tecido"] },
  { termo: "JEANS", tags: ["Material", "Tecido"] },
  // Formas
  { termo: "CÍRCULO", tags: ["Forma", "Redondo"] },
  { termo: "QUADRADO", tags: ["Forma"] },
  { termo: "TRIÂNGULO", tags: ["Forma"] },
  { termo: "RETÂNGULO", tags: ["Forma"] },
  { termo: "CUBO", tags: ["Forma"] },
  { termo: "ESFERA", tags: ["Forma", "Redondo"] },
  // Espaço
  { termo: "MERCÚRIO", tags: ["Espaço", "Planeta"] },
  { termo: "VÊNUS", tags: ["Espaço", "Planeta"] },
  { termo: "TERRA", tags: ["Espaço", "Planeta"] },
  { termo: "MARTE", tags: ["Espaço", "Planeta"] },
  { termo: "JÚPITER", tags: ["Espaço", "Planeta"] },
  { termo: "SATURNO", tags: ["Espaço", "Planeta"] },
  { termo: "URANO", tags: ["Espaço", "Planeta"] },
  { termo: "NETUNO", tags: ["Espaço", "Planeta"] },
  { termo: "LUA", tags: ["Espaço", "Redondo"] },
  { termo: "SOL", tags: ["Espaço", "Estrela", "Redondo"] },
  { termo: "ESTRELA", tags: ["Espaço", "Estrela"] },
  { termo: "COMETA", tags: ["Espaço"] },
  { termo: "ASTEROIDE", tags: ["Espaço"] },
  // Metais e materiais
  { termo: "OURO", tags: ["Metal"] },
  { termo: "PRATA", tags: ["Metal"] },
  { termo: "FERRO", tags: ["Metal"] },
  { termo: "COBRE", tags: ["Metal"] },
  { termo: "VIDRO", tags: ["Material"] },
  { termo: "MADEIRA", tags: ["Material"] },
  { termo: "PLÁSTICO", tags: ["Material"] },
  // Profissões
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
  // Bebidas
  { termo: "LEITE", tags: ["Comida", "Bebida"] },
  { termo: "CAFÉ", tags: ["Comida", "Bebida", "Quente"] },
  { termo: "CHÁ", tags: ["Comida", "Bebida", "Quente"] },
  { termo: "SUCO", tags: ["Comida", "Bebida"] },
  // Esportes
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
  // Cores
  { termo: "VERDE", tags: ["Cor"] },
  { termo: "AZUL", tags: ["Cor"] },
  { termo: "AMARELO", tags: ["Cor"] },
  { termo: "ROXO", tags: ["Cor"] },
  { termo: "BRANCO", tags: ["Cor"] },
  { termo: "PRETO", tags: ["Cor"] },
  { termo: "CINZA", tags: ["Cor"] },
  // Diversos
  { termo: "CÍRCULO", tags: ["Forma", "Redondo"] },
  { termo: "RODA", tags: ["Redondo", "Tem rodas"] }
];

/* ---------- DESAFIOS DIÁRIOS ---------- */
const desafiosDiarios = [
  {
    regraA: "Funciona com eletricidade",
    regraB: "Cabe em uma mochila",
    grupos: {
      A: [["GELADEIRA PEQUENA", ["Funciona com eletricidade"]], ["MICRO-ONDAS", ["Funciona com eletricidade"]]],
      B: [["GARRAFA", ["Cabe em uma mochila"]], ["GUARDA-CHUVA", ["Cabe em uma mochila"]]],
      AB: [["CELULAR", ["Funciona com eletricidade", "Cabe em uma mochila"]], ["CALCULADORA", ["Funciona com eletricidade", "Cabe em uma mochila"]]],
      N: [["PEDRA", []], ["COLHER DE PAU", []]]
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
      B: [["CANETA ESFEROGRÁFICA", ["É usado para escrever"]], ["MARCADOR", ["É usado para escrever"]]],
      AB: [["LÁPIS", ["É encontrado na natureza", "É usado para escrever"]], ["GIZ", ["É encontrado na natureza", "É usado para escrever"]]],
      N: [["MICRO-ONDAS", []], ["CHINELO", []]]
    }
  },
  {
    regraA: "Tem rodas",
    regraB: "Transporta pessoas",
    grupos: {
      A: [["CARRINHO DE MÃO", ["Tem rodas"]], ["CARRINHO DE SUPERMERCADO", ["Tem rodas"]]],
      B: [["ELEVADOR", ["Transporta pessoas"]], ["ESCADA ROLANTE", ["Transporta pessoas"]]],
      AB: [["ÔNIBUS URBANO", ["Tem rodas", "Transporta pessoas"]], ["BICICLETA", ["Tem rodas", "Transporta pessoas"]]],
      N: [["CADERNO", []], ["ABACAXI", []]]
    }
  },
  {
    regraA: "É um ser vivo",
    regraB: "Pode voar",
    grupos: {
      A: [["ÁRVORE", ["É um ser vivo"]], ["MINHOCA", ["É um ser vivo"]]],
      B: [["AVIÃO DE PAPEL", ["Pode voar"]], ["PIPA", ["Pode voar"]]],
      AB: [["ABELHA", ["É um ser vivo", "Pode voar"]], ["MORCEGO", ["É um ser vivo", "Pode voar"]]],
      N: [["CADEIRA", []], ["PEDRA", []]]
    }
  },
  {
    regraA: "É doce",
    regraB: "É vermelho",
    grupos: {
      A: [["MEL", ["É doce"]], ["AÇÚCAR", ["É doce"]]],
      B: [["SANGUE", ["É vermelho"]], ["PIMENTÃO", ["É vermelho"]]],
      AB: [["MORANGO", ["É doce", "É vermelho"]], ["CEREJA", ["É doce", "É vermelho"]]],
      N: [["ARROZ", []], ["SAPATO", []]]
    }
  },
  {
    regraA: "Faz barulho",
    regraB: "Tem botão",
    grupos: {
      A: [["TROMBETA", ["Faz barulho"]], ["CACHORRO", ["Faz barulho"]]],
      B: [["ELEVADOR", ["Tem botão"]], ["CONTROLE REMOTO", ["Tem botão"]]],
      AB: [["TELEVISÃO", ["Faz barulho", "Tem botão"]], ["RÁDIO", ["Faz barulho", "Tem botão"]]],
      N: [["PEDRA", []], ["CADERNO", []]]
    }
  },
  {
    regraA: "É líquido",
    regraB: "É quente",
    grupos: {
      A: [["ÁGUA", ["É líquido"]], ["SUCO", ["É líquido"]]],
      B: [["FOGO", ["É quente"]], ["SOL", ["É quente"]]],
      AB: [["CAFÉ", ["É líquido", "É quente"]], ["SOPA", ["É líquido", "É quente"]]],
      N: [["GELO", []], ["PEDRA", []]]
    }
  }
];

/* ---------- ESTADO ---------- */
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

/* ---------- UTIL ---------- */
function embaralhar(lista) {
  const r = [...lista];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

function dataLocalISO() {
  const a = new Date();
  return `${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`;
}

function hashTexto(texto) {
  let h = 2166136261;
  for (let i = 0; i < texto.length; i++) { h ^= texto.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

function geradorComSemente(semente) {
  let estado = semente >>> 0;
  return function () {
    estado = (estado * 1664525 + 1013904223) >>> 0;
    return estado / 4294967296;
  };
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

/* ---------- PERSISTÊNCIA ---------- */
function salvarProgresso() {
  const regioes = {};
  palavrasDaFase.forEach(item => { regioes[item.termo] = "BANCO"; });
  document.querySelectorAll(".chip-palavra").forEach(chip => {
    const zona = chip.closest(".zona-drop");
    if (zona) regioes[chip.dataset.termo] = zona.dataset.zona;
  });

  const estado = {
    versao: 1,
    vidas, nivel, pontuacao, ofensiva,
    jogoEncerrado, faseConcluida, recompensaUsada,
    regraA, regraB, palavrasRestantes,
    palavrasDaFase: palavrasDaFase.map(item => item.termo),
    regioes
  };
  try {
    localStorage.setItem(chaveSalvamentoAtual, JSON.stringify(estado));
    painelSalvamento.textContent = "Progresso salvo neste dispositivo.";
  } catch (e) {
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
  } catch (e) { return null; }
}

function apagarSalvamento() {
  try { localStorage.removeItem(chaveSalvamentoAtual); } catch (e) {}
}

/* ---------- GERAÇÃO DE FASES ---------- */
function gerarFase() {
  if (modoDiario) return gerarFaseDiaria();

  const categorias = [...new Set(bancoDePalavras.flatMap(item => item.tags))];
  const quantidadeDesejada = Math.min(4, 2 + Math.floor((nivel - 1) / 3));
  const paresPossiveis = [];
  for (let i = 0; i < categorias.length; i++) {
    for (let j = i + 1; j < categorias.length; j++) paresPossiveis.push([categorias[i], categorias[j]]);
  }
  for (let qtd = quantidadeDesejada; qtd >= 1; qtd--) {
    const paresValidos = [];
    for (const [catA, catB] of paresPossiveis) {
      const soA = bancoDePalavras.filter(i => i.tags.includes(catA) && !i.tags.includes(catB));
      const soB = bancoDePalavras.filter(i => i.tags.includes(catB) && !i.tags.includes(catA));
      const ambos = bancoDePalavras.filter(i => i.tags.includes(catA) && i.tags.includes(catB));
      const nenhum = bancoDePalavras.filter(i => !i.tags.includes(catA) && !i.tags.includes(catB));
      if (soA.length >= qtd && soB.length >= qtd && ambos.length >= qtd && nenhum.length >= qtd) {
        paresValidos.push({ catA, catB, soA, soB, ambos, nenhum, qtd });
      }
    }
    if (paresValidos.length) {
      const e = paresValidos[Math.floor(Math.random() * paresValidos.length)];
      const palavras = [
        ...embaralhar(e.soA).slice(0, e.qtd),
        ...embaralhar(e.soB).slice(0, e.qtd),
        ...embaralhar(e.ambos).slice(0, e.qtd),
        ...embaralhar(e.nenhum).slice(0, e.qtd)
      ];
      return { regraA: e.catA, regraB: e.catB, palavras: embaralhar(palavras) };
    }
  }
  return null;
}

function encontrarDesafioDiario(ra, rb) {
  return desafiosDiarios.find(d => d.regraA === ra && d.regraB === rb) || null;
}

function criarFaseDoDesafio(desafio) {
  const palavras = [];
  Object.values(desafio.grupos).forEach(grupo => {
    grupo.forEach(([termo, tags]) => palavras.push({ termo, tags }));
  });
  return { regraA: desafio.regraA, regraB: desafio.regraB, palavras: embaralhar(palavras) };
}

function gerarFaseDiaria() {
  const hoje = dataLocalISO();
  const indice = hashTexto("NEXO-DIARIO-DESAFIOS-" + hoje) % desafiosDiarios.length;
  return criarFaseDoDesafio(desafiosDiarios[indice]);
}

/* ---------- RENDERIZAÇÃO ---------- */
function criarChipPalavra(item, numero) {
  const chip = document.createElement("span");
  chip.className = "chip-palavra";
  chip.textContent = numero;
  chip.dataset.termo = item.termo;
  chip.title = item.termo;
  chip.setAttribute("aria-label", `Número ${numero}: ${item.termo}`);
  return chip;
}

function criarElementoPalavra(item, numero, colocada = false) {
  const palavra = document.createElement("button");
  palavra.type = "button";
  palavra.className = "palavra" + (colocada ? " colocada" : "");
  palavra.dataset.termo = item.termo;
  palavra.dataset.numero = numero;

  const badge = document.createElement("span");
  badge.className = "numero-palavra";
  badge.textContent = numero;

  const texto = document.createElement("span");
  texto.className = "texto-palavra";
  texto.textContent = item.termo;

  palavra.appendChild(badge);
  palavra.appendChild(texto);

  if (colocada) {
    palavra.disabled = true;
    palavra.draggable = false;
    const check = document.createElement("span");
    check.className = "check-palavra";
    check.textContent = "✓";
    palavra.appendChild(check);
    return palavra;
  }

  palavra.draggable = !jogoEncerrado && !faseConcluida;
  palavra.setAttribute("aria-label", `Palavra ${item.termo}, número ${numero}`);

  palavra.addEventListener("dragstart", evento => {
    if (jogoEncerrado || faseConcluida) { evento.preventDefault(); return; }
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
    if (jogoEncerrado || faseConcluida) return;
    document.querySelectorAll(".palavra.selecionada").forEach(el => el.classList.remove("selecionada"));
    palavra.classList.add("selecionada");
    termoSelecionado = item.termo;
    painelMensagem.textContent = `Palavra "${item.termo}" (nº ${numero}) selecionada. Toque na região correta.`;
  });

  return palavra;
}

function renderizarPalavras(regioes = {}) {
  bancoHTML.replaceChildren();
  zonas.forEach(zona => {
    zona.querySelectorAll(".chip-palavra").forEach(el => el.remove());
  });

  const destino = {
    A: document.querySelector('.circulo-a[data-zona="A"]'),
    B: document.querySelector('.circulo-b[data-zona="B"]'),
    AB: document.querySelector('.intersecao[data-zona="AB"]'),
    N: document.querySelector('.zona-nenhuma[data-zona="N"]')
  };

  palavrasDaFase.forEach((item, index) => {
    const numero = index + 1;
    const regiao = regioes[item.termo] || "BANCO";
    const colocada = regiao !== "BANCO";

    bancoHTML.appendChild(criarElementoPalavra(item, numero, colocada));

    if (colocada && destino[regiao]) {
      destino[regiao].appendChild(criarChipPalavra(item, numero));
    }
  });
}

/* ---------- INÍCIO / FASE ---------- */
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

/* ---------- VALIDAÇÃO E AÇÕES ---------- */
function validarJogada(item, zonaAlvo) {
  const a = item.tags.includes(regraA);
  const b = item.tags.includes(regraB);
  if (zonaAlvo === "A" && a && !b) return true;
  if (zonaAlvo === "B" && b && !a) return true;
  if (zonaAlvo === "AB" && a && b) return true;
  if (zonaAlvo === "N" && !a && !b) return true;
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
  mostrarMensagem("Fim de jogo! 💔", `Você chegou ao nível ${nivel} e fez ${pontuacao} pontos. Recompensa em modo demonstração, sem anúncio real.`, botoes);
  salvarProgresso();
}

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
    if (!palavra.classList.contains("colocada")) palavra.draggable = true;
  });
  atualizarPainel();
  painelMensagem.textContent = "Modo demonstração: 3 vidas restauradas.";
  mostrarMensagem("Você voltou! ❤️", "3 vidas restauradas. Suas palavras já classificadas, pontuação e nível foram preservados. Recompensa simulada.", [
    { texto: "Continuar jogando", classe: "botao", acao: () => { esconderMensagem(); painelMensagem.textContent = "Continue de onde parou!"; salvarProgresso(); } }
  ]);
  salvarProgresso();
}

function registrarErro(palavra) {
  palavra.style.backgroundColor = "#ff4757";
  vidas = Math.max(0, vidas - 1);
  ofensiva = 0;
  atualizarPainel();
  salvarProgresso();
  if (vidas === 0) { encerrarJogo(); return; }
  painelMensagem.textContent = "Ops! Região incorreta. Tente novamente.";
  setTimeout(() => {
    if (palavra.isConnected && !palavra.classList.contains("colocada")) palavra.style.backgroundColor = "";
  }, 500);
}

function registrarAcerto(item, numero, zona) {
  const bancoPalavra = [...bancoHTML.querySelectorAll(".palavra")].find(p => p.dataset.termo === item.termo);
  if (bancoPalavra) {
    bancoPalavra.classList.add("colocada");
    bancoPalavra.classList.remove("selecionada");
    bancoPalavra.disabled = true;
    bancoPalavra.draggable = false;
    bancoPalavra.style.backgroundColor = "";
    if (!bancoPalavra.querySelector(".check-palavra")) {
      const check = document.createElement("span");
      check.className = "check-palavra";
      check.textContent = "✓";
      bancoPalavra.appendChild(check);
    }
  }
  zona.appendChild(criarChipPalavra(item, numero));
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
  const item = palavrasDaFase.find(p => p.termo === termo);
  const bancoPalavra = [...bancoHTML.querySelectorAll(".palavra")].find(el => el.dataset.termo === termo);
  if (!item || !bancoPalavra || bancoPalavra.classList.contains("colocada")) return;

  const numero = parseInt(bancoPalavra.dataset.numero, 10) || 0;
  if (validarJogada(item, zona.dataset.zona)) registrarAcerto(item, numero, zona);
  else registrarErro(bancoPalavra);

  elementoArrastado = null;
  termoSelecionado = "";
  document.querySelectorAll(".palavra.selecionada").forEach(el => el.classList.remove("selecionada"));
}

/* ---------- EVENTOS DAS ZONAS ---------- */
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

/* ---------- MODO DIÁRIO / CLÁSSICO ---------- */
function abrirDesafioDiario() {
  const hoje = dataLocalISO();
  let registro = null;
  try { registro = JSON.parse(localStorage.getItem(CHAVE_DIARIO) || "null"); } catch (e) {}

  if (registro && registro.data === hoje && registro.concluido) {
    document.getElementById("painel-diario").hidden = false;
    document.getElementById("painel-diario").innerHTML =
      `Você já concluiu o desafio de hoje! 🏆<br><strong>Pontuação:</strong> ${registro.pontuacao} pontos. Um novo desafio chega amanhã.`;
    mostrarMensagem("Desafio diário concluído", `Sua pontuação de hoje foi ${registro.pontuacao}. Volte amanhã para jogar novamente.`, [
      { texto: "Voltar ao modo clássico", classe: "botao botao-secundario", acao: voltarModoClassico }
    ]);
    return;
  }

  try {
    const campanha = localStorage.getItem(CHAVE_SALVAMENTO);
    if (campanha) localStorage.setItem(CHAVE_BACKUP_CAMPANHA, campanha);
  } catch (e) {}

  modoDiario = true;
  chaveSalvamentoAtual = `nexo-diario-partida-${hoje}`;
  document.getElementById("painel-diario").hidden = false;
  document.getElementById("painel-diario").innerHTML =
    `<strong>Desafio Diário · ${hoje}</strong><br>O desafio de hoje é igual para todos os jogadores. Complete as palavras e tente bater seu próprio recorde!`;
  document.getElementById("botao-modo-diario").classList.add("modo-ativo");
  document.getElementById("botao-modo-normal").classList.remove("modo-ativo");

  const originalRandom = Math.random;
  Math.random = geradorComSemente(hashTexto("NEXO-DIARIO-" + hoje));
  try {
    vidas = VIDAS_INICIAIS;
    nivel = 1;
    pontuacao = 0;
    ofensiva = 0;
    jogoEncerrado = false;
    faseConcluida = false;
    recompensaUsada = false;
    const salvo = lerSalvamento();
    if (!salvo || !restaurarPartida(salvo)) iniciarFase();
  } finally {
    Math.random = originalRandom;
  }
  painelMensagem.textContent = "Desafio diário: as regras e palavras de hoje são fixas.";
}

function voltarModoClassico() {
  if (temporizadorFase) clearTimeout(temporizadorFase);
  temporizadorFase = null;
  modoDiario = false;
  chaveSalvamentoAtual = CHAVE_SALVAMENTO;
  document.getElementById("painel-diario").hidden = true;
  document.getElementById("botao-modo-diario").classList.remove("modo-ativo");
  document.getElementById("botao-modo-normal").classList.add("modo-ativo");

  let backup = null;
  try { backup = JSON.parse(localStorage.getItem(CHAVE_BACKUP_CAMPANHA) || "null"); } catch (e) {}
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
  else document.getElementById("painel-diario").hidden = true;
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

/* ---------- RESTAURAÇÃO ---------- */
function restaurarPartida(estado) {
  if (!estado) return false;

  let itens;
  if (modoDiario) {
    const desafio = encontrarDesafioDiario(estado.regraA, estado.regraB);
    if (!desafio) return false;
    itens = estado.palavrasDaFase.map(termo => {
      for (const grupo of Object.values(desafio.grupos)) {
        for (const [t, tags] of grupo) {
          if (t === termo) return { termo: t, tags };
        }
      }
      return null;
    }).filter(Boolean);
  } else {
    itens = estado.palavrasDaFase.map(termo =>
      bancoDePalavras.find(item => item.termo === termo)
    ).filter(Boolean);
  }
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
    mostrarMensagem("Fim de jogo! 💔", `Você chegou ao nível ${nivel} e fez ${pontuacao} pontos. Recompensa em modo de demonstração.`, botoes);
    painelMensagem.textContent = "Suas vidas acabaram. Estado recuperado do salvamento local.";
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

/* ---------- SERVICE WORKER ---------- */
if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      painelSalvamento.textContent = "Jogo disponível, mas não foi possível ativar o modo PWA/offline.";
    });
  });
}

/* ---------- INICIALIZAÇÃO ---------- */
const estadoSalvo = lerSalvamento();
if (!estadoSalvo || !restaurarPartida(estadoSalvo)) {
  iniciarFase();
}
