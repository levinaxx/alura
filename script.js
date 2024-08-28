function criptografar() {
    const inputText = document.getElementById('input-text').value.toLowerCase();
    if (!validarTexto(inputText)) return;

    const outputText = inputText.replace(/e/g, 'enter')
                                .replace(/i/g, 'imes')
                                .replace(/a/g, 'ai')
                                .replace(/o/g, 'ober')
                                .replace(/u/g, 'ufat');
    document.getElementById('output-text').value = outputText;
}

function descriptografar() {
    const inputText = document.getElementById('input-text').value.toLowerCase();
    if (!validarTexto(inputText)) return;

    const outputText = inputText.replace(/enter/g, 'e')
                                .replace(/imes/g, 'i')
                                .replace(/ai/g, 'a')
                                .replace(/ober/g, 'o')
                                .replace(/ufat/g, 'u');
    document.getElementById('output-text').value = outputText;
}

function validarTexto(text) {
    const regex = /^[a-z\s]+$/;
    if (!regex.test(text)) {
        alert('Por favor, insira apenas letras minúsculas sem caracteres especiais.');
        return false;
    }
    return true;
}

function copiarTexto() {
    const outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência.');
}
