const arr = [
    [1,2,3],
    [4,5,6],
    [6,7,8]
];

// Consulta

//Atribuições com Arrys

// const chose = prompt("Escolha o va   lor que você não que ver: ");

let chose = 2;


if(chose = 1){
    const [fist, ...resto] = arr;
    console.log(resto)
}
if(chose = 2){
    const [fist,,third, ...resto] = arr;
    
    console.log(fist,third);
}

// Atribuições com Objs
let person = {
    Nome: "Pedro",
    Age: 18,
    Sexo: "Masculino",
    Endereco: {
        //Rua: "Dr Socorro Azevedo",
        Numero: 570,
        Bairro: "Luciano Cavalcante"
    }
};

const {Nome,SobreNome: SobreNome = "Cardoso", ...resto} = person;

//const {Age, ...resto} = person;

console.log(Nome,SobreNome);

console.log(resto);

