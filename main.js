let computerNum = 0
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("userInput");
let resultArea = document.getElementById("result-area");
playButton.addEventListener("click",play);

function pickRandomNum(){
    computerNum = Math.floor(Math.random()* 100);
}

function play(){
    let userValue = userInput.value
    if(userValue < computerNum){
        resultArea.textContent = "Up!!"
        console.log("UP!!")
    }else if(userValue >computerNum){
        resultArea.textContent = "Down!!"
        console.log("down!!")
    }else {
        resultArea.textContent = "정답!!"
        console.log("맞추셨슴미당")
    }
}

pickRandomNum();
