let fechaactual = new Date ();
let diasemana= fechaactual.getDay ();
let horaactual= fechaactual.getHours ();
let horaapertura;
horaactual = 9;
 if (diasemana==0||diasemana==6) {
 console.log("fin de semana");
horaapertura=9;
} else {
 console.log("dia de semana");
horaapertura=11;

}

if (horaactual>=horaapertura){
console.log ("Bienvenido! Nuestra tienda está abierta");
}
else {
console.log ( `Bienvenido! Nuestra tienda está cerrada 
    abrimos a las ${horaapertura} horas ` );

}
