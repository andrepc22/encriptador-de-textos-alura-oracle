function encriptarTexto() {
  const texto = document.getElementById("inputTexto").value;
  if (texto != "") {
    const lowertext = texto.toLowerCase().replace(/[^a-z0-9]+/g, "");
    const textoEncrip = encriptar(lowertext);
    document.getElementById("outputTexto").value = textoEncrip;
    mostrarElementos();
  }
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
  if (texto != "") {
    const lowertext = texto.toLowerCase().replace(/[^a-z0-9]+/g, "");
    const textoEncrip = desencriptar(lowertext);
    document.getElementById("outputTexto").value = textoEncrip;
    mostrarElementos();
  }
}

function desencriptar(texto) {
  let resultado = texto;
  const llaves = ["ai", "enter", "imes", "ober", "ufat"];
  const vocales = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < 5; i++) {
    resultado = resultado.replaceAll(llaves[i], vocales[i]);
  }

  return resultado;
}

// Funcionalidad copiar

function copiarClipboard() {
  const texto = document.getElementById("outputTexto").value;
  navigator.clipboard.writeText(texto);
}

// Mostrar elementos

function mostrarElementos() {
  document.getElementById("found").style.display = "flex";
  document.getElementById("not-found").style.display = "none";
}

// Evitar caracteres especiales

function avoidCharEsp() {
  const text = document
    .getElementById("inputTexto")
    .addEventListener("input", (e) => {
      const input = e.target;
      const liveText = input.value;
      const valorValid = liveText.toLowerCase().replace(/[^a-z0-9]+/g, "");
      input.value = valorValid;
    });
}

avoidCharEsp();
