const generateBtn = document.querySelector('.btn-generate');
const password = document.querySelector('.passkey');
const passwordLength = document.querySelector('#length');

generateBtn.addEventListener('click', function (length) {
    length=passwordLength.value

    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
   // const charset = '0123456789' 
   let result = "";
 
    for (let i = 0; i < length; i++) {
       const randomIndex = Math.floor(Math.random() * charset.length);
       result += charset[randomIndex];
    }
    password.insertAdjacentHTML('afterbegin',`<p class="blank"></p>`)
    password.insertAdjacentHTML('afterbegin',`<p class="generated-password">${result}</p>`)
    return result;
 }
)