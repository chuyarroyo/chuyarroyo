/*"e" es convertida para "enter"
"i" es convertida para "imes"
"a" es convertida para "ai"
"o" es convertida para "ober"
"u" es convertida para "ufat"*/

function mi_metodo_de_encriptar() {
    // extraer el texto de la caja llamando a la funcion getboxText definida hasta abajo
    var texto = getBoxText();

    // con esta accion reemplazamos el texto predefinido por el texto ingresado en el cuadro
    document.getElementById("texto_encontrado").innerHTML = texto;

    // la funcion btoa ya esta definida y es utiizada para encriptar a base64
    var textoEncriptado = btoa(texto);

    // con esta accion estamos reemplazando el texto que teniamos con el resultado de haber encriptado
    document.getElementById("texto_resultado").innerHTML = textoEncriptado;
}




function mi_metodo_de_desencriptar() {
    // extraer el texto de la caja llamando a la funcion getboxText definida hasta abajo
    var texto = getBoxText();

    // con esta accion reemplazamos el texto predefinido por el texto ingresado en el cuadro
    document.getElementById("texto_encontrado").innerHTML = texto;

    // la funcion atob ya está definida y es utilizada para desencriptar base64
    var textoDesencriptado = atob(texto);

    // con esta accion estamos reemplazando el texto que teniamos con el resultado de haber desencriptado
    document.getElementById("texto_resultado").innerHTML = textoDesencriptado;
}




function getBoxText() {
    var content = document.getElementById("texto").value;

    // validacion de que no sea nulo o que no sean un valor vacio
    if (content == null || content == "") {
        window.alert("Debes ingresar un texto sobre el área para trabajar");
    } else {
        return content;
    }

}