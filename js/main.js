const inputNumber = document.querySelector('#input-set');
const btnCheck = document.querySelector('#btn-check');
const btnChange = document.querySelector('#btn-change');
const score = document.querySelector('#score');
const titleApp = document.querySelector('#title');



let celsius 
let temp


const handleConversion = () => {
    const fahrenheit = () => {
        celsius = inputNumber.value;
        if(celsius != ""){
            temp = celsius * 1.8 + 32;
            score.textContent = temp;
        } else {
            alert("Musisz podać jakąś wartość!")
        }
    }
    fahrenheit();
}



btnCheck.addEventListener('click', handleConversion)


// btnArr.map(button => {
//     if(button.classList.contains("converter__btn-check")){
//         button.addEventListener('click', () => {
//             console.log("Hi");
//         })
//     }
//     if(button.classList.contains("converter__input")){
//         const value = button.getAttribute("value");
//         button.addEventListener('click', () => {
//             console.log(value);
//         })
//     }
// })












