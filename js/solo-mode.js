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

var city_plan_deck = {
    "n1.jpg" : "b-n1.jpg",
    "n1-2.jpg" : "b-n1-2.jpg",
    "n1-3.jpg" : "b-n1-3.jpg",
    "n1-4.jpg" : "b-n1-4.jpg",
    "n1-5.jpg" : "b-n1-5.jpg",
    "n1-6.jpg" : "b-n1-6.jpg",
    "n2.jpg" : "b-n2.jpg",
    "n2-2.jpg" : "b-n2-2.jpg",
    "n2-3.jpg" : "b-n2-3.jpg",
    "n2-4.jpg" : "b-n2-4.jpg",
    "n2-5.jpg" : "b-n2-5.jpg",
    "n2-6.jpg" : "b-n2-6.jpg",
    "n3.jpg" : "b-n3.jpg",
    "n3-2.jpg" : "b-n3-1.jpg",
    "n3-3.jpg" : "b-n3-2.jpg",
    "n3-4.jpg" : "b-n3-3.jpg",
    "n3-5.jpg" : "b-n3-4.jpg",
    "n3-6.jpg" : "b-n3-5.jpg"
};

var construct_deck = new Array();
var cityPlanDeck = new Array();

function startDeal() {
	createNewDeck()
    shuffle(construct_deck);
    emptyDeck()
    array1 = construct_deck.splice(0,41);
    array2 = construct_deck.splice(0,41);
    shuffle(array1);
    shuffle(array2);
    array1.unshift("solo-front.jpg");
    shuffle(array1);
    array3 = array2.concat(array1);
    ready(array3);
    deckCount();
}

function createNewDeck() {
    construct_deck = Object.keys(construction_deck);
}

var city1, city2, city3;

function newCityPlan() {
    cityPlanDeck = Object.keys(city_plan_deck);
    city1 = cityPlanDeck.splice(0,6);
    shuffle(city1);
    city2 = cityPlanDeck.splice(0,6);
    shuffle(city2);
    city3 = cityPlanDeck.splice(0,6);
    shuffle(city3)
    cityPlanDeal();
}
var planCard1, planCard2, planCard3;

function cityPlanDeal() {
    planCard1 = city1.shift();
	document.getElementById("plan1").src = "assets/Cards/" + planCard1;
    planCard2 = city2.shift();
    document.getElementById("plan2").src = "assets/Cards/" + planCard2;
    planCard3 = city3.shift();
    document.getElementById("plan3").src = "assets/Cards/" + planCard3;
}

function shuffle(x) {
    // for 1000 turns
    // switch the values of two random cards
    for (var i = 0; i < 1000; i++) {
        var location1 = Math.floor((Math.random() * x.length));
        var location2 = Math.floor((Math.random() * x.length));
        var tmp = x[location1];

        x[location1] = x[location2];
        x[location2] = tmp;
    }
}

function dealOut() {
    if (array3.length == 0){
        alert("Deck is empty");
        throw "deck empty";
    }
	var card = check_solo(array3);
	document.getElementById("draw1").src = "assets/Cards/" + card;
    card = check_solo(array3);
    document.getElementById("draw2").src = "assets/Cards/" + card;
    card = check_solo(array3);
    document.getElementById("draw3").src = "assets/Cards/" + card;
    document.getElementById("deck").src = "assets/Cards/" + construction_deck[array3[0]];
    deckCount();
}

function deckCount() {
    document.getElementById("deckcount").innerHTML = array3.length;
}

function emptyDeck() {
    document.getElementById("draw1").src = "assets/Cards/";
    document.getElementById("draw2").src = "assets/Cards/";
    document.getElementById("draw3").src = "assets/Cards/";
    document.getElementById("plan1").src = "assets/Cards/";
    document.getElementById("plan2").src = "assets/Cards/";
    document.getElementById("plan3").src = "assets/Cards/";
}

function check_solo(arr) {
    var x = arr.shift();
    if(x == "solo-front.jpg") {
        document.getElementById("plan1").src = "assets/Cards/" + city_plan_deck[planCard1];
        document.getElementById("plan2").src = "assets/Cards/" + city_plan_deck[planCard2];
        document.getElementById("plan3").src = "assets/Cards/" + city_plan_deck[planCard3];
        alert("Solo Card Drawn!");
        return arr.shift();
    }
    else
        return x;
}

function ready(y) {
    var card = array3[0];
    document.getElementById("deck").src = "assets/Cards/" + construction_deck[card];
}


////returns value of a keyS
//function getKeyByValue(object, value) { 
//    for (var prop in object) { 
//        if (object.hasOwnProperty(prop)) { 
//            if (object[prop] === value) 
//                return prop; 
//        } 
//    } 
//} 