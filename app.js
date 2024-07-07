function encriptarTexto() {
  const texto = document.getElementById("inputTexto").value;
  const textoEncrip = encriptar(texto);
  //   console.log(textoEncrip);
  document.getElementById("outputTexto").value = textoEncrip;
}

function encriptar(texto) {
  let resultado = "";
  for (let i = 0; i < texto.length; i++) {
    let newnew = "";
    switch (texto[i]) {
      case "a":
        newnew = "ai";
        break;
      case "e":
        newnew = "enter";
        break;
      case "i":
        newnew = "imes";
        break;
      case "o":
        newnew = "ober";
        break;
      case "u":
        newnew = "ufat";
        break;
      default:
        newnew = texto[i];
    }
    resultado += newnew;
  }
  return resultado;
}

function desencriptarTexto() {
  const texto = document.getElementById("inputTexto").value;
  const textoEncrip = desencriptar(texto);
  //   console.log(textoEncrip);
  document.getElementById("outputTexto").value = textoEncrip;
}

function desencriptar(texto) {
  let resultado = texto;
  const llaves = ["ai", "enter", "imes", "ober", "ufat"];
  const vocales = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < 5; i++) {
    resultado = resultado.replaceAll(llaves[i], vocales[i]);
    // console.log(resultado);
  }

  return resultado;
}
