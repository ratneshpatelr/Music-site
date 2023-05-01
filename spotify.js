let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById("masterplay");
let myprogressvar = document.getElementById("playvar");
let gif = document.getElementById("gif");
let mastersongname = document.getElementById("mastersongname");
let songitem = Array.from(document.getElementsByClassName("songitem"))

let songs = [
    {songName: 'tune1', filePath: "songs/1.mp3", coverPath: 'covers/1.jpg'},
    {songName: 'tune2', filePath: "songs/2.mp3", coverPath: 'covers/2.jpg'},
    {songName: 'tune3', filePath: "songs/3.mp3", coverPath: 'covers/3.jpg'},
    {songName: 'tune4', filePath: "songs/4.mp3", coverPath: 'covers/4.jpg'},
    {songName: 'tune5', filePath: "songs/5.mp3", coverPath: 'covers/5.jpg'},
    {songName: 'tune6', filePath: "songs/6.mp3", coverPath: 'covers/6.jpg'}, 
    {songName: 'tune7', filePath: "songs/7.mp3", coverPath: 'covers/7.jpg'}, 
    {songName: 'tune8', filePath: "songs/8.mp3", coverPath: 'covers/8.jpg'}, 
    {songName: 'tune9', filePath: "songs/9.mp3", coverPath: 'covers/9.jpg'}, 
    {songName: 'tune10', filePath: "songs/10.mp3", coverPath: 'covers/10.jpg'}, 
    
]





//bottom

masterplay.addEventListener('click', ()=>{
    if(audioElement.paused ||audioElement.currentTime<=0){
        gif.style.opacity=1;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    }

    else{
        gif.style.opacity=0;
        audioElement.pause();
        mastersongname.innerHTML= null;
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    myprogressvar.value = audioElement.currentTime;
})
myprogressvar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressvar.value;
})




//center
songitem.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src =  songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
    })



const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
    element.classList.add('fa-play-circle'); 
    })
}

Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
     element.addEventListener("click", (e)=>{
        makeAllplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        mastersongname.innerHTML=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();  
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        
     })
})


document.getElementById('next').addEventListener('click', (e)=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongname.innerHTML=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();  
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', (e)=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongname.innerHTML=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();  
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})

