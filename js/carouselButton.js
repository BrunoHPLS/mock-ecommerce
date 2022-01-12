let buttonLeft = document.querySelector('.button--left');
let buttonRight = document.querySelector('.button--right');
let items = document.querySelectorAll('.destaque__carousel--item');

let index = 0;
const itensExibidos = 5;
let itensOcultos = items.length-itensExibidos;

function mover(num) {
    if((num == -1 && index == 0)||(num == 1 && index == itensOcultos)){
    }else{
        index+=num;
        if(index==0){
            buttonLeft.style.display="none";
        }else{
            buttonLeft.style.display="initial";
        }
        if(index==itensOcultos){
            buttonRight.style.display="none";
        }else{
            buttonRight.style.display="initial";
        }
        items.forEach(item=>{
            item.style.right = `${index*20}%`;
        });
    }
}

buttonLeft.addEventListener('click',()=>{mover(-1);});
buttonRight.addEventListener('click',()=>{mover(1);});