function myName () {
    var inputText = document.getElementById("inputName").value;
    document.getElementById("textDisplay").innerHTML = 'Hi there, ' + inputText + '! ';
    document.getElementById("inputName").value = "";
}

function checkEnter(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        myName();
    }
}

gsap.from('.text3', {duration: 2, opacity: 0.2, y: '-100%', delay: 1, stagger: '.5'})