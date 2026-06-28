// =========================
// Password Generator Pro
// =========================

const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

// =========================
// Character Sets
// =========================

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+[]{}<>?/|";

function getRandom(data) {
    return data[Math.floor(Math.random() * data.length)];
}

// =========================
// Generate Password
// =========================

function generatePassword() {

    let chars = "";

    if (uppercaseEl.checked) chars += upper;
    if (lowercaseEl.checked) chars += lower;
    if (numbersEl.checked) chars += number;
    if (symbolsEl.checked) chars += symbol;

    if (!chars) {
        passwordEl.value = "Select options!";
        return;
    }

    let password = "";

    for (let i = 0; i < lengthEl.value; i++) {
        password += getRandom(chars);
    }

    passwordEl.value = password;
}

// =========================
// Copy Password
// =========================

copyBtn.addEventListener("click", async () => {

    if (!passwordEl.value) return;

    await navigator.clipboard.writeText(passwordEl.value);

    copyBtn.innerHTML = "✔";

    setTimeout(() => {
        copyBtn.innerHTML = '<i class="fa-solid fa-copy"></i>';
    }, 1200);

});

// =========================
// Events
// =========================

generateBtn.addEventListener("click", generatePassword);

lengthEl.addEventListener("input", () => {
    lengthValue.textContent = lengthEl.value;
});

window.addEventListener("load", generatePassword);