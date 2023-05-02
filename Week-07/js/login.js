window.onload = function () {
    // Home event
    document.getElementById("home").addEventListener("click", function () {
        window.location.href = "index.html";
    });
    //
    var modal = document.getElementById("myModal");
    var closeButton = document.getElementsByClassName("close")[0];
    var modalMessage = document.getElementById("modalMessage");
    // Valid email
    var emailInput = document.getElementById("emailInput");
    var emailError = document.createElement("div");
    var msjError = '* Invalid emai'
    validateInput(emailInput, emailError, validateEmail, msjError);
    //
    function validateEmail(email) {
        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        return emailExpression.test(email);
    }
    // Valid password
    var passInput = document.getElementById("passInput");
    var passError = document.createElement("div");
    var msjError = '* Invalid password. Must contain letters and numbers.';
    validateInput(passInput, passError, validatePassword, msjError);
    //
    function validatePassword(password) {
        var letter = false;
        var number = false;
        var isValid = false;
        //Valid one capital letter and numers
        for (var i = 0; i < password.length; i++) {
            var code = password[i].charCodeAt(0);
            if (!isNaN(password[i])) number = true;
            if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) letter = true;
            if (letter && number) isValid = true;
        }
        return isValid
    }
    //Generic function to show errors
    function validateInput(inputElement, errorElement, validationFunction, msj) {
        var valueInicial = inputElement.value;
        inputElement.onblur = function () {
            var value = inputElement.value;
            var isValid = validationFunction(value);
            if ((value !== valueInicial) && (!isValid)) {
                inputElement.classList.add("input-error");
                inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
                errorElement.classList.add("error");
                errorElement.textContent = msj;
            } else {
                inputElement.classList.remove("input-error");
                errorElement.textContent = '';
            }
        }
        inputElement.addEventListener("focus", function () {
            inputElement.classList.remove("input-error");
            errorElement.textContent = '';
        });
    }
    // Send data
    function sendData(){
        var queryParams = '?email=' + emailInput.value + '&password=' + passInput.value;
        var url = 'https://api-rest-server.vercel.app/login' + queryParams;
        fetch(url)
            .then(function (response) {
                if (response.ok) {
                    return response.json()
                } else {
                    return response.json().then(function(error) {
                        throw new Error(JSON.stringify(error));
                    });
                }
            })
            .then(function (data) {
                // Verify that the response has data
                if (data.success){
                    modal.style.display = "block";
                    modalMessage.innerHTML = data.msg;
                } else {
                    throw new Error('Login not successful');
                }
            })
            .catch(function (error) {
                var errorObj = JSON.parse(error.message);
                var titleError = '<b>Errors:</b><br>'
                modal.style.display = "block";
                if (errorObj.msg) {
                    modalMessage.innerHTML = titleError + errorObj.msg;
                } else if (errorObj.errors) {
                    var msg = '';
                    for (var i in errorObj.errors) {
                        msg += errorObj.errors[i].msg + '<br>';
                    }
                    modalMessage.innerHTML = titleError + msg;
                }
            });
    }
    // Modal close event
    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
        });
    // Sign-in event
    document.getElementById("sign-in").addEventListener("click", function () {
        // Valid empty fields
        if ((emailInput.value.trim().length !== 0) && (passInput.value.trim().length !== 0)) {
            sendData();
        } else {
            modal.style.display = "block";
            modalMessage.innerHTML = "* Complete the fields to enter.";
        }
    });

}