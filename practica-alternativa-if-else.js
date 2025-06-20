 //let videogames= ["fornite","Doom","mario"];
//console.log (videogames) ;
//console.log (videogames [2]) ;
//let arreglocosas= ["fornite",20,true,null,undefined, {nombre:"angel"},[1,2,3]];
//console.log (arreglocosas);
//console.log (arreglocosas [5] ["nombre"]);
//length
//console.log(arreglocosas.length);
//let nuevoareglocosas=arreglocosas.push("libro");
//console.log("nuevo arreglo de cosas " ,nuevoarreglocosas);     
//console.log(arreglocosas);// 

const dias =["domingo","lunes","martes","miercoles","jueves","viernes","sabado","domingo"]


;

console.log(dias[1]|| "dia no valido"); 
console.log(dias[2]|| "dia no valido");
console.log(dias[4]|| "dia no valido");
console.log(dias[9]|| "dia no valido");

//objeto
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

const dia ={
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