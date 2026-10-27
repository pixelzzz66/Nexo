/* =========================================
   NEXO - JOGO + SALVAMENTO LOCAL + PWA
   ========================================= */

const CHAVE_SALVAMENTO = "nexo-progresso-v1";
let chaveSalvamentoAtual = CHAVE_SALVAMENTO;
let modoDiario = false;
let modoHardcore = false;
const CHAVE_DIARIO = "nexo-diario-v1";
const CHAVE_HARDCORE = "nexo-hardcore-v1";
const CHAVE_BACKUP_CAMPANHA = "nexo-campanha-backup-v1";
const CHAVE_STREAK = "nexo-streak-v1";
const CHAVE_ONBOARDING = "nexo-onboarding-v1";
const VIDAS_INICIAIS = 3;
const VIDAS_RECOMPENSA = 3;

/* ---------- CATÁLOGO CLÁSSICO ---------- */
const bancoDePalavras = [
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
  { termo: "CÉU", tags: ["Azul", "Branco"] },
  { termo: "MAR", tags: ["Azul", "Verde", "Vive na água"] },
  { termo: "OCEANO", tags: ["Azul", "Vive na água"] },
  { termo: "LAGO", tags: ["Azul", "Verde", "Vive na água"] },
  { termo: "MIRTILO", tags: ["Azul", "Roxo", "Comida", "Fruta", "Doce", "Azedo"] },
  { termo: "SAFIRA", tags: ["Azul", "É brilhante", "É duro"] },
  { termo: "ÁGUA", tags: ["Azul", "Bebida", "Líquido", "Transparente", "Fria"] },
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
  { termo: "LARANJA", tags: ["Laranja", "Comida", "Fruta", "Redondo", "Azedo", "Doce", "Cítrico"] },
  { termo: "CENOURA", tags: ["Laranja", "Comida", "Vegetal"] },
  { termo: "MAMÃO", tags: ["Laranja", "Comida", "Fruta", "Doce", "É macio"] },
  { termo: "ABÓBORA", tags: ["Laranja", "Comida", "Vegetal", "Redondo", "É duro"] },
  { termo: "TANGERINA", tags: ["Laranja", "Comida", "Fruta", "Doce", "Azedo", "Cítrico", "Redondo"] },
  { termo: "PÊSSEGO", tags: ["Laranja", "Rosa", "Comida", "Fruta", "Doce", "É macio"] },
  { termo: "DAMASCO", tags: ["Laranja", "Comida", "Fruta", "Doce"] },
  { termo: "SALMÃO", tags: ["Laranja", "Rosa", "Comida", "Animal", "Vive na água", "Tem escamas"] },
  { termo: "TIGRE", tags: ["Laranja", "Preto", "Animal", "Selvagem", "Tem pelo", "Tem cauda", "Faz barulho"] },
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
  { termo: "FLAMINGO", tags: ["Rosa", "Animal", "Voa", "Tem asas", "Tem penas", "Põe ovos", "Vive na água"] },
  { termo: "PORCO", tags: ["Rosa", "Animal", "Doméstico", "Faz barulho"] },
  { termo: "CHICLETE", tags: ["Rosa", "Comida", "Doce", "É macio"] },
  { termo: "ALGODÃO-DOCE", tags: ["Rosa", "Branco", "Comida", "Doce", "É macio"] },
  { termo: "UVA", tags: ["Roxo", "Comida", "Fruta", "Doce", "Redondo", "É macia"] },
  { termo: "BERINJELA", tags: ["Roxo", "Comida", "Vegetal"] },
  { termo: "AMORA", tags: ["Roxo", "Preto", "Comida", "Fruta", "Doce", "Azedo", "É macia"] },
  { termo: "LAVANDA", tags: ["Roxo", "Planta", "É macia"] },
  { termo: "VIOLETA", tags: ["Roxo", "Planta"] },
  { termo: "AMETISTA", tags: ["Roxo", "É brilhante", "É duro"] },
  { termo: "REPOLHO ROXO", tags: ["Roxo", "Comida", "Vegetal"] },
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
  { termo: "CARVÃO", tags: ["Preto", "É duro"] },
  { termo: "PANTERA", tags: ["Preto", "Animal", "Selvagem", "Tem pelo", "Tem cauda", "É noturno"] },
  { termo: "CORVO", tags: ["Preto", "Animal", "Selvagem", "Voa", "Tem asas", "Tem penas", "Põe ovos", "Faz barulho"] },
  { termo: "PNEU", tags: ["Preto", "Redondo", "Tem rodas", "É duro"] },
  { termo: "TINTA", tags: ["Preto", "Líquido"] },
  { termo: "NOITE", tags: ["Preto", "É noturno"] },
  { termo: "ELEFANTE", tags: ["Cinza", "Animal", "Selvagem", "Tem pelo", "Tem cauda", "Faz barulho"] },
  { termo: "RATO", tags: ["Cinza", "Marrom", "Animal", "Doméstico", "Tem pelo", "Tem cauda", "É noturno"] },
  { termo: "CONCRETO", tags: ["Cinza", "É duro"] },
  { termo: "CIMENTO", tags: ["Cinza", "É duro"] },
  { termo: "CHUMBO", tags: ["Cinza", "Metal", "É duro"] },
  { termo: "POMBO", tags: ["Cinza", "Animal", "Doméstico", "Voa", "Tem asas", "Tem penas", "Põe ovos", "Faz barulho"] },
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
  { termo: "CHÁ", tags: ["Comida", "Bebida", "Líquido", "Quente"] },
  { termo: "SUCO", tags: ["Comida", "Bebida", "Líquido", "Doce"] },
  { termo: "VINHO", tags: ["Roxo", "Vermelho", "Bebida", "Líquido"] },
  { termo: "CERVEJA", tags: ["Amarelo", "Bebida", "Líquido", "Fria"] },
  { termo: "CAIPIRINHA", tags: ["Verde", "Bebida", "Líquido", "Fria"] },
  { termo: "REFRIGERANTE", tags: ["Preto", "Bebida", "Líquido", "Doce"] },
  { termo: "ÁGUA DE COCO", tags: ["Branco", "Bebida", "Líquido"] },
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
  { termo: "MARGARIDA", tags: ["Planta", "Branco", "É macia"] },
  { termo: "TULIPA", tags: ["Planta"] },
  { termo: "ORQUÍDEA", tags: ["Planta"] },
  { termo: "JASMIM", tags: ["Planta", "Branco"] },
  { termo: "BROMÉLIA", tags: ["Planta"] },
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
  { termo: "CÍRCULO", tags: ["Forma", "Redondo"] },
  { termo: "QUADRADO", tags: ["Forma"] },
  { termo: "TRIÂNGULO", tags: ["Forma"] },
  { termo: "RETÂNGULO", tags: ["Forma"] },
  { termo: "CUBO", tags: ["Forma", "É duro"] },
  { termo: "ESFERA", tags: ["Forma", "Redondo"] }
];

/* ---------- DESAFIOS HARDCORE ---------- */
const desafiosHardcore = [
  {
    regraA: "Animal", regraB: "Voa", regraC: "Vive na água",
    palavraCentral: "PATO",
    palavras: [
      { termo: "PATO", tags: ["Animal","Voa","Vive na água"], regiao: "ABC" },
      { termo: "MORCEGO", tags: ["Animal","Voa"], regiao: "AB" },
      { termo: "ABELHA", tags: ["Animal","Voa"], regiao: "AB" },
      { termo: "GOLFINHO", tags: ["Animal","Vive na água"], regiao: "AC" },
      { termo: "TUBARÃO", tags: ["Animal","Vive na água"], regiao: "AC" },
      { termo: "CACHORRO", tags: ["Animal"], regiao: "A" },
      { termo: "GATO", tags: ["Animal"], regiao: "A" },
      { termo: "AVIÃO", tags: ["Voa"], regiao: "B" },
      { termo: "FOGUETE", tags: ["Voa"], regiao: "B" },
      { termo: "BARCO", tags: ["Vive na água"], regiao: "C" },
      { termo: "SUBMARINO", tags: ["Vive na água"], regiao: "C" },
      { termo: "CADEIRA", tags: [], regiao: "N" },
      { termo: "PEDRA", tags: [], regiao: "N" }
    ]
  },
  {
    regraA: "Comida", regraB: "Vermelho", regraC: "Doce",
    palavraCentral: "MORANGO",
    palavras: [
      { termo: "MORANGO", tags: ["Comida","Vermelho","Doce"], regiao: "ABC" },
      { termo: "TOMATE", tags: ["Comida","Vermelho"], regiao: "AB" },
      { termo: "PIMENTÃO", tags: ["Comida","Vermelho"], regiao: "AB" },
      { termo: "BOLO", tags: ["Comida","Doce"], regiao: "AC" },
      { termo: "CHOCOLATE", tags: ["Comida","Doce"], regiao: "AC" },
      { termo: "ARROZ", tags: ["Comida"], regiao: "A" },
      { termo: "PÃO", tags: ["Comida"], regiao: "A" },
      { termo: "SANGUE", tags: ["Vermelho"], regiao: "B" },
      { termo: "ROSA", tags: ["Vermelho"], regiao: "B" },
      { termo: "MEL", tags: ["Comida","Doce"], regiao: "AC" },
      { termo: "AÇÚCAR", tags: ["Comida","Doce"], regiao: "AC" },
      { termo: "CADEIRA", tags: [], regiao: "N" },
      { termo: "PEDRA", tags: [], regiao: "N" }
    ]
  },
  {
    regraA: "Comida", regraB: "Amarelo", regraC: "Redondo",
    palavraCentral: "OVO",
    palavras: [
      { termo: "OVO", tags: ["Comida","Amarelo","Redondo"], regiao: "ABC" },
      { termo: "BANANA", tags: ["Comida","Amarelo"], regiao: "AB" },
      { termo: "QUEIJO", tags: ["Comida","Amarelo"], regiao: "AB" },
      { termo: "LARANJA", tags: ["Comida","Redondo"], regiao: "AC" },
      { termo: "MELANCIA", tags: ["Comida","Redondo"], regiao: "AC" },
      { termo: "PIZZA", tags: ["Comida","Redondo"], regiao: "AC" },
      { termo: "ARROZ", tags: ["Comida"], regiao: "A" },
      { termo: "PÃO", tags: ["Comida"], regiao: "A" },
      { termo: "SOL", tags: ["Amarelo","Redondo"], regiao: "BC" },
      { termo: "OURO", tags: ["Amarelo"], regiao: "B" },
      { termo: "BOLA", tags: ["Redondo"], regiao: "C" },
      { termo: "CADEIRA", tags: [], regiao: "N" },
      { termo: "PEDRA", tags: [], regiao: "N" }
    ]
  },
  {
    regraA: "Animal", regraB: "Doméstico", regraC: "Voa",
    palavraCentral: "PAPAGAIO",
    palavras: [
      { termo: "PAPAGAIO", tags: ["Animal","Doméstico","Voa"], regiao: "ABC" },
      { termo: "GALINHA", tags: ["Animal","Doméstico"], regiao: "AB" },
      { termo: "CACHORRO", tags: ["Animal","Doméstico"], regiao: "AB" },
      { termo: "GATO", tags: ["Animal","Doméstico"], regiao: "AB" },
      { termo: "MORCEGO", tags: ["Animal","Voa"], regiao: "AC" },
      { termo: "ABELHA", tags: ["Animal","Voa"], regiao: "AC" },
      { termo: "LEÃO", tags: ["Animal"], regiao: "A" },
      { termo: "TIGRE", tags: ["Animal"], regiao: "A" },
      { termo: "MESA", tags: ["Doméstico"], regiao: "B" },
      { termo: "SOFÁ", tags: ["Doméstico"], regiao: "B" },
      { termo: "AVIÃO", tags: ["Voa"], regiao: "C" },
      { termo: "FOGUETE", tags: ["Voa"], regiao: "C" },
      { termo: "CADEIRA", tags: [], regiao: "N" },
      { termo: "PEDRA", tags: [], regiao: "N" }
    ]
  },
  {
    regraA: "Comida", regraB: "Líquido", regraC: "Quente",
    palavraCentral: "SOPA",
    palavras: [
      { termo: "SOPA", tags: ["Comida","Líquido","Quente"], regiao: "ABC" },
      { termo: "LEITE", tags: ["Comida","Líquido"], regiao: "AB" },
      { termo: "SUCO", tags: ["Comida","Líquido"], regiao: "AB" },
      { termo: "PIZZA", tags: ["Comida","Quente"], regiao: "AC" },
      { termo: "ARROZ", tags: ["Comida"], regiao: "A" },
      { termo: "PÃO", tags: ["Comida"], regiao: "A" },
      { termo: "ÁGUA", tags: ["Líquido"], regiao: "B" },
      { termo: "VINHO", tags: ["Líquido"], regiao: "B" },
      { termo: "SOL", tags: ["Quente"], regiao: "C" },
      { termo: "FOGO", tags: ["Quente"], regiao: "C" },
      { termo: "CADEIRA", tags: [], regiao: "N" },
      { termo: "PEDRA", tags: [], regiao: "N" }
    ]
  },
  {
    regraA: "Animal", regraB: "Vive na água", regraC: "Tem escamas",
    palavraCentral: "PEIXE",
    palavras: [
      { termo: "PEIXE", tags: ["Animal","Vive na água","Tem escamas"], regiao: "ABC" },
      { termo: "POLVO", tags: ["Animal","Vive na água"], regiao: "AB" },
      { termo: "BALEIA", tags: ["Animal","Vive na água"], regiao: "AB" },
      { termo: "PINGUIM", tags: ["Animal","Vive na água"], regiao: "AB" },
      { termo: "COBRA", tags: ["Animal","Tem escamas"], regiao: "AC" },
      { termo: "LAGARTO", tags: ["Animal","Tem escamas"], regiao: "AC" },
      { termo: "CACHORRO", tags: ["Animal"], regiao: "A" },
      { termo: "GATO", tags: ["Animal"], regiao: "A" },
      { termo: "BARCO", tags: ["Vive na água"], regiao: "B" },
      { termo: "SUBMARINO", tags: ["Vive na água"], regiao: "B" },
      { termo: "CADEIRA", tags: [], regiao: "N" },
      { termo: "PEDRA", tags: [], regiao: "N" }
    ]
  },
  {
    regraA: "Comida", regraB: "Verde", regraC: "Vegetal",
    palavraCentral: "ALFACE",
    palavras: [
      { termo: "ALFACE", tags: ["Comida","Verde","Vegetal"], regiao: "ABC" },
      { termo: "LIMÃO", tags: ["Comida","Verde"], regiao: "AB" },
      { termo: "UVA VERDE", tags: ["Comida","Verde"], regiao: "AB" },
      { termo: "CENOURA", tags: ["Comida","Vegetal"], regiao: "AC" },
      { termo: "BATATA", tags: ["Comida","Vegetal"], regiao: "AC" },
      { termo: "ARROZ", tags: ["Comida"], regiao: "A" },
      { termo: "PÃO", tags: ["Comida"], regiao: "A" },
      { termo: "GRAMA", tags: ["Verde"], regiao: "B" },
      { termo: "SAMAMBAIA", tags: ["Verde"], regiao: "B" },
      { termo: "CADEIRA", tags: [], regiao: "N" },
      { termo: "PEDRA", tags: [], regiao: "N" }
    ]
  },
  {
    regraA: "Animal", regraB: "Inseto", regraC: "Voa",
    palavraCentral: "ABELHA",
    palavras: [
      { termo: "ABELHA", tags: ["Animal","Inseto","Voa"], regiao: "ABC" },
      { termo: "FORMIGA", tags: ["Animal","Inseto"], regiao: "AB" },
      { termo: "ARANHA", tags: ["Animal","Inseto"], regiao: "AB" },
      { termo: "PÁSSARO", tags: ["Animal","Voa"], regiao: "AC" },
      { termo: "MORCEGO", tags: ["Animal","Voa"], regiao: "AC" },
      { termo: "CACHORRO", tags: ["Animal"], regiao: "A" },
      { termo: "GATO", tags: ["Animal"], regiao: "A" },
      { termo: "AVIÃO", tags: ["Voa"], regiao: "C" },
      { termo: "FOGUETE", tags: ["Voa"], regiao: "C" },
      { termo: "CADEIRA", tags: [], regiao: "N" },
      { termo: "PEDRA", tags: [], regiao: "N" }
    ]
  },
  {
    regraA: "Animal", regraB: "Faz barulho", regraC: "Selvagem",
    palavraCentral: "LEÃO",
    palavras: [
      { termo: "LEÃO", tags: ["Animal","Faz barulho","Selvagem"], regiao: "ABC" },
      { termo: "CACHORRO", tags: ["Animal","Faz barulho"], regiao: "AB" },
      { termo: "GATO", tags: ["Animal","Faz barulho"], regiao: "AB" },
      { termo: "CAVALO", tags: ["Animal","Faz barulho"], regiao: "AB" },
      { termo: "GIRAFA", tags: ["Animal","Selvagem"], regiao: "AC" },
      { termo: "ZEBRA", tags: ["Animal","Selvagem"], regiao: "AC" },
      { termo: "RAPOSA", tags: ["Animal","Selvagem"], regiao: "AC" },
      { termo: "GOLFINHO", tags: ["Animal"], regiao: "A" },
      { termo: "CADEIRA", tags: [], regiao: "N" },
      { termo: "PEDRA", tags: [], regiao: "N" }
    ]
  },
  {
    regraA: "Comida", regraB: "Bebida", regraC: "Quente",
    palavraCentral: "CAFÉ",
    palavras: [
      { termo: "CAFÉ", tags: ["Comida","Bebida","Quente"], regiao: "ABC" },
      { termo: "LEITE", tags: ["Comida","Bebida"], regiao: "AB" },
      { termo: "SUCO", tags: ["Comida","Bebida"], regiao: "AB" },
      { termo: "SOPA", tags: ["Comida","Quente"], regiao: "AC" },
      { termo: "ARROZ", tags: ["Comida"], regiao: "A" },
      { termo: "PÃO", tags: ["Comida"], regiao: "A" },
      { termo: "ÁGUA", tags: ["Bebida"], regiao: "B" },
      { termo: "VINHO", tags: ["Bebida"], regiao: "B" },
      { termo: "FOGO", tags: ["Quente"], regiao: "C" },
      { termo: "SOL", tags: ["Quente"], regiao: "C" },
      { termo: "CADEIRA", tags: [], regiao: "N" },
      { termo: "PEDRA", tags: [], regiao: "N" }
    ]
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
let regraC = "";
let elementoArrastado = null;
let termoSelecionado = "";
let palavrasRestantes = 0;
let palavrasDaFase = [];
let temporizadorFase = null;
let dicasUsadas = 0;
const DICAS_POR_FASE = 1;
let contadorDiarioInterval = null;
let contadorSemanalInterval = null;
let palavraCentralDescoberta = false;
let puzzleHardcoreAtual = null;
let errosPorTermo = {};
let palavraDaDica = null;

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
const secaoCentral = document.getElementById("secao-central");
const inputCentral = document.getElementById("input-central");
const feedbackCentral = document.getElementById("feedback-central");
const botaoCentral = document.getElementById("botao-central");

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

function inicioSemanaAtual() {
  const agora = new Date();
  const diaSemana = agora.getDay();
  const diasDesdeSegunda = (diaSemana + 6) % 7;
  const segunda = new Date(agora);
  segunda.setDate(agora.getDate() - diasDesdeSegunda);
  segunda.setHours(0, 0, 0, 0);
  return segunda;
}

function identificadorSemana() {
  return inicioSemanaAtual().toISOString().slice(0, 10);
}

function proximaSegunda() {
  const s = inicioSemanaAtual();
  s.setDate(s.getDate() + 7);
  return s;
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

function normalizarPalavra(s) {
  return String(s).trim().toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function atualizarPainel() {
  painelVidas.textContent = `Vidas: ${"❤️".repeat(vidas)}${"🖤".repeat(Math.max(0, VIDAS_INICIAIS - vidas))}`;
  painelNivel.textContent = modoHardcore ? "H" : nivel;
  painelPontuacao.textContent = pontuacao;
  painelOfensiva.textContent = `${ofensiva} 🔥`;
  painelProgresso.textContent = `Palavras restantes: ${palavrasRestantes}`;

  const botaoDica = document.getElementById("botao-dica");
  if (botaoDica) {
    const podeUsar = !jogoEncerrado && !faseConcluida && dicasUsadas < DICAS_POR_FASE && palavrasRestantes > 0;
    botaoDica.disabled = !podeUsar;
    botaoDica.textContent = dicasUsadas >= DICAS_POR_FASE ? "💡 Dica já usada nesta fase" : "💡 Dica (-5 pts)";
  }

  if (botaoCentral) {
    const podeConferir = !jogoEncerrado && !faseConcluida && !palavraCentralDescoberta && modoHardcore;
    botaoCentral.disabled = !podeConferir;
    inputCentral.disabled = !podeConferir;
  }
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
    const zona = chip.closest("[data-zona]");
    if (zona) regioes[chip.dataset.termo] = zona.dataset.zona;
  });

  const estado = {
    versao: 1,
    modoHardcore,
    vidas, nivel, pontuacao, ofensiva,
    jogoEncerrado, faseConcluida, recompensaUsada,
    dicasUsadas,
    palavraCentralDescoberta,
    errosPorTermo,
    palavraDaDica,
    regraA, regraB, regraC,
    palavrasRestantes,
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
  if (modoHardcore) return gerarFaseHardcore();
  if (modoDiario) return gerarFaseDiaria();
  return gerarFaseClassica();
}

function gerarFaseDiaria() {
  const hoje = dataLocalISO();
  const originalRandom = Math.random;
  const originalNivel = nivel;
  Math.random = geradorComSemente(hashTexto("NEXO-DIARIO-" + hoje));
  nivel = 1;
  try { return gerarFaseClassica(); }
  finally { Math.random = originalRandom; nivel = originalNivel; }
}

function gerarFaseHardcore() {
  const id = identificadorSemana();
  const indice = hashTexto("NEXO-HARDCORE-" + id) % desafiosHardcore.length;
  const puzzle = desafiosHardcore[indice];
  puzzleHardcoreAtual = puzzle;
  return {
    regraA: puzzle.regraA,
    regraB: puzzle.regraB,
    regraC: puzzle.regraC,
    palavraCentral: puzzle.palavraCentral,
    palavras: embaralhar(puzzle.palavras.map(p => ({ ...p })))
  };
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

  const central = modoHardcore && puzzleHardcoreAtual
    ? palavrasDaFase.find(p => p.termo === puzzleHardcoreAtual.palavraCentral)
    : null;

  palavrasDaFase.forEach((item, index) => {
    if (modoHardcore && item === central) return;
    const numero = index + 1;
    const regiao = regioes[item.termo] || "BANCO";
    const colocada = regiao !== "BANCO";

    bancoHTML.appendChild(criarElementoPalavra(item, numero, colocada));

    if (colocada) {
      const dest = document.querySelector(`[data-zona="${regiao}"]`);
      if (dest) dest.appendChild(criarChipPalavra(item, numero));
    }
  });

  if (modoHardcore && palavraCentralDescoberta && central) {
    const index = palavrasDaFase.findIndex(p => p.termo === central.termo);
    const dest = document.querySelector('[data-zona="ABC"]');
    if (dest && index >= 0) dest.appendChild(criarChipPalavra(central, index + 1));
  }
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
  dicasUsadas = 0;
  palavraCentralDescoberta = false;
  errosPorTermo = {};
  palavraDaDica = null;
  esconderMensagem();
  inputCentral.value = "";
  inputCentral.classList.remove("acerto", "erro");
  feedbackCentral.textContent = "";
  feedbackCentral.classList.remove("ok", "err");

  const fase = gerarFase();
  if (!fase) {
    mostrarMensagem("Banco insuficiente", "Adicione mais palavras ou categorias ao banco para gerar novas fases.");
    return;
  }
  regraA = fase.regraA;
  regraB = fase.regraB;
  regraC = fase.regraC || "";
  palavrasDaFase = fase.palavras;

  if (modoHardcore) {
    palavrasRestantes = palavrasDaFase.length - 1;
    const rotA = document.querySelector(".circulo-a .rotulo-regra");
    const rotB = document.querySelector(".circulo-b .rotulo-regra");
    if (rotA) rotA.textContent = "";
    if (rotB) rotB.textContent = "";
    painelRegras.textContent = `A: ${regraA} | B: ${regraB} | C: ${regraC}`;
    secaoCentral.hidden = false;
    document.getElementById("rotulo-hardcore-a").textContent = `A · ${regraA}`;
    document.getElementById("rotulo-hardcore-b").textContent = `B · ${regraB}`;
    document.getElementById("rotulo-hardcore-c").textContent = `C · ${regraC}`;
  } else {
    palavrasRestantes = palavrasDaFase.length;
    const rotA = document.querySelector(".circulo-a .rotulo-regra");
    const rotB = document.querySelector(".circulo-b .rotulo-regra");
    if (rotA) rotA.textContent = `A: ${regraA}`;
    if (rotB) rotB.textContent = `B: ${regraB}`;
    painelRegras.textContent = `Regra A: ${regraA} | Regra B: ${regraB}`;
    secaoCentral.hidden = true;
  }

  painelMensagem.textContent = modoHardcore
    ? "Coloque as palavras nas regiões e descubra a palavra central!"
    : "Arraste cada palavra para a região correta.";
  renderizarPalavras();
  atualizarPainel();
  salvarProgresso();
}

/* ---------- VALIDAÇÃO E AÇÕES ---------- */
function validarJogada(item, zonaAlvo) {
  if (modoHardcore) return item.regiao === zonaAlvo;
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
  if (inputCentral) inputCentral.disabled = true;
  if (botaoCentral) botaoCentral.disabled = true;
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
    { texto: "📋 Compartilhar", classe: "botao botao-share", acao: compartilharResultado },
    { texto: "Testar recompensa (+3 vidas)", classe: "botao", acao: simularAnuncioRecompensado, desabilitado: recompensaUsada },
    { texto: "Começar nova partida", classe: "botao botao-secundario", acao: novaPartida }
  ];
  mostrarMensagem("Fim de jogo! 💔", `Você chegou até aqui com ${pontuacao} pontos. Recompensa em modo demonstração.`, botoes);
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
  mostrarMensagem("Você voltou! ❤️", "3 vidas restauradas. Progresso preservado. Recompensa simulada.", [
    { texto: "Continuar jogando", classe: "botao", acao: () => { esconderMensagem(); salvarProgresso(); } }
  ]);
  salvarProgresso();
}

function registrarErro(palavra) {
  palavra.style.backgroundColor = "#ff4757";
  const t = palavra.dataset.termo;
  if (t) errosPorTermo[t] = (errosPorTermo[t] || 0) + 1;
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
  pontuacao += modoHardcore ? 15 : 10;
  ofensiva++;
  palavrasRestantes--;
  termoSelecionado = "";
  atualizarPainel();
  painelMensagem.textContent = modoHardcore ? "Boa! +15 pontos." : "Boa! Você acertou. +10 pontos.";
  salvarProgresso();
  verificarConclusaoHardcore();
  if (!modoHardcore && palavrasRestantes === 0) concluirFase();
}

function verificarConclusaoHardcore() {
  if (!modoHardcore) return;
  if (palavrasRestantes === 0 && palavraCentralDescoberta && !faseConcluida) {
    concluirFase();
  } else if (palavrasRestantes === 0 && !palavraCentralDescoberta) {
    painelMensagem.textContent = "Todas as palavras alocadas! Agora descubra a palavra central.";
  } else if (palavraCentralDescoberta && palavrasRestantes > 0) {
    painelMensagem.textContent = "Central descoberta! Complete as palavras periféricas.";
  }
}

function concluirFase() {
  if (faseConcluida || jogoEncerrado) return;
  faseConcluida = true;

  if (modoHardcore) {
    pontuacao += 100;
    travarPalavras();
    atualizarPainel();
    const registro = { semana: identificadorSemana(), pontuacao, regraA, regraB, regraC, concluido: true };
    try { localStorage.setItem(CHAVE_HARDCORE, JSON.stringify(registro)); } catch (e) {}
    mostrarMensagem("HARDCORE CONCLUÍDO! 🏆🔥", `Incrível! Você resolveu o hardcore da semana e fez ${pontuacao} pontos.`, [
      { texto: "📋 Compartilhar resultado", classe: "botao botao-share", acao: compartilharResultado },
      { texto: "Voltar ao modo clássico", classe: "botao botao-secundario", acao: voltarModoClassico }
    ]);
    painelMensagem.textContent = "Hardcore concluído. Resultado salvo.";
    salvarProgresso();
    return;
  }

  if (modoDiario) {
    pontuacao += 50;
    travarPalavras();
    atualizarPainel();
    const registro = { data: dataLocalISO(), pontuacao, regraA, regraB, concluido: true };
    try { localStorage.setItem(CHAVE_DIARIO, JSON.stringify(registro)); } catch (e) {}
    atualizarStreakAoConcluirDiario();
    renderizarStreak();
    mostrarMensagem("Desafio diário concluído! 🏆", `Você completou o desafio de hoje e fez ${pontuacao} pontos.`, [
      { texto: "📋 Compartilhar resultado", classe: "botao botao-share", acao: compartilharResultado },
      { texto: "Voltar ao modo clássico", classe: "botao botao-secundario", acao: voltarModoClassico }
    ]);
    salvarProgresso();
    return;
  }

  pontuacao += 50;
  travarPalavras();
  atualizarPainel();
  mostrarMensagem(`Nível ${nivel} concluído! 🎉`, `+50 pontos extras. Total: ${pontuacao}. Próxima fase em instantes...`);
  salvarProgresso();
  temporizadorFase = setTimeout(() => { if (jogoEncerrado) return; nivel++; iniciarFase(); }, 1800);
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

/* ---------- PALAVRA CENTRAL (HARDCORE) ---------- */
function conferirPalavraCentral() {
  if (!modoHardcore || jogoEncerrado || faseConcluida || palavraCentralDescoberta) return;
  const tentativa = inputCentral.value;
  if (!tentativa.trim()) return;

  const alvo = normalizarPalavra(puzzleHardcoreAtual.palavraCentral);
  const digitado = normalizarPalavra(tentativa);

  if (digitado === alvo) {
    palavraCentralDescoberta = true;
    inputCentral.classList.remove("erro");
    inputCentral.classList.add("acerto");
    inputCentral.disabled = true;
    botaoCentral.disabled = true;
    feedbackCentral.textContent = `✅ Correto! A palavra central é "${puzzleHardcoreAtual.palavraCentral}".`;
    feedbackCentral.classList.remove("err");
    feedbackCentral.classList.add("ok");
    pontuacao += 30;
    atualizarPainel();
    salvarProgresso();
    renderizarPalavras(regioesAtuais());
    verificarConclusaoHardcore();
  } else {
    inputCentral.classList.remove("acerto");
    inputCentral.classList.add("erro");
    feedbackCentral.textContent = `❌ "${tentativa.trim().toUpperCase()}" não é a palavra central. Tente outra. (-1 vida)`;
    feedbackCentral.classList.remove("ok");
    feedbackCentral.classList.add("err");
    vidas = Math.max(0, vidas - 1);
    atualizarPainel();
    salvarProgresso();
    setTimeout(() => inputCentral.classList.remove("erro"), 400);
    if (vidas === 0) encerrarJogo();
  }
}

function regioesAtuais() {
  const r = {};
  document.querySelectorAll(".chip-palavra").forEach(chip => {
    const zona = chip.closest("[data-zona]");
    if (zona) r[chip.dataset.termo] = zona.dataset.zona;
  });
  return r;
}

/* ---------- DICAS ---------- */
function determinarRegiao(item) {
  if (modoHardcore && item.regiao) return item.regiao;
  const a = item.tags.includes(regraA);
  const b = item.tags.includes(regraB);
  if (a && b) return "AB";
  if (a) return "A";
  if (b) return "B";
  return "N";
}

function mostrarDica() {
  if (jogoEncerrado || faseConcluida) return;
  if (dicasUsadas >= DICAS_POR_FASE) {
    painelMensagem.textContent = "Você já usou a dica desta fase. Ela renova na próxima.";
    return;
  }

  const naoColocadas = palavrasDaFase.filter(item => {
    if (modoHardcore && item.termo === puzzleHardcoreAtual.palavraCentral) return false;
    const el = [...bancoHTML.querySelectorAll(".palavra")].find(p => p.dataset.termo === item.termo);
    return el && !el.classList.contains("colocada");
  });

  if (naoColocadas.length === 0) {
    painelMensagem.textContent = "Todas as palavras já foram colocadas.";
    return;
  }

  const escolhida = naoColocadas[Math.floor(Math.random() * naoColocadas.length)];
  const regiaoCorreta = determinarRegiao(escolhida);
  const elPalavra = [...bancoHTML.querySelectorAll(".palavra")].find(p => p.dataset.termo === escolhida.termo);
  const numero = elPalavra?.dataset.numero || "?";

  const nomes = modoHardcore ? {
    A: `apenas "${regraA}"`,
    B: `apenas "${regraB}"`,
    C: `apenas "${regraC}"`,
    AB: `interseção A+B`,
    AC: `interseção A+C`,
    BC: `interseção B+C`,
    N: `nenhuma das regras`
  } : {
    A: `apenas "${regraA}"`,
    B: `apenas "${regraB}"`,
    AB: `interseção (ambas as regras)`,
    N: `nenhuma das regras`
  };

  dicasUsadas++;
  palavraDaDica = escolhida.termo;
  pontuacao = Math.max(0, pontuacao - 5);
  atualizarPainel();

  painelMensagem.textContent = `💡 Dica: a palavra nº ${numero} ("${escolhida.termo}") vai em: ${nomes[regiaoCorreta]}. (-5 pts)`;

  const zona = document.querySelector(`[data-zona="${regiaoCorreta}"]`);
  if (zona) {
    zona.classList.add("dica-destacada");
    setTimeout(() => zona.classList.remove("dica-destacada"), 2500);
  }
  if (elPalavra) {
    elPalavra.classList.add("dica-palavra");
    setTimeout(() => elPalavra.classList.remove("dica-palavra"), 2500);
  }
  salvarProgresso();
}

/* ---------- CONTADORES ---------- */
function tempoParaProximaMeiaNoite() {
  const agora = new Date();
  const proxima = new Date(agora);
  proxima.setHours(24, 0, 0, 0);
  return Math.max(0, proxima - agora);
}

function tempoParaProximaSegunda() {
  return Math.max(0, proximaSegunda() - new Date());
}

function formatarTempoContagem(ms) {
  const totalSeg = Math.floor(ms / 1000);
  const dias = Math.floor(totalSeg / 86400);
  const h = Math.floor((totalSeg % 86400) / 3600);
  const m = Math.floor((totalSeg % 3600) / 60);
  const s = totalSeg % 60;
  const hhmmss = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  return dias > 0 ? `${dias}d ${hhmmss}` : hhmmss;
}

function iniciarContadorDiario() {
  pararContadorDiario();
  const el = document.getElementById("contador-diario");
  if (!el) return;
  const atualizar = () => { el.textContent = `⏳ Próximo desafio em: ${formatarTempoContagem(tempoParaProximaMeiaNoite())}`; };
  atualizar();
  contadorDiarioInterval = setInterval(atualizar, 1000);
}

function pararContadorDiario() {
  if (contadorDiarioInterval) { clearInterval(contadorDiarioInterval); contadorDiarioInterval = null; }
}

function iniciarContadorSemanal() {
  pararContadorSemanal();
  const el = document.getElementById("contador-semanal");
  if (!el) return;
  const atualizar = () => { el.textContent = `⏳ Próximo hardcore em: ${formatarTempoContagem(tempoParaProximaSegunda())}`; };
  atualizar();
  contadorSemanalInterval = setInterval(atualizar, 1000);
}

function pararContadorSemanal() {
  if (contadorSemanalInterval) { clearInterval(contadorSemanalInterval); contadorSemanalInterval = null; }
}

/* ---------- EVENTOS DAS ZONAS ---------- */
zonas.forEach(zona => {
  zona.addEventListener("dragover", evento => {
    evento.preventDefault();
    if (jogoEncerrado || faseConcluida) return;
    evento.dataTransfer.dropEffect = "move";
    zona.classList.add("hover-ativo");
  });
  zona.addEventListener("dragleave", () => {
    zona.classList.remove("hover-ativo");
  });
  zona.addEventListener("drop", evento => {
    evento.preventDefault();
    zona.classList.remove("hover-ativo");
    if (jogoEncerrado || faseConcluida) return;
    const termo = evento.dataTransfer.getData("text/plain");
    if (termo) termoSelecionado = termo;
    processarJogada(zona);
  });
  zona.addEventListener("click", () => {
    if (termoSelecionado) processarJogada(zona);
  });
});

/* ---------- MODO DIÁRIO / HARDCORE / CLÁSSICO ---------- */
function prepararModo(modo) {
  pararContadorDiario();
  pararContadorSemanal();
  modoDiario = modo === "diario";
  modoHardcore = modo === "hardcore";
  document.getElementById("painel-diario").hidden = true;
  document.getElementById("tabuleiro-2").hidden = modoHardcore;
  document.getElementById("tabuleiro-3").hidden = !modoHardcore;
  document.getElementById("secao-central").hidden = !modoHardcore;
  document.getElementById("botao-modo-diario").classList.toggle("modo-ativo", modo === "diario");
  document.getElementById("botao-modo-hardcore").classList.toggle("modo-ativo", modo === "hardcore");
}

function abrirDesafioDiario() {
  if (modoHardcore) voltarModoClassico();
  const hoje = dataLocalISO();
  let registro = null;
  try { registro = JSON.parse(localStorage.getItem(CHAVE_DIARIO) || "null"); } catch (e) {}

  if (registro && registro.data === hoje && registro.concluido) {
    document.getElementById("painel-diario").hidden = false;
    document.getElementById("painel-diario").innerHTML =
      `Você já concluiu o desafio de hoje! 🏆<br><strong>Pontuação:</strong> ${registro.pontuacao} pontos.<div id="contador-diario" class="contador-diario"></div>`;
    iniciarContadorDiario();
    mostrarMensagem("Desafio diário concluído", `Sua pontuação de hoje: ${registro.pontuacao}.`, [
      { texto: "📋 Compartilhar", classe: "botao botao-share", acao: compartilharResultado },
      { texto: "Voltar ao modo clássico", classe: "botao botao-secundario", acao: voltarModoClassico }
    ]);
    return;
  }

  try {
    const campanha = localStorage.getItem(CHAVE_SALVAMENTO);
    if (campanha) localStorage.setItem(CHAVE_BACKUP_CAMPANHA, campanha);
  } catch (e) {}

  prepararModo("diario");
  chaveSalvamentoAtual = `nexo-diario-partida-${hoje}`;
  document.getElementById("painel-diario").hidden = false;
  document.getElementById("painel-diario").innerHTML =
    `<strong>Desafio Diário · ${hoje}</strong><br>Igual para todos os jogadores.<div id="contador-diario" class="contador-diario"></div>`;
  iniciarContadorDiario();

  vidas = VIDAS_INICIAIS; nivel = 1; pontuacao = 0; ofensiva = 0;
  jogoEncerrado = false; faseConcluida = false; recompensaUsada = false;
  const salvo = lerSalvamento();
  if (!salvo || !restaurarPartida(salvo)) iniciarFase();
  painelMensagem.textContent = "Desafio diário carregado.";
}

function abrirDesafioHardcore() {
  if (modoDiario) voltarModoClassico();
  const id = identificadorSemana();
  let registro = null;
  try { registro = JSON.parse(localStorage.getItem(CHAVE_HARDCORE) || "null"); } catch (e) {}

  if (registro && registro.semana === id && registro.concluido) {
    document.getElementById("painel-diario").hidden = false;
    document.getElementById("painel-diario").innerHTML =
      `Você já concluiu o hardcore desta semana! 🏆🔥<br><strong>Pontuação:</strong> ${registro.pontuacao} pontos.<div id="contador-semanal" class="contador-diario"></div>`;
    iniciarContadorSemanal();
    mostrarMensagem("Hardcore concluído", `Sua pontuação desta semana: ${registro.pontuacao}.`, [
      { texto: "📋 Compartilhar", classe: "botao botao-share", acao: compartilharResultado },
      { texto: "Voltar ao modo clássico", classe: "botao botao-secundario", acao: voltarModoClassico }
    ]);
    return;
  }

  try {
    const campanha = localStorage.getItem(CHAVE_SALVAMENTO);
    if (campanha) localStorage.setItem(CHAVE_BACKUP_CAMPANHA, campanha);
  } catch (e) {}

  prepararModo("hardcore");
  chaveSalvamentoAtual = `nexo-hardcore-partida-${id}`;
  document.getElementById("painel-diario").hidden = false;
  document.getElementById("painel-diario").innerHTML =
    `<strong>🔥 Hardcore Semanal · ${id}</strong><br>Três regras, oito regiões, uma palavra central. Descubra-a!<div id="contador-semanal" class="contador-diario"></div>`;
  iniciarContadorSemanal();

  vidas = VIDAS_INICIAIS; nivel = 1; pontuacao = 0; ofensiva = 0;
  jogoEncerrado = false; faseConcluida = false; recompensaUsada = false;
  const salvo = lerSalvamento();
  if (!salvo || !restaurarPartida(salvo)) iniciarFase();
  painelMensagem.textContent = "Hardcore semanal iniciado.";
}

function voltarModoClassico() {
  if (temporizadorFase) clearTimeout(temporizadorFase);
  temporizadorFase = null;
  prepararModo("classico");
  chaveSalvamentoAtual = CHAVE_SALVAMENTO;
  let backup = null;
  try { backup = JSON.parse(localStorage.getItem(CHAVE_BACKUP_CAMPANHA) || "null"); } catch (e) {}
  if (backup && restaurarPartida(backup)) {
    salvarProgresso();
    painelMensagem.textContent = "Você voltou ao modo clássico.";
  } else {
    const salvo = lerSalvamento();
    if (!salvo || !restaurarPartida(salvo)) iniciarFase();
  }
}

document.getElementById("botao-modo-diario").addEventListener("click", abrirDesafioDiario);
document.getElementById("botao-modo-hardcore").addEventListener("click", abrirDesafioHardcore);
document.getElementById("botao-modo-normal").addEventListener("click", () => {
  if (modoDiario || modoHardcore) voltarModoClassico();
  else document.getElementById("painel-diario").hidden = true;
});

function novaPartida() {
  if (temporizadorFase) clearTimeout(temporizadorFase);
  vidas = VIDAS_INICIAIS; nivel = 1; pontuacao = 0; ofensiva = 0;
  jogoEncerrado = false; faseConcluida = false; recompensaUsada = false; dicasUsadas = 0;
  apagarSalvamento();
  iniciarFase();
}

document.getElementById("botao-nova-partida").addEventListener("click", () => {
  const existeProgresso = nivel > 1 || pontuacao > 0 || palavrasRestantes !== palavrasDaFase.length;
  if (existeProgresso && !jogoEncerrado && !faseConcluida) {
    mostrarMensagem("Começar de novo?", "Sua partida será reiniciada.", [
      { texto: "Sim", classe: "botao", acao: novaPartida },
      { texto: "Continuar", classe: "botao botao-secundario", acao: esconderMensagem }
    ]);
  } else novaPartida();
});

document.getElementById("botao-dica").addEventListener("click", mostrarDica);
botaoCentral.addEventListener("click", conferirPalavraCentral);
inputCentral.addEventListener("keydown", e => { if (e.key === "Enter") conferirPalavraCentral(); });

/* ---------- RESTAURAÇÃO ---------- */
function restaurarPartida(estado) {
  if (!estado) return false;

  let itens;
  if (estado.modoHardcore) {
    modoHardcore = true;
    modoDiario = false;
    const id = identificadorSemana();
    const indice = hashTexto("NEXO-HARDCORE-" + id) % desafiosHardcore.length;
    puzzleHardcoreAtual = desafiosHardcore[indice];
    itens = estado.palavrasDaFase.map(termo => puzzleHardcoreAtual.palavras.find(p => p.termo === termo)).filter(Boolean);
    prepararModo("hardcore");
    inputCentral.classList.toggle("acerto", Boolean(estado.palavraCentralDescoberta));
    inputCentral.disabled = Boolean(estado.palavraCentralDescoberta);
    if (estado.palavraCentralDescoberta) {
      inputCentral.value = puzzleHardcoreAtual.palavraCentral;
      feedbackCentral.textContent = `✅ Central descoberta: "${puzzleHardcoreAtual.palavraCentral}".`;
      feedbackCentral.classList.add("ok");
    }
  } else {
    itens = estado.palavrasDaFase.map(termo => bancoDePalavras.find(item => item.termo === termo)).filter(Boolean);
  }
  if (itens.length !== estado.palavrasDaFase.length || !itens.length) return false;

  vidas = Math.max(0, Math.min(VIDAS_INICIAIS, Number(estado.vidas) || 0));
  nivel = Math.max(1, Number(estado.nivel) || 1);
  pontuacao = Math.max(0, Number(estado.pontuacao) || 0);
  ofensiva = Math.max(0, Number(estado.ofensiva) || 0);
  regraA = estado.regraA;
  regraB = estado.regraB;
  regraC = estado.regraC || "";
  palavrasDaFase = itens;
  palavrasRestantes = Math.max(0, Number(estado.palavrasRestantes) || 0);
  jogoEncerrado = Boolean(estado.jogoEncerrado);
  faseConcluida = Boolean(estado.faseConcluida);
  recompensaUsada = Boolean(estado.recompensaUsada);
  dicasUsadas = Math.max(0, Number(estado.dicasUsadas) || 0);
  palavraCentralDescoberta = Boolean(estado.palavraCentralDescoberta);
  errosPorTermo = estado.errosPorTermo || {};
  palavraDaDica = estado.palavraDaDica || null;

  if (!modoHardcore) {
    const rotA = document.querySelector(".circulo-a .rotulo-regra");
    const rotB = document.querySelector(".circulo-b .rotulo-regra");
    if (rotA) rotA.textContent = `A: ${regraA}`;
    if (rotB) rotB.textContent = `B: ${regraB}`;
    painelRegras.textContent = `Regra A: ${regraA} | Regra B: ${regraB}`;
  } else {
    painelRegras.textContent = `A: ${regraA} | B: ${regraB} | C: ${regraC}`;
  }

  if (modoHardcore) {
    document.getElementById("rotulo-hardcore-a").textContent = `A · ${regraA}`;
    document.getElementById("rotulo-hardcore-b").textContent = `B · ${regraB}`;
    document.getElementById("rotulo-hardcore-c").textContent = `C · ${regraC}`;
  }

  renderizarPalavras(estado.regioes || {});
   
  renderizarPalavras(estado.regioes || {});
  atualizarPainel();

  if (jogoEncerrado) {
    travarPalavras();
    mostrarMensagem("Fim de jogo! 💔", `Você fez ${pontuacao} pontos.`, [
      { texto: "📋 Compartilhar", classe: "botao botao-share", acao: compartilharResultado },
      { texto: "Testar recompensa (+3 vidas)", classe: "botao", acao: simularAnuncioRecompensado, desabilitado: recompensaUsada },
      { texto: "Começar nova partida", classe: "botao botao-secundario", acao: novaPartida }
    ]);
  } else if (faseConcluida) {
    travarPalavras();
    mostrarMensagem(`Concluído! 🎉`, "Fase concluída.");
  } else {
    esconderMensagem();
    painelMensagem.textContent = "Partida recuperada.";
  }
  painelSalvamento.textContent = "Partida recuperada.";
  return true;
}

/* =========================================
   STREAK DIÁRIO
   ========================================= */
function carregarStreak() {
  try {
    const raw = JSON.parse(localStorage.getItem(CHAVE_STREAK) || "null");
    if (!raw) return { ultimoDia: null, dias: 0, recorde: 0 };
    return raw;
  } catch (e) {
    return { ultimoDia: null, dias: 0, recorde: 0 };
  }
}

function salvarStreak(s) {
  try { localStorage.setItem(CHAVE_STREAK, JSON.stringify(s)); } catch (e) {}
}

function atualizarStreakAoConcluirDiario() {
  const hoje = dataLocalISO();
  const s = carregarStreak();
  if (s.ultimoDia === hoje) return s;
  const ontem = new Date();
  ontem.setDate(ontem.getDate() - 1);
  const ontemStr = `${ontem.getFullYear()}-${String(ontem.getMonth()+1).padStart(2,"0")}-${String(ontem.getDate()).padStart(2,"0")}`;
  if (s.ultimoDia === ontemStr) s.dias = (s.dias || 0) + 1;
  else s.dias = 1;
  s.ultimoDia = hoje;
  s.recorde = Math.max(s.recorde || 0, s.dias);
  salvarStreak(s);
  return s;
}

function renderizarStreak() {
  const el = document.getElementById("streak-badge");
  if (!el) return;
  const s = carregarStreak();
  if (!s.dias || s.dias === 0) {
    el.hidden = true;
    return;
  }
  const hoje = dataLocalISO();
  const jogouHoje = s.ultimoDia === hoje;
  const hora = new Date().getHours();
  const emRisco = !jogouHoje && hora >= 20;

  el.hidden = false;
  el.classList.toggle("em-risco", emRisco);

  const recordeTxt = s.recorde > s.dias ? ` · recorde: ${s.recorde}` : "";
  if (emRisco) {
    el.textContent = `⚠️ Não perca seu streak de ${s.dias} dia${s.dias > 1 ? "s" : ""}! Jogue o diário hoje.`;
  } else {
    el.textContent = `🔥 ${s.dias} dia${s.dias > 1 ? "s" : ""} seguidos${recordeTxt}`;
  }
}

/* =========================================
   COMPARTILHAR RESULTADO
   ========================================= */
function montarTextoCompartilhavel() {
  const hoje = dataLocalISO();
  const [, mes, dia] = hoje.split("-");
  const dataCurta = `${dia}/${mes}`;

  let cabecalho;
  if (modoHardcore) cabecalho = `NEXO 🔥 HARDCORE · ${dataCurta}`;
  else if (modoDiario) cabecalho = `NEXO 📅 ${dataCurta}`;
  else cabecalho = `NEXO · Nível ${nivel}`;

  let grid = "";
  palavrasDaFase.forEach(item => {
    if (modoHardcore && puzzleHardcoreAtual && item.termo === puzzleHardcoreAtual.palavraCentral) return;
    const colocado = document.querySelector(`.chip-palavra[data-termo="${item.termo}"]`);
    if (!colocado) grid += "⬛";
    else if (item.termo === palavraDaDica) grid += "🟧";
    else if ((errosPorTermo[item.termo] || 0) > 0) grid += "🟨";
    else grid += "🟦";
  });

  const linhas = [cabecalho, grid];

  if (modoHardcore && palavraCentralDescoberta) linhas.push("⭐ Central: 🟦");

  const totalErros = Object.values(errosPorTermo).reduce((a, b) => a + b, 0);
  const extras = [];
  if (totalErros > 0) extras.push(`${totalErros} erro${totalErros > 1 ? "s" : ""}`);
  if (dicasUsadas > 0) extras.push(`${dicasUsadas} dica${dicasUsadas > 1 ? "s" : ""}`);
  if (extras.length) linhas.push(`🎯 ${extras.join(" · ")}`);

  linhas.push(`🏆 ${pontuacao} pts`);
  linhas.push("");
  linhas.push("nexogame.duckdns.org");

  return linhas.join("\n");
}

function compartilharResultado() {
  const texto = montarTextoCompartilhavel();
  const modal = document.getElementById("share-preview");
  const preview = document.getElementById("share-text-preview");
  const btnNative = document.getElementById("share-native");

  preview.textContent = texto;
  btnNative.hidden = !navigator.share;
  modal.hidden = false;
}

function fecharPreviewCompartilhar() {
  const modal = document.getElementById("share-preview");
  if (modal) modal.hidden = true;
}

async function copiarTextoCompartilhado() {
  const preview = document.getElementById("share-text-preview");
  if (!preview) return;
  const texto = preview.textContent;
  try {
    await navigator.clipboard.writeText(texto);
    mostrarToast("✅ Resultado copiado!", "ok");
    fecharPreviewCompartilhar();
  } catch (e) {
    mostrarToast("Não foi possível copiar automaticamente.", "err");
  }
}

async function compartilharNativo() {
  const preview = document.getElementById("share-text-preview");
  if (!preview || !navigator.share) return;
  try {
    await navigator.share({ text: preview.textContent });
    fecharPreviewCompartilhar();
  } catch (e) {
    if (e && e.name === "AbortError") return;
    mostrarToast("Não foi possível compartilhar.", "err");
  }
}
/* =========================================
   TOAST
   ========================================= */
let toastTimeout = null;
function mostrarToast(mensagem, tipo = "ok") {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = mensagem;
  el.classList.remove("ok", "err");
  el.classList.add(tipo);
  el.hidden = false;
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => { el.hidden = true; }, 3500);
}

/* =========================================
   ONBOARDING
   ========================================= */
let onboardingSlide = 0;
const TOTAL_SLIDES = 3;

function abrirOnboardingSeNecessario() {
  try {
    if (localStorage.getItem(CHAVE_ONBOARDING)) return;
  } catch (e) {}
  document.getElementById("onboarding").hidden = false;
  onboardingSlide = 0;
  renderizarOnboarding();
}

function renderizarOnboarding() {
  document.querySelectorAll(".onboarding-slide").forEach((el, i) => {
    el.hidden = i !== onboardingSlide;
  });
  document.querySelectorAll(".onboarding-dots .dot").forEach((el, i) => {
    el.classList.toggle("active", i === onboardingSlide);
  });
  document.getElementById("onboarding-prev").disabled = onboardingSlide === 0;
  document.getElementById("onboarding-next").textContent =
    onboardingSlide === TOTAL_SLIDES - 1 ? "Começar!" : "Próximo";
}

function fecharOnboarding() {
  document.getElementById("onboarding").hidden = true;
  try { localStorage.setItem(CHAVE_ONBOARDING, "1"); } catch (e) {}
}

document.getElementById("onboarding-next").addEventListener("click", () => {
  if (onboardingSlide < TOTAL_SLIDES - 1) {
    onboardingSlide++;
    renderizarOnboarding();
  } else {
    fecharOnboarding();
  }
});
document.getElementById("onboarding-prev").addEventListener("click", () => {
  if (onboardingSlide > 0) {
    onboardingSlide--;
    renderizarOnboarding();
  }
});
document.getElementById("onboarding-skip").addEventListener("click", fecharOnboarding);
document.getElementById("share-close").addEventListener("click", fecharPreviewCompartilhar);
document.getElementById("share-copy").addEventListener("click", copiarTextoCompartilhado);
document.getElementById("share-native").addEventListener("click", compartilharNativo);

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
renderizarStreak();
abrirOnboardingSeNecessario();
setInterval(renderizarStreak, 60 * 1000);
