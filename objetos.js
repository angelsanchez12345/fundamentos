let marcascelulares={
primera: "samsung",
segunda:  "apple",
tercero: "huawei",

}
marcascelulares.cuarta="xiaomi";
marcascelulares ["quinta"]="motorla";
console.log (marcascelulares);

 //reoorrer todas las claves y valores del objecto 
for (let key in marcascelulares) {
    console. log ( `${key}: ${marcascelulares[key]}`) ;}
//convertir el objecto a un arreglo 
let  arregloMarcascelulares = Object.entries(marcascelulares);
console.log(arregloMarcascelulares);
let  arreglo2Marcascelulares = Object.values(marcascelulares);
console.log(arreglo2Marcascelulares);

const dias ={
 0: "lunes",
1:  "martes",
3: "miercoles",
4: "jueves",
5:  "viernes",
6: "sabado",
7: "domingo",

};

console.log(dias[1]|| "dia no valido"); 
console.log(dias[2]|| "dia no valido");
console.log(dias[4]|| "dia no valido");
console.log(dias[9]|| "dia no valido");
