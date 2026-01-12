// Array of audio file paths for each question
const questionAudiosQB1 = [
    "B1chapterQ/aamulla.mp3",
    "B1chapterQ/aina.mp3",
    "B1chapterQ/asut.mp3",
    "B1chapterQ/eilen.mp3",
    "B1chapterQ/hedelmaa.mp3",
    "B1chapterQ/kanssa.mp3",
    "B1chapterQ/keskustaan.mp3",
    "B1chapterQ/koulu.mp3",
    "B1chapterQ/lahjaksi.mp3",
    "B1chapterQ/lomaa.mp3",
    "B1chapterQ/lomalla.mp3",
    "B1chapterQ/lomalle.mp3",
    "B1chapterQ/olohuonessa.mp3",
    "B1chapterQ/opiskelet.mp3",
    "B1chapterQ/puhut.mp3",
    "B1chapterQ/ruoasta.mp3",
    "B1chapterQ/saasta.mp3",
    "B1chapterQ/sinulla-on.mp3",
    "B1chapterQ/suomea.mp3",
    "B1chapterQ/talvesta.mp3",
    "B1chapterQ/tanaan.mp3",
    "B1chapterQ/Viikonloppuna.mp3",
]

const questionAudios8 = [
    "B1chapter8/801.mp3",
    "B1chapter8/802.mp3",
    "B1chapter8/803.mp3",
    "B1chapter8/804.mp3",
    "B1chapter8/805.mp3",
    "B1chapter8/806.mp3",
    "B1chapter8/807.mp3",
    "B1chapter8/808.mp3",
    "B1chapter8/809.mp3",
];

const questionAudios8P = [
    "B1chapter8p/8p01.mp3",
    "B1chapter8p/8p02.mp3",
    "B1chapter8p/8p03.mp3",
    "B1chapter8p/8p04.mp3",
    "B1chapter8p/8p05.mp3",
    "B1chapter8p/8p06.mp3",
    "B1chapter8p/8p07.mp3",
    "B1chapter8p/8p08.mp3",
    "B1chapter8p/8p09.mp3",
    "B1chapter8p/8p10.mp3",
    "B1chapter8p/8p11.mp3",
];

const questionAudios5 = [
    "B1chapter5/501.mp3",
    "B1chapter5/502.mp3",
    "B1chapter5/503.mp3",
    "B1chapter5/504.mp3",
    "B1chapter5/505.mp3",
    "B1chapter5/506.mp3",
    "B1chapter5/507.mp3",
    "B1chapter5/508.mp3",
    "B1chapter5/509.mp3",
    "B1chapter5/510.mp3",
    "B1chapter5/511.mp3",
    "B1chapter5/512.mp3",
    "B1chapter5/513.mp3",
];

const questionAudios4 = [
    "B1chapter4/401.mp3",
    "B1chapter4/402.mp3",
    "B1chapter4/403.mp3",
    "B1chapter4/404.mp3",
    "B1chapter4/405.mp3",
    "B1chapter4/406.mp3",
    "B1chapter4/407.mp3",
    "B1chapter4/408.mp3",
    "B1chapter4/409.mp3",
    "B1chapter4/410.mp3",
    "B1chapter4/411.mp3",
];
// Book 1
const chapterYhdeksanAudio = "B1chapter9/Chapter_9.mp3";
const chapterKahdeksanAudio = "B1chapter8/Chapter_8.mp3";
const chapterKahdeksanPAudio = "B1chapter8p/Chapter_8P.mp3";
const chapterViisiAudio = "B1chapter5/Chapter_5.mp3";
const chapterNeljaAudio = "B1chapter4/Chapter_4.mp3";
// Book 2
const chapter1B2 = "B2chapter1/chapter1B2.mp3";

// Book 1
let currentAudioIndexQB1 = -1;
const audioPlayerQB1 = document.getElementById('audioPlayerQB1');

let currentAudioIndex9 = -1;
const audioPlayer9 = document.getElementById('audioPlayer9');

let currentAudioIndex8 = -1;
const audioPlayer8 = document.getElementById('audioPlayer8');

let currentAudioIndex8p = -1;
const audioPlayer8p = document.getElementById('audioPlayer8p');

let currentAudioIndex5 = -1;
const audioPlayer5 = document.getElementById('audioPlayer5');

let currentAudioIndex4 = -1;
const audioPlayer4 = document.getElementById('audioPlayer4');
// Book 2
let currentAudioIndex1B2 = -1;
const audioPlayer1B2 = document.getElementById('audioPlayer1B2');


// Book 1
function playChapterYhdeksan() {
    audioPlayer9.src = chapterYhdeksanAudio;
    audioPlayer9.play().catch(e => console.error("Chapter audio play failed:", e));
}
function playChapterKahdeksan() {
    audioPlayer8.src = chapterKahdeksanAudio;
    audioPlayer8.play().catch(e => console.error("Chapter audio play failed:", e));
}
function playChapterKahdeksanP() {
    audioPlayer8p.src = chapterKahdeksanPAudio;
    audioPlayer8p.play().catch(e => console.error("Chapter audio play failed:", e));
}
function playChapterViisi() {
    audioPlayer5.src = chapterViisiAudio;
    audioPlayer5.play().catch(e => console.error("Chapter audio play failed:", e));
}
function playChapterNelja() {
    audioPlayer4.src = chapterNeljaAudio;
    audioPlayer4.play().catch(e => console.error("Chapter audio play failed:", e));
}

// Book 2
function playChapter1B2() {
    audioPlayer1B2.src = chapter1B2;
    audioPlayer1B2.play().catch(e => console.error("Chapter audio play failed:", e));
}

// Play Questions Function
function playQuestionQB1(index) {
    audioPlayerQB1.src = questionAudiosQB1[index];
    audioPlayerQB1.play().catch(e => console.error("Audio play failed:", e));
}
function playQuestion8(index) {
    audioPlayer8.src = questionAudios8[index];
    audioPlayer8.play().catch(e => console.error("Audio play failed:", e));
}
function playQuestion8P(index) {
    audioPlayer8p.src = questionAudios8P[index];
    audioPlayer8p.play().catch(e => console.error("Audio play failed:", e));
}
function playQuestion5(index) {
    audioPlayer5.src = questionAudios5[index];
    audioPlayer5.play().catch(e => console.error("Audio play failed:", e));
}
function playQuestion4(index) {
    audioPlayer4.src = questionAudios4[index];
    audioPlayer4.play().catch(e => console.error("Audio play failed:", e));
}

function getRandomQuestionQB1() {
    const randomIndex = Math.floor(Math.random() * questionAudiosQB1.length);
    currentAudioIndexQB1 = randomIndex;
    playQuestionQB1(randomIndex);
}
function getRandomQuestion8() {
    const randomIndex = Math.floor(Math.random() * questionAudios8.length);
    currentAudioIndex8 = randomIndex;
    playQuestion8(randomIndex);
}
function getRandomQuestion8P() {
    const randomIndex = Math.floor(Math.random() * questionAudios8P.length);
    currentAudioIndex8p = randomIndex;
    playQuestion8P(randomIndex);
}
function getRandomQuestion5() {
    const randomIndex = Math.floor(Math.random() * questionAudios5.length);
    currentAudioIndex5 = randomIndex;
    playQuestion5(randomIndex);
}
function getRandomQuestion4() {
    const randomIndex = Math.floor(Math.random() * questionAudios4.length);
    currentAudioIndex4 = randomIndex;
    playQuestion4(randomIndex);
}

function repeatQuestionQB1() {
    if (currentAudioIndexQB1 >= 0) {
    playQuestionQB1(currentAudioIndexQB1);
    }
}
function repeatQuestion8() {
    if (currentAudioIndex8 >= 0) {
    playQuestion8(currentAudioIndex8);
    }
}
function repeatQuestion8P() {
    if (currentAudioIndex8p >= 0) {
    playQuestion8P(currentAudioIndex8p);
    }
}
function repeatQuestion5() {
    if (currentAudioIndex5 >= 0) {
    playQuestion5(currentAudioIndex5);
    }
}
function repeatQuestion4() {
    if (currentAudioIndex4 >= 0) {
    playQuestion4(currentAudioIndex4);
    }
}



// Preload audio files for better performance
function preloadAudiosQB1() {
    questionAudiosQB1.forEach(audioSrc => {
    const audio = new Audio();
    audio.src = audioSrc;
    });
}
function preloadAudios8() {
    questionAudios8.forEach(audioSrc => {
    const audio = new Audio();
    audio.src = audioSrc;
    });
}
function preloadAudios8P() {
    questionAudios8P.forEach(audioSrc => {
    const audio = new Audio();
    audio.src = audioSrc;
    });
}
function preloadAudios5() {
    questionAudios5.forEach(audioSrc => {
    const audio = new Audio();
    audio.src = audioSrc;
    });
}
function preloadAudios4() {
    questionAudios4.forEach(audioSrc => {
    const audio = new Audio();
    audio.src = audioSrc;
    });
}

// Start preloading when page loads
window.onload = function() {
    preloadAudios5();
    preloadAudios4();
    preloadAudios8();
    preloadAudios8P();
    preloadAudiosQB1();
};

// Stop the player
function stopAllAudioPlayers() {
    const audioPlayers = [audioPlayerQB1, audioPlayer9, audioPlayer8, audioPlayer8p, audioPlayer5, audioPlayer4, audioPlayer1B2];
    audioPlayers.forEach(player => {
        if (player) {
            try {
                player.pause();
                player.currentTime = 0;
                // Optional: Remove the audio source
                player.src = "";
            } catch (e) {
                console.error("Error stopping player:", e);
            }
        }
    });
}


