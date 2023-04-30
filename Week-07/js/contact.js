window.onload = function() {

    // name
    var nameInput = document.getElementById("nameInput");
    var nameError = document.createElement("span");
    var nameMsj = '* Invalid name. Letters only and more than 3 characters.';
    validateInput(nameInput, nameError, validateName, nameMsj);

    // lname
    var lnameInput = document.getElementById("lnameInput");
    var lnameError = document.createElement("span");
    var lnameMsj = '* Invalid last name. Letters only and more than 3 characters.';
    validateInput(lnameInput, lnameError, validateName, lnameMsj);

    // email
    var emailInput = document.getElementById("emailInput");
    var emailError = document.createElement("span");
    var emailMsj = '* Invalid email';
    validateInput(emailInput, emailError, validateEmail, emailMsj);

    // contact reason
    var reasonList = document.getElementById("reasonList");
    reasonList.addEventListener("focus", function() {
        reasonList.value = '';
    });

    // message
    var messageInput = document.getElementById("messageInput");
    var messageError = document.createElement("div");
    var messageMsj = '* Invalid message. Must contain numbers and letters and more than 3 characters.';
    validateInput(messageInput, messageError, validateMessage, messageMsj);

    // -- Functions -- //

    // Contains letters
    function contLetters(inputValue){
        var letter = false;
        for (var i = 0; i < inputValue.length; i++) {
            var codigo = inputValue[i].charCodeAt(0);
            if ((codigo >= 65 && codigo <= 90) || 
                (codigo >= 97 && codigo <= 122)) {
              letter = true;
            } 
        }
        return letter;
    }

    // Contains numbers
    function contNumbers(inputValue){
        var number = false;
        for (var i = 0; i < inputValue.length; i++) {
            if (!isNaN(inputValue[i])) {
                number = true;
              }
        }
        return number;
    }

    // Contains character special
    function contSpecialChar(inputValue) {
        var speChar = false;
        var specialChar = "/[!@#$%^&*()_+-=[]{};':\|,.<>/?]+/";
        for (var i = 0; i < inputValue.length; i++) {
            if (specialChar.indexOf(inputValue.charAt(i)) != -1) {
                speChar = true;
            }
        }
        return speChar;
    }
    
    //Validate only letters and more than 3 characters.
    function validateName(inputValue) {
        var isValid = false;
        if (!contSpecialChar(inputValue) && contLetters(inputValue) && !contNumbers(inputValue) && 
            inputValue.length >= 3) {
          isValid = true;
        }
        return isValid;
    }

    //Validate numbers and letters and more than 3 characters.
    function validateMessage(inputValue) {
        var isValid = false;
        if (!contSpecialChar(inputValue) && contLetters(inputValue) && inputValue.length >= 3) {
            isValid = true;
        }
        return isValid;
    }

    //Validate email format
    function validateEmail(inputValue) {
        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        return emailExpression.test(inputValue);
    }

    //Generic function to show errors
    function validateInput(inputElement, errorElement, validationFunction, msj) {

        var valueInicial = inputElement.value;
        inputElement.onblur = function() {
            var value = inputElement.value;
            var isValid = validationFunction(value);
  
            if ((value !== valueInicial) && (!isValid)){
                inputElement.classList.add("input-error");
                errorElement.textContent = msj;
                inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
                errorElement.classList.add("error");
            } else {
                inputElement.classList.remove("input-error");
                errorElement.textContent = '';
            }
            inputElement.addEventListener("focus", function() {
                inputElement.classList.remove("input-error");
                errorElement.textContent = '';
            });
        }
    }
    
    // Send it event
    document.getElementById("button-send").addEventListener("click", function() {
        // Valid empty fields
        if ((nameInput.value.trim().length !== 0) && 
            (lnameInput.value.trim().length !== 0) && 
            (emailInput.value.trim().length !== 0) &&
            (messageInput.value.trim().length !== 0) && 
            (reasonList.value.trim().length !== 0))  {

            // Valid error fields
            if ((nameError.textContent  == '') && 
                (lnameError.textContent  == '') && 
                (emailError.textContent  == '') && 
                (messageError.textContent  == '')){

                alert('Data sent: ' + '\n' +
                      'Name: ' + nameInput.value + '\n' + 
                      'Last name: ' + lnameInput.value + '\n' + 
                      'Email: ' + emailInput.value + '\n' + 
                      'Contact reason: ' + reasonList.value + '\n' + 
                      'Message: ' + messageInput.value);

            } else {
                var errorMsg = '';
                if (nameError.textContent !== ''){
                    errorMsg += nameMsj + '\n';
                }
                if (lnameError.textContent !== ''){
                    errorMsg += lnameMsj + '\n';
                }
                if (emailError.textContent !== ''){
                    errorMsg += emailMsj + '\n';
                }
                if (messageError.textContent !== ''){
                    errorMsg += messageMsj + '\n';
                }
                alert(errorMsg);
            }
        }else{
            alert('* Complete the fields to enter');
        }
    });

    // Clear event
    document.getElementById("button-clear").addEventListener("click", function() {
        nameInput.value = '';
        lnameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
        reasonList.value = '';
        nameError.textContent = '';
        lnameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
    });

}