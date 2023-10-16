try {
    var resultado = 5 / a;
} catch (excepcion) {
    alert(excepcion.message);
} finally {
    alert('Finalizar el proceso');
}