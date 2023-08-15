let progress=document.getElementById("progress")
let song=document.getElementById("song")
let play=document.getElementById("play")
let heart=document.getElementById("heart")
let redheart=document.getElementById("liked")
let volume=document.getElementById("volume")

function like(){
    if(heart.classList.contains("fa-heart"))
    {
        heart.classList.remove("#like")
        heart.classList.add("#unlike")
        //<i class="fa-solid fa-heart" style="color: #ff0000;"></i>
    }
    else{
        heart.classList.add("#like")
        heart.classList.remove("#unlike")
    }
}

progress.onloadedmetadata = function(){
    progress.max=song.duration;
    progress.valur=song.currentTime
}
//function like(){
//    document.getElementById("heart").style.display="none"
//    document.getElementById("redheart").style.display="block"
//
//}
//function unlike(){
//    document.getElementById("heart").style.display="block"
//    document.getElementById("redheart").style.display="none"
//}

function playpause(){
    if(play.classList.contains("fa-pause"))
    {
        song.pause();
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
    }
    else{
        song.play();
        play.classList.add("fa-pause");
        play.classList.remove("fa-play");
    }
    }

//function mute(){
//    if(volume.classList.comtains("fa-solid fa-volume-high"))
//    {
//        song.muted=true;
//        volume.classList.remove("fa-solid fa-volume-high")
//        volume.classList.add("fa-solid fa-volume-off")
//        
//    }
//    else{
//        song.muted=false;
//        volume.classList.add("fa-volume-high")
//        volume.classList.remove("fa-volume-off")
//    }
//}
    
if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime
    },500)
}

progress.onchange = function(){
    song.play();
    song.currentTime=progress.value;
    play.classList.add("fa-pause");
    play.classList.remove("fa-play");
    }
