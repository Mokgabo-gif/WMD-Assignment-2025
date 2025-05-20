window.load = function() {
    let visitorName = localStorage.getItem("visitorName");
    if (!visitorName) {
        visitorName = prompt("Hi there! What's your name?");
        if (visitorName) {
            localStorage,setItem("visitorName", visitorName);
        }
    }
}
if (visitorName) {
    alert("Welcome back to The Pink Whisk Bakery!" + visitorName + "!❤");
} else {
    alert("Welcome to The Pink Whisk Bakery!❤");
}
