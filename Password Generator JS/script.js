let passwordLength = document.getElementById('passwordLength');
let password = document.getElementById('password');
let infoDibuat = document.getElementById('infoDibuat');
let infoSalin = document.getElementById('infoSalin');

function generatePassword(len) {
    const lowAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberic = "0123456789";
    const symbol = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    const data = lowAlphabet + upperAlphabet + numberic + symbol;
    let generator = '';

    for (let index = 0; index < len; index++) {
        generator += data[Math.floor(Math.random() * data.length)];
    }
    return generator;
}

function showMessage(element) {
    element.style.display = "block";
    setTimeout(() => {
        element.style.display = "none";
    }, 2000);
}

function getPassword() {
    let len = parseInt(passwordLength.value);
    if (!len || len < 1) {
        alert("Masukkan panjang password yang valid!");
        return;
    }
    password.value = generatePassword(len);
    showMessage(infoDibuat);
}

function savePassword() {
    if (password.value === "") {
        alert("Belum ada password yang dihasilkan!");
        return;
    }
    navigator.clipboard.writeText(password.value);
    showMessage(infoSalin);
}