const inputNumber = document.querySelector('#input-set');
const btnCheck = document.querySelector('#btn-check');
const btnChange = document.querySelector('#btn-change');
const score = document.querySelector('#score');
const subtitleApp = document.querySelector('#subtitle');

const btnChangeCel =document.querySelector('.converter__btn-deg-cel');
const btnChangeFar =document.querySelector('.converter__btn-deg-far');

const bcgCover = document.querySelector('.background-cover');

const modal = document.querySelector('.modal');
const modalMsg = document.querySelector('.modal__text');
const modalBtn = document.querySelector('.modal__cross');

let degrees 
let temp

//shows modal and cover background
const handleModal = (msg) => {
    modal.classList.add('modal--active');
    modalMsg.textContent = `${msg}`;
    bcgCover.classList.add('background-cover--active');
    modalBtn.addEventListener('click', ()=>{
            modal.classList.remove('modal--active');
            bcgCover.classList.remove('background-cover--active');
    })
}
//computes the swap
const handleConversion = () => {
    const scoreFahrenheit = () => {
        degrees = inputNumber.value;
        if(degrees != ""){
            temp = degrees * 1.8 + 32;
            score.textContent = `${temp} °F`;
        } else {
            handleModal("Musisz wpisać jakąś wartość!");
        }
    }
    
    const scoreCelsjus = () => {
        degrees = inputNumber.value;
        if(degrees != ""){
            temp = 5 / 9 * (degrees - 32)
            score.textContent = `${temp} °C`;
        } else {
            handleModal("Musisz wpisać jakąś wartość!");
        }
    }

    if(subtitleApp.textContent === "Celsjusz na Fahrenheit"){
        scoreFahrenheit();
    } else {
        scoreCelsjus();
    }
}

//changes the subtitle
const subtitleFar = () =>{
    subtitleApp.textContent = "Celsjusz na Fahrenheit";

}

const subtitleCel = () =>{
    subtitleApp.textContent = "Fahrenheit na Celsjusz";
}



btnChangeCel.addEventListener('click', subtitleCel);
btnChangeFar.addEventListener('click', subtitleFar);
btnCheck.addEventListener('click', handleConversion);