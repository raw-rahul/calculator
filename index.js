let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');

screenValue = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // console.log("The value ", buttonText);
        if (buttonText == "X") {
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == "C") {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == "=") {
            screen.value = eval(screenValue);
        }
        else if(buttonText == "⌫"){
            screen.value = screen.value.slice(0, -1);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}