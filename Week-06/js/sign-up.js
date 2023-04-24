window.onload = function() {
    
    // Home event
    document.getElementById("home").addEventListener("click", function() {
        window.location.href = "index.html";
    });

    // name
    var nameInput = document.getElementById("nameInput");
    var nameError = document.createElement("div");
    var nameMsj = '* Invalid name. Letters only and more than 3 characters.'
    validateInput(nameInput, nameError, nameInput.value, validateName, nameMsj);

    // lname
    var lnameInput = document.getElementById("lnameInput");
    var lnameError = document.createElement("div");
    var lnameMsj = '* Invalid last name. Letters only and more than 3 characters.'
    validateInput(lnameInput, lnameError, lnameInput.value, validateName, lnameMsj);

    // DNI
    var dniInput = document.getElementById("dniInput");
    var dniError = document.createElement("div");
    var dniMsj = '* Invalid DNI. Numbers only and more than 7 characters.'
    validateInput(dniInput, dniError, dniInput.value, validateDni, dniMsj);

    // birth date
    var dateInput = document.getElementById("dateInput");
    var dateError = document.createElement("div");
    var dateMsj = '* Invalid birth date. Correct format dd/mm/yyyy.'
    validateInput(dateInput, dateError, dateInput.value, validateDate, dateMsj);

    // telephone number
    var telInput = document.getElementById("telInput");
    var telError = document.createElement("div");
    var telMsj = '* Invalid telephone number. only 10 numbers.'
    validateInput(telInput, telError, telInput.value, validateTel, telMsj);

    // address
    var addrInput = document.getElementById("addrInput");
    var addrError = document.createElement("div");
    var addrMsj = '* Invalid address. At least 5 characters with letters, numbers and a space in between.'
    validateInput(addrInput, addrError, addrInput.value, validateAddress, addrMsj);

    // location
    var locInput = document.getElementById("locInput");
    var locError = document.createElement("div");
    var locMsj = '* Invalid location. More than 3 characters.'
    validateInput(locInput, locError, locInput.value, validateLocation, locMsj);

    // postal code
    var posInput = document.getElementById("posInput");
    var posError = document.createElement("div");
    var posMsj = '* Invalid postal code. Numbers only and must have between 4 and 5 numbers.'
    validateInput(posInput, posError, posInput.value, validatePostal, posMsj);

    // email
    var emailInput = document.getElementById("emailInput");
    var emailError = document.createElement("div");
    var emailMsj = '* Invalid email'
    validateInput(emailInput, emailError, emailInput.value, validateEmail, emailMsj);

    // password
    var passInput = document.getElementById("passInput");
    var passError = document.createElement("div");
    var passMsj = '* Invalid password. must contain numbers and letters and more than 8 characters.'
    validateInput(passInput, passError, passInput.value, validatePassword, passMsj);

    // password repeat
    var rpassInput = document.getElementById("rpassInput");
    var rpassError = document.createElement("div");
    var rpassMsj = '* Invalid password. must contain numbers and letters and more than 8 characters.'
    validateInput(rpassInput, rpassError, rpassInput.value, validatePassword, rpassMsj);

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
        return letter
    }

    // Contains numbers
    function contNumbers(inputValue){
        var number = false;
        for (var i = 0; i < inputValue.length; i++) {
            if (!isNaN(inputValue[i])) {
                number = true;
              }
        }
        return number
    }

    // Contains spaces
    function contSpaces(inputValue){
        var space = false;
        for (var i = 0; i < inputValue.length; i++) {
            if ((inputValue[i]) === ' ') {
                space = true;
                }
        }
        return space
    }
    
    //Validate only letters and more than 3 characters.
    function validateName(inputValue) {
        var isValid = false;
        if (contLetters(inputValue) && !contNumbers(inputValue) && inputValue.length >= 3) {
          isValid = true;
        }
        return isValid;
    }

    //Validate only numbers and more than 7 characters
    function validateDni(inputValue) {
        var isValid = false;
        if (!isNaN(inputValue) && inputValue.length >= 7) {
            isValid = true;
        }
        return isValid;
    }

    //Validate format dd/mm/yyyy
    function validateDate(inputValue) {
        var isValid = false;
        if ((inputValue.length == 10) && 
            (!isNaN(inputValue.substring(0,2))) &&
            (inputValue.substring(2,3) === '/') &&
            (!isNaN(inputValue.substring(3,5))) &&
            (inputValue.substring(5,6) === '/') &&
            (!isNaN(inputValue.substring(6,10))) ){
            isValid = true;
        }
        return isValid;
    }

    //Validate only 10 numbers
    function validateTel(inputValue) {
        var isValid = false;
        if (!isNaN(inputValue) && inputValue.length == 10) {
            isValid = true;
        }
        return isValid;
    }

    //Validates at least 5 characters with letters, numbers and a space in between.
    function validateAddress(inputValue) {
        var isValid = false;
        if (contSpaces(inputValue) && contLetters(inputValue) && contNumbers(inputValue) && 
            inputValue.length > 5) {
            isValid = true;
        }
        return isValid;
    }

    //Validate more than 3 characters.
    function validateLocation(inputValue) {
        var isValid = false;
        if (contLetters(inputValue) && inputValue.length >= 3) {
            isValid = true;
        }
        return isValid;
    }

    //Validate numbers only and must have between 4 and 5 numbers.
    function validatePostal(inputValue) {
        var isValid = false;
        if (!contLetters(inputValue) && contNumbers(inputValue) && 
            inputValue.length >= 4 && inputValue.length <= 5) {
            isValid = true;
        }
        return isValid;
    }

    //Validate email format
    function validateEmail(inputValue) {
        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        return emailExpression.test(inputValue);
    }

    //Validate numbers and letters and more than 8 characters.
    function validatePassword(inputValue) {
        var isValid = false;
        if (contLetters(inputValue) && contNumbers(inputValue) && 
            inputValue.length >= 8) {
            isValid = true;
        }
        return isValid;
    }

    //Generic function to show errors
    function validateInput(inputElement, errorElement, initialValue, validationFunction, msj) {

        var valueInicial = initialValue;
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
    
    // Register event
    document.getElementById("register").addEventListener("click", function() {
        // Valid empty fields
        if ((nameInput.value.trim().length !== 0) && 
            (lnameInput.value.trim().length !== 0) && 
            (dniInput.value.trim().length !== 0) && 
            (dateInput.value.trim().length !== 0) && 
            (telInput.value.trim().length !== 0) && 
            (addrInput.value.trim().length !== 0) && 
            (locInput.value.trim().length !== 0) && 
            (posInput.value.trim().length !== 0) && 
            (emailInput.value.trim().length !== 0) && 
            (passInput.value.trim().length !== 0) && 
            (rpassInput.value.trim().length !== 0)){

            // Valid error fields
            if ((nameError.textContent  == '') && 
                (lnameError.textContent  == '') && 
                (dniError.textContent  == '') && 
                (dateError.textContent  == '') && 
                (telError.textContent  == '') && 
                (addrError.textContent  == '') && 
                (locError.textContent  == '') && 
                (posError.textContent  == '') && 
                (emailError.textContent  == '') && 
                (passError.textContent  == '') && 
                (rpassError.textContent  == '') ){

                alert('Name: ' + nameInput.value + '\n' + 
                      'Last name: ' + lnameInput.value + '\n' + 
                      'Dni: ' + dniInput.value + '\n' + 
                      'Birth date: ' + dateInput.value + '\n' + 
                      'Telephone number: ' + telInput.value + '\n' + 
                      'Address: ' + addrInput.value + '\n' + 
                      'Location: ' + locInput.value + '\n' + 
                      'Postal code: ' + posInput.value + '\n' + 
                      'Email: ' + emailInput.value + '\n' + 
                      'Password: ' + passInput.value + '\n' + 
                      'Password repeat: ' + rpassInput.value);
                      
            } else {
                var errorMsg = '';
                if (nameError.textContent !== ''){
                    errorMsg += nameMsj + '\n';
                }
                if (lnameError.textContent !== ''){
                    errorMsg += lnameMsj + '\n';
                }
                if (dniError.textContent !== ''){
                    errorMsg += dniMsj + '\n';
                }
                if (dateError.textContent !== ''){
                    errorMsg += dateMsj + '\n';
                }
                if (telError.textContent !== ''){
                    errorMsg += telMsj + '\n';
                }
                if (addrError.textContent !== ''){
                    errorMsg += addrMsj + '\n';
                }
                if (posError.textContent !== ''){
                    errorMsg += posMsj + '\n';
                }
                if (emailError.textContent !== ''){
                    errorMsg += emailMsj + '\n';
                }
                if (passError.textContent !== ''){
                    errorMsg += passMsj + '\n';
                }
                if (rpassError.textContent !== ''){
                    errorMsg += rpassMsj + '\n';
                }
                alert(errorMsg);
            }
        }else{
            alert('* Complete the fields to enter')
        }
    });
    
}






















