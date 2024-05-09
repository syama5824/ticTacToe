/* winning pattern ofr tic tac toe are
0 1 2
3 4 5
6 7 8

0 3 6
1 4 7
2 5 8

0 4 8
2 4 6
*/
let boxes = document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#newGame-btn");
let msgContainer = document.querySelector(".msg-container");
let msg =document.querySelector("#msg");

let turnO = true; //player O and player X

//2D array
//let arr =[["","",""],["","",""],["","",""]];

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        //console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled= true;

        checkWinner();
    });
});

const showWinner =(winner)=>{
    msg.innerText = `Congrants, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
};

const disableBox =()=>{
    for(let box of boxes){
        box.disabled =true;
    }
};

const enableBox =()=>{
    for(let box of boxes){
        box.disabled =false;
        box.innerText="";
    }
};

const checkWinner=()=>{
    //let allBoxesFilled=false;
    /*let winnerFound=false;
    for(pattern of winPattern){
        /*
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        *//*
        let posVal1=boxes[pattern[0]].innerText;
        let posVal2=boxes[pattern[1]].innerText;
        let posVal3=boxes[pattern[2]].innerText;

        if(posVal1!="" &&posVal2!="" &&posVal3!=""){
            if(posVal1 === posVal2 && posVal2 === posVal3){
                //console.log("WINNER!!",posVal1);
                disableBox();
                winnerFound=true;
                showWinner(posVal1);
                return;
            }
        }
    }*/

    /*let allBoxesFilled=true;
    if(!winnerFound){
        
        for(let box of boxes){
            if(box.innerText !=""){
                allBoxesFilled=false;
                break;
            }
        }
        if(allBoxesFilled){
            msg.innerText="It's a Draw!!";
            msgContainer.classList.remove("hide");
        }
    }
    if(winnerFound||allBoxesFilled){
        disableBox();
    }*/

    let winner=null;
    for(pattern of winPattern){
        let posVal1=boxes[pattern[0]].innerText;
        let posVal2=boxes[pattern[1]].innerText;
        let posVal3=boxes[pattern[2]].innerText;

        if(posVal1!="" &&posVal2!="" &&posVal3!=""){
            if(posVal1 === posVal2 && posVal2 === posVal3){
                //console.log("WINNER!!",posVal1);
                winner=posVal1;
                break;
            }
        }
    }
    if(winner!=null){
        showWinner(winner);
    }
    else{
        let allBoxesFilled=true;
        for(let box of boxes){
            if(box.innerText === ""){
                allBoxesFilled=false;
                break;
            }
        }
        if(allBoxesFilled){
            msg.innerText="It's a Draw!!";
            msgContainer.classList.remove("hide");
            disableBox();
        }
    }
};

const resetGame =()=>{
    turnO=true;
    enableBox();
    msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);