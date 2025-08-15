const passwordField = document.getElementById('password');
const lengthSlider = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');
const copyBtn = document.getElementById('copyBtn');
const generateBtn = document.getElementById('generateBtn');

const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');

const strengthLabel = document.getElementById('strengthLabel');
const bars = document.querySelectorAll('.bar');

const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbolSet = "!@#$%^&*()_+=-{}[]|:;<>,.?/";

lengthSlider.addEventListener('input', () => {
  lengthValue.textContent = lengthSlider.value;
});

copyBtn.addEventListener('click', () => {
  if (passwordField.value) {
    navigator.clipboard.writeText(passwordField.value);
    copyBtn.textContent = "✅";
    setTimeout(() => {
      copyBtn.textContent = "📋";
    }, 1500);
  }
});

generateBtn.addEventListener('click', () => {
  const length = parseInt(lengthSlider.value);
  let charset = "";
  let password = "";

  if (uppercase.checked) charset += upperSet;
  if (lowercase.checked) charset += lowerSet;
  if (numbers.checked) charset += numberSet;
  if (symbols.checked) charset += symbolSet;

  if (!charset) {
    alert("Selecciona al menos una opción.");
    return;
  }

  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  passwordField.value = password;
  evaluateStrength(password);
});

function evaluateStrength(password) {
  let strength = 0;
  const patterns = [/[A-Z]/, /[a-z]/, /[0-9]/, /[^A-Za-z0-9]/];

  patterns.forEach((regex) => {
    if (regex.test(password)) strength++;
  });

  bars.forEach((bar, index) => {
    bar.classList.toggle('active', index < strength);
  });

  const labels = ["BAJA", "BAJA", "MEDIA", "FUERTE", " MUY FUERTE"];
  const colors = ["#ff4d4d", "#ff944d", "#ffd700", "#90ee90", "#00e676"];

  strengthLabel.textContent = labels[strength];
  strengthLabel.style.color = colors[strength];
}