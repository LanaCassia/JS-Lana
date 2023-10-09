// variaveis da bolinha 
let xBolinha = 300;  // Padrão camelCase 
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

// velocidade da bolinha 
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//Variáveis da raquete 
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

// Variáveis da raquete do oponente 
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

// pontuação 
let meusPontos = 0;
let pontosOponente = 0;

function setup() { 
  createCanvas(600, 400);
  console.log ("iniciou o setup")
}


function draw() {
  background(0);
  mostraBolinha(); // Chamando a função mostra bolinha 
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete ();
  movimentaRaquete ();
  verificaColisaoRaquete ();
  motraRaqueteOponente ();
  movimentaRaqueteOponente ();
  verificaColisaoRaqueteOpnente ();
  incluirPlacar ();
  marcaPontos ();
  movimentoRaqueteOponenteCimaBaixo ();

  // cria a função monstraBolinha


}
function mostraBolinha (){
circle (xBolinha, yBolinha, diametro);
}

  function movimentaBolinha (){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  }
  
function verificaColisaoBorda  (){
  if ( xBolinha + raio> width || 
      xBolinha < 0){
  velocidadeXBolinha *= -1;
    
}
 
if (yBolinha + raio> height || 
  yBolinha - raio <0){
  velocidadeYBolinha *= -1; 
}
}

  function mostraRaquete () {
 rect ( xRaquete 

