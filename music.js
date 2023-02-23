const music = document.querySelector("audio");
const play = document.getElementById("play");
const img = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
    {
        name: 'Star Gaze',
        title: 'STAR GAZE',
        artist: 'Prem Dhillon',
    },
    {
        name: 'No Soul',
        title: 'NO SOUL',
        artist: 'Prem Dhillon',
    },
    {
        name: 'Without You',
        title: 'WITHOUT YOU',
        artist: 'Prem Dhillon',
    }   
]

let isPlaying = false;

// For playing function
const playMusic = ()=> {
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play', 'fa-pause');
    img.classList.add("anime");
};

// For pausing function
const pauseMusic = ()=> {
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause', 'fa-play');
    img.classList.remove("anime");
};

play.addEventListener('click', () => {
    // if (isPlaying) {
    //     pauseMusic();
    // }
    // else {
    //     playMusic();
    // }

    // In ternary operator we can write the above code as
    isPlaying ? pauseMusic() : playMusic();

});

// For changing the music data

const loadSongs = (songs) => {
    title.textContent = songs.title
    artist.textContent = songs.artist
    music.src = "music/" + songs.name + ".mp3";
    img.src = "images/" + songs.name + ".jpg";
};

songIndex = 0;

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
}

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
}

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);
