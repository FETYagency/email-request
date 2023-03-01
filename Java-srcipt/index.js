const msg = document.querySelector('.errorMesage');
const btn = document.querySelector('button');
const input = document.querySelector('input[type=email]');

function validateEmail(email) {
    if (email.indexOf("@gmail.com") === -1) {
      return "Invalid email address. Please use a Gmail account.";
    } else {
      return null;
    }
}

    btn.addEventListener("click", function() {
        const error = validateEmail(input.value);
        if (error) {
            msg.textContent= error;
        }
    });




