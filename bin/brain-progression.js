import code from "../src/cli.js"
import readlineSync from 'readline-sync'

function progression() {
    let name = code()
    
    for(let j = 0;j < 3; j+=1){
    
    let str = '';
    let cursor = Math.round(Math.random() * (5 - 1) + 1);
    let count = 0;
    let randomJ = Math.round(Math.random() * (9- 1) + 1)
    let missingNumber= console.log(`What number is missing in the progression?`)
        for(let i = 3; i < 60;i+=cursor){
        
            if(count >= 10){
                break;
            }
            count += 1;
            
            if(count == randomJ){
                
                str += ' ..'
                var perem = i
               
                
            } else{
                
               
                str += ' ' + i
                
                
            } 
            
         }
     let question = console.log(`Question: ${str} `);
     let answer =parseInt(readlineSync.question(`Your answer: `));

     if(answer == perem){
        console.log('Correct');
    } else{
        console.log(`Question: ${str}\n Your answer: ${answer}\n  '${answer}' is wrong answer ;(.\n Correct ancwer was ${perem}\n Let's try again, ${name}! `)
        return;
    } if(j == 2){
        console.log(`Congratulations, ${name} !`)
 }
    
}
}
    

   
    

    


    
     
    

    

progression()