//const process = require('process'); //este viene dentro de los globales por lo qu no es necesario declararlo

process.on('exit', () => {
    console.log('le proceso va a terminar');
})

process.on('exit', () => {
    console.log('Cielos viejo, el proceso se acabo');
    setTimeout(() => {
        console.log('Esto no se va a ver nunca')
    },0);
})

setTimeout(() => {
    console.log('Esto si se va a ver')
},0);

process.on('uncaughtException', (error, origen) => {
    console.error('Vaya viejo, se nos ha olvidado capturar un error'),
    console.error(error);
    setTimeout(() => {
        console.log('Esto viene desde las excepciones')
    },0);
});

funcionQueNoexiste();