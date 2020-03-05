var construction_deck = {
    "bis-3.jpg": "bis-back.jpg", 
    "bis-4.jpg": "bis-back.jpg", 
    "bis-6.jpg": "bis-back.jpg", 
    "bis-7.jpg": "bis-back.jpg", 
    "bis-8.jpg": "bis-back.jpg", 
    "bis-9.jpg": "bis-back.jpg", 
    "bis-10.jpg": "bis-back.jpg", 
    "bis-12.jpg": "bis-back.jpg", 
    "bis-13.jpg": "bis-back.jpg",
    "land-1.jpg": "Landscaper.jpg",
    "land-2.jpg": "Landscaper.jpg",
    "land-4.jpg": "Landscaper.jpg",
    "land-5.jpg": "Landscaper.jpg",
    "land-5-extra.jpg": "Landscaper.jpg",
    "land-6.jpg": "Landscaper.jpg",
    "land-7.jpg": "Landscaper.jpg",
    "land-7-extra.jpg": "Landscaper.jpg",
    "land-8.jpg": "Landscaper.jpg",
    "land-8-extra.jpg": "Landscaper.jpg",
    "land-9.jpg": "Landscaper.jpg",
    "land-9-extra.jpg": "Landscaper.jpg",
    "land-10.jpg": "Landscaper.jpg",
    "land-11.jpg": "Landscaper.jpg",
    "land-11-extra.jpg": "Landscaper.jpg",
    "land-12.jpg": "Landscaper.jpg",
    "land-14.jpg": "Landscaper.jpg",
    "land-15.jpg": "Landscaper.jpg",
    "pool-3.jpg": "pool-back.jpg",
    "pool-4.jpg": "pool-back.jpg",
    "pool-6.jpg": "pool-back.jpg",
    "pool-7.jpg": "pool-back.jpg",
    "pool-8.jpg": "pool-back.jpg",
    "pool-9.jpg": "pool-back.jpg",
    "pool-10.jpg": "pool-back.jpg",
    "pool-12.jpg": "pool-back.jpg",
    "pool-13.jpg": "pool-back.jpg",
    "temp-3.jpg": "temp-back.jpg",
    "temp-4.jpg": "temp-back.jpg",
    "temp-6.jpg": "temp-back.jpg",
    "temp-7.jpg": "temp-back.jpg",
    "temp-8.jpg": "temp-back.jpg",
    "temp-9.jpg": "temp-back.jpg",
    "temp-10.jpg": "temp-back.jpg",
    "temp-12.jpg": "temp-back.jpg",
    "temp-13.jpg": "temp-back.jpg",
    "estate-1.jpg": "estate-back.jpg",
    "estate-2.jpg": "estate-back.jpg",
    "estate-4.jpg": "estate-back.jpg",
    "estate-5.jpg": "estate-back.jpg",
    "estate-5-extra.jpg": "estate-back.jpg",
    "estate-6.jpg": "estate-back.jpg",
    "estate-7.jpg": "estate-back.jpg",
    "estate-7-extra.jpg": "estate-back.jpg",
    "estate-8.jpg": "estate-back.jpg",
    "estate-8-extra.jpg": "estate-back.jpg",
    "estate-9.jpg": "estate-back.jpg",
    "estate-9-extra.jpg": "estate-back.jpg",
    "estate-10.jpg": "estate-back.jpg",
    "estate-11.jpg": "estate-back.jpg",
    "estate-11-extra.jpg": "estate-back.jpg",
    "estate-12.jpg": "estate-back.jpg",
    "estate-14.jpg": "estate-back.jpg",
    "estate-15.jpg": "estate-back.jpg",
    "survey-1.jpg": "survey-back.jpg",
    "survey-2.jpg": "survey-back.jpg",
    "survey-3.jpg": "survey-back.jpg",
    "survey-5.jpg": "survey-back.jpg",
    "survey-5-extra.jpg": "survey-back.jpg",
    "survey-6.jpg": "survey-back.jpg",
    "survey-6-extra.jpg": "survey-back.jpg",
    "survey-7.jpg": "survey-back.jpg",
    "survey-8.jpg": "survey-back.jpg",
    "survey-8-extra.jpg": "survey-back.jpg",
    "survey-9.jpg": "survey-back.jpg",
    "survey-10.jpg": "survey-back.jpg",
    "survey-10-extra.jpg": "survey-back.jpg",
    "survey-11.jpg": "survey-back.jpg",
    "survey-11-extra.jpg": "survey-back.jpg",
    "survey-13.jpg": "survey-back.jpg",
    "survey-14.jpg": "survey-back.jpg",
    "survey-15.jpg": "survey-back.jpg"
};

var deck = new Array();
var back1, back2, back3;

function createNewDeck() {
    deck = Object.keys(construction_deck);
}

function shuffle() {
    // for 1000 turns
    // switch the values of two random cards
    for (var i = 0; i < 1000; i++) {
        var location1 = Math.floor((Math.random() * deck.length));
        var location2 = Math.floor((Math.random() * deck.length));
        var tmp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
}

function dealOut() {
	var card = deck.pop();
	document.getElementById("deck1").src = "assets/Cards/" + card;
    back1 = card;
    card = deck.pop();
    document.getElementById("deck2").src = "assets/Cards/" + card;
    back2 = card;
    card = deck.pop();
    document.getElementById("deck3").src = "assets/Cards/" + card;
    back3 = card;
    deckCount();
}

function nextDraw() {
    document.getElementById("back-deck1").src = "assets/Cards/" + construction_deck[back1];
    var card = deck.pop();
    document.getElementById("deck1").src = "assets/Cards/" + card;
    back1 = card;
    document.getElementById("back-deck2").src = "assets/Cards/" + construction_deck[back2];
    card = deck.pop();
    document.getElementById("deck2").src = "assets/Cards/" + card;
    back2 = card;
    document.getElementById("back-deck3").src = "assets/Cards/" + construction_deck[back3];
    card = deck.pop();
    document.getElementById("deck3").src = "assets/Cards/" + card;
    back3 = card;
    deckCount();
}

function startDeal() {
	createNewDeck()
    shuffle();
    dealOut();
    nextDraw();
}

function deckCount() {
    document.getElementById("deckcount").innerHTML = deck.length;
}

//startDeal();