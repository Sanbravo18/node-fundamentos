let i = 0;
let intervalo = setInterval(() => {
   if ( i === 3){
    clearInterval(intervalo);
   }
   i++;
    console.log('hola') ;
}, 1000);

setImmediate(function() {
    console.log('Hola, soy una funcion inmediata');
});

console.log(__dirname)
console.log(__filename)