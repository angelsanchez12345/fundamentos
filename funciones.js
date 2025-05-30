function saludar () {
    console.log ("hola , desde la funcion saludar")
}
saludar();

function sumar (a,b) {
return a+b ;

}
const total = sumar (10,20);
console.log ("total:", total) ;

// sin returno 
const mostrarfecha=function () {
let fecha = new Date ();
console.log("fecha:", fecha) ;

}
 mostrarfecha() ;
 // returno
  const multiplicar = function (a,b) {
return a+b;

  }
  const resultado = multiplicar (10,20) ;
  console.log("resultado",resultado);

  

  // funciones de flecha 
  // sin retorno 
  const deciradios= ( ) => {
console.log ("hasta el martes profe") ;
  }
  deciradios () ;
  // con retorno 
  const dividir = (a,b) => {
if (b===0) {
    return "nose puede dividir entre cero";
}
 return a/b;
  }
  const resultadodividir = dividir (20,2);
  console.log ("resultadodividir" , resultadodividir);
