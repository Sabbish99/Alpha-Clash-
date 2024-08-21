// function play() {
//     homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');



//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }



function continueGame() {
    //step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();


    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
}



function play() {
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame();
}