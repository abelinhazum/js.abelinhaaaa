function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  function forca(massa,aceleração) {
    let resultado = massa * aceleração; 
    return(resultado);
  }
  let resultadoFinal = forca(8,7);   
  console.log(resultadoFinal);
}
