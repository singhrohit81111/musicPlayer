let index=0;
let audioElement=new Audio('1.mp3');
let progressBar=document.getElementById("progressBar");
let masterPlay=document.getElementById("masterPlay");
let item=Array.from(document.getElementsByClassName('item'));
let giff= document.getElementById("giff");
let son=document.getElementById("son");

console.log("welcome to the player");

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "1.mp3", coverPath: "1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "2.mp3", coverPath: "2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "3.mp3", coverPath: "3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "4.mp3", coverPath: "4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "5.mp3", coverPath: "5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "2.mp3", coverPath: "6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "2.mp3", coverPath: "7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "2.mp3", coverPath: "8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "2.mp3", coverPath: "9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "4.mp3", coverPath: "10.jpg"},
]


item.forEach((element,i)=>{
element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})


masterPlay.addEventListener("click", ()=>{
if(audioElement.paused||audioElement.currentTime<=0){
    audioElement.play();
    console.log("play hua");
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    giff.style.opacity=1;
}
else{
    audioElement.pause();
    console.log("Ruka");
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
    giff.style.opacity=0;
}
})

audioElement.addEventListener("timeupdate",()=>{
let progressBarval=parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progressBarval);
progressBar.value=progressBarval;
})

progressBar.addEventListener('change',()=>{
    audioElement.currentTime=(progressBar.value*audioElement.duration)/100;
})


function makeAllPlays(){
    Array.from(document.getElementsByClassName("miniPlay")).forEach((element)=>{
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");
    })
}

Array.from(document.getElementsByClassName("miniPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
      if(e.target.classList.contains("fa-pause")){
        if(audioElement.played){
        audioElement.pause();
        e.target.classList.remove("fa-pause");
        e.target.classList.add("fa-play");
        giff.style.opacity=0;
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        }
        else if(audioElement.paused){
            audioElement.play();
            e.target.classList.remove("fa-play");
            e.target.classList.add("fa-pause");
            giff.style.opacity=1;
            masterPlay.classList.remove("fa-play");
            masterPlay.classList.add("fa-pause");
        }
      }
      else{
        audioElement.currentTime=0;
        makeAllPlays();
        index=parseInt(e.target.id);
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        audioElement.src=`${index+1}.mp3`;
        son.innerText=songs[index].songName;

        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
    }
    })
})

document.getElementById('nextt').addEventListener('click',()=>{
    audioElement.currentTime=0;
    if(index<9){
        index+=1;
    }
    else{
        index=0;
    }
        audioElement.src=`${index+1}.mp3`;
        son.innerText=songs[index].songName;
        
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
})



document.getElementById('previous').addEventListener('click',()=>{
    audioElement.currentTime=0;
    if(index==0){
        index=9;;
    }
    else{
        index-=1;
    }
        audioElement.src=`${index+1}.mp3`;
        son.innerText=songs[index].songName;
        
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
})