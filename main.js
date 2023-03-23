const startCounter = document.getElementById("startCounter");

function actualizaSegundosEnHTML(segundos) {
    const counter = document.getElementById("counter");
    counter.innerHTML = segundos + "s";
}

function iniciaElContador() {
    const inputValue = document.getElementById("seconds").value;
    const seconds = inputValue.length > 0 ? inputValue : "00";
    let timer = parseInt(seconds);
    actualizaSegundosEnHTML(seconds);

    // Closure
    var counterFunction = setInterval(function () {
        actualizaSegundosEnHTML(timer);
        timer -= 1;

        if (timer < 0) {
            clearInterval(counterFunction);
            alert("El Contador ha finalizado");
        }
    }, 1000);

    // async
    // do {
        
    // } while (condition);

    // Operador ternario
    // const result = condition ? value1 : value2;

    // let result;
    // if (condition) {
    //     result = value1
    // } else {
    //     result = value2
    // }
}

// Diff funcion flecha y regular
// const funcionFlecha = () => {
//     // Va a apuntar dentro de la misma funcion
//     objeto1;
//     const constante1;
//     function name(params) {
        
//     }
//     // 
//     this
//     window.localStorage.setItem()
// }

// function name() {
//     // this = window, document
//     this
//     window.localStorage.setItem()
// }

startCounter.addEventListener("click", iniciaElContador);