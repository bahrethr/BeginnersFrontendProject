//SongElement
let playBtn = document.querySelector('.play');
let song = document.querySelector('.song');
let video = document.querySelector('.video-container video');
let SoundPicker = document.querySelectorAll('.sound-picker button');

//AnimateElements 
let outline = document.querySelector('.moving-outline circle');

let timeDisplay = document.querySelector('.time-display');
let timeSelect = document.querySelectorAll('.time-select button');



let outlineLength = outline.getTotalLength();
let Fake = 600;
outline.style.strokeDasharray = outlineLength;
outline.style.strokeDashoffset = outlineLength;


playBtn.addEventListener('click', () =>{
    
    if(song.paused){

        song.play();
        video.play();
        playBtn.src = './svg/pause.svg';
    
    }else{

        song.pause();
        video.pause();
        playBtn.src = './svg/play.svg';
    }

    //Animate Circle
    song.ontimeupdate = () => {
        let currentTime = song.currentTime;
        let elapsed = Fake - currentTime;
        let second = Math.floor(elapsed % 60);
        let Minute = Math.floor(elapsed / 60);

        let progress = outlineLength - (currentTime / Fake) * outlineLength;
        outline.style.strokeDashoffset = progress;

        timeDisplay.textContent = `${Minute}:${second}`;

        if(currentTime >= Fake){
            song.pause();
            song.currentTime = 0;
            video.pause();
            playBtn.src = './svg/play.svg';

        }
    };

});


timeSelect.forEach(option =>{
    option.addEventListener('click', (e) =>{
        let TimeValue = e.target.dataset.time;

        Fake  = TimeValue;
        timeDisplay.textContent = `${Math.floor(TimeValue / 60)}:${Math.floor(TimeValue % 60)}`;

        song.pause();
        video.pause();
        playBtn.src = './svg/play.svg';

    });
});


//change Sounds 
SoundPicker.forEach(sound =>{
    sound.addEventListener('click', function(e){
        song.src = this.getAttribute('data-sound');
        video.src = this.getAttribute('data-video'); 
    });
})