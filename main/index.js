const frm = document.querySelector("form");
const nameText = document.querySelector(".name").value;
const ageText = document.querySelector(".age").value;
const button = document.querySelector(".first-button");

let listPerson = [];

function styleMod() {
    const divChose = document.querySelector(".chose-resp");
    divChose.style.display = 'block';
}


let boll = true;

const mostrarButton = document.querySelector(".mostrarButton");

const finalizarButton = document.querySelector(".finalizarButton");
const addButton = document.querySelector(".addButton");

addButton.addEventListener("submit", e => {
    e.preventDefault();

    while(boll){
        listPerson.push(nameText, ageText);
    
        if(finalizarButton.addButton("submit", e => {styleMod(); e.preventDefault()})){
            boll = false;
        }
    }
    
});

console.log(listPerson);
mostrarButton.addEventListener('submit', e => {
    const chose = document.querySelector(".chose");
    const text = document.querySelector("");
});





