window.onload = function() {
    let visitorName = localStorage.getItem("visitorName");
    if (!visitorName) {
        visitorName = prompt("Hi there! What's your name?");
        if (visitorName) {
            localStorage.setItem("visitorName", visitorName);
        }
    }
}
visitorName = localStorage.getItem("visitorName")
if (visitorName) {
    alert("Welcome back to The Pink Whisk Bakery!" + visitorName + "!❤");
} else {
    alert("Welcome to The Pink Whisk Bakery!❤");
};
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.textContent = 'Switch to Light Mode';
  } else {
    toggleBtn.textContent = 'Switch to Dark Mode';
  }
});
