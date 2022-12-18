import code from "../src/cli.js"
import readlineSync from 'readline-sync'

function calc() {
    let name = code()
    for(let i =0 ; i < 3;i++){
        let min = 0;
        let max = 100;
        let random1 = Math.round(Math.random() * (max - min) + min)
        let random2 = Math.round(Math.random() * (max - min) + min)
        let random3 = '+-*';
        let randomIndex = Math.floor(Math.random() * random3.length);
        let randomLetter = random3[randomIndex];
        
        let question1 = BigInt(readlineSync.question(`What is the result of the expression?\n Question:  
        ${random1} ${randomLetter} ${random2} `));
        let answer1 = console.log(`Your answer: ${question1}`)

        
        
        if(randomLetter == '-' ) {
            let result = random1 - random2;
            if(question1 == result){
                console.log('Correct')
            
            }else{
                console.log(`${question1} is wrong answer;(.\n Cjrrect answer was ${result}`)
        }  
        } else if(randomLetter == '+'){
            let result2 = random1 + random2;
            if(question1 == result2){
                console.log('Correct')
            }else{
                console.log(`${question1} is wrong answer;(.\n Cjrrect answer was ${result2}`)
                return
            }
        } else{
            let result3 = random1 * random2   
            if(question1 == result3){
                console.log('Correct')
            }else{
                console.log(`${question1} is wrong answer;(.\n Cjrrect answer was ${result3}`)
        }
        }
    }
    }

calc()