// document.addEventListener("DOMContentLoaded", function() {
    let inputBox = document.getElementById("inputBox");
  
    function clearInput() {
      inputBox.value = "";
    }
  
    function deleteChar() {
      inputBox.value = inputBox.value.slice(0, -1);
    }
  
    function appendCharacter(character) {
      inputBox.value += character;
    }
  
    function calculate() {
      try {
        inputBox.value = eval(inputBox.value);
      } catch (error) {
        inputBox.value = "Error";
      }
    }
  
    // Event listeners for buttons
    document.querySelector(".calculator").addEventListener("click", function(event) {
      const target = event.target;
      const value = target.innerText;
  
      if (target.classList.contains("operator")) {
        if (value === "AC") {
          clearInput();
        } else if (value === "DEL") {
          deleteChar();
        } else {
          appendCharacter(value);
        }
      } else if (target.classList.contains("equalBtn")) {
        calculate();
      } else {
        appendCharacter(value);
      }
    });
  // });
  