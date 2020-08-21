/*jugarPiedraPapelTijera(a, b)
Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b
 que representen una jugada (piedra, papel, tijera) y dependiendo el devuelva un string 
 con un mensaje avisando qué jugada ganó (o si hubo empate)

console.log(jugarPiedraPapelTijera('tijera', 'piedra'))  // ¡Ganó piedra!
console.log(jugarPiedraPapelTijera('piedra', 'tijera'))  // ¡Ganó piedra!
console.log(jugarPiedraPapelTijera('papel', 'piedra'))   // ¡Ganó papel!
console.log(jugarPiedraPapelTijera('piedra', 'papel'))   // ¡Ganó papel!
console.log(jugarPiedraPapelTijera('papel', 'tijera'))   // ¡Ganó tijera!
console.log(jugarPiedraPapelTijera('tijera', 'papel'))   // ¡Ganó tijera!
console.log(jugarPiedraPapelTijera('piedra', 'piedra'))  // ¡Empate!
console.log(jugarPiedraPapelTijera('papel', 'papel'))    // ¡Empate!
console.log(jugarPiedraPapelTijera('tijera', 'tijera'))  // ¡Empate!
*/

// JUEGO DE CONSOLA PLAYER VS COMPU
// PIEDRA PEPEL O TIJERA ✋ ✌ ✊

//Dar bienvenida
//Juega player
//Juega compu
//Mostrar partida 1
//repetir x 3
//Comparar resultados
//Mostrar ganador
let contadorPlayer = 0, contadorCompu = 0;

const darBienvenida = () =>{

    console.log("*☆*――*☆*――*☆*――*☆*――*☆*――*☆*――*☆*――*☆*")
    console.log("    Bienvenido a Piedra Papel o Tijera    ")
    console.log("               ✋   ✌   ✊                 ")
    console.log("*☆*――*☆*――*☆*――*☆*――*☆*――*☆*――*☆*――*☆*")

}

const juegaPlayer = () => {

    console.log("¿Listo para jugar? ")
    console.log("¿Piedra, Papel o tijera? Elija una opción: ")
    let mano = console.log(" 1- ✊ Piedra 2- ✋ Papel  3- ✌ Tijera ")
    let queEligioPlayer = traducirMano(mano)
    console.log(`Elegiste  ${queEligioPlayer}`)
    console.log("-------------------------------------- ")

}

const juegaCompu = () => {

    console.log("Es el turno de la Computadora")
    console.log("¿Piedra, Papel o tijera?")

    let mano = 1 + Math.floor((3 - 1 ) * Math.random())  // tendria que darme 1, 2 o 3 aleatorio

    let queEligioCompu = traducirMano(mano)

    console.log(`La computadora eligió  ${queEligioCompu}`)

    return mano
}

let compararManos = (manoPlayer, manoCompu) => {
// 1- piedra 2 - papel 3- tijera

    if(manoPlayer == manoCompu){
        console.log("¡Empataron! 😐")
    }
    else if(manoPlayer == 1 && manoCompu == 2){
        console.log("¡Ganó la Compu! 😠")
        contadorCompu ++
    }
    else if(manoPlayer == 1 && manoCompu == 3){
        console.log("¡Ganaste! 😆")
        contadorPlayer ++
    }
    else if(manoPlayer == 2 && manoCompu == 1){
        console.log("¡Ganaste! 😆")
        contadorPlayer ++
    }
    else if (manoPlayer == 2 && manoCompu == 3){
        console.log("¡Ganó la Compu! 😠")
        contadorCompu ++
    }
    else if(manoPlayer == 3 && manoCompu == 1){
        console.log("¡Ganó la Compu! 😠")
        contadorCompu ++
    }
    else if(manoPlayer == 3 && manoCompu == 2){
        console.log("¡Ganaste! 😆")
        contadorPlayer ++
    }
    else {
      console.log("Lo sentimos, ha ocurrido un error inesperado")
    }
}
let traducirMano = (numero) => {

    switch (numero) {
        case 1:
            return "Piedra ✊"
            break;
        case 2:
            return "Papel ✋"
            break;
        case 3:
            return "Tijera ✌"
            break;
        default:
            break;
    }
}


// ALGORITMO

darBienvenida()

let manoPlayer = juegaPlayer()

let manoCompu = juegaCompu()

let ganoMano = compararManos(manoPlayer, manoCompu)  