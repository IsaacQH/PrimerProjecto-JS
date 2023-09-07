$(document).ready(function(){                //Carga el código JS

    //SLIDER *******************************************************************************************************
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
                </p>`

        $('.article').append(post)        
        console.log(post)

    })


})