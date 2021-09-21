let qNum = 0;
let aNum = 0;

let scoreCounts = {
    wilfredLight: 0,
    basqueCrize: 0,
    ozzyRanvalge: 0,
    jueddsKross: 0,
    miria: 0
}

let results = {
    wilfred: `Your personality type is Wilfred Light, congratulations. You enjoy hiding treasure in graves and having your shop burgled. What's the purpose of your special key? It's a mystery`,
    basque: `Your personality type is Basque Crize, congratulations`,
    ozzy: `Your personality type is Ozyz Ranvalgve, congratulations`,
    juedds: `Your personality type is Juedds Kross, congratulations`,
    miria: `Your personality type is Miria the Fairy, congratulations`
}

let answers = ["Merchant", "Soldier", "Gravekeeper", "Priest", "Fairy", "I can't see a thing", "Sharp",
    "I wear reading glasses", "Blessed", "Magically Enhanced", "Important Key", "Plate Armour", "Shovel",
    "Gold Cross", "Magic Potion", "Spring", "Autumn", "Summer", "Winter", "I don't mind", "Very old",
    "I don't know yet", "Normal", "Average", "Young"]

let questions = ["Which job would you prefer?", "How is your eyesight?", "What's your favourite thing?", "Season?", "How old are you?"]

let beginQuiz = document.querySelector("#begin-quiz");

let title = document.querySelector("#main-text");

let gameOver = document.querySelector("#game-over");

// let resultImage = document.querySelector("#result-image");

let imgWilfred = document.createElement("img");
let imgBasque = document.createElement("img");
let imgOzzy = document.createElement("img");
let imgJuedds = document.createElement("img");
let imgMiria = document.createElement("img");

imgWilfred.src = "images/wilfred.jpg";
imgBasque.src = "images/basque.jpg";
imgOzzy.src = "images/ozzy.jpg";
imgJuedds.src = "images/juedds.jpg";
imgMiria.src = "images/miria.jpg";

let answersArray = document.querySelectorAll(".answers-all");
let answer1 = document.querySelector("#answ-1");
let answer2 = document.querySelector("#answ-2");
let answer3 = document.querySelector("#answ-3");
let answer4 = document.querySelector("#answ-4");
let answer5 = document.querySelector("#answ-5");



let selectionSound = document.querySelector(".selection-sound");


beginQuiz.addEventListener("click", clickToStart);

answer1.addEventListener("click", nextQuestion1);
answer2.addEventListener("click", nextQuestion2);
answer3.addEventListener("click", nextQuestion3);
answer4.addEventListener("click", nextQuestion4);
answer5.addEventListener("click", nextQuestion5);

gameOver.addEventListener("click", reloadPage);

function clickToStart() {
    beginQuiz.remove();
    title.innerHTML = questions[qNum];
    answer1.innerHTML = answers[aNum];
    aNum++
    answer2.innerHTML = answers[aNum];
    aNum++
    answer3.innerHTML = answers[aNum];
    aNum++
    answer4.innerHTML = answers[aNum];
    aNum++
    answer5.innerHTML = answers[aNum];
    aNum++
    qNum++;
    playAudio();
}

function nextQuestion1() {
    if (qNum > 4) {
        gameEnd();
        playAudio();
    } else {
        scoreCounts.wilfredLight++;
        title.innerHTML = questions[qNum];
        answer1.innerHTML = answers[aNum];
        aNum++
        answer2.innerHTML = answers[aNum];
        aNum++
        answer3.innerHTML = answers[aNum];
        aNum++
        answer4.innerHTML = answers[aNum];
        aNum++
        answer5.innerHTML = answers[aNum];
        aNum++
        qNum++;
        playAudio();
    }
}

function nextQuestion2() {
    if (qNum > 4) {
        gameEnd();
        playAudio();
    } else {
        scoreCounts.basqueCrize++;
        title.innerHTML = questions[qNum];
        answer1.innerHTML = answers[aNum];
        aNum++
        answer2.innerHTML = answers[aNum];
        aNum++
        answer3.innerHTML = answers[aNum];
        aNum++
        answer4.innerHTML = answers[aNum];
        aNum++
        answer5.innerHTML = answers[aNum];
        aNum++
        qNum++;
        playAudio();
    }
}

function nextQuestion3() {
    if (qNum > 4) {
        gameEnd();
        playAudio();
    } else {
        scoreCounts.ozzyRanvalge++;
        title.innerHTML = questions[qNum];
        answer1.innerHTML = answers[aNum];
        aNum++
        answer2.innerHTML = answers[aNum];
        aNum++
        answer3.innerHTML = answers[aNum];
        aNum++
        answer4.innerHTML = answers[aNum];
        aNum++
        answer5.innerHTML = answers[aNum];
        aNum++
        qNum++;
        playAudio();
    }
}

function nextQuestion4() {
    if (qNum > 4) {
        gameEnd();
        playAudio();
    } else {
        scoreCounts.jueddsKross++;
        title.innerHTML = questions[qNum];
        answer1.innerHTML = answers[aNum];
        aNum++
        answer2.innerHTML = answers[aNum];
        aNum++
        answer3.innerHTML = answers[aNum];
        aNum++
        answer4.innerHTML = answers[aNum];
        aNum++
        answer5.innerHTML = answers[aNum];
        aNum++
        qNum++;
        playAudio();
    }
}


function nextQuestion5() {
    if (qNum > 4) {
        gameEnd();
        playAudio();
    } else {
        scoreCounts.miria++;
        title.innerHTML = questions[qNum];
        answer1.innerHTML = answers[aNum];
        aNum++
        answer2.innerHTML = answers[aNum];
        aNum++
        answer3.innerHTML = answers[aNum];
        aNum++
        answer4.innerHTML = answers[aNum];
        aNum++
        answer5.innerHTML = answers[aNum];
        aNum++
        qNum++;
        playAudio();
    }
}

function wipeAnswers() {
    answer2.remove();
    answer3.remove();
    answer4.remove();
    answer5.remove();
    answer1.remove();
    document.querySelector("#main-text").appendChild(gameOver).innerHTML = "Game over. Retry?";
    document.querySelector("#main-text").appendChild(gameOver).innerHTML = "Game over. Retry?";
}

function gameEnd() {
    if (scoreCounts.wilfredLight >= scoreCounts.basqueCrize &&
        scoreCounts.wilfredLight > scoreCounts.ozzyRanvalge &&
        scoreCounts.wilfredLight > scoreCounts.jueddsKross &&
        scoreCounts.wilfredLight > scoreCounts.miria) {
        title.innerHTML = results.wilfred;
        document.querySelector('#result-image').appendChild(imgWilfred);
        wipeAnswers();
    } else if (scoreCounts.basqueCrize >= scoreCounts.wilfredLight &&
        scoreCounts.basqueCrize > scoreCounts.ozzyRanvalge &&
        scoreCounts.basqueCrize > scoreCounts.jueddsKross &&
        scoreCounts.basqueCrize > scoreCounts.miria) {
        title.innerHTML = results.basque;
        document.querySelector('#result-image').appendChild(imgBasque);
        wipeAnswers();
    } else if (scoreCounts.ozzyRanvalge >= scoreCounts.wilfredLight &&
        scoreCounts.ozzyRanvalge > scoreCounts.basqueCrize &&
        scoreCounts.ozzyRanvalge > scoreCounts.jueddsKross &&
        scoreCounts.ozzyRanvalge > scoreCounts.miria) {
        title.innerHTML = results.ozzy;
        document.querySelector('#result-image').appendChild(imgOzzy);
        wipeAnswers();
    } else if (scoreCounts.jueddsKross >= scoreCounts.wilfredLight &&
        scoreCounts.jueddsKross > scoreCounts.basqueCrize &&
        scoreCounts.jueddsKross > scoreCounts.ozzyRanvalge &&
        scoreCounts.ojueddsKross > scoreCounts.miria) {
        title.innerHTML = results.juedds;
        document.querySelector('#result-image').appendChild(imgJuedds);
        wipeAnswers();
    } else {
        title.innerHTML = results.miria;
        document.querySelector('#result-image').appendChild(imgMiria);
        wipeAnswers();
    }
}

function playAudio() {
    selectionSound.play();
}

function reloadPage() {
    location.reload();
}