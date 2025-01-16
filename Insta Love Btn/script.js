let video = document.querySelector(".video");
let videoEl = document.querySelector("#my-video")
let love = document.querySelector("#love");
let likeCount = document.querySelector("#likeCount");
let like = 0;
let flag = 0;
let play = document.querySelector("#play");
let circle = document.querySelector(".circle");


video.addEventListener("dblclick", function(){
    love.style.opacity = '0.8';
    love.style.transform = 'translate(-50%, -50%) scale(1)';
    likeCount.innerHTML = `${like++}`;
    likeCount.style.opacity = "1";
    setTimeout(function(){
    love.style.transform = 'translate(-50%, -50%) scale(0)'; 
    }, 1000)
})


video.addEventListener("click", function(){

    if(flag == 0){
        videoEl.pause();
        flag = 1;
        play.style.opacity = "1";
        play.style.color = "white";
        play.style.transform = 'translate(-50%, -50%) scale(1)';
        circle.style.transform = 'translate(-50%, -50%) scale(1)';
        circle.style.opacity = "0.7"
    }else{
        videoEl.play();
        flag = 0;
        play.style.color = "white";
        play.style.transform = 'translate(-50%, -50%) scale(0)';
        circle.style.transform = 'translate(-50%, -50%) scale(0)';
        circle.style.opacity = "0"
    }
})