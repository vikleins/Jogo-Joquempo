const $stoneButton1 = document.querySelector('.button-stone-player-1');
const $paperButton1 = document.querySelector('.button-paper-player-1');
const $scissorsButton1 = document.querySelector('.button-scissors-player-1');

const $stoneButton2 = document.querySelector('.button-stone-player-2');
const $paperButton2 = document.querySelector('.button-paper-player-2');
const $scissorsButton2 = document.querySelector('.button-scissors-player-2');

const $fieldPlayer1 = document.querySelector('.field-player-1');
const $fieldPlayer2 = document.querySelector('.field-player-2');

$stoneButton1.addEventListener('click', () => {
    $fieldPlayer1.innerHTML= '<img class="move-image" src="./Imagens/stone.png"></img>';
});
$paperButton1.addEventListener('click', () => {
    $fieldPlayer1.innerHTML= '<img class="move-image" src="./Imagens/paper.png"></img>'; 
});
$scissorsButton1.addEventListener('click', () => {
    $fieldPlayer1.innerHTML= '<img class="move-image" src="./Imagens/scissors.png"></img>'; 
});

$stoneButton2.addEventListener('click', () => {
    $fieldPlayer2.innerHTML= '<img class="move-image" src="./Imagens/stone.png"></img>';
});
$paperButton2.addEventListener('click', () => {
    $fieldPlayer2.innerHTML= '<img class="move-image" src="./Imagens/paper.png"></img>'; 
});
$scissorsButton2.addEventListener('click', () => {
    $fieldPlayer2.innerHTML= '<img class="move-image" src="./Imagens/scissors.png"></img>'; 
});

//Use const, se não der, let, nunca var;