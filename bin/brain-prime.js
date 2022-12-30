import code from "../src/cli.js"
import readlineSync from 'readline-sync'

function checkSimple(number){
    let countSimpleDel = 0;
    for(let i = 1; i < number; i++){

        if(number % i === 0){
            countSimpleDel += 1;
            

        }
    }if(countSimpleDel === 2){
        return 'yes';
    }else{
        return 'no';
    }

}
function prime(){
    let name = code();

    let max = 100;
    let min = 2;
   
    
    for(let i = 0 ; i < 3; i++){
        let num1 = Math.round(Math.random() * (max - min) + min);
        let question = console.log(`Answer "yes" if given number is prime. Otherwise answer "no" `)
        let question1 = console.log(`Question: ${num1}`);
        let answer = readlineSync.question(`Your answer: `)
        if(checkSimple(num1) === 'yes' && answer === 'yes'){
            console.log('Correct!');
        }else if(checkSimple(num1) === 'no' && answer === 'no'){
            console.log('Correct!');

        }
        else{
        
            console.log(`Question: ${num1}\n Your answer: ${answer}\n  ${answer} is wrong answer ;(.\n Correct answer was ${checkSimple(num1)}\n Let's try again, ${name}! `);
            return
        }

        if(i == 2){
            console.log(`Congratulations, ${name} !`)
        }
    }
}
prime()