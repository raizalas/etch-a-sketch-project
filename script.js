const cdiv = document.querySelector('.grid-container');

// Add 16 divs
for (let i = 1; i < 257; i++) {
  const div = document.createElement('div');
  cdiv.appendChild(div);
}