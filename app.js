let scoreCount = 0;
const rollButt = document.getElementById('roll')
const restartButt = document.getElementById('restart')

restartButt.addEventListener('click', ()=> {
    scoreCount = 0;
    document.getElementById('condition').innerHTML = ``;
    document.getElementById('update').innerHTML = ``;
    document.getElementById('score').innerHTML = '> SCORE <';
    roll.style.visibility = 'visible';
    restart.style.visibility = 'hidden';
});

rollButt.addEventListener("click", ()=> {
    let result = Math.floor(Math.random() * 6) + 1;
    if(result>1){
        scoreCount += result;
        document.getElementById('condition').innerHTML = `YOU ROLLED A ${result}!`;
        document.getElementById('score').innerHTML = `${scoreCount}`;

        if(scoreCount>=20){
            document.getElementById('update').innerHTML = `WINNER!!! YOU SCORED A TOTAL OF ${scoreCount}!`;
            scoreCount = 0;
            rollButt.style.visibility = 'hidden';
            restartButt.style.visibility = 'visible';
        };
    } else if(result==1){
        scoreCount = 0;
        document.getElementById('condition').innerHTML = `YOU ROLLED A ${result}!`;
        document.getElementById('score').innerHTML = `${scoreCount}`;
        document.getElementById('update').innerHTML = `YOU LOSE!!!`;
        rollButt.style.visibility = 'hidden';
        restartButt.style.visibility = 'visible';
    } else {
        document.getElementById('condition').innerHTML = `SOMETHING WENT WRONG, TRY AGAIN`;
    }
});

function themeButt () {
    let change = document.getElementById("container");
    let change2 = document.getElementById("game");
    let change3 = document.getElementById("buttNaked");
    let change4 = document.getElementById("info");
    let change5 = document.getElementById("roll");
    let change6 = document.getElementById("restart");

    change.classList.toggle("theme");
    change2.classList.toggle("theme");
    change3.classList.toggle("theme");
    change4.classList.toggle("theme");
    change5.classList.toggle("theme");
    change6.classList.toggle("theme");
};