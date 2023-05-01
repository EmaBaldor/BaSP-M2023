window.onload = function() {
    // Home event
    document.getElementById("home").addEventListener("click", function() {
        window.location.href = "index.html";
    });
    // name
    var nameInput = document.getElementById("nameInput");
    var nameError = document.createElement("span");
    var nameMsj = '* Invalid name. Letters only and more than 3 characters.'
    validateInput(nameInput, nameError, validateName, nameMsj);
    // lname
    var lnameInput = document.getElementById("lnameInput");
    var lnameError = document.createElement("span");
    var lnameMsj = '* Invalid last name. Letters only and more than 3 characters.'
    validateInput(lnameInput, lnameError, validateName, lnameMsj);
    // DNI
    var dniInput = document.getElementById("dniInput");
    var dniError = document.createElement("span");
    var dniMsj = '* Invalid DNI. Numbers only and more than 7 characters.'
    validateInput(dniInput, dniError, validateDni, dniMsj);
    // birth date
    var dateInput = document.getElementById("dateInput");
    var dateError = document.createElement("span");
    var dateMsj = '* Invalid date. Must be over 8 years old.'
    validateInput(dateInput, dateError, validateDate, dateMsj);
    // telephone number
    var telInput = document.getElementById("telInput");
    var telError = document.createElement("span");
    var telMsj = '* Invalid telephone number. only 10 numbers.'
    validateInput(telInput, telError, validateTel, telMsj);
    // address
    var addrInput = document.getElementById("addrInput");
    var addrError = document.createElement("span");
    var addrMsj = '* Invalid address. At least 5 characters with letters, numbers and a space in between.'
    validateInput(addrInput, addrError, validateAddress, addrMsj);
    // location
    var locInput = document.getElementById("locInput");
    var locError = document.createElement("span");
    var locMsj = '* Invalid location. More than 3 characters.'
    validateInput(locInput, locError, validateLocation, locMsj);
    // postal code
    var posInput = document.getElementById("posInput");
    var posError = document.createElement("span");
    var posMsj = '* Invalid postal code. Numbers only and must have between 4 and 5 numbers.'
    validateInput(posInput, posError, validatePostal, posMsj);
    // email
    var emailInput = document.getElementById("emailInput");
    var emailError = document.createElement("span");
    var emailMsj = '* Invalid email'
    validateInput(emailInput, emailError, validateEmail, emailMsj);
    // password
    var passInput = document.getElementById("passInput");
    var passError = document.createElement("span");
    var passMsj = '* Invalid password. Must contain numbers and letters and more than 8 characters.'
    validateInput(passInput, passError, validatePassword, passMsj);
    // password repeat
    var rpassInput = document.getElementById("rpassInput");
    var rpassError = document.createElement("span");
    var rpassMsj = '* Repeated password invalid. It does not match the password entered.'
    validateInput(rpassInput, rpassError, validatePasswordRep, rpassMsj);

    var inputs = document.getElementsByTagName("input");
    var spans = document.getElementsByTagName("span");

    // -- Functions -- //
    // Contains letters
    function contLetters(inputValue){
        var letter = false;
        for (var i = 0; i < inputValue.length; i++) {
            var codigo = inputValue[i].charCodeAt(0);
            if ((codigo >= 65 && codigo <= 90) || (codigo >= 97 && codigo <= 122)) letter = true;
        } return letter; 
    }
    // Contains numbers
    function contNumbers(inputValue){
        var number = false;
        for (var i = 0; i < inputValue.length; i++) {
          if (!isNaN(parseInt(inputValue[i]))) number = true;
        } return number;
    }
     // Contains spaces
     function contSpaces(inputValue){
        var space = false;
        var cont = 0;
        for (var i = 0; i < inputValue.length; i++) {
            if ((inputValue[i]) === ' ') {
                    cont++;
                    space = true;    
                    if (cont > 1) space = false;
                }
        } return space;
    }
    //Convert date
    function convertDate(date) {
        var date_parts = date.split('-');
        var newDate = date_parts[1] + '/' + date_parts[2] + '/' + date_parts[0];
        return newDate
    }
    // Contains character special
    function contSpecialChar(inputValue) {
        var speChar = false;
        var specialChar = "/[!@#$%^&*()_+-=[]{};':\|,.<>/?]+/";
        for (var i = 0; i < inputValue.length; i++) {
            if (specialChar.indexOf(inputValue.charAt(i)) != -1) speChar = true;
        } return speChar;
    }
    //Validate only letters and more than 3 characters.
    function validateName(inputValue) {
        var isValid = false;
        if (!contSpecialChar(inputValue) && contLetters(inputValue) && !contNumbers(inputValue) && 
            inputValue.length >= 3) isValid = true;
        return isValid;
    }
    //Validate only numbers and more than 7 characters
    function validateDni(inputValue) {
        var isValid = false;
        if (!isNaN(inputValue) && inputValue.length >= 7) isValid = true;
        return isValid;
    }
    //Validate only 10 numbers
    function validateTel(inputValue) {
        var isValid = false;
        if (!isNaN(inputValue) && inputValue.length == 10) isValid = true;
        return isValid;
    }
    //Validate year < 8
    function validateDate(inputValue) {
        var isValid = false;
        var dateNow = new Date();
        var year = dateNow.getFullYear();
        if ((inputValue.substring(0,4) < (year-8)) && (inputValue.length == 10)) isValid = true;
        return isValid;
    }
    //Validates at least 5 characters with letters, numbers and a space in between.
    function validateAddress(inputValue) {
        var isValid = false;
        if (!contSpecialChar(inputValue) && contSpaces(inputValue) && contLetters(inputValue) && 
            contNumbers(inputValue) && inputValue.length > 5) isValid = true;
        return isValid;
    }
    //Validate more than 3 characters.
    function validateLocation(inputValue) {
        var isValid = false;
        if (!contSpecialChar(inputValue) && contLetters(inputValue) && inputValue.length >= 3) isValid = true;
        return isValid;
    }
    //Validate numbers only and must have between 4 and 5 numbers.
    function validatePostal(inputValue) {
        var isValid = false;
        if (!contLetters(inputValue) && contNumbers(inputValue) && inputValue.length >= 4 && 
            inputValue.length <= 5) isValid = true;
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
        if (!contSpecialChar(inputValue) && contLetters(inputValue) && contNumbers(inputValue) && 
            inputValue.length >= 8) isValid = true;
        return isValid;
    }
    //Validate password vs password repeat.
    function validatePasswordRep(inputValue) {
        var isValid = false;
        if (inputValue === passInput.value) isValid = true;
        return isValid;
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
    // Valid empty fields
    function inputEmpty(){
        var empty = false
        for (var i = 0; i < inputs.length; i++){
            if (inputs[i].value == '') empty = true
        }
        return empty
    }
    // Convert to Query Params
    function convertToQueryParams(data) {
        var qParams = '?';
        for (var key in data) {
            qParams += key + '=' + data[key] + '&';
        }
        qParams = qParams.slice(0, -1);
        return qParams
    }
    // Send data
    function sendData(){
        var data = {
            name: nameInput.value,
            lastName: lnameInput.value,
            dni: parseInt(dniInput.value),
            dob: convertDate(dateInput.value),
            phone: parseInt(telInput.value),
            address: addrInput.value,
            city: locInput.value,
            zip: parseInt(posInput.value),
            email: emailInput.value,
            password: passInput.value
        };
        var queryParams = convertToQueryParams(data);
        var url = 'https://api-rest-server.vercel.app/signup'+ queryParams;
        fetch(url)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                return response.json().then(function(error) {
                    throw new Error(JSON.stringify(error));
                });
            }
        })
        .then(function (data) {
            //console.log(data.data.id);
            if (data.success){
                var message = "Employee created:\n";
                for (var key in data.data) {
                    message += key + ": " + data.data[key] + "\n";
                }
                alert(message);
            } else {
                throw new Error('Login not successful');
            }
        })
        .catch(function (error) {
            var errorObj = JSON.parse(error.message);
            var errors = errorObj.errors;
            var msg = "";
            for (var i in errors) {
                msg += errors[i].msg + "\n";
            }
            alert('Errors: \n' + msg);
        })
    }
    // Register event
    document.getElementById("register").addEventListener("click", function() {
        // Valid empty fields
        if (inputEmpty()) {
            alert('* Complete the fields to enter')
        } else {
            sendData();
        }
    });
}






















