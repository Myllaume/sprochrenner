var burgerBouton = document.getElementById('burger-bouton');
var burgerOuvert = document.getElementById('burger-ouvert');

burgerBouton.addEventListener('click', function(){
    burgerOuvert.classList.toggle('header__navigation--deploiement---ouverture');
});

// OUVERTURE INFORMATIONS

var informations = document.getElementById('informations');
var infoOuvert = document.getElementById('info-ouvert');

informations.addEventListener('click', function(){
    infoOuvert.classList.toggle('header__navigation--deploiement---menu----informations-----info-ouvert');
    informations.classList.toggle('header__navigation--deploiement---menu----links-----turquoise');
});

// OUVERTURE PARTICIPATION

var participations = document.getElementById('participer');
var partsOuvert = document.getElementById('participation-ouvert');

participations.addEventListener('click', function(){
    partsOuvert.classList.toggle('header__navigation--deploiement---menu----participer-----participation-ouvert');
    participations.classList.toggle('header__navigation--deploiement---menu----links-----turquoise');
});