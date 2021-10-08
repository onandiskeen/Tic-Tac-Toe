window.onload = function(){
    let boxes = document.getElementById('board').getElementsByTagName('div');
    let xTurn = true;
    let myArray = [];

    for(i=0; i<boxes.length; i++){
        boxes[i].classList.add('square');
    }

    for(i=0; i<boxes.length; i++){
        boxes[i].addEventListener('click', handleClick, { once: true});
        
    }

    function handleClick(e){
        if(xTurn == true){
            e.target.innerHTML = 'X';
            e.target.classList.add('X');
            xTurn = false;
        }else {
            e.target.innerHTML = 'O';
            e.target.classList.add('O');
            xTurn = true;
        }     
    }
    
};







