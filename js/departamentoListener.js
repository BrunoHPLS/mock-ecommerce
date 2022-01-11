const departamentoBtn = document.querySelector('.departamentos__btn');
const chevronDown = document.querySelector('.fa-chevron-down');
const departamentoList = document.querySelector('.departamentos__list');

function dropdown(){
    if(!chevronDown.classList.contains('mouseover__chevron') 
    || !departamentoList.classList.contains('departamentos__list--active')){

    chevronDown.classList.add('mouseover__chevron');
    departamentoList.classList.add('departamentos__list--active');

    }
}

function dropup(){
    chevronDown.classList.remove('mouseover__chevron');
    departamentoList.classList.remove('departamentos__list--active');
}

departamentoBtn.addEventListener('mouseover', dropdown);
departamentoBtn.addEventListener('mouseout', dropup);
departamentoList.addEventListener('mouseover', dropdown);
departamentoList.addEventListener('mouseout', dropup);