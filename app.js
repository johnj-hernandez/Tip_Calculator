// guardamos el loader en una variable y luego lo hacemos invisible inicialmente
loading = document.querySelector("#loading");
loading.style.display = "none";
// almacenamos nuestro formulario y le agregamos un event listener cuando se pulse el boton de submit
var formulario = document.querySelector("#form-propina");
formulario.addEventListener("submit", e => {
  // e.target.classList.contains("was-validated")
  if (e.target.checkValidity() === true) {
    e.preventDefault();
    calcular(e);
  }
});
// asignamos a 3 variables nuestros campos de texto con los valores que se usaran para el calculo
var calidad = document.querySelector(".custom-select");
var cuenta = document.querySelector("#cuenta");
var personas = document.querySelector("#personas");

// funcion para calcular cuanto es el monto a pagar
function calcular(e) {
  // obtenemos los valores de los campos en variables
  vCuenta = parseFloat(cuenta.value);
  vCalidad = parseFloat(calidad.value);
  vPersonas = parseInt(personas.value);
  //   calculamos el resultado
  let resultado = (vCuenta * vCalidad) / vPersonas;
  //   verificamos si son mas de 1 sola persona
  let masDe1 = vPersonas > 1 ? true : false;
  showResults(resultado, masDe1);
}

function showResults(resultado, masDe1) {
  // obtenemos los campos de resultados
  resultados = document.querySelector("#resultados");
  resTitle = document.querySelector("#res-title");
  resValue = document.querySelector("#res-value");
  formulario.style.display = "none"; //desaparecemos el formulario
  loading.style.display = "block"; //hacemos aparecer el loader
  //y despues de 2 segundos lo quitamos y mostramos los resultados
  setTimeout(() => {
    var textoResultado =
      masDe1 == true
        ? "El valor a pagar por cada uno es:"
        : "El valor que debes pagar es:";
    resTitle.textContent = textoResultado;
    resValue.textContent = resultado.toString();
    resultados.style.display = "block";
    loading.style.display = "none";
  }, 2000);
}
