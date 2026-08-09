function sayYes() {
  alert("Yay! I can’t wait to see you! ❤");
}

const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseover', () => {
  const x = Math.floor(Math.random() * (window.innerWidth - 150));
  const y = Math.floor(Math.random() * (window.innerHeight - 150));
  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';
});
