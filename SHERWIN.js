let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');


let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
   {
     name: "711",                 // title ng kanta 
     path: "SHERWIN/711.mp3",      // mp3
     img: "COVER/31-TekaLang.png",       // cover
     singer: "Emman"                    // author
   },
   {
     name: "Across-The-Universe",                // title ng kanta
     path: "SHERWIN/Across-The-Universe.mp3",     // mp3
     img: "COVER/32-RainyDaze.jpg",     // cover
     singer: "K. Deal ft. Cean Jr."     // author
   },
   {
     name: "Amazing",                // title ng kanta
     path: "SHERWIN/Amazing.mp3",     // mp3
     img: "COVER/33-NanditoNa.png",     // cover
     singer: "Kiyo"                     // author
   },
   {
    name: "Aubrey",                // title ng kanta
    path: "SHERWIN/Aubrey.mp3",     // mp3
    img: "COVER/33-NanditoNa.png",     // cover
    singer: "Kiyo"                     // author
  },
  {
    name: "Best-Friend",                // title ng kanta
    path: "SHERWIN/Best-Friend.mp3",     // mp3
    img: "COVER/33-NanditoNa.png",     // cover
    singer: "Kiyo"                     // author
  },
  {
    name: "Bubbly",                // title ng kanta
    path: "SHERWIN/Bubbly.mp3",     // mp3
    img: "COVER/33-NanditoNa.png",     // cover
    singer: "Kiyo"                     // author
  },
  {
    name: "Close-To-You",                // title ng kanta
    path: "SHERWIN/Close-To-You.mp3",     // mp3
    img: "COVER/33-NanditoNa.png",     // cover
    singer: "Kiyo"                     // author
  },
  {
    name: "Hey-Jude",                // title ng kanta
    path: "SHERWIN/Hey-Jude.mp3",     // mp3
    img: "COVER/33-NanditoNa.png",     // cover
    singer: "Kiyo"                     // author
  },
  {
    name: "Linger",                // title ng kanta
    path: "SHERWIN/Linger.mp3",     // mp3
    img: "COVER/33-NanditoNa.png",     // cover
    singer: "Kiyo"                     // author
  },
  {
    name: "New-Soul",                // title ng kanta
    path: "SHERWIN/New-Soul.mp3",     // mp3
    img: "COVER/33-NanditoNa.png",     // cover
    singer: "Kiyo"                     // author
  },
  {
    name: "Rude",                // title ng kanta
    path: "SHERWIN/Rude.mp3",     // mp3
    img: "COVER/33-NanditoNa.png",     // cover
    singer: "Kiyo"                     // author
  },
  {
    name: "Too-Sweet",                // title ng kanta
    path: "SHERWIN/Too-Sweet.mp3",     // mp3
    img: "COVER/33-NanditoNa.png",     // cover
    singer: "Kiyo"                     // author
  },
];

// All functions

// function load the track
function load_track(index_no){
    clearInterval(timer);
    reset_slider();

    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;  
    track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

    timer = setInterval(range_slider ,1000);
    total.innerHTML = All_song.length;
    present.innerHTML = index_no + 1;
}

load_track(index_no);

//mute sound function
function mute_sound(){
    track.volume = 0;
    volume.value = 0;
    volume_show.innerHTML = 0;
}

// checking.. the song is playing or not
 function justplay(){
    if(Playing_song==false){
        playsong();

    }else{
        pausesong();
    }
 }

// reset song slider
 function reset_slider(){
    slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
    track.pause();
    Playing_song = false;
    play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}

// next song
function next_song(){
    if(index_no < All_song.length - 1){
        index_no += 1;
        load_track(index_no);
        playsong();
    }else{
        index_no = 0;
        load_track(index_no);
        playsong();

    }
}

// previous song
function previous_song(){
    if(index_no > 0){
        index_no -= 1;
        load_track(index_no);
        playsong();

    }else{
        index_no = All_song.length;
        load_track(index_no);
        playsong();
    }
}

// change volume
function volume_change(){
    volume_show.innerHTML = recent_volume.value;
    track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
    if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
    }else{
       autoplay = 1;
       auto_play.style.background = "#FF8A65";
    }
}

function range_slider(){
    let position = 0;
        
        // update slider position
        if(!isNaN(track.duration)){
           position = track.currentTime * (100 / track.duration);
           slider.value =  position;
          }

       
       // function will run when the song is over
       if(track.ended){
         play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
               index_no += 1;
               load_track(index_no);
               playsong();
           }
        }
     }
