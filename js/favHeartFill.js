const hearts = document.querySelectorAll('.item__favbtn');

hearts.forEach(heart=>{
    let filled = false;
    heart.addEventListener('click',(event)=>{
        let child = event.target;
        if(filled==false){
            filled=true;
            child.classList.remove("far");
            child.classList.add("fas");
        }else{
            child.classList.remove("fas");
            child.classList.add("far");
            filled=false;
        }
    })
});