// function play() {
//     homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');



//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log('player pressed', playerPressed)


    // get the expected the pressed
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    console.log(playerPressed, currentAlphabet)
    // console.log(currentAlphabetElement.innerText);

    if (playerPressed === currentAlphabet) {
        console.log('you get a point');
    }
    else {
        console.log('you missed a life');
    }

}
document.addEventListener('keyup', handleKeyboardKeyUpEvent)


function continueGame() {
    //step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();


    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;


    // set background color 

    setBackgroundColorById(alphabet);
}



function play() {
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame();
}


