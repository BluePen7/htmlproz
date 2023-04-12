let display = document.getElementById('display');

function appendCharacter(char) {
    display.value += char;
}

function clearDisplay() {
    display.value = '';
}

function deleteCharacter() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        let result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Erro';
    }
}
