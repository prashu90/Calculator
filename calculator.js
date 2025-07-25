const inputTxt = document.querySelector('.type');

let calculate = (value) => {
    inputTxt.value += value;
}

let reset = () => {
    inputTxt.value = '';
}

let display = () => {
    try {
        inputTxt.value = eval(inputTxt.value);
    } catch (error) {
        inputTxt.value = 'Error';
    }
}