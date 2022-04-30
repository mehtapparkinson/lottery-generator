//SELECTORS

const num1 = document.querySelector("#one")
const num2 = document.querySelector("#two")
const num3 = document.querySelector("#three")
const num4 = document.querySelector("#four")
const num5 = document.querySelector("#five")

const star1 = document.querySelector("#starOne")
const star2 = document.querySelector("#starTwo")

//FUNCTIONS

function generateNumber () {
   let numberOne = Math.floor((Math.random() * 50) + 1);
   let numberTwo = Math.floor((Math.random() * 50) + 1);
   let numberThree = Math.floor((Math.random() * 50) + 1);
   let numberFour = Math.floor((Math.random() * 50) + 1);
   let numberFive = Math.floor((Math.random() * 50) + 1);
   num1.textContent = numberOne;
   num2.textContent = numberTwo;
   num3.textContent = numberThree;
   num4.textContent = numberFour;
   num5.textContent = numberFive;
}

function generateStarNumber () {
    let starNumberOne = Math.floor((Math.random() * 12) + 1);
    let starNumberTwo = Math.floor((Math.random() * 12) + 1);

    star1.textContent = starNumberOne;
    star2.textContent = starNumberTwo;
}

//BUTTON

const button = document.querySelector("button")


button.addEventListener("click", function () {
    generateNumber();
    generateStarNumber();
})

