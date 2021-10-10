window.onload = function(){
    let boxes = document.getElementById('board').getElementsByTagName('div');
    let button = document.querySelector('.btn')
    let xTurn = true;
    let xArray = [];
    let yArray = [];
    let winConditions = [
        ['0', '1', '2'],
        ['3', '4', '5'],
        ['6', '7', '8'],
        ['0', '3', '6'],
        ['1', '4', '7'],
        ['2', '5', '8'],
        ['0', '4', '8'],
        ['2', '4', '6']
    ];


    for(i=0; i<boxes.length; i++){
        boxes[i].id = ''+i;
        boxes[i].classList.add('square');
        boxes[i].addEventListener('click', handleClick, { once: true});
        boxes[i].addEventListener('mouseover', hoverFunction);
        boxes[i].addEventListener('mouseout', leaveFunction);
    }

    button.addEventListener('click', clicked);

    function handleClick(e){
        if(xTurn == true){
            e.target.innerHTML = 'X';
            e.target.classList.add('X');
            xTurn = false;
            xArray.push(e.target.id);
            if(winner(xArray)){
                document.getElementById('status').innerHTML = 'Congratulations! X is the Winner!';
                document.getElementById('status').classList.add('you-won');
                for(i=0; i<boxes.length; i++){
                    boxes[i].removeEventListener('click', handleClick, { once: true});
                }
            }
        }else {
            e.target.innerHTML = 'O';
            e.target.classList.add('O');
            xTurn = true;
            yArray.push(e.target.id);
            if(winner(yArray)){
                document.getElementById('status').innerHTML = 'Congratulations! O is the Winner!';
                document.getElementById('status').classList.add('you-won');
                for(i=0; i<boxes.length; i++){
                    boxes[i].removeEventListener('click', handleClick, { once: true});
                }
            }
        }
        if(winner(xArray) != true && winner(yArray) != true && (xArray.length + yArray.length) == 9){
            document.getElementById('status').innerHTML = 'Oh No! Seems like there was a draw';
        }     
    }

    function hoverFunction(e){
        e.target.classList.add('hover');
    }

    function leaveFunction(e){
        e.target.classList.remove('hover');
    }

    function winner(array){
        for(i=0;i<winConditions.length;i++){
            var yes = 0;
            for(x=0;x<winConditions[i].length;x++){
                if(array.includes(winConditions[i][x])){
                    yes +=1;
                    if(yes == 3){
                        return true;
                    }
                } 
            }
        }
    }

    function clicked(e){
        xTurn = true;
        xArray = [];
        yArray = [];
        document.getElementById('status').innerHTML = 'Move your mouse over a square and click to play an X or an O.';
        document.getElementById('status').classList.remove('you-won');

        for(i=0; i<boxes.length; i++){
            boxes[i].innerHTML = '';
            boxes[i].classList.remove('X');
            boxes[i].classList.remove('O');
            boxes[i].addEventListener('click', handleClick, { once: true});
        }
    }
};







