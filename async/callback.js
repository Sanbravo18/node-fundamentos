function hola(nombre,callback) {
    setTimeout(function(){
        console.log('Hola '+ nombre);
        callback(nombre);
    },2000)
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('Adios '+ nombre);
        otroCallback();
    },1000);
}

console.log('Iniciando proceso...');
hola('Carlos',function(nombre) {
    adios(nombre, function(){
    console.log('terminadndo proceso...');
    })
});

//hola('Carlos',function(){});
//adios('Carlos',function(){});