function hola(nombre,callback) {
    setTimeout(function(){
        console.log('Hola '+ nombre);
        callback(nombre);
    },2000)
}

function hablar(callbackHablar) {
    setTimeout(function() {
        console.log('Bla bla bla');
        callbackHablar();
    }, 500);
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('Adios '+ nombre);
        otroCallback();
    },1000);
}

function conversacion(nombre, veces, callback){
    if(veces > 0) {
        hablar(function () {
            conversacion(nombre, --veces, callback);
        })
    } else {
        adios(nombre,callback);
    }
}

console.log("Iniciando proceso...");
hola("Carlos", function (nombre) {
  conversacion(nombre, 10, function () {
    console.log("Proceso terminado");
  });
});

/****************HELL**********************/
// hola('Alejandro', function (nombre) {
//     hablar(function () {
//         hablar(function () {
//             hablar(function () {
//                 adios(nombre, function() {
//                     console.log('Terminando proceso...');
//                 });
//             });
//         });
//     });
// });