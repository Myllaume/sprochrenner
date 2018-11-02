var affichageAide = document.getElementById('aff-aide');

var repereDepart = document.getElementById('rep-depart');
var affichageDepart = document.getElementById('aff-depart');

var repereArrive = document.getElementById('rep-arrive');
var affichageArrive = document.getElementById('aff-arrive');

repereDepart.addEventListener('mouseover', function() {
    console.log('over');
    affichageAide.classList.add('display-none');
    affichageArrive.classList.add('display-none');
    affichageDepart.classList.remove('display-none');
});

repereArrive.addEventListener('mouseover', function() {
    console.log('over');
    affichageAide.classList.add('display-none');
    affichageDepart.classList.add('display-none');
    affichageArrive.classList.remove('display-none');
});