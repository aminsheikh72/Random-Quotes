const dice = document.querySelector(".box img");
const h1 = document.querySelector("#quote")
const h2 = document.querySelector("#randomQuote")

const rollDice = ()=>{
    return Math.floor(Math.random()* 6 + 1)
}




const change = ()=>{
let rollA = rollDice();
dice.setAttribute("src", `./img${rollA}.png`)
h2.innerText =`"Quote ${rollA}"`
h1.style.display = "block"

console.log(rollA)
if(rollA===1){
    h1.innerText = `"In coding, every error is a lesson and every solution a triumph"`
}
else if(rollA===2){
    h1.innerText =`"A developer's life: Eat, Code, Debug, Repeat"`
}
else if(rollA===3){
    h1.innerText = `"A coder's life is proof that creativity and logic can coexist"`
}
else if(rollA===4){
    h1.innerText = `"Programmers don't age, we just update to newer versions"`
}
else if(rollA===5){
    h1.innerText = `"To code is to build a world where imagination meets execution"`
}
else if(rollA===6){
    h1.innerText = `"To live the coding life is to write fail, fix and learn endlessly"`
}
let randomRotation = Math.floor(Math.random() * 360);
    dice.style.transform = `rotate(${randomRotation}deg)`;
    dice.style.transition = `all ease-in-out 0.2s`;


}



dice.addEventListener("click",change)
