
 // ********* Estudiante - Trainee - Junior ******************************

var estudiante = document.getElementById("estudiante")
console.log (estudiante)
const EST = 40

var trainee = document.getElementById("trainee")
console.log (trainee)
const TRAI = 100

var junior = document.getElementById("junior")
console.log(junior)
const JUN = 170


// ************** selector - cantidad1 - pago ****************************

var selector = document.getElementById("floatingSelect")
console.log(document.getElementById("floatingSelect"))

var cantidad1 = document.getElementById ("input-cantidad") // Input cantidad
var pago = document.getElementById ("total-pagar") // "total a pagar $"


// ********* fx imprimir () ************************ 

function imprimir(){
if(selector.value == "1"){

    pago.textContent= "Total a Pagar: $ " + cantidad1.value * EST

} else if(selector.value == "2"){

    pago.textContent= "Total a Pagar: $ " + cantidad1.value * TRAI

}  else if(selector.value == "3"){

    pago.textContent= "Total a Pagar: $ " + cantidad1.value * JUN

}
}