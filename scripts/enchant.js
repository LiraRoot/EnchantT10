

let failstack = 0;


function click(attempt) {
    const randomNum = Math.random()
    const result = attempt/100

    if (randomNum <= result){
        return 'T10 Passed';
    }
    else{

        return
        failstack++
        attempt += 0.02

        console.log(attempt)
    }
}

console.log(failstack)
console.log(click(10))

