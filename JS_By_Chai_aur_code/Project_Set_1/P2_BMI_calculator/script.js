let form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault();

    let height = parseInt(document.querySelector('#height').value) / 100;
    let weight = parseInt(document.querySelector('#weight').value);
    let bmi;
    let result;
    let message = '';

    if(height == '' || height < 0 || isNaN(height)){
        alert("Please give a valid height!");
    } else if(weight == '' || weight < 0 || isNaN(weight)){
        alert("Please give a valid weight!")
    } else {
        bmi = (weight / (height*height)).toFixed(2);
        result = document.querySelector('#results');

        if(bmi < 18.6){
            message = "You are Underweight";
        }
        
        if(bmi >= 18.6 && bmi <= 24.9){
            message = "Your weight is normal";
        } 
    
        if(bmi > 24.9){
            message = "You are Overweight";
        }

        result.innerHTML = `BMI ${bmi} <br> ${message}!`;
    }

})