let screenValue = "";
let screen = document.getElementById('screen');
num = document.getElementsByClassName('num');
for (item of num) {
  item.addEventListener('click', (e) => {
    buttonText = e.target.innerText;
    console.log(buttonText);
   if(buttonText == "C") {
      screenValue = ""
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue)
      screenValue = eval(screenValue)
    } else if (buttonText == "DEL") {
      screen.value = screenValue.slice(0, -1)
      screenValue = screen.value
    } else if (buttonText == "sin") {
      var x = eval(screen.value);
      x = x * Math.PI / 180;
      screen.value = Math.sin(x);
      screenValue = screen.value
    }
    else if (buttonText == "cos") {
        var x = eval(screen.value);
        x = x * Math.PI / 180;
        screen.value = Math.cos(x);
        screenValue = screen.value
      }
      else if (buttonText == "tan") {
        var x = eval(screen.value);
        x = x * Math.PI / 180;
        screen.value = Math.tan(x);
        screenValue = screen.value
      }
      else if (buttonText == "log") {
        var x = eval(screen.value);
        screen.value = Math.log(x);
        screenValue = screen.value
      }
      else if (buttonText == "√") {
        var x = eval(screen.value);
        screen.value = Math.sqrt(x);
        screenValue = screen.value
      }
      else if (buttonText == "x y") {
      let x=screen.value;
      screen.value=screen.value+" ^ ";

        screenValue= x + " ** " ;
                
      }
       else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  })
}