let buttons = document.querySelectorAll('.button');
let body = document.querySelector('body')

buttons.forEach((button) => {
    button.addEventListener('click', function(e){
        switch(e.target.id){
            case 'grey':
                body.style.backgroundColor = 'grey'
                break;
            case 'white':
                body.style.backgroundColor = 'white'
                break;
            case 'blue':
                body.style.backgroundColor = 'blue'
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow'
                break;
        }
    })
})