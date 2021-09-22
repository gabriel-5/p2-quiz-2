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
    basque: `Your personality type is Basque Crize, congratulations. You are a great communicataor and are well-known for your patient temperament. I hope your friends all return soon.`,
    ozzy: `Your personality type is Ozzy Ranvalgve, congratulations. You are easily the best fencer around, having spent years at the academy. Will you ever make amends with the sage?`,
    juedds: `Your personality type is Juedds Kross, congratulations. You are deeply religious, and - before it was stolen - never would leave home without your massive gold cross. Who would steal something so cumbersome?`,
    miria: `Your personality type is Miria the Fairy ...What the matter? My master is resting right now. That's a very rare item that you have there. It's called the Foxglove. It has the power to resurrect wandering souls. A messenger must have stolen it and fled, in hopes of returning ...Speaking of which, do you know how Messengers are born? They are originally fragments of human emotions... that acquire physical form and become sentient.`
}

let answers = ["Merchant", "Soldier", "Gravekeeper", "Priest", "Fairy", "I can't see a thing", "Sharp",
    "I wear reading glasses", "Blessed", "Magically Enhanced", "Important Key", "Plate Armour", "Shovel",
    "Gold Cross", "Magic Potion", "Spring", "Autumn", "Summer", "Winter", "I don't mind", "Very old",
    "I don't know yet", "Normal", "Average", "Young"]

let questions = ["Which job would you prefer?", "How is your eyesight?", "What's your favourite thing?", "Season?", "How old are you?"]

let beginQuiz = document.querySelector("#begin-quiz");

let title = document.querySelector("#main-text");

let gameOver = document.querySelector("#game-over");

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
let endingSong = document.querySelector(".ending-song");

// beginQuiz.addEventListener("click", clickToStart);

// answer1.addEventListener("click", nextQuestion1);
// answer2.addEventListener("click", nextQuestion2);
// answer3.addEventListener("click", nextQuestion3);
// answer4.addEventListener("click", nextQuestion4);
// answer5.addEventListener("click", nextQuestion5);

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

function nextQuestion(playerChoice) {
    switch (playerChoice) {
        case answer1:
            scoreCounts.wilfredLight++;
            break;
        case answer2:
            scoreCounts.basqueCrize++;
            break;
        case answer3:
            scoreCounts.ozzyRanvalge++;
            break;
        case answer4:
            scoreCounts.jueddsKross++;
            break;
        case answer5:
            scoreCounts.miria++;
            break;
    }

    if (qNum > 4) {
        gameEnd();
        playAudio2();
    } else {
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
        // playAudio();
    }
}

function wipeAnswers() {
    answer2.remove();
    answer3.remove();
    answer4.remove();
    answer5.remove();
    answer1.remove();
    document.querySelector("#main-text").appendChild(gameOver).innerHTML = "Game over. Retry?";
    gameOver.classList.add("hover-text");
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
        scoreCounts.jueddsKross > scoreCounts.miria) {
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


function playAudio2() {
    endingSong.play();
}

function reloadPage() {
    location.reload();
}