window.onload = function() {
    
    // Home event
    document.getElementById("home").addEventListener("click", function() {
        window.location.href = "index.html";
    });

    // Valid email
    var emailInput = document.getElementById("emailInput");
    var emailError = document.createElement("div");
    var msjError = '* Invalid emai'
    validateInput(emailInput, emailError, emailInput.value, validateEmail, msjError);

    function validateEmail(email) {
        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        return emailExpression.test(email);
    }

    // Valid password
    var passInput = document.getElementById("passInput");
    var passError = document.createElement("div");
    var msjError = '* Invalid password. Must contain letters and numbers.';
    validateInput(passInput, passError, passInput.value, validatePassword, msjError);

    function validatePassword(password) {
        var letter = false;
        var number = false;
        var isValid = false;
        //Valid one capital letter and numers
        for (var i = 0; i < password.length; i++){
            if (!isNaN(password[i])) {
                number=true;
            } 
            var codigo = password[i].charCodeAt(0);
            if ((codigo >= 65 && codigo <= 90) || (codigo >= 97 && codigo <= 122)) {
                letter=true;
            }
            if (letter && number){
                isValid=true
            } 
        }
        return isValid
    }

    function validateInput(inputElement, errorElement, initialValue, validationFunction, msj) {
        
        var valueInicial = initialValue;
      
        inputElement.onblur = function() {

          var value = inputElement.value;
          var isValid = validationFunction(value);

          if ((value !== valueInicial) && (!isValid)){
              inputElement.classList.add("input-error");
              inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
              errorElement.classList.add("error");
              errorElement.textContent = msj;
          } else {
              inputElement.classList.remove("input-error");
              errorElement.textContent = '';
          }
        }

        inputElement.addEventListener("focus", function() {
            inputElement.classList.remove("input-error");
            errorElement.textContent = '';
        });

    }

    // Sign-in event
    document.getElementById("sign-in").addEventListener("click", function() {
        // Valid empty fields
        if ((emailInput.value.trim().length !== 0) && (passInput.value.trim().length !== 0)) {
            // Valid error fields
            if ((emailError.textContent  == '') && (passError.textContent  == '')) {
                alert('Email: ' + emailInput.value + '\n' + 'Password: ' + passInput.value)
            } else {
                if ((emailError.textContent !== '') && (passError.textContent !== '')){
                    alert('* Email and Password invalid')
                }else if (emailError.textContent !== ''){
                    alert('* Email invalid')
                }else if (passError.textContent !== ''){
                    alert('* Password invalid')
                }
            }
        }else{
            alert('* Complete the fields to enter')
        }
    });

}


