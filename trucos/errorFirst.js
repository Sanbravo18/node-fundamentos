function asincrona(callback) {
    setTimeout(function() {
        try{
            let a = 3 + z // aqui z no esta definido por lo que rompera
            callback(null, a);
        } catch (e){
            callback(e, null);
        }
    }, 1000);
}

asincrona(function(err, dato) {
    if(err){
        console.error('tenemos un error');
        console.error(err);
        return false
        //throw err; // este no funciona en funciones asincronas
    }

    console.log('todo ha ido bien, mi data es', dato)
});