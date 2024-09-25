function appendToResult(value) {
    document.getElementById('ketqua').value += value;
}

function clearResult() {
    document.getElementById('ketqua').value = '';
}

function calculateResult() {
    const resultField = document.getElementById('ketqua');
    try {
        const result = eval(resultField.value.replace('x', '*')); // Thay 'x' bằng '*'
        resultField.value = result;
    } catch (error) {
        resultField.value = 'Lỗi';
    }
}