const board = document.getElementsByClassName('board')[0] ;
const input = document.getElementsByClassName('board-size')[0]; 
var boardSize = document.getElementsByClassName('board-size')[0].value ;
 


// generating board function 
const generateBoard = (size) => {
    while(board.firstChild){
        board.removeChild(board.lastChild);
    }
    for (let i = 0 ; i < size ; i++ ){
        
        const row = document.createElement('div');
        row.classList.add('row') ;
        row.style.width = "100%" ; 
        row.style.height = 100/ size + "%";
        board.appendChild(row);
        for(let j = 0 ; j < size ; j++) {
            const box = document.createElement('div'); 
            box.classList.add('box'); 
            box.style.width = 100 / size + '%';
            box.style.height = "100%" 
            row.appendChild(box)
        }
    }
}
generateBoard(4);

const boardSizeChange = () => {
    generateBoard(input.value);
    
}




