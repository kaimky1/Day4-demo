let backpack = [];

backpack.push("pokeball")
backpack.push("potion")
backpack.push("pokedollars")

// backpack.shift
backpack.splice(0,1);

let stone = "water stone";
backpack.push(stone)

backpack.pop()

// console.log(backpack.length)

backpack.push("great ball", "antitode", "revive")

let satchel = backpack.splice(3, 2)

// for(let i = 0; i < backpack.length; i++){
//     console.log(`This is the item at the index of ${i}: `,backpack[i])
// }

// for(let i = 0; i < backpack.length - 1; i++){
//     console.log(`This is the item at the index of ${i}: `,backpack[i])
   
// }

// if(backpack.length > 2){
//     for(let i = 0; i < backpack.length - 1; i++){
//         console.log(`This is the item at the index of ${i}: `,backpack[i])
       
//     }
// }else{
//     for(let i = 0; i < backpack.length; i++){
//     console.log(`This is the item at the index of ${i}: `,backpack[i])
// }
// }

// What is the final value of guessMe?

let guessMe = 54

while (guessMe < 100) {
    console.log("Value", guessMe)
    if (guessMe % 4 == 0 || guessMe % 5 == 0) {
        guessMe += 25
        console.log("Divisible by 4 or 5, added 25", guessMe)
    } else if (guessMe % 3 == 0) {
        guessMe -= 27
        console.log("Divisible by 3, subtracted 27", guessMe)

    } else {
        guessMe += 3
        console.log("Added 3", guessMe)

    }
    guessMe += 22
    console.log("Added 22", guessMe)
}
console.log("Final Value:", guessMe)

// console.log(backpack)
// console.log(satchel)