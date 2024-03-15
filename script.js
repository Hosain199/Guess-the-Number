'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!🎉';

// document.querySelector('.number').textContent = 20;

// document.querySelector('.score').textContent = 5;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value=23);

let secrateNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (message)=>{
    document.querySelector('.message').textContent = message;
}

const displayNumber = (number)=>{
    document.querySelector('.number').textContent = number;
}

const displayScore = (score)=>{
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);

        //No input 
    if (!guess) {
        //document.querySelector('.message').textContent = 'No Number!🧱';
        displayMessage('No Number😒')
    } 

    //player wins
    else if (guess === secrateNumber) {
        // document.querySelector('.message').textContent = 'Correct Number!🎉';
        // document.querySelector('.number').textContent = secrateNumber;
        displayNumber(secrateNumber);
        displayMessage('Correct Numebr🎉')
       
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } 
    
    //guess too high
    // else if (guess > secrateNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too high';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You loose the game!😂😂';
    //         document.querySelector('.score').textContent = 0;
    //     }
        

    //    

    // } 
    //guess wrong
    else if(guess!==secrateNumber){
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secrateNumber? 'Too high' : 'Too low';
            displayMessage(guess>secrateNumber ? 'Too High' : 'Too Low');
            score--;
            //document.querySelector('.score').textContent = score;
            displayScore(score);
        } else {
            //document.querySelector('.message').textContent = 'You loose the game!😂😂';
            displayMessage('You loose the game!😂😂')
            //document.querySelector('.score').textContent = 0;
            displayScore(0);
        }
    }
     //guess too low 
    // else if (guess < secrateNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too low';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You loose the game!😂😂';
    //         document.querySelector('.score').textContent = 0;
    //     }

    // }
});


document.querySelector('.again').addEventListener('click', function(){

    score =20;
    secrateNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    //document.querySelector('.number').textContent = '?'
    displayNumber('?')
    //document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...')
    //document.querySelector('.score').textContent = 0;
    displayScore(0);
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
});