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

const darBienvenida = () =>{

    console.log("*☆*――*☆*――*☆*――*☆*――*☆*――*☆*――*☆*――*☆*")
    console.log("    Bienvenido a Piedra Papel o Tijera    ")
    console.log("               ✋   ✌   ✊                 ")
    console.log("*☆*――*☆*――*☆*――*☆*――*☆*――*☆*――*☆*――*☆*")

}

const juegaPlayer = () => {

    console.log("¿Listo para jugar? ")
    console.log("¿Piedra, Papel o tijera? Elija una opción: ")
    console.log(" 1- ✊ Piedra 2- ✋ Papel  3- ✌ Tijera ")

}

const juegaCompu = () => {

    let mano = 

    return mano
}
// ALGORITMO

darBienvenida()

let manoPlayer = juegaPlayer()

let manoCompu = juegaCompu()