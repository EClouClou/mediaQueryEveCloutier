//Déclarer une fonciton mediaQuery qui modifie la couleur de background. Violet lorsque plus petit que 768px. Vert lorsque plus grand ou égal.
function switchBackgroundColor(mediaQueryTablet) {
    if(mediaQueryTablet.matches){
        document.body.classList.add('tablet');
    }
    else(document.body.classList.remove('tablet'));
}

//Ajoutez un bouton, il devra être visible lorsque l'écran est plus grand ou égal à 1024px.
function addButton(mediaQueryDesktop) {
    const button = document.getElementById('myButton');
    if(mediaQueryDesktop.matches){
        button.classList.remove('hidden');
    }
    else{button.classList.add('hidden');
}}

//Ajoutez une icône. Si l’écran est plus petit que 640px, affichez l'icône. Lorsque plus grand ou égal, affichez le string ‘connexion’.
function addconnexion(mediaQueryLittleOne) {
    const iconConnexion = document.getElementById('connexion');
    const connexionText = document.getElementById('connexionText');

    if(mediaQueryLittleOne.matches){
        iconConnexion.classList.remove('hidden');
        connexionText.classList.remove('connexionText');

    }
    else{iconConnexion.classList.add('hidden');
    connexionText.classList.add('hidden');
    }
}

//Créer les variables mediaQuery
const mediaQueryLittleOne = window.matchMedia('min-width: 640px)');
const mediaQueryTablet = window.matchMedia('(min-width: 768px)');
const mediaQueryDesktop = window.matchMedia('(min-width: 1024px)');

//Appeler la fonction d'écoute au moment de l'exécution
mediaQueryTablet.addEventListener('change', () => {
    switchBackgroundColor(mediaQueryTablet)
});

mediaQueryDesktop.addEventListener('change', () => {
    addButton(mediaQueryDesktop)
});

mediaQueryLittleOne.addEventListener('change', () => {
    addconnexion(mediaQueryLittleOne)
});