console.log("Hello, world");

//Tengo 19 años con 4 meses y 3 dias, ¿cuántos segundos he vivido?

var miEdad = 19;

//DIAS
var año = 365;
var mes = 30;

//SEGUNDOS
var segundosDeUnAño = 2592000 * 12;
var segundosDeUnMes = 86400 * 30;
var segundosDeUnDia = 24 * 3600;
var segundosDeUnaHora = 3600;
var segundosDeUnMinuto = 60;

console.log("Tengo" + " " + miEdad + " años");
console.log(
  "Esquivalente a " +
    (segundosDeUnAño * 19 + segundosDeUnMes * 4 + segundosDeUnDia * 3) +
    " segundos vividos :)"
);
