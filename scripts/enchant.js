

let failstack = 0;
let chancePassar = 3;

function attempt (click){
    if (click === true) {
        return console.log('Passed')
    }

    else {
        failstack++ 
        chancePassar += 0.2
        }
}

attempt(false)

console.log(failstack, chancePassar)