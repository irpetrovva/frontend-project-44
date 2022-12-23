import code from "../src/cli.js"
import readlineSync from 'readline-sync'

function nod() {
    let name = code()
    for(let i =0 ; i < 3;i++){
    let min = 1
    let max = 100
     let a = Math.round(Math.random() * (max - min) + min)
     
     let b = Math.round(Math.random() * (max - min) + min)
     
     let givenNymbers = console.log(`Find the greatest common divisor of given numbers.`)
     let question = console.log(`Question: ${a} ${b} `);
     let answer = parseInt(readlineSync.question(`Your answer:`));
     let res = 1
     if( a <= b ){
        for(let i = 1; i <= a; i++){
            if(a % i == 0 && b % i == 0){
                res = i;
            }
        }if(res == answer){
                console.log('Correct');
            }else{
                console.log(`Question: ${a} ${b}\n Your answer: ${answer}\n  ${answer} is wrong answer ;(.\n Correct ancwer was ${res}\n Let's try again, ${name}! `)
                return
             }
    } else if  (a > b){
            for(let j = 1; j <= b; j++){
                if(a % i == 0 && b % i == 0){
                    res = i;
                   
            }
        } if(res == answer){
            console.log('Correct');
    }else{
            console.log(`Question: ${a} ${b}\n Your answer: ${answer}\n  ${answer} is wrong answer ;(.\n Correct ancwer was ${res}\n Let's try again, ${name}! `)
            return
         }
        
    
    }

    if(i == 2){
        console.log(`Congratulations, ${name} !`)
 }
    }
}
nod()