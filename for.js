console.log("for");
const marcascelular = ['apple', 'nokia', 'xiaomi', 'tecno', 'samsung']
for (let i = 0; i < marcascelular.length; i++) {
    console.log(marcascelular[i]);
}


//for tradicional 
console.warn("--for tradiconal--");
for (let i = 0; i < marcascelular.length; i++) {
    console.log(marcascelular[i]);
}
//for in
console.warn("--for in--");
for (let i in marcascelular) {
    console.log(marcascelular[i]);
}
console.warn("--for of--");
for (let marcscelular of marcascelular) {
    console.log(marcscelular);
}
//foreach
console.warn("--foreach--");
marcascelular.forEach(function (marcascelular, index) {
    console.log(`${index}-${marcascelular}`
    );
})
console.warn("--foreach simple --");
marcascelular.forEach(() => {
    console.log("holamundo");

});
