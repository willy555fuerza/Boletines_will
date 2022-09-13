

// DOM

/*let links = document.querySelectorAll("a");

links.forEach(function(link){
  console.log(link);
});*/

let links = document.querySelectorAll(".close");

links.forEach(function(link){

    link.addEventListener("click",function(ev){
        ev.preventDefault();

        let content = document.querySelector('.content');

        // Quitarle las clases de animación que ya tiene
        content.classList,remove("fadeInDown");
        content.classList,remove("animated");

        // Agregar clases para animar  su salida fadeOutUp

        content.classList,remove("fadeOutUp");
        content.classList,add("animated");
        setTimeout(function(){
            location.href = "/Boletines";
        },600);
        // setInterval
        /*setInterval(function(){
            location.href = "/";
        },1000);*/
        

        return false;
    });
});
 


