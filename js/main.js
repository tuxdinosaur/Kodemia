console.log('Hello, world')

//EJERCICIO 1//
//WHILE//

var numbers = [1, 2, 3, 4]
var count = 0
while (count < numbers.length) {
    console.log(numbers[count])
    count++
}

//EJERCICIO 2//
//DO WHILE//

var numbers = [1, 2, 3, 4]
var count = 0
do {
    console.log(numbers[count])
    count++
} while (count < numbers.length)

//EJERCICIO 3//
//FOR//

var numbers = [1, 2, 3, 4, 3, 'perrrrro']

// Iterador
for (var count = 0; count < numbers.length; count++) {
    console.log(numbers[count])
}

// Inverso
for (var count = numbers.length - 1; count >= 0; count--) {
    console.log(`Elemento ${numbers[count]} contador -> ${count}`)
}

//EJERCICIO 4//
//VERIFICAR LA PALABRA {WORD} TIENE AL MENOS 3 VOCALES//

var word = 'perro'
var vowels = 'aeiou'

var count = 0
var vowelsAmount = 0
while (count < word.length) {
    let letter = word[count]
    if (vowels.includes(letter)) {
        vowelsAmount++
    }
    count++
}

if (vowelsAmount >= 3) {
    console.log(`En efecto brou tiene ${vowelsAmount} vocales`);
} else {
    console.warn('Te falta brou');
}