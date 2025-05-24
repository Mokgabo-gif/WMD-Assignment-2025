const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.textContent = 'Switch to Light Mode';
  } else {
    toggleBtn.textContent = 'Switch to Dark Mode';
  }
});
