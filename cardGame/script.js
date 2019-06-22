//Card Game
//By Njuguna Samizzo
//
let suits = ['Hearts', 'Clubs', 'Diamonds','Spades'];
let values = ['Ace', 'King', 'Queen ', 'Jack', 'Ten',
                'Nine','Eight','Seven','Six','Five','Four','Three','Two'];

//buttons
let txt = document.getElementById('some');
let newGame = document.getElementById('new');
let hit = document.getElementById('hit');
let pass = document.getElementById('pass');

hit.style.display='none';
pass.style = 'none';

//new game
newGame.addEventListener('click', function(){
    txt.innerText = '<h2>Welcome to the BlackJack Card Game</h2>';
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

console.log("Welcome to Poker");

console.log("You are dealt: ");
console.log(" "+cardString(deal[0]));
console.log(" "+cardString(deal[1]));

