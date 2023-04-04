const $stoneButton1 = document.querySelector('.button-stone-player-1');
const $paperButton1 = document.querySelector('.button-paper-player-1');
const $scissorsButton1 = document.querySelector('.button-scissors-player-1');

const $stoneButton2 = document.querySelector('.button-stone-player-2');
const $paperButton2 = document.querySelector('.button-paper-player-2');
const $scissorsButton2 = document.querySelector('.button-scissors-player-2');

const $fieldPlayer1 = document.querySelector('.field-player-1');
const $fieldPlayer2 = document.querySelector('.field-player-2');

const $winnerTitle = document.querySelector('.winner-title');

const $scorePlayer1 = document.querySelector('.score-player-1');
const $scorePlayer2 = document.querySelector('.score-player-2');

const $buttonReset = document.querySelector('.button-reset');
const $buttonStart = document.querySelector('.button-start');

let movePlayer1 = '';
let movePlayer2 = '';
let gameResult = null;
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let gameStart = false;

function verifyGame(){
    if(movePlayer1=='stone' && movePlayer2=='paper'){
        gameResult = 2;
    } else if(movePlayer1=='stone' && movePlayer2=='scissors'){
        gameResult = 1;
    } else if(movePlayer1=='paper' && movePlayer2=='stone'){
        gameResult = 1;
    } else if(movePlayer1=='paper' && movePlayer2=='scissors'){
        gameResult = 2;
}    else if(movePlayer1=='scissors' && movePlayer2=='stone'){
        gameResult = 2;
}else if(movePlayer1=='scissors' && movePlayer2=='paper'){
    gameResult = 1;
}else if(movePlayer1==movePlayer2){
    gameResult = 0;
}

}

function printGameResult(){
    if(gameResult == 1){
        $winnerTitle.innerHTML = 'Jogadora 1 Ganhou!';
    }else if(gameResult == 2){
        $winnerTitle.innerHTML = 'Jogadora 2 Ganhou!';
    } else if(gameResult == 0){
        $winnerTitle.innerHTML = 'Empatou';
    }
}

function resetBattleField(){
    $fieldPlayer1.innerHTML = '';
    $fieldPlayer2.innerHTML = '';
}

function resetMoveVariables(){
    movePlayer1 = '';
    movePlayer2 = '';
}

function printScoreboard(){
    $scorePlayer1.innerHTML= '0'+ scorePlayer1;
    $scorePlayer2.innerHTML= '0'+ scorePlayer2;
    if(scorePlayer1 >= 10){
        $scorePlayer1.innerHTML= scorePlayer1;
    }
    if(scorePlayer2 >= 10){
        $scorePlayer2.innerHTML= scorePlayer2;
    }
    
}

function resetScoreVariables(){
    scorePlayer1 = 0;
    scorePlayer2 = 0;
}

function addPoint(winnerNumber){
    if(winnerNumber == 1){
        scorePlayer1++;
    }
    if(winnerNumber == 2){
        scorePlayer2++;
    }
}

function resetScoreboard(){
    $scorePlayer1.innerHTML= '00';
    $scorePlayer2.innerHTML= '00';
}

function move(moveName, fieldNumber){
    if(gameStart){
    if(fieldNumber == 1){
        $fieldPlayer1.innerHTML= '<img class="move-image" src="./Imagens/' + moveName + '.png"></img>';
        movePlayer1 = moveName;
    } else if(fieldNumber == 2){
        $fieldPlayer2.innerHTML= '<img class="move-image" src="./Imagens/' + moveName + '.png"></img>';
        movePlayer2 = moveName;
    }
    verifyGame();
    printGameResult();
    if (gameResult != null){
        setTimeout(resetBattleField,1000);
        resetMoveVariables();
        addPoint(gameResult);
        printScoreboard();
        gameResult = null;
    }
}
}


$stoneButton1.addEventListener('click', () => {
    move('stone', 1);
});
$paperButton1.addEventListener('click', () => {
    move('paper', 1);
});
$scissorsButton1.addEventListener('click', () => {
    move('scissors', 1);
});
$stoneButton2.addEventListener('click', () => {
    move('stone', 2);
});
$paperButton2.addEventListener('click', () => {
    move('paper', 2);
});
$scissorsButton2.addEventListener('click', () => {
    move('scissors', 2);
});

$buttonReset.addEventListener('click',()=>{
    resetBattleField();
    resetMoveVariables();
    gameResult = null;
    resetScoreboard();
    $winnerTitle.innerHTML = 'Resultado';
    resetScoreVariables();

})

$buttonStart.addEventListener('click', ()=>{
    gameStart = !gameStart;
    if($buttonStart.classList.toggle('start')){
        $buttonStart.innerHTML = 'Pausar';
    }else{
        $buttonStart.innerHTML = 'Iniciar'
    }
    //Se existe a classe start, eu removo, 
    //se não existe eu adiciono
}
)

    

//Use const, se não der, let, nunca var;
//$ convenção que representa algum elemento;
//query é um texto que representa algo, informação de texto que representa alog
//a nossa query é uma classe