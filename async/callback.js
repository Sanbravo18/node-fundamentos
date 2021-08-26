function soyAsincrona(callback) {
    console.log('Hola, soy una función asincrona');
    setTimeout(function(){
        console.log('Estoy siendo asíncrona')
        callback();
    },2000)
}
console.log('Iniciando proceso...');
soyAsincrona(function() {
    console.log('terminadndo proceso...');
});
