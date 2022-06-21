////////////////////////////////////////// API matchMedia ////////////////////////////////////////
//API que sirve para trabajar reponsive design.
//Es una media query de css, pero en js
//Esto se usa para manejar clases, agregarlas, sacarlas, que si tiene una clase haga una cosa y si tiene otra clase haga otra cosa y asi.
   
                                                                            /*
const mq = matchMedia("(max-width: 500px)"); 

mq.addEventListener("change",()=>{  // change solo se va a ejecutar cuando mq se convierta en verdadero o falso.
    console.log("Se ha cambiado la resolucion");
})

//Ejemplo:

const caja = document.querySelector(".caja");

mq.addEventListener("change",()=>{  
    if (mq.matches) {
        caja.classList.replace("caja","responsive-caja");
    } else if (caja.className == "responsive-caja") {
        caja.classList.replace("responsive-caja","caja");
    }
})

                                                                            */


/////////////////////////////////// API Intersection Observer ////////////////////////////////////
//Sirve para observar si un elemento esta en el viewport o no, osea si es visible o no.
//Ejemplo:
                                                                            /*
const caja3 = document.querySelector(".caja3");

const verifyVisibility = (entries) => {
    const entry = entries[0];
    console.log(entry.isIntersecting); //Si el elemento es visible en el viewport devuelve true y sino es visible devuelve false
}

const observer = new IntersectionObserver(verifyVisibility);

observer.observe(caja3); // .observe() es una funcion que obseva el elemento que le digamos y devuelve ciertas cosas

                                                                            */

//Ejemplo con todas las cajas: 
                                                                             /*
const cajas = document.querySelectorAll(".caja");

const verifyVisibility = (entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) console.log("Se esta viendo la caja: ",entry.target.textContent);
    }
}

const observer = new IntersectionObserver(verifyVisibility); //Esto usa un 2do parametro que es (options) que puede llegar a ser util.
                                                             //Investigarlo en caso de necesitarlo (es facil).
for (const caja of cajas) {
    observer.observe(caja);
} 
                                                                              */
//Ejemplo de como hacer un Lazy Load:
//Lazy load es cargar publicaciones o contenido como scrolleamos hasta abajo de todo, como en ig o fb.
//Sistema de carga.

"use strict";

const publicaciones = document.querySelector(".publicaciones");

const createPublicationCode = (name,content)=>{
    const container = document.createElement("DIV");
    const comentarios = document.createElement("DIV");
    const nombre = document.createElement("H3");
    const contenido = document.createElement("p");
    const btnComentario = document.createElement("INPUT");
    const btnEnviar = document.createElement("INPUT");
    
    container.classList.add("publicacion");
    comentarios.classList.add("comentarios");
    btnEnviar.classList.add("enviar");
    btnComentario.classList.add("comentario");

    btnComentario.setAttribute("placeholder","Introduce un comentario");
    nombre.textContent = name;
    contenido.textContent = content;

    btnEnviar.type = "button";
    btnEnviar.value = "Enviar";

    comentarios.appendChild(btnComentario);
    comentarios.appendChild(btnEnviar);

    container.appendChild(nombre);
    container.appendChild(contenido);
    container.appendChild(comentarios);

    return container;
}





