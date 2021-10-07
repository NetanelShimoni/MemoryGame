const cards = document.querySelectorAll('.memory-card');
console.log(cards)
console.log("hhiii")


function flipCard(){
    console.log('WOORKKEEE!!')
    console.log(this)

}

cards.forEach(card => card.addEventListener('click', flipCard));
