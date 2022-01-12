const anchors = document.querySelectorAll('.item__desc');
const imgs = document.querySelectorAll('.item__img');

anchors.forEach((anchor,index)=>{
    anchor.title = anchor.textContent;
    imgs[index].title = anchor.textContent;
});