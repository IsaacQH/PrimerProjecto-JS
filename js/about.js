$(document).ready(function(){

    $('#acordeon').accordion()

    //SELECTOR DE TEMAS ************************************************************************************************
    var theme = $('#theme')                          //Guarda en variable el script de temas
    
    $('#to-Green').click(function(){                 //Evento click al picar el div de to green
        theme.attr("href", "css/green.css")          //Busca elemento href de theme y lo cambia a green.css
    })
    $('#to-Red').click(function(){                   //Evento click al picar el div de to red
        theme.attr("href", "css/red.css")            //Busca elemento href de theme y lo cambia a red.css
    })
    $('#to-Blue').click(function(){                   //Evento click al picar el div de to blue
        theme.attr("href", "css/blue.css")            //Busca elemento href de theme y lo cambia a blue.css
    })

})