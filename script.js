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
  // ============ VERMELHO ============
  { termo: "TOMATE", tags: ["Vermelho", "Comida", "Vegetal", "Redondo"] },
  { termo: "MORANGO", tags: ["Vermelho", "Comida", "Fruta", "Doce", "Azedo"] },
  { termo: "CEREJA", tags: ["Vermelho", "Comida", "Fruta", "Doce", "Redondo"] },
  { termo: "PIMENTÃO", tags: ["Vermelho", "Comida", "Vegetal"] },
  { termo: "BETERRABA", tags: ["Vermelho", "Roxo", "Comida", "Vegetal", "Redondo"] },
  { termo: "SANGUE", tags: ["Vermelho", "Corpo", "Líquido"] },
  { termo: "ROSA", tags: ["Vermelho", "Rosa", "Planta", "É macio"] },
  { termo: "CORAÇÃO", tags: ["Vermelho", "Corpo"] },
  { termo: "MELANCIA", tags: ["Verde", "Vermelho", "Comida", "Fruta", "Doce", "Redondo"] },
  { termo: "FOGO", tags: ["Vermelho", "Amarelo", "Quente", "Faz barulho", "É brilhante"] },

  // ============ AZUL ============
  { termo: "CÉU", tags: ["Azul", "Branco"] },
  { termo: "MAR", tags: ["Azul", "Verde", "Vive na água"] },
  { termo: "OCEANO", tags: ["Azul", "Vive na água"] },
  { termo: "LAGO", tags: ["Azul", "Verde", "Vive na água"] },
  { termo: "MIRTILO", tags: ["Azul", "Roxo", "Comida", "Fruta", "Doce", "Azedo"] },
  { termo: "SAFIRA", tags: ["Azul", "É brilhante", "É duro"] },
  { termo: "ÁGUA", tags: ["Azul", "Bebida", "Líquido", "Transparente", "Fria"] },

  // ============ VERDE ============
  { termo: "ALFACE", tags: ["Verde", "Comida", "Vegetal"] },
  { termo: "BRÓCOLIS", tags: ["Verde", "Comida", "Vegetal"] },
  { termo: "ESPINAFRE", tags: ["Verde", "Comida", "Vegetal"] },
  { termo: "PEPINO", tags: ["Verde", "Comida", "Vegetal"] },
  { termo: "ABACATE", tags: ["Verde", "Comida", "Fruta"] },
  { termo: "UVA VERDE", tags: ["Verde", "Comida", "Fruta", "Doce", "Redondo"] },
  { termo: "GRAMA", tags: ["Verde", "Planta", "É macio"] },
  { termo: "FOLHA", tags: ["Verde", "Planta", "É macio"] },
  { termo: "SAMAMBAIA", tags: ["Verde", "Planta", "É macio"] },
  { termo: "CACTO", tags: ["Verde", "Planta", "É duro"] },
  { termo: "PALMEIRA", tags: ["Verde", "Planta"] },
  { termo: "PINHEIRO", tags: ["Verde", "Planta"] },
  { termo: "BAMBU", tags: ["Verde", "Planta", "É duro"] },
  { termo: "PERIQUITO", tags: ["Verde", "Animal", "Doméstico", "Voa", "Tem asas", "Tem penas", "Põe ovos"] },
  { termo: "SAPO", tags: ["Verde", "Animal", "Vive na água", "Põe ovos"] },
  { termo: "LAGARTIXA", tags: ["Verde", "Animal", "Tem escamas", "Põe ovos", "É noturno"] },

  // ============ AMARELO ============
  { termo: "BANANA", tags: ["Amarelo", "Comida", "Fruta", "Doce", "É macio"] },
  { termo: "MILHO", tags: ["Amarelo", "Comida", "Vegetal"] },
  { termo: "GIRASSOL", tags: ["Amarelo", "Planta"] },
  { termo: "SOL", tags: ["Amarelo", "Espaço", "Estrela", "Redondo", "É brilhante", "Quente"] },
  { termo: "CANÁRIO", tags: ["Amarelo", "Animal", "Doméstico", "Voa", "Tem asas", "Tem penas", "Põe ovos", "Faz barulho"] },
  { termo: "OVO", tags: ["Amarelo", "Branco", "Comida", "É frágil", "Redondo", "Põe ovos"] },
  { termo: "OURO", tags: ["Amarelo", "Metal", "É brilhante", "É duro"] },
  { termo: "QUEIJO", tags: ["Amarelo", "Branco", "Comida", "Salgado"] },
  { termo: "MOSTARDA", tags: ["Amarelo", "Comida", "Líquido", "Azedo"] },
  { termo: "PIPOCA", tags: ["Amarelo", "Branco", "Comida", "Salgado", "Faz barulho", "É macio"] },
  { termo: "ABACAXI", tags: ["Amarelo", "Comida", "Fruta", "Azedo", "Doce", "É duro"] },

  // ============ LARANJA ============
  { termo: "LARANJA", tags: ["Laranja", "Comida", "Fruta", "Redondo", "Azedo", "Doce", "Cítrico"] },
  { termo: "CENOURA", tags: ["Laranja", "Comida", "Vegetal"] },
  { termo: "MAMÃO", tags: ["Laranja", "Comida", "Fruta", "Doce", "É macio"] },
  { termo: "ABÓBORA", tags: ["Laranja", "Comida", "Vegetal", "Redondo", "É duro"] },
  { termo: "TANGERINA", tags: ["Laranja", "Comida", "Fruta", "Doce", "Azedo", "Cítrico", "Redondo"] },
  { termo: "PÊSSEGO", tags: ["Laranja", "Rosa", "Comida", "Fruta", "Doce", "É macio"] },
  { termo: "DAMASCO", tags: ["Laranja", "Comida", "Fruta", "Doce"] },
  { termo: "SALMÃO", tags: ["Laranja", "Rosa", "Comida", "Animal", "Vive na água", "Tem escamas"] },
  { termo: "TIGRE", tags: ["Laranja", "Preto", "Animal", "Selvagem", "Tem pelo", "Tem cauda", "Faz barulho"] },

  // ============ MARROM ============
  { termo: "CHOCOLATE", tags: ["Marrom", "Comida", "Doce"] },
  { termo: "CAFÉ", tags: ["Marrom", "Preto", "Comida", "Bebida", "Líquido", "Quente"] },
  { termo: "MADEIRA", tags: ["Marrom", "Material", "É duro"] },
  { termo: "TERRA", tags: ["Marrom", "É macia"] },
  { termo: "URSO", tags: ["Marrom", "Animal", "Selvagem", "Tem pelo", "Tem cauda", "Faz barulho"] },
  { termo: "MACACO", tags: ["Marrom", "Animal", "Selvagem", "Tem pelo", "Tem cauda", "Faz barulho"] },
  { termo: "COCO", tags: ["Marrom", "Comida", "Fruta", "Redondo", "É duro"] },
  { termo: "CANELA", tags: ["Marrom", "Comida"] },
  { termo: "PAPELÃO", tags: ["Marrom", "Material", "É duro"] },
  { termo: "TRONCO", tags: ["Marrom", "Planta", "É duro"] },
  { termo: "FEIJÃO", tags: ["Marrom", "Preto", "Comida"] },
  { termo: "CASTANHA", tags: ["Marrom", "Comida", "É dura"] },

  // ============ ROSA ============
  { termo: "FLAMINGO", tags: ["Rosa", "Animal", "Voa", "Tem asas", "Tem penas", "Põe ovos", "Vive na água"] },
  { termo: "PORCO", tags: ["Rosa", "Animal", "Doméstico", "Faz barulho"] },
  { termo: "CHICLETE", tags: ["Rosa", "Comida", "Doce", "É macio"] },
  { termo: "ALGODÃO-DOCE", tags: ["Rosa", "Branco", "Comida", "Doce", "É macio"] },

  // ============ ROXO ============
  { termo: "UVA", tags: ["Roxo", "Comida", "Fruta", "Doce", "Redondo", "É macia"] },
  { termo: "BERINJELA", tags: ["Roxo", "Comida", "Vegetal"] },
  { termo: "AMORA", tags: ["Roxo", "Preto", "Comida", "Fruta", "Doce", "Azedo", "É macia"] },
  { termo: "LAVANDA", tags: ["Roxo", "Planta", "É macia"] },
  { termo: "VIOLETA", tags: ["Roxo", "Planta"] },
  { termo: "AMETISTA", tags: ["Roxo", "É brilhante", "É duro"] },
  { termo: "REPOLHO ROXO", tags: ["Roxo", "Comida", "Vegetal"] },

  // ============ BRANCO ============
  { termo: "NEVE", tags: ["Branco", "Frio", "É macia"] },
  { termo: "LEITE", tags: ["Branco", "Comida", "Bebida", "Líquido"] },
  { termo: "NUVEM", tags: ["Branco", "Cinza", "É macia"] },
  { termo: "AÇÚCAR", tags: ["Branco", "Comida", "Doce"] },
  { termo: "SAL", tags: ["Branco", "Comida", "Salgado"] },
  { termo: "CISNE", tags: ["Branco", "Animal", "Voa", "Tem asas", "Tem penas", "Põe ovos", "Vive na água"] },
  { termo: "GESSO", tags: ["Branco", "É duro"] },
  { termo: "PORCELANA", tags: ["Branco", "É frágil", "É dura"] },
  { termo: "LUA", tags: ["Branco", "Espaço", "Redondo", "É brilhante"] },
  { termo: "PAPEL", tags: ["Branco", "Material", "Escolar", "É frágil"] },
  { termo: "LINHO", tags: ["Branco", "Tecido", "Material"] },

  // ============ PRETO ============
  { termo: "CARVÃO", tags: ["Preto", "É duro"] },
  { termo: "PANTERA", tags: ["Preto", "Animal", "Selvagem", "Tem pelo", "Tem cauda", "É noturno"] },
  { termo: "CORVO", tags: ["Preto", "Animal", "Selvagem", "Voa", "Tem asas", "Tem penas", "Põe ovos", "Faz barulho"] },
  { termo: "PNEU", tags: ["Preto", "Redondo", "Tem rodas", "É duro"] },
  { termo: "TINTA", tags: ["Preto", "Líquido"] },
  { termo: "NOITE", tags: ["Preto", "É noturno"] },

  // ============ CINZA ============
  { termo: "ELEFANTE", tags: ["Cinza", "Animal", "Selvagem", "Tem pelo", "Tem cauda", "Faz barulho"] },
  { termo: "RATO", tags: ["Cinza", "Marrom", "Animal", "Doméstico", "Tem pelo", "Tem cauda", "É noturno"] },
  { termo: "CONCRETO", tags: ["Cinza", "É duro"] },
  { termo: "CIMENTO", tags: ["Cinza", "É duro"] },
  { termo: "CHUMBO", tags: ["Cinza", "Metal", "É duro"] },
  { termo: "POMBO", tags: ["Cinza", "Animal", "Doméstico", "Voa", "Tem asas", "Tem penas", "Põe ovos", "Faz barulho"] },

  // ============ FRUTAS E COMIDAS (resto) ============
  { termo: "MAÇÃ", tags: ["Vermelho", "Verde", "Comida", "Fruta", "Doce", "Redondo", "É dura"] },
  { termo: "LIMÃO", tags: ["Verde", "Amarelo", "Comida", "Fruta", "Azedo", "Cítrico", "Redondo"] },
  { termo: "KIWI", tags: ["Verde", "Marrom", "Comida", "Fruta", "Azedo", "Doce", "É macio"] },
  { termo: "PERA", tags: ["Verde", "Comida", "Fruta", "Doce", "É macia"] },
  { termo: "MANGA", tags: ["Laranja", "Amarelo", "Comida", "Fruta", "Doce", "É macia"] },
  { termo: "GOIABA", tags: ["Vermelho", "Verde", "Comida", "Fruta", "Doce"] },
  { termo: "MARACUJÁ", tags: ["Roxo", "Amarelo", "Comida", "Fruta", "Azedo"] },
  { termo: "AMEIXA", tags: ["Roxo", "Comida", "Fruta", "Doce", "É macia"] },
  { termo: "PITANGA", tags: ["Vermelho", "Comida", "Fruta", "Doce"] },
  { termo: "ACEROLA", tags: ["Vermelho", "Comida", "Fruta", "Azedo", "Cítrico"] },
  { termo: "FRAMBOESA", tags: ["Vermelho", "Comida", "Fruta", "Doce", "Azedo", "É macia"] },
  { termo: "CAQUI", tags: ["Laranja", "Comida", "Fruta", "Doce", "É macio"] },
  { termo: "FIGO", tags: ["Roxo", "Comida", "Fruta", "Doce"] },
  { termo: "ROMÃ", tags: ["Vermelho", "Comida", "Fruta", "Doce"] },
  { termo: "PÃO", tags: ["Comida", "É macio"] },
  { termo: "BOLO", tags: ["Comida", "Doce", "É macio"] },
  { termo: "MEL", tags: ["Amarelo", "Comida", "Doce", "Líquido"] },
  { termo: "ARROZ", tags: ["Branco", "Comida"] },
  { termo: "MACARRÃO", tags: ["Amarelo", "Comida"] },
  { termo: "PIZZA", tags: ["Comida", "Redondo"] },
  { termo: "HAMBÚRGUER", tags: ["Comida", "Redondo", "É macio"] },
  { termo: "SOPA", tags: ["Comida", "Quente", "Líquido", "Salgado"] },
  { termo: "SORVETE", tags: ["Comida", "Doce", "Frio", "É macio"] },
  { termo: "BISCOITO", tags: ["Comida", "Doce", "É duro"] },
  { termo: "PUDIM", tags: ["Comida", "Doce", "É macio"] },
  { termo: "IOGURTE", tags: ["Branco", "Comida", "Líquido", "Azedo"] },
  { termo: "BATATA", tags: ["Marrom", "Amarelo", "Comida", "Vegetal", "Redondo", "É dura"] },
  { termo: "CEBOLA", tags: ["Branco", "Roxo", "Comida", "Vegetal", "Redondo", "É dura"] },
  { termo: "ALHO", tags: ["Branco", "Comida", "Vegetal"] },
  { termo: "VINAGRE", tags: ["Comida", "Líquido", "Azedo"] },
  { termo: "AZEITE", tags: ["Amarelo", "Verde", "Comida", "Líquido"] },

  // ============ BEBIDAS ============
  { termo: "CHÁ", tags: ["Comida", "Bebida", "Líquido", "Quente"] },
  { termo: "SUCO", tags: ["Comida", "Bebida", "Líquido", "Doce"] },
  { termo: "VINHO", tags: ["Roxo", "Vermelho", "Bebida", "Líquido"] },
  { termo: "CERVEJA", tags: ["Amarelo", "Bebida", "Líquido", "Fria"] },
  { termo: "CAIPIRINHA", tags: ["Verde", "Bebida", "Líquido", "Fria"] },
  { termo: "REFRIGERANTE", tags: ["Preto", "Bebida", "Líquido", "Doce"] },
  { termo: "ÁGUA DE COCO", tags: ["Branco", "Bebida", "Líquido"] },

  // ============ VEÍCULOS ============
  { termo: "CARRO", tags: ["Veículo", "Tem rodas", "Usa pilha"] },
  { termo: "BICICLETA", tags: ["Veículo", "Tem rodas", "Metal"] },
  { termo: "MOTO", tags: ["Veículo", "Tem rodas", "Faz barulho", "Usa pilha"] },
  { termo: "ÔNIBUS", tags: ["Veículo", "Tem rodas", "Faz barulho"] },
  { termo: "TREM", tags: ["Veículo", "Tem rodas", "Faz barulho"] },
  { termo: "METRÔ", tags: ["Veículo", "Tem rodas", "Faz barulho"] },
  { termo: "CAMINHÃO", tags: ["Veículo", "Tem rodas", "Faz barulho"] },
  { termo: "VAN", tags: ["Veículo", "Tem rodas"] },
  { termo: "TRATOR", tags: ["Veículo", "Tem rodas", "Faz barulho"] },
  { termo: "PATINETE", tags: ["Veículo", "Tem rodas", "Metal"] },
  { termo: "SKATE", tags: ["Veículo", "Tem rodas"] },
  { termo: "AVIÃO", tags: ["Veículo", "Voa", "Tem asas", "Faz barulho", "Metal"] },
  { termo: "HELICÓPTERO", tags: ["Veículo", "Voa", "Faz barulho"] },
  { termo: "FOGUETE", tags: ["Veículo", "Voa", "Espaço", "Faz barulho"] },
  { termo: "BALÃO", tags: ["Veículo", "Voa", "Redondo", "É frágil"] },
  { termo: "BARCO", tags: ["Veículo", "Vive na água"] },
  { termo: "SUBMARINO", tags: ["Veículo", "Vive na água"] },
  { termo: "MALA COM RODINHAS", tags: ["Tem rodas", "Objeto"] },
  { termo: "CADEIRA DE ESCRITÓRIO", tags: ["Tem rodas", "Doméstico", "É dura"] },
  { termo: "RODA", tags: ["Redondo", "Tem rodas", "É duro"] },

  // ============ ANIMAIS — MAMÍFEROS ============
  { termo: "CACHORRO", tags: ["Animal", "Doméstico", "Tem pelo", "Tem cauda", "Faz barulho"] },
  { termo: "GATO", tags: ["Animal", "Doméstico", "Tem pelo", "Tem cauda", "Faz barulho", "É noturno"] },
  { termo: "LEÃO", tags: ["Animal", "Selvagem", "Tem pelo", "Tem cauda", "Faz barulho"] },
  { termo: "LOBO", tags: ["Animal", "Selvagem", "Tem pelo", "Tem cauda", "Faz barulho", "É noturno"] },
  { termo: "RAPOSA", tags: ["Animal", "Selvagem", "Tem pelo", "Tem cauda"] },
  { termo: "CAVALO", tags: ["Animal", "Doméstico", "Tem pelo", "Tem cauda", "Faz barulho"] },
  { termo: "COELHO", tags: ["Animal", "Doméstico", "Tem pelo", "É macio", "Tem cauda"] },
  { termo: "HAMSTER", tags: ["Animal", "Doméstico", "Tem pelo", "É macio", "Tem cauda", "É noturno"] },
  { termo: "GIRAFA", tags: ["Animal", "Selvagem", "Tem pelo", "Tem cauda"] },
  { termo: "ZEBRA", tags: ["Animal", "Selvagem", "Tem pelo", "Tem cauda"] },
  { termo: "VACA", tags: ["Animal", "Doméstico", "Tem pelo", "Tem cauda", "Faz barulho"] },
  { termo: "ESQUILO", tags: ["Animal", "Selvagem", "Tem pelo", "Tem cauda"] },
  { termo: "BALEIA", tags: ["Animal", "Vive na água", "Faz barulho"] },
  { termo: "GOLFINHO", tags: ["Animal", "Vive na água", "Faz barulho"] },
  { termo: "MORCEGO", tags: ["Animal", "Voa", "Tem pelo", "É noturno"] },
  { termo: "FOCA", tags: ["Animal", "Vive na água", "Tem pelo", "Fria"] },
  { termo: "LHAMA", tags: ["Animal", "Doméstico", "Tem pelo"] },
  { termo: "CAPIVARA", tags: ["Animal", "Selvagem", "Tem pelo", "Vive na água"] },

  // ============ ANIMAIS — AVES ============
  { termo: "GALINHA", tags: ["Animal", "Doméstico", "Tem asas", "Tem penas", "Põe ovos", "Faz barulho"] },
  { termo: "PATO", tags: ["Animal", "Doméstico", "Voa", "Tem asas", "Tem penas", "Põe ovos", "Vive na água", "Faz barulho"] },
  { termo: "ÁGUIA", tags: ["Animal", "Selvagem", "Voa", "Tem asas", "Tem penas", "Põe ovos"] },
  { termo: "PINGUIM", tags: ["Animal", "Tem asas", "Tem penas", "Põe ovos", "Vive na água", "Frio"] },
  { termo: "AVESTRUZ", tags: ["Animal", "Selvagem", "Tem asas", "Tem penas", "Põe ovos"] },
  { termo: "PAPAGAIO", tags: ["Animal", "Doméstico", "Voa", "Tem asas", "Tem penas", "Põe ovos", "Faz barulho"] },
  { termo: "PAVÃO", tags: ["Animal", "Doméstico", "Tem asas", "Tem penas", "Põe ovos", "Tem cauda", "Faz barulho"] },
  { termo: "CORUJA", tags: ["Animal", "Selvagem", "Voa", "Tem asas", "Tem penas", "Põe ovos", "É noturna"] },
  { termo: "FALCÃO", tags: ["Animal", "Selvagem", "Voa", "Tem asas", "Tem penas", "Põe ovos"] },
  { termo: "TUCANO", tags: ["Animal", "Selvagem", "Voa", "Tem asas", "Tem penas", "Põe ovos"] },
  { termo: "ARARA", tags: ["Animal", "Selvagem", "Voa", "Tem asas", "Tem penas", "Põe ovos", "Faz barulho"] },
  { termo: "BEIJA-FLOR", tags: ["Animal", "Selvagem", "Voa", "Tem asas", "Tem penas", "Põe ovos"] },

  // ============ ANIMAIS — RÉPTEIS, PEIXES, INSETOS ============
  { termo: "COBRA", tags: ["Animal", "Selvagem", "Tem escamas", "Põe ovos"] },
  { termo: "JACARÉ", tags: ["Animal", "Selvagem", "Vive na água", "Tem escamas", "Põe ovos", "Tem cauda"] },
  { termo: "CROCODILO", tags: ["Animal", "Selvagem", "Vive na água", "Tem escamas", "Põe ovos"] },
  { termo: "LAGARTO", tags: ["Animal", "Selvagem", "Tem escamas", "Põe ovos", "Tem cauda"] },
  { termo: "IGUANA", tags: ["Animal", "Selvagem", "Tem escamas", "Põe ovos", "Tem cauda"] },
  { termo: "TARTARUGA", tags: ["Animal", "Vive na água", "Tem escamas", "Põe ovos", "É duro"] },
  { termo: "PEIXE", tags: ["Animal", "Vive na água", "Tem escamas", "Põe ovos"] },
  { termo: "TUBARÃO", tags: ["Animal", "Vive na água", "Tem escamas", "Faz barulho"] },
  { termo: "POLVO", tags: ["Animal", "Vive na água"] },
  { termo: "CARANGUEJO", tags: ["Animal", "Vive na água", "É duro"] },
  { termo: "CAMARÃO", tags: ["Animal", "Vive na água", "É macio"] },
  { termo: "ÁGUA-VIVA", tags: ["Animal", "Vive na água", "É macia"] },
  { termo: "ESTRELA-DO-MAR", tags: ["Animal", "Vive na água", "É dura"] },
  { termo: "CAVALO-MARINHO", tags: ["Animal", "Vive na água", "Tem escamas"] },
  { termo: "FORMIGA", tags: ["Animal", "Inseto", "Põe ovos"] },
  { termo: "ABELHA", tags: ["Animal", "Inseto", "Voa", "Põe ovos", "Faz barulho"] },
  { termo: "MOSQUITO", tags: ["Animal", "Inseto", "Voa", "Põe ovos", "Faz barulho"] },
  { termo: "ARANHA", tags: ["Animal", "Inseto", "É noturna"] },
  { termo: "BORBOLETA", tags: ["Animal", "Inseto", "Voa", "Põe ovos"] },
  { termo: "BARATA", tags: ["Animal", "Inseto", "É noturna"] },
  { termo: "JOANINHA", tags: ["Animal", "Inseto", "Voa", "Põe ovos", "Redondo"] },
  { termo: "CIGARRA", tags: ["Animal", "Inseto", "Voa", "Faz barulho"] },

  // ============ DOMÉSTICO / OBJETOS ============
  { termo: "MESA", tags: ["Doméstico", "É dura", "Marrom"] },
  { termo: "SOFÁ", tags: ["Doméstico", "É macio"] },
  { termo: "CAMA", tags: ["Doméstico", "É macia"] },
  { termo: "LÂMPADA", tags: ["Doméstico", "É brilhante", "Usa pilha", "É frágil"] },
  { termo: "ESPELHO", tags: ["Doméstico", "É frágil", "É brilhante", "É duro"] },
  { termo: "TRAVESSEIRO", tags: ["Doméstico", "É macio", "Branco"] },
  { termo: "COLCHÃO", tags: ["Doméstico", "É macio", "Branco"] },
  { termo: "TOALHA", tags: ["Doméstico", "É macia", "Tecido"] },
  { termo: "ALMOFADA", tags: ["Doméstico", "É macia", "Tecido"] },
  { termo: "COBERTOR", tags: ["Doméstico", "É macio", "Tecido"] },
  { termo: "FACA", tags: ["Doméstico", "Metal", "É dura", "Usado para cozinhar"] },
  { termo: "CHAVE", tags: ["Doméstico", "Metal", "É dura"] },
  { termo: "PRATO", tags: ["Doméstico", "Redondo", "É frágil", "É duro"] },
  { termo: "ESCOVA", tags: ["Doméstico", "Usado para limpeza"] },
  { termo: "GUARDA-CHUVA", tags: ["Doméstico", "Objeto", "Tecido"] },
  { termo: "VASSOURA", tags: ["Doméstico", "Usado para limpeza"] },
  { termo: "RODO", tags: ["Doméstico", "Usado para limpeza"] },
  { termo: "ESPONJA", tags: ["Doméstico", "Usado para limpeza", "É macia"] },
  { termo: "SABÃO", tags: ["Doméstico", "Usado para limpeza"] },
  { termo: "DETERGENTE", tags: ["Doméstico", "Usado para limpeza", "Líquido"] },
  { termo: "ASPIRADOR", tags: ["Doméstico", "Eletrônico", "Usa pilha", "Faz barulho", "Usado para limpeza"] },
  { termo: "PANELA", tags: ["Doméstico", "Metal", "Usado para cozinhar", "É dura"] },
  { termo: "FRIGIDEIRA", tags: ["Doméstico", "Metal", "Usado para cozinhar", "É dura"] },
  { termo: "FORNO", tags: ["Doméstico", "Eletrônico", "Usado para cozinhar", "Quente"] },
  { termo: "MICRO-ONDAS", tags: ["Doméstico", "Eletrônico", "Usado para cozinhar", "Tem botão", "Quente"] },
  { termo: "LIQUIDIFICADOR", tags: ["Doméstico", "Eletrônico", "Usado para cozinhar", "Faz barulho"] },
  { termo: "BATEDEIRA", tags: ["Doméstico", "Eletrônico", "Usado para cozinhar", "Faz barulho"] },
  { termo: "COLHER DE PAU", tags: ["Doméstico", "Usado para cozinhar", "É dura"] },
  { termo: "GARFO", tags: ["Doméstico", "Metal", "Usado para cozinhar", "É duro"] },
  { termo: "FOGÃO", tags: ["Doméstico", "Eletrônico", "Usado para cozinhar", "Tem botão", "Quente"] },
  { termo: "GELADEIRA", tags: ["Doméstico", "Eletrônico", "Tem botão", "Fria", "Faz barulho"] },

  // ============ ESCOLAR ============
  { termo: "CANETA", tags: ["Escolar"] },
  { termo: "CADERNO", tags: ["Escolar"] },
  { termo: "LIVRO", tags: ["Escolar"] },
  { termo: "LÁPIS", tags: ["Escolar"] },
  { termo: "BORRACHA", tags: ["Escolar", "É macia"] },
  { termo: "RÉGUA", tags: ["Escolar", "É dura"] },
  { termo: "APONTADOR", tags: ["Escolar", "Metal"] },
  { termo: "MOCHILA", tags: ["Escolar", "Objeto", "Tecido"] },
  { termo: "TESOURA", tags: ["Escolar", "Metal", "É dura"] },
  { termo: "QUADRO-NEGRO", tags: ["Escolar", "É duro"] },
  { termo: "GIZ", tags: ["Escolar", "É frágil", "Branco"] },

  // ============ INSTRUMENTOS ============
  { termo: "VIOLÃO", tags: ["Instrumento", "Madeira"] },
  { termo: "PIANO", tags: ["Instrumento", "É duro"] },
  { termo: "FLAUTA", tags: ["Instrumento"] },
  { termo: "TAMBOR", tags: ["Instrumento", "Faz barulho"] },
  { termo: "GUITARRA", tags: ["Instrumento", "Madeira"] },
  { termo: "VIOLINO", tags: ["Instrumento", "Madeira"] },
  { termo: "VIOLONCELO", tags: ["Instrumento", "Madeira"] },
  { termo: "HARPA", tags: ["Instrumento"] },
  { termo: "SAXOFONE", tags: ["Instrumento", "Metal", "Faz barulho"] },
  { termo: "TROMPETE", tags: ["Instrumento", "Metal", "Faz barulho", "É brilhante"] },
  { termo: "UKULELE", tags: ["Instrumento", "Madeira"] },

  // ============ TECNOLOGIA ============
  { termo: "COMPUTADOR", tags: ["Tecnologia", "Eletrônico", "Tem tela", "Usa pilha"] },
  { termo: "CELULAR", tags: ["Tecnologia", "Eletrônico", "Tem tela", "Usa pilha"] },
  { termo: "TABLET", tags: ["Tecnologia", "Eletrônico", "Tem tela", "Usa pilha"] },
  { termo: "NOTEBOOK", tags: ["Tecnologia", "Eletrônico", "Tem tela", "Usa pilha"] },
  { termo: "TELEVISÃO", tags: ["Tecnologia", "Eletrônico", "Tem tela", "Tem botão", "Faz barulho"] },
  { termo: "MONITOR", tags: ["Tecnologia", "Eletrônico", "Tem tela"] },
  { termo: "VÍDEO-GAME", tags: ["Tecnologia", "Eletrônico", "Tem tela", "Tem botão"] },
  { termo: "SMARTWATCH", tags: ["Tecnologia", "Eletrônico", "Tem tela", "Usa pilha"] },
  { termo: "GPS", tags: ["Tecnologia", "Eletrônico", "Tem tela", "Usa pilha"] },
  { termo: "CALCULADORA", tags: ["Eletrônico", "Tem tela", "Usa pilha", "Tem botão"] },
  { termo: "RÁDIO", tags: ["Eletrônico", "Usa pilha", "Tem botão", "Faz barulho"] },
  { termo: "CÂMERA", tags: ["Eletrônico", "Usa pilha", "Tem tela", "Tem botão", "É frágil"] },
  { termo: "FONE DE OUVIDO", tags: ["Eletrônico", "Usa pilha", "É macio"] },
  { termo: "CONTROLE REMOTO", tags: ["Eletrônico", "Usa pilha", "Tem botão"] },
  { termo: "LANTERNA", tags: ["Eletrônico", "Usa pilha", "É brilhante"] },
  { termo: "DESPERTADOR", tags: ["Eletrônico", "Usa pilha", "Faz barulho", "Tem tela"] },
  { termo: "ELEVADOR", tags: ["Tem botão", "Faz barulho"] },
  { termo: "ESCADA ROLANTE", tags: ["Faz barulho", "Tem botão"] },
  { termo: "MÁQUINA DE LAVAR", tags: ["Doméstico", "Eletrônico", "Tem botão", "Faz barulho", "Usa pilha"] },
  { termo: "RELÓGIO", tags: ["Objeto", "Redondo", "Tem tela", "É frágil"] },
  { termo: "ÓCULOS", tags: ["Objeto", "É frágil", "Transparente"] },

  // ============ MATERIAIS ============
  { termo: "VIDRO", tags: ["Material", "É duro", "Transparente", "É frágil"] },
  { termo: "AÇO", tags: ["Metal", "É duro", "É brilhante"] },
  { termo: "FERRO", tags: ["Metal", "É duro", "Marrom"] },
  { termo: "PRATA", tags: ["Metal", "É duro", "É brilhante"] },
  { termo: "COBRE", tags: ["Metal", "É duro", "Laranja"] },
  { termo: "ALGODÃO", tags: ["Material", "Tecido", "É macio", "Branco"] },
  { termo: "LÃ", tags: ["Material", "Tecido", "É macia", "Branco"] },
  { termo: "SEDA", tags: ["Material", "Tecido", "É macia"] },
  { termo: "LINHO (TECIDO)", tags: ["Material", "Tecido", "É macio"] },
  { termo: "JEANS", tags: ["Material", "Tecido", "É macio"] },
  { termo: "VELUDO", tags: ["Material", "Tecido", "É macio", "Roxo"] },
  { termo: "PLÁSTICO", tags: ["Material", "É duro"] },
  { termo: "DIAMANTE", tags: ["É duro", "Transparente", "É brilhante"] },
  { termo: "PEDRA", tags: ["É dura", "Cinza"] },
  { termo: "ROCHA", tags: ["É dura", "Cinza"] },

  // ============ PLANTAS (fora das cores) ============
  { termo: "MARGARIDA", tags: ["Planta", "Branco", "É macia"] },
  { termo: "TULIPA", tags: ["Planta"] },
  { termo: "ORQUÍDEA", tags: ["Planta"] },
  { termo: "JASMIM", tags: ["Planta", "Branco"] },
  { termo: "BROMÉLIA", tags: ["Planta"] },

  // ============ CORPO ============
  { termo: "PULMÃO", tags: ["Corpo", "É macio"] },
  { termo: "CÉREBRO", tags: ["Corpo", "É macio"] },
  { termo: "OLHO", tags: ["Corpo", "Redondo", "É brilhante"] },
  { termo: "MÃO", tags: ["Corpo"] },
  { termo: "PÉ", tags: ["Corpo"] },
  { termo: "OSSO", tags: ["Corpo", "É duro", "Branco"] },
  { termo: "ESTÔMAGO", tags: ["Corpo", "É macio"] },
  { termo: "FÍGADO", tags: ["Corpo", "É macio"] },
  { termo: "PELE", tags: ["Corpo", "É macia"] },
  { termo: "DENTE", tags: ["Corpo", "É duro", "Branco"] },
  { termo: "LÍNGUA", tags: ["Corpo", "É macia", "Rosa"] },
  { termo: "NARIZ", tags: ["Corpo"] },
  { termo: "ORELHA", tags: ["Corpo", "É macia"] },

  // ============ ESPAÇO ============
  { termo: "MERCÚRIO", tags: ["Espaço", "Planeta"] },
  { termo: "VÊNUS", tags: ["Espaço", "Planeta"] },
  { termo: "TERRA (PLANETA)", tags: ["Espaço", "Planeta", "Redondo"] },
  { termo: "MARTE", tags: ["Espaço", "Planeta", "Vermelho", "Redondo"] },
  { termo: "JÚPITER", tags: ["Espaço", "Planeta", "Redondo"] },
  { termo: "SATURNO", tags: ["Espaço", "Planeta", "Redondo"] },
  { termo: "URANO", tags: ["Espaço", "Planeta", "Azul"] },
  { termo: "NETUNO", tags: ["Espaço", "Planeta", "Azul"] },
  { termo: "ESTRELA", tags: ["Espaço", "Estrela", "É brilhante"] },
  { termo: "COMETA", tags: ["Espaço", "É brilhante"] },
  { termo: "ASTEROIDE", tags: ["Espaço", "É duro"] },

  // ============ PROFISSÕES ============
  { termo: "MÉDICO", tags: ["Profissão"] },
  { termo: "PROFESSOR", tags: ["Profissão", "Escolar"] },
  { termo: "COZINHEIRO", tags: ["Profissão", "Comida", "Usado para cozinhar"] },
  { termo: "MOTORISTA", tags: ["Profissão", "Veículo"] },
  { termo: "BOMBEIRO", tags: ["Profissão"] },
  { termo: "POLICIAL", tags: ["Profissão"] },
  { termo: "DENTISTA", tags: ["Profissão", "Corpo"] },
  { termo: "ARQUITETO", tags: ["Profissão"] },
  { termo: "ENGENHEIRO", tags: ["Profissão"] },
  { termo: "JORNALISTA", tags: ["Profissão"] },
  { termo: "PILOTO", tags: ["Profissão", "Veículo"] },

  // ============ ESPORTES E JOGOS ============
  { termo: "FUTEBOL", tags: ["Esporte", "Redondo"] },
  { termo: "BASQUETE", tags: ["Esporte", "Redondo"] },
  { termo: "VÔLEI", tags: ["Esporte", "Redondo"] },
  { termo: "TÊNIS (ESPORTE)", tags: ["Esporte", "Redondo"] },
  { termo: "NATAÇÃO", tags: ["Esporte", "Vive na água"] },
  { termo: "CORRIDA", tags: ["Esporte"] },
  { termo: "CICLISMO", tags: ["Esporte", "Veículo"] },
  { termo: "SURFE", tags: ["Esporte", "Vive na água"] },
  { termo: "XADREZ", tags: ["Jogo"] },
  { termo: "DOMINÓ", tags: ["Jogo"] },
  { termo: "BARALHO", tags: ["Jogo"] },

  // ============ FORMAS ============
  { termo: "CÍRCULO", tags: ["Forma", "Redondo"] },
  { termo: "QUADRADO", tags: ["Forma"] },
  { termo: "TRIÂNGULO", tags: ["Forma"] },
  { termo: "RETÂNGULO", tags: ["Forma"] },
  { termo: "CUBO", tags: ["Forma", "É duro"] },
  { termo: "ESFERA", tags: ["Forma", "Redondo"] }
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
function gerarFaseClassica() {
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

function gerarFase() {
  if (modoDiario) return gerarFaseDiaria();
  return gerarFaseClassica();
}

function gerarFaseDiaria() {
  const hoje = dataLocalISO();
  const originalRandom = Math.random;
  const originalNivel = nivel;
  Math.random = geradorComSemente(hashTexto("NEXO-DIARIO-" + hoje));
  nivel = 1; // diário sempre com 8 palavras (2 por região)
  try {
    return gerarFaseClassica();
  } finally {
    Math.random = originalRandom;
    nivel = originalNivel;
  }
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
    `<strong>Desafio Diário · ${hoje}</strong><br>
     Um novo conjunto de regras é gerado automaticamente todo dia — igual para todos os jogadores. Volte amanhã!`;
  document.getElementById("botao-modo-diario").classList.add("modo-ativo");
  document.getElementById("botao-modo-normal").classList.remove("modo-ativo");

  vidas = VIDAS_INICIAIS;
  nivel = 1;
  pontuacao = 0;
  ofensiva = 0;
  jogoEncerrado = false;
  faseConcluida = false;
  recompensaUsada = false;

  const salvo = lerSalvamento();
  if (!salvo || !restaurarPartida(salvo)) iniciarFase();
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

  const itens = estado.palavrasDaFase.map(termo =>
    bancoDePalavras.find(item => item.termo === termo)
  ).filter(Boolean);
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
