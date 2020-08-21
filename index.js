/*jugarPiedraPapelTijera(a, b)
Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b
 que representen una jugada (piedra, papel, tijera) y dependiendo el devuelva un string 
 con un mensaje avisando qué jugada ganó (o si hubo empate)

alert(jugarPiedraPapelTijera('tijera', 'piedra'))  // ¡Ganó piedra!
alert(jugarPiedraPapelTijera('piedra', 'tijera'))  // ¡Ganó piedra!
alert(jugarPiedraPapelTijera('papel', 'piedra'))   // ¡Ganó papel!
alert(jugarPiedraPapelTijera('piedra', 'papel'))   // ¡Ganó papel!
alert(jugarPiedraPapelTijera('papel', 'tijera'))   // ¡Ganó tijera!
alert(jugarPiedraPapelTijera('tijera', 'papel'))   // ¡Ganó tijera!
alert(jugarPiedraPapelTijera('piedra', 'piedra'))  // ¡Empate!
alert(jugarPiedraPapelTijera('papel', 'papel'))    // ¡Empate!
alert(jugarPiedraPapelTijera('tijera', 'tijera'))  // ¡Empate!
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

    alert("*☆*――*☆*――*☆*――*☆*――*☆*――*☆*――*☆*――*☆*")
    alert("    Bienvenido a Piedra Papel o Tijera    ")
    alert("               ✋   ✌   ✊                 ")
    alert("*☆*――*☆*――*☆*――*☆*――*☆*――*☆*――*☆*――*☆*")

}

const juegaPlayer = () => {

    alert("¿Listo para jugar? ")
    alert("¿Piedra, Papel o tijera? Ingrese el numero elegido ")
    let mano = prompt(" 1- ✊ Piedra 2- ✋ Papel  3- ✌ Tijera ")
    let queEligioPlayer = traducirMano(mano)
    alert(`Elegiste  ${queEligioPlayer}`)
    

}

const juegaCompu = () => {

    alert("Es el turno de la Computadora 💻 ")
    alert("¿Piedra, Papel o tijera?")

    let mano = 1 + Math.floor((3 - 1 ) * Math.random())  // tendria que darme 1, 2 o 3 aleatorio

    let queEligioCompu = traducirMano(mano)

    alert(`La computadora eligió  ${queEligioCompu}`)

    return mano
}

let compararManos = (manoPlayer, manoCompu) => {
// 1- piedra 2 - papel 3- tijera

    if(manoPlayer == manoCompu){
        alert("¡Empataron! 😐")
    }
    else if(manoPlayer == 1 && manoCompu == 2){
        alert("¡Ganó la Compu! 😠")
        contadorCompu ++
    }
    else if(manoPlayer == 1 && manoCompu == 3){
        alert("¡Ganaste! 😆")
        contadorPlayer ++
    }
    else if(manoPlayer == 2 && manoCompu == 1){
        alert("¡Ganaste! 😆")
        contadorPlayer ++
    }
    else if (manoPlayer == 2 && manoCompu == 3){
        alert("¡Ganó la Compu! 😠")
        contadorCompu ++
    }
    else if(manoPlayer == 3 && manoCompu == 1){
        alert("¡Ganó la Compu! 😠")
        contadorCompu ++
    }
    else if(manoPlayer == 3 && manoCompu == 2){
        alert("¡Ganaste! 😆")
        contadorPlayer ++
    }
    else {
      alert("Lo sentimos, ha ocurrido un error inesperado")
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

let saludar = () =>{
    alert(`💜 ¡Fue muy divertido jugar juntos! 💜 Bye Bye `)
}

let anunciarGanador = () => {
    if(contadorPlayer == contadorCompu){
        return "🔥🔥¡¡Hubo empate!!🔥🔥"
    }
    else if(contadorPlayer > contadorCompu){
        return "🎆🎆 ¡Ganaste! 🎆🎆"
    }
    else{
        return "👎👎¡Ganó la compu!Buuu!!👎👎"
    }

}
// ALGORITMO

darBienvenida()

do {

    for (let i = 0; i <= 3; i++) {

        alert(`Esta es la ronda ${i + 1}`)

        let manoPlayer = juegaPlayer()
    
        let manoCompu = juegaCompu()
        
        alert(`En la ronda ${i + 1} el resultado fue:  ${compararManos(manoPlayer, manoCompu)} `)
        
        
    }
    
    alert(`El resultado de las tres rondas es:  ${ anunciarGanador()} `)
   

    let seguirJugando = confirm("¿Querés volver a Jugar?")
    
} while (seguirJugando);

saludar()

