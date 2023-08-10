function agregarComentario() 

  {

  // Obtiene el valor de los comentarios que se encuentra en el input
  var comentarioInput = document.getElementById("comentario").value;

  // si el input de competarios esta vacio no hace nada
  if (comentarioInput === "") {return;} // return: vuelve a hacer la funcion desde 0

  // Reconoce el contenedor(div) por la id 
  var contenedorComentarios = document.getElementById("contenedor-comentarios");

  // crea un div para el comentario

  var nuevoComentario = document.createElement("div");

  // Escribe el comentario que pusiste en el cuadro te texto
  nuevoComentario.innerHTML = comentarioInput;

  // Añade una clase al comentario añadido
  nuevoComentario.classList.add("comentario");

// Crea un boton para eliminar 
  var botonEliminar = document.createElement("button");

  // le pone tesxto al boton
  botonEliminar.innerHTML = "Eliminar";

  // Le asigna una clase al boton
  botonEliminar.classList.add("botonEliminar")

 // addEventListener hace lo mismo que el on click 
 // hace que cuando lo clickees ejecute la funcion borrar
 botonEliminar.addEventListener("click", function () {nuevoComentario.remove();}); 

  // Hace que el boton este dentro de nuevo comentario
  nuevoComentario.appendChild(botonEliminar);

  // pone nuevo comentario dentro del contenedor
  contenedorComentarios.appendChild(nuevoComentario);

  //  borra los valores dentro del input
  document.getElementById("comentario").value = "";


}
