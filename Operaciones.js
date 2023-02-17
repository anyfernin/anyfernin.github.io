function calculate(operation) {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);

    if(operation == 0) {
      var op = document.getElementById("operador").value;
    }
    
    
    
    var result;
    

    if (op == "Suma" || operation == 1) {
      result = n1 + n2;
    } else if (op == "Resta" || operation == 2) {
      result = n1 - n2;
    } else if (op == "Multiplicación" || operation == 3) {
      result = n1 * n2;
    } else if (op == "División" || operation == 4) {
      result = n1 / n2;
    }

    document.getElementById("resultado").innerHTML = result;
}

function calculateComplex(operation) {
  var n1 = parseFloat(document.getElementById("n1").value);
  
  if(operation == 0) {
    var op = document.getElementById("operador").value;
  }
  
  var result;

  if (op == "Cuadrado" || operation == 1) {
    result = n1 * n1;
  } else if (op == "Raiz" || operation == 2) {
    result = Math.sqrt(n1);
  } else if (op == "Potencia" || operation == 3) {
    var n2 = parseFloat(document.getElementById("n2").value);
    result = Math.pow(n1, n2);
  } 

  document.getElementById("resultado").innerHTML = result;
}