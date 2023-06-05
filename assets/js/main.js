function sumar() {
    // Obtener los valores de los inputs
    var num1 = parseInt(document.getElementById("numero1").value);
    var num2 = parseInt(document.getElementById("numero2").value);

    // Realizar la suma
    var resultado = num1 + num2;

    // Actualizar el contenido del elemento <span> con el resultado
    document.getElementById("resultado").textContent = resultado;
}

function mostrarInput() {
    var checkboxSi = document.getElementById("checkboxSi");
    var contenedorInput = document.getElementById("contenedorInput");

    if (checkboxSi.checked) {
        contenedorInput.style.display = "block";
    } else {
        contenedorInput.style.display = "none";
    }
}

function mostrarMensaje() {
    var checkboxNo = document.getElementById("checkboxNo");
    var mensajeContinuar = document.getElementById("mensajeContinuar");

    if (checkboxNo.checked) {
        mensajeContinuar.style.display = "block";
    } else {
        mensajeContinuar.style.display = "none";
    }
}
