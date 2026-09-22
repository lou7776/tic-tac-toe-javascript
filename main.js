
let player = 'x'

document.querySelector('button').addEventListener('click', resetGame)





//
let checkboxes =  document.querySelectorAll('.boxes')
// 
checkboxes = Array.from(checkboxes)

checkboxes.forEach(box => {box.addEventListener('click', () => {

    if(box.innerText != ''){
        return 
    } 
    // innertext of the box is going to be taken up by the player
    box.innerText = player
    winning()
    // every click checks for a tie
    tie()

    // if player has the value of x then change value to o if not then x 
    player = player == 'x' ? 'o': 'x'


})})

function tie(){
    // check if every element of an array matches the callback function 
    let check  = checkboxes.every((element, index)=> checkboxes[index].innerText == 'x' || checkboxes[index].innerText == 'o')

    if(check){
        alert('draw')
    }


}



function winning(){
    if(checkboxes[0].innerText == player && checkboxes[1].innerText == player && checkboxes[2].innerText == player){
        alert('won')
    }
    
    else if(checkboxes[3].innerText == player && checkboxes[4].innerText == player && checkboxes[5].innerText == player){
        alert('won')

    }

    else if(checkboxes[6].innerText == player && checkboxes[7].innerText == player && checkboxes[8].innerText == player){
       alert('won')
    
    }


    else if(checkboxes[0].innerText == player && checkboxes[4].innerText == player && checkboxes[8].innerText == player){
       alert('won')

    }else if(checkboxes[2].innerText == player && checkboxes[4].innerText == player && checkboxes[6].innerText == player){
       alert('won')
    }
    else if(checkboxes[0].innerText == player && checkboxes[3].innerText == player && checkboxes[6].innerText == player){
       alert('won')
    }
    else if(checkboxes[1].innerText == player && checkboxes[4].innerText == player && checkboxes[7].innerText == player){
       alert('won')
    }
    else if(checkboxes[2].innerText == player && checkboxes[5].innerText == player && checkboxes[8].innerText == player){
       alert('won')

    }



}


function resetGame(){
    player = 'x' 
    checkboxes.forEach(box => box.innerText = '')
    alert('reset')
}