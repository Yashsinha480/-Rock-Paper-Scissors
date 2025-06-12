const choice=document.querySelectorAll(".choice");
let user_score=0;
let comp_score=0;
const msg=document.querySelector(".msg");
const user_score_para=document.querySelector("#user_score");
const comp_score_para=document.querySelector("#comp_score");
const rst=document.querySelector(".reset");
const display_msg=document.querySelector(".disappear_msg");

choice.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        const user_choice=choice.getAttribute("id");
        playgame(user_choice);
    })
});

const playgame=(user_choice)=>{
    const comp_choice=gen_comp_choice();
    console.log(comp_choice);
    let user_win=true;
    if(user_choice==comp_choice){
        draw();
        return;
    }
    else{
        if(user_choice=="stone"){
            user_win=comp_choice=="paper"? false: true;
        }
        else if(user_choice=="scissor"){
            user_win=comp_choice=="rock"? false: true;
        }
        else if(user_choice=="paper"){
            user_win=comp_choice=="scissor"? false: true;
        }
    }
    show_winner(user_win,user_choice,comp_choice);
}

const gen_comp_choice=()=>{
    const option=["stone","scissor","paper"];
    const rand_number=Math.floor(Math.random()*3);
    return option[rand_number];

}

const show_winner=(user_win,user_choice,comp_choice)=>{
    if(user_win){
        user_score++;
        user_score_para.innerText=user_score;
        msg.innerText=`YOU WIN! Your ${user_choice} beats ${comp_choice}`;
        msg.style.backgroundColor="green";
        display_msg.classList.remove("hide");
        setTimeout(() => {
        display_msg.classList.add("hide");
        }, 1000);
    }
    else{
        comp_score++;
        comp_score_para.innerText=comp_score;
        msg.innerText=`YOU LOST! ${comp_choice} beats your ${user_choice}`;
        msg.style.backgroundColor="red";
    }
}

const draw=()=>{
    msg.innerText="GAME WAS DRAW! PLAY AGAIN";
    msg.style.backgroundColor="";
}

const reset=()=>{
    user_score = 0;
    comp_score = 0;
    user_score_para.innerText=0;
    comp_score_para.innerText=0;
    msg.innerText="SELECT YOUR CHOICE";
    msg.style.backgroundColor="rgb(177, 175, 175)"
}

rst.addEventListener("click",reset);
