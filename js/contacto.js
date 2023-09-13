$(document).ready(function(){


    $('form input[name = "date"]').datepicker({dateFormat:'dd-mm-yy'})


    //Validación del conctacto

    $.validate({                                      //Activando plugin de validación
        lang:'es'                                     //Idioma español
    })

})