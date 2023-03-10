const msg = document.querySelector('.errorMessage');
const btn = document.querySelector('button');
const input = document.querySelector('input[type=email]');

function validateEmail(email) {
    if (email.indexOf("@gmail.com") === -1) {
      return "Oops! Please check your email";
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