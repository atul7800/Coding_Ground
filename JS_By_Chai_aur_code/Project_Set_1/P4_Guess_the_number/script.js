let submitButton = document.getElementById('subt');
let guessField = document.getElementById('guessField');
let prevGuesses =  document.querySelector('.guesses');
let lifeLine = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let startOver = document.getElementById('startOver');
let randomNumber = Math.round(Math.random() * 10 + 1);
let myNumberArray = []; 
let play = true;
let lifeCounter = 10;
let myNumber;

if(play){
    submitButton.addEventListener('click', (event)=>{
        event.preventDefault();
        myNumber = parseInt(guessField.value);
        console.log(myNumber)
    
        if(myNumber == '' || myNumber < 1 || myNumber > 100 || isNaN(myNumber)){
            alert("Please enter a valid number.");
        }else{
            myNumberArray.push(myNumber);
            let prevGuesses =  document.querySelector('.guesses'); 
            prevGuesses.textContent = prevGuesses.textContent + myNumberArray[myNumberArray.length - 1] + ", ";
            
            if(myNumber > randomNumber)
            {
                lowOrHi.innerHTML = "Number is too high";
            } else{
                lowOrHi.innerHTML = "Number is too low";
            }

            lifeCounter--;
            lifeLine.textContent = lifeCounter;
            if(lifeCounter == 0 || randomNumber == myNumber){
                startOver.innerHTML = "Start Over";
                startOver.style.display = 'block';
                submitButton.disabled = true;
                submitButton.style.opacity = 0.5;
            }

            if(lifeCounter == 0 && randomNumber != myNumber){
                console.log("Inside 2nd If");
                lowOrHi.innerHTML = `GAME OVER! Random number was ${randomNumber}`;
                return;
            }

            if(randomNumber == myNumber){
                lowOrHi.innerHTML = `YOU WON! Random number was ${randomNumber}`;
                return;
            }

        }
    });  

    startOver.addEventListener('click', function(event) {
        startOver.style.display = 'none';
        lifeCounter = 10;
        guessField.value = '';
        prevGuesses.textContent = '';
        myNumberArray = [];
        lifeLine.innerText = '';
        lowOrHi.innerHTML = '';
        submitButton.disabled = false;
        submitButton.style.opacity = 1;
        randomNumber = Math.round(Math.random() * 10 + 1);
    });
}
