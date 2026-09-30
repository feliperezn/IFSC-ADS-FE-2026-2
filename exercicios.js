// Exercicio 1
let arraySoma = [1, 2, 3];

function somaArray(array) {
    let soma = 0;
    for (let n of array) {
        soma += n;
    }
    return soma;
}

console.log("Soma: " + somaArray(arraySoma));

// Exercicio 2
let arrayMedia = [1, 2, 3, 4, 5]

function mediaArray(array) {
    let media = 0;
    let soma = 0;

    for (let i of array) {
        soma += i;
    }

    media = soma / array.length;
    return media
}

console.log("Média :" + mediaArray(arrayMedia));

// Exercicio 3
let arrayMenor = [3, 6, 9]

function menorElemento(array) {
    let menor = Infinity;

    for (let i of array) {

        if (i < menor) {
            menor = i;
        }

        return menor;
    }
}

console.log("Menor elemento :" + menorElemento(arrayMenor));

// Exercicio 4
let arrayPrata = [3, 6, 9];

function medalhaPrata(array) {
    let maior = -Infinity;
    let segundoMaior = -Infinity;

    for (let i of array) {

        const atual = i;

        if (atual > maior) {
            segundoMaior = maior;
            maior = atual;
        }

    }
    return segundoMaior;
}

console.log("Segundo maior: " + medalhaPrata(arrayPrata));

// Exercicio 5
let arrayTodos = [1, 2, 3, 4, 5, 6];

function retornaImpar(array) {
    let arrayImpar = [];

    for (let i of array) {
        if (i % 2 != 0) {
            arrayImpar.push(i);
        }
    }

    return arrayImpar;
}

console.log("Array Impar: " + retornaImpar(arrayTodos));

// Exercicio 6
let arrayOrdenado = [1, 2, 3];

function retornaInverso(array) {
    let arrayInverso = [];

    let ultimoItem = array.length - 1;

    for (let i = ultimoItem; i >= 0; i--) {
        arrayInverso.push(array[i])
    }

    return arrayInverso;
}
// arrayOrdenado.reverse()

console.log("Array Inverso: " + retornaInverso(arrayOrdenado));

// Exercicio 7
let arrayVarios = [1, 5, 10, 21, 33, 58, 61, 63, 73, 81, 88, 96, 97, 99];

function histograma(array) {

}

// Exercicio 8
let arrayNomes = ["Joao", "Maria", "Jose"]

function verificaNome(array) {
    let nome = prompt("Digite um nome: ");
    nome = nome.toLowerCase();

    let encontrado = false;

    for (let i of array) {

        let item = i.toLowerCase();

        if (item.localeCompare(nome) === 0) {
            encontrado = true;
        }
    }

    if (encontrado) {
        alert("O nome está na lista!")
    } else {
        alert("O nome NÃO ESTÁ na lista!")
    }
}

verificaNome(arrayNomes)

// Exercicio 9
let arrayA = [1, 2, 3, 4, 5];
let arrayB = [1, 2, 3, 4, 5];


function comparar(array1, array2){
    let ehIgual = true;

    for (let i in array1){
        if (array1[i] != array2[i]){
            ehIgual = false;
            console.log("Arrays diferentes!");
            break;
        }
    }
    if (ehIgual == true){
        console.log("Arrays iguais!");
    }
}

comparar(arrayA, arrayB);

// Exercicio 10
let array = [1,2,3,4];

function removedor(array, index){
    array.splice(index, 1);
    console.log(array);
}

removedor(array, 3);

// Exercicio 11
let arrayPalindromo = [1,2,3,2,1];
let newArrayPalindromo = [];
let reverso = [];

function ehPalindromo(array1, array2){
    let ehIgual = true;

    for (let i in array1){
        if (array1[i] != array2[i]){
            ehIgual = false;
            console.log("Não é Palíndromo!");
            break;
        }
    }
    if (ehIgual == true){
        console.log("É Palíndromo!");
    }
}

if (Array.isArray(arrayPalindromo)){
    reverso = arrayPalindromo.toReversed();
    console.log(arrayPalindromo);
    console.log(reverso);

    ehPalindromo(arrayPalindromo, reverso);
} else {
    
    for (let i = 0; i < arrayPalindromo.length; i++) {
        newArrayPalindromo.push(arrayPalindromo.charAt(i));
    }

    reverso = newArrayPalindromo.toReversed();

    console.log(newArrayPalindromo)
    console.log(reverso)

    ehPalindromo(newArrayPalindromo, reverso);
}


// Exercicio 12
let arrayInter1 = [1, 2,]

// 11. Palíndromo: Crie uma função que recebe um array de caracteres (ou uma string) e retorna se ele representa um palíndromo ou não.
// 12. Intercalador: Crie uma função que recebe dois arrays de mesmo tamanho e retorna um novo array intercalando os elementos de ambos. Por exemplo: ‘([1,2,3], [’a’,’b’,’c’])‘ deve retornar ‘[1,’a’,2,’b’,3,’c’]‘.
// 13. Compactador: Crie uma função que recebe um array de caracteres e retorna um novo ar-ray onde sequências consecutivas de elementos repetidos são substituídas por apenas uma ocorrência. Por exemplo: ‘[’a’,’a’,’b’,’b’,’b’,’c’,’a’,’a’]‘ deve retornar ‘[’a’,’b’,’c’,’a’]‘.