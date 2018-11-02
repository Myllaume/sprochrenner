var burgerBouton = document.getElementById('burger-bouton');
var burgerOuvert = document.getElementById('burger-ouvert');

burgerBouton.addEventListener('click', function(){
    burgerOuvert.classList.toggle('header__navigation--deploiement--ouverture');
});