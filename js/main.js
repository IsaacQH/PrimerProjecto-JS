$(document).ready(function(){                //Carga el código JS

    //SLIDER *******************************************************************************************************
    if(window.location.href.indexOf('index') > -1){      //Condicional que hace que solo funcione con archivo index.js
        $('.galeria').bxSlider({                //Se aplica la funcion bSlider del plugin en div de galeria
            mode: 'fade',                       //Efecto de desaparicion
            caption: true,                      //Que haya un caption true
            slideWidth: 1400,                   //Una anchura de 1400
            resposive: true,                    //Resposivo
            pager:false                         //Quita el paginado de las fotos
        })

        //POSTS ********************************************************************************************************
        var posts = [                          //Se crea array con varios objetos JSON para los post
        {                                  //Objeto JSON 1
            title: 'Article 1',
            date: 'Publicado el ' + moment().format('Do MMMM YYYY'),        //Pone fecha usando formado moment JS 
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis porttitor finibus. Integer porta nec diam in ornare. Aenean semper gravida felis, sed tristique ipsum bibendum vitae. Aenean quis hendrerit diam. Vestibulum dictum, dui at pretium ultricies, orci mi convallis orci, eget commodo nulla neque et erat. In hac habitasse platea dictumst. Nam a purus sapien. Quisque lacinia eu dolor id congue. Proin at dui gravida, rhoncus ipsum ac, tempus nibh. Praesent ut finibus augue. Proin interdum, ligula et viverra faucibus, arcu lorem sodales augue, volutpat blandit nibh neque quis augue. In id sem ipsum. Quisque sit amet auctor urna, in tincidunt nunc. Duis vehicula mi ac quam dapibus volutpat. Fusce pellentesque felis massa, eu fringilla quam consectetur non. Phasellus dictum lectus tellus, eget bibendum urna maximus sit amet.'
        },
        {                                  //Objeto JSON 2
            title: 'Article 2',
            date: 'Publicado el ' + moment().format('Do MMMM YYYY'),        //Pone fecha usando formado moment JS 
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis porttitor finibus. Integer porta nec diam in ornare. Aenean semper gravida felis, sed tristique ipsum bibendum vitae. Aenean quis hendrerit diam. Vestibulum dictum, dui at pretium ultricies, orci mi convallis orci, eget commodo nulla neque et erat. In hac habitasse platea dictumst. Nam a purus sapien. Quisque lacinia eu dolor id congue. Proin at dui gravida, rhoncus ipsum ac, tempus nibh. Praesent ut finibus augue. Proin interdum, ligula et viverra faucibus, arcu lorem sodales augue, volutpat blandit nibh neque quis augue. In id sem ipsum. Quisque sit amet auctor urna, in tincidunt nunc. Duis vehicula mi ac quam dapibus volutpat. Fusce pellentesque felis massa, eu fringilla quam consectetur non. Phasellus dictum lectus tellus, eget bibendum urna maximus sit amet.'
        },
        {                                  //Objeto JSON 3
            title: 'Article 3',
            date: 'Publicado el ' + moment().format('Do MMMM YYYY'),        //Pone fecha usando formado moment JS 
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis porttitor finibus. Integer porta nec diam in ornare. Aenean semper gravida felis, sed tristique ipsum bibendum vitae. Aenean quis hendrerit diam. Vestibulum dictum, dui at pretium ultricies, orci mi convallis orci, eget commodo nulla neque et erat. In hac habitasse platea dictumst. Nam a purus sapien. Quisque lacinia eu dolor id congue. Proin at dui gravida, rhoncus ipsum ac, tempus nibh. Praesent ut finibus augue. Proin interdum, ligula et viverra faucibus, arcu lorem sodales augue, volutpat blandit nibh neque quis augue. In id sem ipsum. Quisque sit amet auctor urna, in tincidunt nunc. Duis vehicula mi ac quam dapibus volutpat. Fusce pellentesque felis massa, eu fringilla quam consectetur non. Phasellus dictum lectus tellus, eget bibendum urna maximus sit amet.'
        },
        {                                  //Objeto JSON 4
            title: 'Article 4',
            date: 'Publicado el ' + moment().format('Do MMMM YYYY'),        //Pone fecha usando formado moment JS 
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis porttitor finibus. Integer porta nec diam in ornare. Aenean semper gravida felis, sed tristique ipsum bibendum vitae. Aenean quis hendrerit diam. Vestibulum dictum, dui at pretium ultricies, orci mi convallis orci, eget commodo nulla neque et erat. In hac habitasse platea dictumst. Nam a purus sapien. Quisque lacinia eu dolor id congue. Proin at dui gravida, rhoncus ipsum ac, tempus nibh. Praesent ut finibus augue. Proin interdum, ligula et viverra faucibus, arcu lorem sodales augue, volutpat blandit nibh neque quis augue. In id sem ipsum. Quisque sit amet auctor urna, in tincidunt nunc. Duis vehicula mi ac quam dapibus volutpat. Fusce pellentesque felis massa, eu fringilla quam consectetur non. Phasellus dictum lectus tellus, eget bibendum urna maximus sit amet.'
        },
        {                                  //Objeto JSON 5
            title: 'Article 5',
            date: 'Publicado el ' + moment().format('Do MMMM YYYY'),        //Pone fecha usando formado moment JS 
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis porttitor finibus. Integer porta nec diam in ornare. Aenean semper gravida felis, sed tristique ipsum bibendum vitae. Aenean quis hendrerit diam. Vestibulum dictum, dui at pretium ultricies, orci mi convallis orci, eget commodo nulla neque et erat. In hac habitasse platea dictumst. Nam a purus sapien. Quisque lacinia eu dolor id congue. Proin at dui gravida, rhoncus ipsum ac, tempus nibh. Praesent ut finibus augue. Proin interdum, ligula et viverra faucibus, arcu lorem sodales augue, volutpat blandit nibh neque quis augue. In id sem ipsum. Quisque sit amet auctor urna, in tincidunt nunc. Duis vehicula mi ac quam dapibus volutpat. Fusce pellentesque felis massa, eu fringilla quam consectetur non. Phasellus dictum lectus tellus, eget bibendum urna maximus sit amet.'
        }
    ]

    posts.forEach((item, index) => {                  //Se crea ciclo forEach que revise cada item e index
    //Creamos una variable que cree plantillas JS en HTML de cada valor del item
        var post = `
            <h2>${item.title}</h2>                                          
                <span class = "fecha">${item.date}</span>      
                <p>
                    ${item.content}
                    <br>  
                    <a href="#" class = "botonMore">Leer más ...</a>
                    <div class ="clearfix" ></div>
                </p> `

        $('.article').append(post)        
    //console.log(post)
    })

}
    

    
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

    //SCROLL ***********************************************************************************************************
    $('.scroll').click(function(e){                  //Crea evento click en el elemento scroll
        e.preventDefault()                           //Nos permite que no se refreshee cuando se de click                           
        $('body, html').animate({                    //Hace una animación en html y body
            scrollTop: 0                             //Hace scroll hacia el pixel 0
        },500)                                       //lo hace en 500ms
        return false                                 //Nos permite que no se refreshee cuando se de click
    })

    //LOGIN FALSO ***********************************************************************************************************
    $('#login form').submit(function(){              //Crea evento sugmir en el form completo del login
        var formName = $('#name').val();             //Guarda en variable el valor del name al dar submit
        localStorage.setItem('name', formName)       //Guarda en LocalStorage el item forname
    })

    var formName = localStorage.getItem('name')      //Revisa el valor que este guardado

    if(formName != null && formName !=""){           //Si existe un valor en formName
        var about = $('#about')
        about.append("<hr><br>Bienvenido, <strong>" + formName+ ".<strong>")  // Añade al about el nombre de usuario
        about.append("<br> <a href ='#' id ='logout'> Cerrar sesión </a>")    //Añade etiqueta a para cerrar sesión
        $('#login').hide()                           //Escdonde el login

        $('#logout').click(function(){               //evento click para cerrar sesion
            localStorage.clear()                     //Limpia  toto el local storage
            location.reload()                          //Hace un reload a la página
        })


    }


})