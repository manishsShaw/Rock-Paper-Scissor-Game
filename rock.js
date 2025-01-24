let userscore = 0;
let compscore  = 0;
const choices = document.querySelectorAll(".choice");

const message = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () =>{
    const options = ["rock","paper","scissors"];
   const idx = Math.floor(Math.random() * 3);
return options[idx];
};

const drawgame = () =>{
message.innerText = "Game was draw.play again";
message.style.backgroundColor = "#081b31";
};

const showwinner = (userwin,userchoiced,compchoice) =>{
    if(userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        message.innerText = `you win! your ${userchoiced} beats ${compchoice}`;
        message.style.backgroundColor = "green";
    }else {
        compscore++;
    compscorepara.innerText = compscore;
    message.innerText = `you lost. ${compchoice} lose your ${userchoiced}`;
        message.style.backgroundColor = "red";
    }
};

const playgame = (userchoiced) =>{
//console.log("user choice",userchoiced);
const compchoice = gencompchoice();
//console.log("comp choice  = ",compchoice);
if(userchoiced === compchoice){
drawgame();
}else{
    let userwin = true;
    if(userchoiced === "rock"){
        userwin = compchoice ==="paper" ? false : true;
    }else if(userchoiced === "paper"){
 userwin = compchoice === "scissors" ? false : true;
    } else{
        userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin,userchoiced,compchoice);
}
};

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userchoiced = choice.getAttribute("id");
playgame(userchoiced);
    });
});
