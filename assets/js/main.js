function calcularCosto() {
    // Obtener el valor del input
    var numero = parseInt(document.getElementById("numeroInput").value);

    // Realizar los cálculos según el rango
    var costo;

    if (numero >= 0 && numero <= 1000) {
        costo = numero * 32;
    } else if (numero > 1000 && numero <= 2500) {
        costo = numero * 28;
    } else if (numero > 2501 && numero <= 5000) {
        costo = numero * 22;
    } else if (numero > 5001 && numero <= 10000) {
        costo = numero * 18;
    } else if (numero > 10001 && numero <= 15000) {
        costo = numero * 12;
    } else if (numero > 10001 && numero <= 15000) {
        costo = numero * 12;
    } else if (numero > 15001 && numero <= 20000) {
        costo = numero * 11.50;
    } else if (numero > 20001 && numero <= 25000) {
        costo = numero * 10.50;
    } else if (numero > 25001 && numero <= 30000) {
        costo = numero * 12;
    } else if (numero > 30001 && numero <= 35000) {
        costo = numero * 12;
    } else if (numero > 35001 && numero <= 40000) {
        costo = numero * 12;
    } else if (numero > 40001 ) {
        costo = "Cotizacion Especial, Contactar a tu especialista";
    } else {
        costo = 0; // Opcional: En caso de que el número esté fuera de los rangos establecidos
    }

    // Mostrar el resultado en el elemento <p>
    document.getElementById("resultado").textContent = "El costo es: " + costo;
}
