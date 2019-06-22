//Card Game
//By Njuguna Samizzo
//
let suits = ['Hearts', 'Clubs', 'Diamonds','Spades'];
let values = ['Ace', 'King', 'Queen ', 'Jack', 'Ten',
                'Nine','Eight','Seven','Six','Five','Four','Three','Two'];

//game incidences
let gameStarted = false;
    gameOver = false;
    playerWon = false;
    dealerCards = [];
    dealerScore= 0;
    dealScore = 0;
    //deck = [];

//DOM items
let txt = document.getElementById('some');
let newGame = document.getElementById('new');
let hit = document.getElementById('hit');
let pass = document.getElementById('pass');

hit.style.display='none';
pass.style.display = 'none';
showStatus();



//new game
newGame.addEventListener('click', function(){
    txt.innerText = 'Welcome to the BlackJack Card Game...';
    hit.style.display= 'inline';
    pass.style.display= 'inline';
    newGame.style.display= 'none'

    gameStarted = true;
    gameOver = false;
    playerWon = false;
    showStatus();
});

//game dynamics
function createDeck() {
    let deck = [];
for (let suitIdx=0; suitIdx<suits.length; suitIdx++){
    for(let valueIdx=0; valueIdx<values.length; valueIdx++){
        let card = {
            suit: suits[suitIdx],
            value: values[valueIdx]
        };
        deck.push(card);
    }
}
    return deck;
}
function cardString(card){
    return card.value + ' of ' + card.suit;
}

function nextCard(){
    return deck.shift();
}

let deck=createDeck();

/*for (let i=0; i < deck.length; i++){
    console.log(nextCard());
}*/

let deal=  [nextCard(),nextCard()];

//status
function showStatus(){ if (! gameStarted){
    txt.innerText = 'Welcome to Blackjack card...enjoy';
    return;
}
for (var i=0; i<deck.length; i++){
    txt.innerText += '\n' + cardString(deck[i]);
}
}
//shuffler
function shuffler(deck){
    for (let i=0; i<deck.length; i++){
        let swapIdx = Math.trunc(Math.random()*deck.length);
        let tmp = deck[swapIdx];
        deck[swapIdx]=deck[i];
        deck[i]=tmp;
    }
}

console.log("Welcome to Poker");

console.log("You are dealt: ");
console.log(" "+cardString(deal[0]));
console.log(" "+cardString(deal[1]));

