let textoEntrada
let textoSaida = "";

const trocas= {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
};
function removerCaracteresInvalidos() {
    const campoTexto = document.getElementById("textoEntrada");
    campoTexto.value = campoTexto.value
        .replace(/[^a-z]/g, " ");
}

function criptografar() {
    const textoEntrada = document.getElementById("textoEntrada").value.toLowerCase();
    textoSaida = "";
        
    for (let i = 0; i < textoEntrada.length; i++){
        let caractere = textoEntrada[i];
        if (trocas[caractere]) {
            textoSaida += trocas[caractere];
        } else {
            textoSaida += caractere;
        }
    }
    document.getElementById("textoSaida").textContent = textoSaida;
    document.getElementById("output").style.display = "none";
    document.getElementById("textoSaida").style.display = "block";
}

function descriptografar() {
    const textoEntrada = document.getElementById("textoEntrada").value.toLowerCase();
    textoSaida =textoEntrada;

    for (const [chave, valor] of Object.entries(trocas)) {
        textoSaida = textoSaida.split(valor).join(chave);

document.getElementById("textoSaida").textContent = textoSaida;
}
}

function copiarTexto() {
    const textoParaCopiar = document.getElementById("textoSaida").textContent;
    navigator.clipboard.writeText(textoParaCopiar)
        .then(() => {
            alert("Texto copiado!");
        })
}


document.getElementById("textoEntrada").addEventListener("input", removerCaracteresInvalidos);
