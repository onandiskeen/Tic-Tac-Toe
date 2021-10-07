window.onload = function(){
    let boxes = document.getElementById('board').getElementsByTagName('div');

    for(i=0; i<boxes.length; i++){
        boxes[i].classList.add('square');
    }
};

