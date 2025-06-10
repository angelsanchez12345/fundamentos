//obtener fecha y hora actual
const fechaactual= new Date ();
//0:domingo1:lunes,2:martes
let diasemana= fechaactual.getDay ();
let horaactual= fechaactual.getHours ();


diasemana= 0;
horaactual=10;
console.log("fecha y hora" ,fechaactual) ;
console.log("dia de la semana" ,diasemana) ;
console.log("hora actual" ,horaactual) ;