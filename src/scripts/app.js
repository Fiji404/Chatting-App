const optionbtn = document.querySelector('.writing-option--friend');
const friendcontent = document.querySelector('.friend-content--hidden');
const friendtext = document.querySelector('.friendopt');
let inputcode = document.querySelector('.input-code');

optionbtn.addEventListener('click', () => {
    friendcontent.classList.add('visible');
    friendtext.classList.add('hidden')
});

function lengthValid() {
    if (inputcode.value.length > inputcode.maxLength) {
        inputcode.value = inputcode.value.slice(0, inputcode.maxLength);
    };
};