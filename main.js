
// Algoritmo para revisar si tus neumaticos estan rotos o no

console.log("Problema: Como cambiar un neumatico");

let neumaticoRoto = true;
let cantidadRoto = {
  derechoAdelante: "roto",
  derechoAtras: "roto",
  izquierdoAdelante: "bien",
  izquierdoAtras: "bien",
};

if (neumaticoRoto) {
  console.log("Cambiar el neumatico");

  if ((cantidadRoto.derechoAdelante == "roto")) {
    console.log("Cambiar el neumatico derecho de adelante");
  }
  if ((cantidadRoto.derechoAtras == "roto")) {
    console.log("Cambiar el neumatico derecho de atras");
  }
  if ((cantidadRoto.izquierdoAdelante == "roto")) {
    console.log("Cambiar el neumatico izquierdo de adelante");
  }
  if ((cantidadRoto.izquierdoAtras == "roto")) {
    console.log("Cambiar el neumatico izquiedo de atras");
  } else {
    console.log("No hay más neumaticos rotos");
  }
} else {
  console.log("No cambiar el neumatico ir al trabajo");
}
