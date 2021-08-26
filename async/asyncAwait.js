async function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function(){
            console.log('Hola '+ nombre);
            resolve(nombre);
        },2000);
    });
}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Bla bla bla');
            resolve();
        }, 500);
    })
}

async function adios(nombre){
    return new Promise((resolve, reject ) =>{
        setTimeout(function(){
            console.log('Adios '+ nombre);
            resolve();
        },1000);
    })
}

async function main(){
    let nombre = await hola('Carlos');
    await hablar();
    hablar();
    hablar();
    await adios(nombre);
    console.log('Terminamos el proceso...')
}

console.log('Empezamos el proceso...');
main();
console.log('Segunda tarea')