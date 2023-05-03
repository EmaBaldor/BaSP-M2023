window.onload = function() {
    var modal = document.getElementById("myModal");
    var closeButton = document.getElementsByClassName("close")[0];
    var modalMessage = document.getElementById("modalMessage");
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
    //
    var inputs = [nameInput,lnameInput,emailInput,reasonList,messageInput];
    var errors = [nameError,lnameError,emailError,messageError]
    // -- Functions -- //
    // Contains letters
    function contLetters(inputValue){
        var letter = false;
        for (var i = 0; i < inputValue.length; i++) {
            var code = inputValue[i].charCodeAt(0);
            if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) letter = true;
        }
        return letter;
    }
    // Contains numbers
    function contNumbers(inputValue){
        var number = false;
        for (var i = 0; i < inputValue.length; i++) {
            if (!isNaN(inputValue[i])) number = true;
        }
        return number;
    }
    // Contains character special
    function contSpecialChar(inputValue) {
        var speChar = false;
        var specialChar = "/[!@#$%^&*()_+-=[]{};':\|,.<>/?]+/";
        for (var i = 0; i < inputValue.length; i++) {
            if (specialChar.indexOf(inputValue.charAt(i)) != -1) speChar = true;
        }
        return speChar;
    }
    //Validate only letters and more than 3 characters.
    function validateName(inputValue) {
        var isValid = false;
        if (!contSpecialChar(inputValue) && contLetters(inputValue) && !contNumbers(inputValue) && 
            inputValue.length >= 3) isValid = true;
        return isValid;
    }
    //Validate numbers and letters and more than 3 characters.
    function validateMessage(inputValue) {
        var isValid = false;
        if (!contSpecialChar(inputValue) && contLetters(inputValue) && inputValue.length >= 3) isValid = true;
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
            if (!isValid){
                if (value === valueInicial) {
                    errorElement.textContent = 'Complete the field.';
                }else{
                    errorElement.textContent = msj;
                }
                inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
                inputElement.classList.remove("input-box");
                inputElement.classList.add("input-error");
                errorElement.classList.add("error");
            } else {
                inputElement.classList.remove("input-error");
                errorElement.textContent = '';
            }
            inputElement.addEventListener("focus", function() {
                inputElement.classList.remove("input-error");
                inputElement.classList.add("input-box");
                errorElement.textContent = '';
            });
        }
    }
    // Valid empty fields
    function inputEmpty(){
        var empty = false
        for (var i = 0; i < inputs.length; i++){
            if (inputs[i].value == '') empty = true
        }
        return empty
    }
    // Send it event
    document.getElementById("button-send").addEventListener("click", function() {
        // Valid empty fields
        if (inputEmpty()) {
            modal.style.display = "block";
            modalMessage.innerHTML = "* Complete the fields to enter.";
        } else {
            // Valid error fields
            if ((nameError.textContent  == '') && 
                (lnameError.textContent  == '') && 
                (emailError.textContent  == '') && 
                (messageError.textContent  == '')){
                var msg = '<b>Data sent:</b><br>' +
                            'Name: ' + nameInput.value + '<br>' + 
                            'Last name: ' + lnameInput.value + '<br>' + 
                            'Email: ' + emailInput.value + '<br>' + 
                            'Contact reason: ' + reasonList.value + '<br>' + 
                            'Message: ' + messageInput.value;
                modal.style.display = "block";
                modalMessage.innerHTML = msg;               
            } else {
                var errorMsg = '<b>Errors:</b><br>';
                if (nameError.textContent !== '') errorMsg += nameMsj + '<br>';
                if (lnameError.textContent !== '') errorMsg += lnameMsj + '<br>';
                if (emailError.textContent !== '') errorMsg += emailMsj + '<br>';
                if (messageError.textContent !== '') errorMsg += messageMsj + '<br>';
                modal.style.display = "block";
                modalMessage.innerHTML = errorMsg;
            }
        }
    });
    // Modal close event
    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });
    // Clear event
    document.getElementById("button-clear").addEventListener("click", function() {
        for (var i = 0; i < inputs.length; i++){
            inputs[i].value = ''
            if (i < 4) errors[i].textContent = ''
            inputs[i].classList.remove("input-error");
            inputs[i].classList.add("input-box");
        }
    });

}