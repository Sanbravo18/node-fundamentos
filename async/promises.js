function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function(){
            console.log('Hola '+ nombre);
            resolve(nombre);
        },2000);
    });
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Bla bla bla');
            resolve();
        }, 500);
    })
}

function adios(nombre){
    return new Promise((resolve, reject ) =>{
        setTimeout(function(){
            console.log('Adios '+ nombre);
            resolve();
        },1000);
    })
}

console.log()
hola('Carlos')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminando el proceso');
    })
    .catch(error => {
        console.error('ha habido un error:');
        console.error(error)
    });