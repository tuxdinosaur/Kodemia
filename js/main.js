console.log('Hello, world')

//EJERCICIO 1//

for (var index = 0; index <= 100; index++) {
    if (index % 2 === 0) {
        console.log(`Indice ${index} es numero par`)
    }
    else {
        console.log(`${index} no es par `)
    }
}

//SINTAXIS FOR

//INICIALIZADOR
//COMPARADOR (CONDICION)
//INCREMENTO / DECREMENTO


//EJERCICIO 2//

var matriz = [['Ivan', 'Miguel'], ['Nuvo', 'Ivan']]
var nombre1 = matriz[0][0]
var apellido1 = matriz[0][1]

console.log(`${nombre1} ${apellido1}`)

function nombreCompleto(nombre1, nombre2) {

}

//EJERCICIO 2 RESPUESTA//

var data = [['a', 'perro'], ['a', 'gato'], ['a', 'cotorro']]
for (var index = 0; index < data.length; index++) {
    var firstName = data[index][0]
    var lastName = data[index][1]
    var fullName = `${firstName} ${lastName}`
    console.log(fullName)
}
for (var index = 0; index < data.length; index++) {
    console.log(`${data[index][0]} ${data[index][1]}`)
}

//EJERCICIO 3//

var matrizDeEntrada = ['p', 'e', 'r', 'r', 'o']
var index

for (index = 0; index < matrizDeEntrada.length; index++) {
    var palabra = matrizDeEntrada[index]
    console.log(`${palabra}`)
}

//EJERCICIO 3 RESPUESTA//

// Input 
var wordArray = ['p', 'e', 'r', 'r', 'o']
// Output
// 'perro'
function joinWord(wordArray) {
    var word = ''
    for (var index = 0; index < wordArray.length; index++) {
        var letter = wordArray[index]
        word += letter
    }
    return word
}