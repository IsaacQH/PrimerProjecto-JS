$(document).ready(function(){

    setInterval(function(){
        var reloj = moment().format("h:mm:ss")                  //Formato de hora, minutos y segudnos del reloj usando moment

        $('#reloj').html("Time: "+ reloj)                                 // escribe en html div reloj la variable reloj
    },1000)

})