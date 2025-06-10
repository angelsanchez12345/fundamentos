 //obtener fecha y hora actual
const fechaactual1= new Date ();
//0:domingo1:lunes,2:martes
let diasemana1= fechaactual1.getDay ();
let horaactual1= fechaactual1.getHours ();


diasemana1= 0;
horaactual1=10;
console.log("fecha y hora" ,fechaactual1) ;
console.log("dia de la semana" ,diasemana1) ;
console.log("hora actual" ,horaactual1) ;






// fecha 
let fechaactual = new Date ();
let diasemana= fechaactual.getDay ();
let horaactual= fechaactual.getHours ();
let horaapertura;
horaactual = 13;
 if (diasemana==0||diasemana==6) {
 console.log("fin de semana");
horaapertura=9;
} else {
 console.log("dia de semana");
horaapertura=11;

}

if ([13](horaactual)>= [11](horaapertura)) { 
console.log ("Bienvenido! Nuestra tienda está abierta");
} else 
console.log ( `Bienvenido! Nuestra tienda está cerrada 
    abrimos a las ${horaapertura} horas ` );





/*if (horaactual>=horaapertura){
console.log ("Bienvenido! Nuestra tienda está abierta");
}
else {
console.log ( `Bienvenido! Nuestra tienda está cerrada 
    abrimos a las ${horaapertura} horas ` );

}*/     


mensaje= (horaactual=>horaapertura)? "Bienvenido! Nuestra tienda está abierta":
`Bienvenido! Nuestra tienda está cerrada 
    abrimos a las ${horaapertura} horas ` ;
    console.log(mensaje);