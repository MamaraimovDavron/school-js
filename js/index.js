const menuBtn = document.getElementById('menu-btn');
let leftSidebar = document.getElementById('leftSide');
const cards = document.getElementById('cards');
const selected = document.getElementById('selected');

const hideSidebar = () => {
    // console.log(leftSide.className);

    // if(leftSide.className !== "") leftSide.className = "";
    // else leftSide.className = "left";

    // console.log(cards.children);
  
    
    if(leftSidebar.classList.contains('hide')){
        leftSidebar.classList.remove('hide');
    }
    else{
        leftSidebar.classList.add('hide');
    }
};

const keyUp = (e) => {
    if(e.key === 'Escape') leftSidebar.classList.add('hide');
};

for (const card of cards.children) {
    console.log(card.children[0]);
    card.children[0].onclick = () => {
        selected.innerHTML = card.children[0].innerHTML;
    };
}