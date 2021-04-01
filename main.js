"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value; //grab roast value

    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast || selectedRoast === "All") { //ONLY exact roast and exact name property comes up
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function updateCoffees2(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var searchedName = document.getElementById("coffee-selection"); //grab search value

    console.log(searchedName.value);
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().indexOf(searchedName.value) >= 0) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

var newRoast = document.getElementById("roast-new")
var newCoffeeName = document.getElementById("coffee-name-new");

function newCoffee(e){
    e.preventDefault();
    var addedCoffee = {id: coffees.length + 1, name: newCoffeeName.value, roast: newRoast.value};
    coffees.unshift(addedCoffee);
    for(var i = 1; i < coffees.length - 1; i++) {
        if (newCoffeeName.value.toLowerCase() === coffees[i].name.toLowerCase()) {
            coffees.shift(addedCoffee);
        }
    }
    tbody.innerHTML = renderCoffees(coffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'Light'},
    {id: 2, name: 'Half City', roast: 'Light'},
    {id: 3, name: 'Cinnamon', roast: 'Light'},
    {id: 4, name: 'City', roast: 'Medium'},
    {id: 5, name: 'American', roast: 'Medium'},
    {id: 6, name: 'Breakfast', roast: 'Medium'},
    {id: 7, name: 'High', roast: 'Dark'},
    {id: 8, name: 'Continental', roast: 'Dark'},
    {id: 9, name: 'New Orleans', roast: 'Dark'},
    {id: 10, name: 'European', roast: 'Dark'},
    {id: 11, name: 'Espresso', roast: 'Dark'},
    {id: 12, name: 'Viennese', roast: 'Dark'},
    {id: 13, name: 'Italian', roast: 'Dark'},
    {id: 14, name: 'French', roast: 'Dark'},
];

// var allRoastSelection = document.querySelector('#')
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSubmit = document.querySelector('#coffee-submit')
var coffeeSelection = document.querySelector('#coffee-selection')
var addCoffee = document.querySelector('#coffee-name-new-submit')

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

coffeeSelection.addEventListener('keyup', updateCoffees2);

coffeeSubmit.addEventListener('click', updateCoffees2);

addCoffee.addEventListener('click', newCoffee);