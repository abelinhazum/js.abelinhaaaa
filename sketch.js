

function inicializaCores(){  
  background("yellow");//cor de fundo
  fill("black");//preenchimento
  textSize(64);//tamanho do texto desejado
  textAlign(CENTER, CENTER)//alinhamento do texto
  
}

  function setup() {
  createCanvas(600, 600);  
  let palavras = ["ABELINHA","gomes","Aluno"]
  let palavra = random(palavras);

  }



function draw() {

  
  background("yellow");//cor de fundo
  fill("black");//preenchimento
  textSize(64);//tamanho do texto desejado
  textAlign(CENTER, CENTER)//alinhamento do texto


  let maximo = width;
  let minimo = 0;
  let palavra = "ABELINHA";//colocar a palavra desejado ou cria a varíavel
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  let parcial = palavra.substring(0,quantidade);
  text(parcial,300,300);
  
  // if(mouseX <50) {
  // let palavra = "C";
  //text(palavra,200,200);
  //}else if (mouseX <100){
  //let palavra = "Ca";
  // text(palavra,200,200);
  //}else{
  //let palavra = "Caminhante";
  // text (palavra,200,200);
  //}


}
