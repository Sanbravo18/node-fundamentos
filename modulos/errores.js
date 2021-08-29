function otraFuncion() {
    serompe();
}

function serompe() {
   return 3+z;
}

function serompeASYNC(cb) {

   setTimeout(function () {
       try {
           return z+3;
       } catch (err) {
           console.error('error funcion asincrona');
           cb(err);
       }
   },1000);
}

try {
   //otraFuncion();
   serompeASYNC(function (err) {
       console.log(err.message);
   
   });
} catch (error) {
   console.error("No fue posible entrgegar respuesta")
   console.error(error.message);
   console.error(error);
}