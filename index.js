
const number = document.querySelector(".iNumber"),
    date = document.querySelector(".iDate"),
    cvv = document.querySelector(".iCvv");

const maskNumber = "****-****-****-****",
    maskDate = "**/**",
    maskCvv = "***";

let current = "";
let iNumber = [];
let iDate = [];
let iCvv = [];


const handleInput = (mask, key, array) => {
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    if(key === "Backspace"){
        array.pop();
        return
    }

    if(numbers.includes(key) && array.length + 1 <= mask.length){
        if(mask[array.length] === "-" || mask[array.length] === "/"){
            array.push(mask[array.length], key)
        }else{
            array.push(key)
        }
    }
}

number.addEventListener("keydown", (e) => {
    if(e.key === "Tab"){
        return;
    }

    e.preventDefault();
    handleInput(maskNumber, e.key, iNumber);
    number.value = iNumber.join("");

});

date.addEventListener("keydown", (e) => {
    if(e.key === "Tab"){
        return;
    }

    e.preventDefault();
    handleInput(maskDate, e.key, iDate);
    date.value = iDate.join("");
})

cvv.addEventListener("keydown", (e) => {
    if(e.key === "Tab"){
        return
    }

    e.preventDefault();
    handleInput(maskCvv, e.key, iCvv);
    cvv.value = iCvv.join("");
})

/* background change */
const skin = document.querySelector(".skin");

skin.addEventListener("click", () => {
    randomHexColor();
    document.body.style.setProperty("--mainColor",  randomHexColor());                              //Actualiza el color principal
    localStorage.setItem("color", document.body.style.getPropertyValue("--mainColor"));             //Guarda el color en el localStorage
});


window.addEventListener("load", () => {                                                             //Carga el color del localStorage al reiniciar la pagina
    document.body.style.setProperty("--mainColor", localStorage.getItem("color"));
});

const randomInteger = (max) => {
    return Math.floor(Math.random() * (max * 1));
};

const randomRgbColor = () => {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
};

const randomHexColor = () => {
    let [r,g,b] =randomRgbColor();
    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');

    return "#" + hr + hg + hb;
} 




