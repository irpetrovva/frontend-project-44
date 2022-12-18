import code from "../src/cli.js"
import readlineSync from 'readline-sync'
function checkEven(){
    
    let name = code()
    for(let i =0 ; i < 3;i++){
    let min = 0
    let max = 100
     let a = (Math.random() * (max - min) + min)
     let p = Math.round(a)
     
     let question = readlineSync.question(`Answer "yes" if the number is even, otherwise answer "no".\n Question: ${p} `)
    
    let answer = console.log(`Your answer: ${question}`)
    if(p % 2 == 0 && question == 'yes' || question == 'no' && p % 2 == 1) {
        console.log('Correct')
    }else{
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no\n'.
        Let's try again, ${name}!`)
        return
    }
    if(i == 2){
        console.log(`Congratulations, ${name} !`)
    }
}
    
}
checkEven()
