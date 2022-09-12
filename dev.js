function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
   
  
    var valorEmReal = valorEmDolarNumerico * 5.23;
    console.log(valorEmReal);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = " O valor e R$" + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  