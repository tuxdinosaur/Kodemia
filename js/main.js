console.log('Hello, world')

//EJERCICIO 1//

var word = "Perros"

var letraUno = word[0]
var letraDos = word[1]
var letraTres = word[2]
var letraCuatro = word[3]
var letraCinco = word[4]

console.log(letraUno + letraDos + letraTres + letraCuatro + letraCinco)

//EJERCICIO 2//

var number = 50

if ((number >= 0 && number <= 100) && (number % 10 === 0)) {
    console.log('Rango de 0 y 100, ademas es divisible entre 10')
} else if (number % 10 === 0) {
    console.warn('Solo es multiplo de 10')
} else if (number >= 0 && number % 10 !== 0) {
    console.warn('Es positivo, no multiplo de 10')
} else {
    console.error('No está en el rango ni es múltiplo de 10')
}

//EJERCICIO 3//

console.log(`El resultado de 1 + 10 es: ${1 + 10}`)

//EJERCICIO 4//

var string = "tuxdinosaur"

if (string.length % 2 === 0) {
    console.log("La longitud de la palabra es un numero par")
    if (string.length > 0) {
        if (string.length <= 10) {
            console.log('la longitud es menor o igual a 10')
        } else if (string.length <= 15) {
            console.log('la longitud es mayor a 10 y menor o igual 15')
        } else {
            console.log('la longitud es mayor a 15')
        }
    }
} else {
    console.log('la longitud no es un numero par')
}