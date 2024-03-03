
let failstack = 0;

function attemptT10 (valorBase){

    valorBase = 3/100;

    const chanceReal = valorBase + ((0.2/100) * failstack)
    

    randomNum = Math.random()

    if (randomNum <= chanceReal){
        return console.log('T10 Passed')
    } else {
        failstack++
        console.log('Falha ao despertar, chance de passar: '  + chanceReal.toFixed(3) + ' Failstacks: ' + failstack)
    }

}


let buttonT10 = document.getElementById("T10Button")
buttonT10.addEventListener("click", attemptT10)

