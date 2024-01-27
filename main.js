do {
    var nombre = prompt("Por favor, ingrese su nombre:");
  
    if (nombre) {
      var costo = prompt("Hola, " + nombre + ". Ingrese el costo:");
  
      if (isNaN(costo)) {
        alert("Por favor, ingrese un valor numérico válido.");
      } else {
        var iva = prompt("Ingrese el porcentaje de IVA:");
  
        if (isNaN(iva)) {
          alert("Por favor, ingrese un valor numérico válido para el IVA.");
        } else {
          var costoConIVA =
            parseFloat(costo) + parseFloat(costo) * (parseFloat(iva) / 100);
  
          alert("El costo total con IVA es: " + costoConIVA.toFixed(2));
        }
      }
    } else {
      alert("Por favor, ingrese su nombre para continuar.");
      continue;
    }
  
    var continuar = confirm("¿Desea realizar otr");
  } while (continuar);
  
  alert("Gracias por utilizar nuestra calculadora.");