//funciones //
function saludar (){
  nombre = prompt("Ingrese su nombre y apellido")
  alert(`Hola ${nombre}, Bienvenido a nuestro sitio web.` )
}
saludar()

for(let i = 0; i >=1; i++){
  saludar()
}

let añocorriente = parseFloat(prompt("ingrese el año corriente"))
let añonacimiento = parseFloat(prompt("ingrese su año de nacimiento"))
function corroboraredad(añocorriente, añonacimiento){
    let resultado = añocorriente - añonacimiento

    console.log(resultado)
  
}
corroboraredad(añocorriente, añonacimiento)

//condicionales//
let pregunta = prompt('ya sabes cual va a ser tu proximo destino?')
if(pregunta == "si"){
   alert('perfecto, busca en nuestros destinos el que tengas ya elejido')
}else{
  alert('no te preocupes, nosotros te vamos a ayudar a elejir el mejor destino para tus proximas vacaciones')
}

function elegirdestino(){
  let destino = prompt("elegi el destino que queres visitar: cordoba, bsas, jujuy, patagonia")
  switch(destino){
    case "cordoba":
      alert("elegiste cordoba, el valor del pasaje es de $60000")
      break
    case "bsas": 
     alert("elegiste bsas, el valor del pasaje es de $80000")
     break
    case "jujuy":
      alert("elegiste jujuy, el valor del pasaje es de $100000")
      break
    case "patagonia":
      alert("elegiste patagonia, el valor del pasaje es de $150000")
      break
  }
}

elegirdestino()

function valordeviaje(){
     let valor = prompt("cual es el costo del destino que elgiste")
     let pasajeros = prompt("cuantos pasajeros van a viajar")
     let resultado = valor * pasajeros

     alert(resultado)
}

valordeviaje()

const IVA = 1.21
let totalviaje = parseFloat(prompt("ingrese el total de su viaje sin IVA"))
const precioconIVA = (imp, IVA) => imp * IVA
console.log("el precio final de tu viaje es de " + precioconIVA(totalviaje, IVA))

confirm("Quieres confirmar tu compra?")

const viajes = ["cordoba", "mendoza", "bsas", "bariloche"]

viajes.push("formosa")
console.log(viajes)

viajes.unshift("mendoza")
console.log(viajes)

viajes.shift()
console.log(viajes)

viajes.pop()
console.log(viajes)

viajes.sort()
console.log(viajes)

viajes.reverse()
console.log(viajes)

const productos = []
function agregarproductos(){
   let productosagregar = prompt("que producto deseas agregar")
   while(productosagregar.trim() === " ")
     alert("no ingreses espacios vacios")
    if(productosagregar.includes){
      alert("ese producto ya existe, ingrese otro")
    }
    else{
      productos.push(productosagregar)
      alert("produtos agregados correctamente")
    }
  }
agregarproductos()