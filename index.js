alert("Boo!")

const randomnumberthing = parseInt(Math.random() * 100)+1;

let tryit = parseInt(prompt("Guess which number i'm thinking of."))
let tries = 1;

while (tryit != randomnumberthing){
    if(tryit > randomnumberthing){
        tries++;
        tryit = prompt("Lower.");
    }
    else if(tryit < randomnumberthing){
        tries++;
        tryit = prompt("Higher.");
    }
    
    else if (tryit == randomnumberthing){    
        alert("Oh nice.");
        break
    }
    else if(tryit == "test"){
        alert("We've got a developer over here...");
        break
    }
}


console.log(randomnumberthing)
console.log ("Number of tries: " + tries)