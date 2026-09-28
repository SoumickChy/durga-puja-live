console.log("SCRIPT IS WORKING");

// =========================
// BACKGROUND SLIDESHOW
// =========================

const backgroundOne = document.querySelector(".background-one");
const backgroundTwo = document.querySelector(".background-two");

const images = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg",
  "images/photo4.jpg",
  "images/photo5.jpg",
  "images/photo6.jpg",
  "images/photo7.jpg",
  "images/photo8.jpg",
  "images/photo9.jpg",
  "images/photo10.jpg",
];
// =========================
// PUJA MUSIC PLAYLISTS
// =========================

const playlists = {

  normal: [

    // =========================
    // MAHALAYA
    // =========================

    {
      title: "Mahalaya (Mahishasura Mardini)",
      artist: "Birendra Krishna Bhadra",
      videoId: "YQyo8QeoYhc",
    },

    {
      title: "Ya Chandi (যা চণ্ডী - মহিষাসুরমর্দিনী)",
      artist: "Mahalaya",
      videoId: "WRB7751OTmk",
    },

    {
      title: "Bajlo tomar alor benu",
      artist: "By DEBOLINA",
      videoId: "yzEbF55ywtM",
    },

    {
      title: "Ogo Amar Agomoni",
      artist: "Star jalsha collection",
      videoId: "mwz6EIrsiPw",
    },

    {
      title: "জটাজূটসমাযুক্তাম",
      artist: "Mahalaya",
      videoId: "FwByMF-JFcg",
    },

    {
      title: "Jaya Jaya Japya Jaye",
      artist: "Medwings Nrityagamani",
      videoId: "8-C-BmVaAwk",
    },

    {
      title: "Rupang Dehi Jayang Dehi",
      artist: "Pandit Tushar Dutta",
      videoId: "tXXwsHeS_T0",
    },

    {
      title: "Aham Rudrebhirvasubhischara",
      artist: "Medwings Nrityagamani",
      videoId: "zFeNY4Vy73k",
    },

    {
      title: "Shubhro Shonkho Robe (শুভ্র শঙ্খ রবে)",
      artist: "Medwings Nrityagamani",
      videoId: "XIXVWS5gFDI",
    },

    {
      title: "Jago Durga | জাগো দূর্গা",
      artist: "Debolinaa Nandy",
      videoId: "o1tu9dPZhbM",
    },

    {
      title: "চণ্ডীপাঠ | মহিষাসুরমর্দ্দিনী",
      artist: "Debolinaa Nandy",
      videoId: "AnrGifI3WHk",
    },

    {
      title: "মহিষাসুরমর্দ্দিনী | Mahalaya |",
      artist: "Mahalaya all song",
      videoId: "LOlyrK53QM4",
    },

    {
      title: "अयि गिरिनन्दिनि",
      artist: "Madhubanti Bagchi",
      videoId: "4CKpFcQdJXk",
    },


    // =========================
    // SHASHTHI
    // =========================

    {
      title: "Dugga Elo",
      artist: "Monali Thakur",
      videoId: "xlElO06nQy8",
    },

    {
      title: "Dugga Dugga",
      artist: "Sunidhi Chauhan",
      videoId: "XyatKcoBrPw",
    },

    {
      title: "Dugga Elo ORIGINAL",
      artist: "Akriti Kakar & Debanjali B. Joshi",
      videoId: "xytF80lvSV8",
    },

    {
      title: "Gouri Elo",
      artist: "Kalika | DOHAR | Lopa | Anupam | Upal | Aditi | Rishi | Tirtha |",
      videoId: "tVj93-Aho2s",
    },

    {
      title: "Uma Ashe Notun Saje",
      artist: "| Ankita Bhattacharyya | Mak Mallar | Somraj |",
      videoId: "hnkfDCbULxk",
    },

    {
      title: "Elo Re Dugga Elo Re",
      artist: "Raj Barman & John Bhattacharya",
      videoId: "6YCfoWniGvg",
    },

    {
      title: "Shubho Shubho",
      artist: "Shantanu Moitra",
      videoId: "4ZWQYdzS_WY",
    },

    {
      title: "Dhak music",
      artist: "Durgapuja Arti Dhaker Bajna",
      videoId: "DZ21CSg22nc",
    },

    {
      title: "Dugga Maa Asche",
      artist: "Kiran Mazumder",
      videoId: "sf6usUybi3k",
    },

    {
      title: "Agomonir Gaan (আগমনীর গান)",
      artist: "Anupam Roy | SVF Music",
      videoId: "MsqpjM09MrY",
    },


    // =========================
    // SAPTAMI
    // =========================

    {
      title: "Hote Paare Na",
      artist: "Arindom and Prashmita Paul",
      videoId: "6GY5s8DbBlg",
    },

    {
      title: "Jago Uma",
      artist: "Rupankar Bagchi & Anupam Roy",
      videoId: "OWhOsOHQjY0",
    },

    {
      title: "Joy Joy Durga Maa",
      artist: "Abhijeet Bhattacharya",
      videoId: "3E_qefwPA0E",
    },

    {
      title: "Ailo Uma Barite",
      artist: "Antara Nandy",
      videoId: "4zyCkmAS1Oo",
    },

    {
      title: "Maa Go Tumi Sarbojanin",
      artist: "Shreya Ghoshal",
      videoId: "xkqjEYAlM_8",
    },

    {
      title: "Dhak Baja Kashor Baja",
      artist: "Shreya Ghoshal",
      videoId: "voH3xUpLVr4",
    },

    {
      title: "Jai Durga",
      artist: "Shreyas Puranik, Raja Hasan, Divya Kumar, & Altamash Faridi",
      videoId: "7KvsHBmZQrM",
    },

    {
      title: "Shubhaarambh",
      artist: "Shruti Pathak & Divya Kumar",
      videoId: "Gx_Rqsq1DIw",
    },

    {
      title: "Jago Maa (জাগো মা)",
      artist: "Arijit Singh",
      videoId: "Jsene5mhed0",
    },

    {
      title: "Esho Naba Rupe",
      artist: "Antara Nandy, Ishan Mitra",
      videoId: "hqGQgtuGMWI",
    },


    // =========================
    // ASHTAMI
    // =========================

    {
      title: "Elo Je Maa",
      artist: "Abhijeet Bhattacharya & Shreya Ghoshal",
      videoId: "GSJDim_JP4M",
    },

    {
      title: "Aamaar Dugga",
      artist: "Monali Thakur, Tyohaar & Anindya Chattopadhya",
      videoId: "4h5DXcN6cd4",
    },

    {
      title: "Esho Ma",
      artist: "Shreya Ghoshal",
      videoId: "zVSihjSChtw",
    },

    {
      title: "Aaj Baaje",
      artist: "Somchanda Bhattacharya",
      videoId: "JrcqCpFjE7Q",
    },

    {
      title: "Durga Maa",
      artist: "Akassh I Haimanti",
      videoId: "Ez44dZdXDRk",
    },

    {
      title: "Dhak Baaja Komor Nacha",
      artist: "Jeet, Akriti Kakar, Dev Negi",
      videoId: "G7CdEseBpwc",
    },

    {
      title: "Ashtamite Tomar Paray",
      artist: "Debayan Banerjee, Srijita Mitra & Subham Mitra",
      videoId: "yD0dpeS1eak",
    },

    {
      title: "Parvati",
      artist: "Sadhu S. Tiwari",
      videoId: "s2HYl12gmOY",
    },


    // =========================
    // NAVAMI
    // =========================

    {
      title: "Dugga Ma",
      artist: "Arijit Singh",
      videoId: "sPuZ0Q3KDWo",
    },

    {
      title: "Shishire Shishire Sharodo Akashe",
      artist: "Subhamita Banerjee ,Trisha Parui, Disha Roy & Chandrika Bhattacharya",
      videoId: "ZunoBaore6U",
    },

    {
      title: "Dugga Mai Ki Joy",
      artist: "Jishnu Dasgupta & Nilanjana De",
      videoId: "Am7BsF3JlUE",
    },

    {
      title: "Elo Maa Dugga",
      artist: "ROOH MUSIC",
      videoId: "JUzvmHYvMqI",
    },

    {
      title: "Durgatinashini",
      artist: "DEBOLINAA NANDY",
      videoId: "3M6dJZV_MEo",
    },

    {
      title: "Elo Maa Dugga Thakur",
      artist: "Sonu Nigam, Monali Thakur, Jeet Gannguli",
      videoId: "wpKThi5dZN0",
    },


    // =========================
    // DASHAMI
    // =========================

    {
      title: "Ebar Jeno Onno Rokom Pujo",
      artist: "Nakash Aziz & Antara Mitra",
      videoId: "E2zfQEo7Q_M",
    },

    {
      title: "Dhaker Taley",
      artist: "Abhijeet Bhattacharya, Parinita & Sudipto",
      videoId: "hbXuXt7gkFY",
    },

    {
      title: "Maa Go Tui",
      artist: "Manomay Bhattacharyya & Somchanda Bhattacharya",
      videoId: "60tSbJWJCr0",
    },

    {
      title: "Shundori Komola",
      artist: "Antara Mitra & Armaan Malik",
      videoId: "E_6K3no0PD0",
    },

    {
      title: "Aasche Bochor Abar Hobe",
      artist: "Siddhartha Ray (Sidhu)",
      videoId: "Drfe7LjJ3hc",
    },

    {
      title: "Asatoma Sadgamaya",
      artist: "Arijit Singh",
      videoId: "rS9IrdIbW2c",
    },

    {
      title: "Chaarpashe Aalo Hok (চারপাশে আলো হোক)",
      artist: "SVF Music",
      videoId: "mDEzESGA0h8",
    },

    {
      title: "Joyo Joyo Bijoyagaman",
      artist: "Dohar",
      videoId: "zu07LXoyxro",
    },

  ],



  mahalaya: [
    {
      title: "Mahalaya (Mahishasura Mardini)",
      artist: " Birendra Krishna Bhadra",
      videoId: "YQyo8QeoYhc",
    },
    {
      title: "Ya Chandi (যা চণ্ডী - মহিষাসুরমর্দিনী) ",
      artist: "Mahalaya",
      videoId: "WRB7751OTmk",
    },
    {
      title: "Bajlo tomar alor benu",
      artist: "By DEBOLINA",
      videoId: "yzEbF55ywtM",
    },
    {
      title: " Ogo Amar Agomoni ",
      artist: "Star jalsha collection",
      videoId: "mwz6EIrsiPw",
    },
    {
      title: "জটাজূটসমাযুক্তাম",
      artist: "Mahalaya",
      videoId: "FwByMF-JFcg",
    },
    {
      title: "Jaya Jaya Japya Jaye",
      artist: "Medwings Nrityagamani",
      videoId: "8-C-BmVaAwk",
    },
    {
      title: "Rupang Dehi Jayang Dehi",
      artist: "Pandit Tushar Dutta ",
      videoId: "tXXwsHeS_T0",
    },
    {
      title: "Aham Rudrebhirvasubhischara",
      artist: "Medwings Nrityagamani",
      videoId: "zFeNY4Vy73k",
    },
    {
      title: "Shubhro Shonkho Robe (শুভ্র শঙ্খ রবে)",
      artist: "Medwings Nrityagamani",
      videoId: "XIXVWS5gFDI",
    },
    {
      title: "Jago Durga | জাগো দূর্গা",
      artist: "Debolinaa Nandy",
      videoId: "o1tu9dPZhbM",
    },
    {
      title: "চণ্ডীপাঠ | মহিষাসুরমর্দ্দিনী",
      artist: "Debolinaa Nandy",
      videoId: "AnrGifI3WHk",
    },
    {
      title: "মহিষাসুরমর্দ্দিনী | Mahalaya |",
      artist: "Mahalaya all song",
      videoId: "LOlyrK53QM4",
    },
    {
    title: "अयि गिरिनन्दिनि",
    artist: "Madhubanti Bagchi",
    videoId: "4CKpFcQdJXk",
},
  ],

  shashthi: [
    {
      title: "Dugga Elo",
      artist: "Monali Thakur",
      videoId: "xlElO06nQy8",
    },

    {
      title: "Dugga Dugga",
      artist: "Sunidhi Chauhan",
      videoId: "XyatKcoBrPw",
    },

    {
      title: "Dugga Elo ORIGINAL",
      artist: "Akriti Kakar & Debanjali B. Joshi",
      videoId: "xytF80lvSV8",
    },

    {
      title: "Gouri Elo",
      artist:
        "Kalika | DOHAR | Lopa | Anupam | Upal | Aditi | Rishi | Tirtha |",
      videoId: "tVj93-Aho2s",
    },

    {
      title: "Uma Ashe Notun Saje",
      artist: "| Ankita Bhattacharyya | Mak Mallar | Somraj |",
      videoId: "hnkfDCbULxk",
    },

    {
      title: "Elo Re Dugga Elo Re",
      artist: "Raj Barman & John Bhattacharya",
      videoId: "6YCfoWniGvg",
    },
    {
    title: "Shubho Shubho",
    artist: "Shantanu Moitra",
    videoId: "4ZWQYdzS_WY",
},
{
    title: "Dhak music",
    artist: "Durgapuja Arti Dhaker Bajna",
    videoId: "DZ21CSg22nc",
},
{
    title: "Dugga Maa Asche",
    artist: "Kiran Mazumder",
    videoId: "sf6usUybi3k",
},
{
    title: "Agomonir Gaan (আগমনীর গান)",
    artist: "Anupam Roy | SVF Music",
    videoId: "MsqpjM09MrY",
},
  ],

  saptami: [

    {
    title: "Hote Paare Na ",
    artist: "Arindom and Prashmita Paul",
    videoId: "6GY5s8DbBlg",
    },
    {
      title: "Jago Uma",
      artist: "Rupankar Bagchi & Anupam Roy",
      videoId: "OWhOsOHQjY0",
    },

    {
      title: "Joy Joy Durga Maa",
      artist: "Abhijeet Bhattacharya",
      videoId: "3E_qefwPA0E",
    },

    {
      title: "Ailo Uma Barite",
      artist: "Antara Nandy ",
      videoId: "4zyCkmAS1Oo",
    },

    {
      title: "Maa Go Tumi Sarbojanin",
      artist: "Shreya Ghoshal",
      videoId: "xkqjEYAlM_8",
    },
    {
      title: "Dhak Baja Kashor Baja",
      artist: "Shreya Ghoshal",
      videoId: "voH3xUpLVr4",
    },
    {
    title: "Jai Durga",
    artist: "Shreyas Puranik, Raja Hasan, Divya Kumar, & Altamash Faridi",
    videoId: "7KvsHBmZQrM",
},
{
    title: "Shubhaarambh",
    artist: "Shruti Pathak & Divya Kumar",
    videoId: "Gx_Rqsq1DIw",
},
{
    title: "Jago Maa (জাগো মা)",
    artist: "Arijit Singh",
    videoId: "Jsene5mhed0",
},
{
    title: "Esho Naba Rupe",
    artist: "Antara Nandy, Ishan Mitra",
    videoId: "hqGQgtuGMWI",
},
  ],

  ashtami: [
    {
      title: "Elo Je Maa",
      artist: "Abhijeet Bhattacharya & Shreya Ghoshal",
      videoId: "GSJDim_JP4M",
    },

    {
      title: "Aamaar Dugga",
      artist: "Monali Thakur, Tyohaar & Anindya Chattopadhya",
      videoId: "4h5DXcN6cd4",
    },

    {
      title: "Esho Ma",
      artist: "Shreya Ghoshal",
      videoId: "zVSihjSChtw",
    },
     {
      title: "Aaj Baaje",
      artist: "Somchanda Bhattacharya",
      videoId: "JrcqCpFjE7Q",
    },

    {
      title: "Durga Maa",
      artist: "Akassh I Haimanti",
      videoId: "Ez44dZdXDRk",
    },

    {
      title: "Dhak Baaja Komor Nacha",
      artist: "Jeet, Akriti Kakar, Dev Negi",
      videoId: "G7CdEseBpwc",
    },
    {
    title: "Ashtamite Tomar Paray",
    artist: "Debayan Banerjee, Srijita Mitra & Subham Mitra",
    videoId: "yD0dpeS1eak",
},
{
    title: "Parvati",
    artist: "Sadhu S. Tiwari",
    videoId: "s2HYl12gmOY",
},
    
  ],

  navami: [
   {
      title: "Dugga Ma",
      artist: "Arijit Singh",
      videoId: "sPuZ0Q3KDWo",
    },

    {
      title: "Shishire Shishire Sharodo Akashe",
      artist: "Subhamita Banerjee ,Trisha Parui, Disha Roy & Chandrika Bhattacharya",
      videoId: "ZunoBaore6U",
    },

    {
      title: "Dugga Mai Ki Joy",
      artist: "Jishnu Dasgupta & Nilanjana De",
      videoId: "Am7BsF3JlUE",
    },

    {
      title: "Elo Maa Dugga",
      artist: "ROOH MUSIC",
      videoId: "JUzvmHYvMqI",
    },

    {
      title: "Durgatinashini",
      artist: "DEBOLINAA NANDY",
      videoId: "3M6dJZV_MEo",
    },

    {
      title: "Elo Maa Dugga Thakur",
      artist:"Sonu Nigam, Monali Thakur, Jeet Gannguli",
      videoId: "wpKThi5dZN0",
    },
  ],

  dashami: [
  {
      title: "Ebar Jeno Onno Rokom Pujo",
      artist: "Nakash Aziz & Antara Mitra",
      videoId: "E2zfQEo7Q_M",
    },

    {
      title: "Dhaker Taley",
      artist: "Abhijeet Bhattacharya, Parinita & Sudipto",
      videoId: "hbXuXt7gkFY",
    },

    {
      title: "Maa Go Tui",
      artist: "Manomay Bhattacharyya & Somchanda Bhattacharya",
      videoId: "60tSbJWJCr0",
    },

    {
      title: "Shundori Komola",
      artist: "Antara Mitra & Armaan Malik",
      videoId: "E_6K3no0PD0",
    },

    {
      title: "Aasche Bochor Abar Hobe",
      artist: "Siddhartha Ray (Sidhu)",
      videoId: "Drfe7LjJ3hc",
    },

    {
      title: "Asatoma Sadgamaya",
      artist: "Arijit Singh",
      videoId: "rS9IrdIbW2c",
    },

    {
      title: "Chaarpashe Aalo Hok(চারপাশে আলো হোক)",
      artist: "SVF Music",
      videoId: "mDEzESGA0h8",
    },

    {
      title: "Joyo Joyo Bijoyagaman ",
      artist:"Dohar",
      videoId: "zu07LXoyxro",
    },
  ],
};
let currentImage = 0;
let showingFirstLayer = true;

function changeBackground() {
  currentImage++;

  if (currentImage >= images.length) {
    currentImage = 0;
  }

  if (showingFirstLayer) {
    backgroundTwo.style.backgroundImage = `url("${images[currentImage]}")`;

    backgroundTwo.style.opacity = "1";
    backgroundOne.style.opacity = "0";
  } else {
    backgroundOne.style.backgroundImage = `url("${images[currentImage]}")`;

    backgroundOne.style.opacity = "1";
    backgroundTwo.style.opacity = "0";
  }

  showingFirstLayer = !showingFirstLayer;
}
let backgroundTimer =
    setInterval(changeBackground, 5000);

// ========================
// ELEMENTS
// =========================

const playButton = document.querySelector(".play-btn");

const volumeBar = document.querySelector(".volume-bar");
// Load saved volume
const savedVolume =
    localStorage.getItem("pujaVolume");

if (savedVolume !== null) {

    volumeBar.value =
        savedVolume;

}
const volumeText = document.querySelector(".volume-section span");
// Show saved volume percentage
if (savedVolume !== null) {

    volumeText.textContent =
        savedVolume + "%";

}

const volumeButton = document.querySelector(".volume-btn");

const progressBar = document.querySelector(".progress-bar");

const currentTimeText = document.querySelector(
  ".progress-section span:first-child",
);

const durationText = document.querySelector(
  ".progress-section span:last-child",
);

// =========================
// YOUTUBE PLAYER
// =========================

let player;

function onYouTubeIframeAPIReady() {
  console.log("YOUTUBE API IS READY");

  // Start with Normal playlist first song
  currentPlaylistName = "normal";
  currentPlaylistIndex = 0;

  const firstNormalSong = playlists.normal[0];

  player = new YT.Player("youtube-player", {
    height: "200",
    width: "200",

    videoId: firstNormalSong.videoId,

    playerVars: {
      autoplay: 1,
      controls: 0,
      playsinline: 1,
    },

    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

// =========================
// PLAYER READY
// =========================


function onPlayerReady(event) {

  console.log("YouTube player ready");

  const firstSong = playlists.normal[0];

  // Update song information
  const title = document.querySelector(".song-details h2");

  const artist = document.querySelector(".song-details p");

  if (title) {
    title.textContent = firstSong.title;
  }

  if (artist) {
    artist.textContent = firstSong.artist;
  }

  // Set volume
  event.target.setVolume(Number(volumeBar.value));

  // Try autoplay with sound
  event.target.unMute();

  event.target.playVideo();
}


// =========================
// PLAY / PAUSE
// =========================

playButton.addEventListener("click", function (event) {
  event.stopPropagation();

  if (!player) {
    console.log("PLAYER NOT FOUND");
    return;
  }

  const state = player.getPlayerState();

  // Playing → Pause
  if (state === YT.PlayerState.PLAYING) {
    player.pauseVideo();

    return;
  }

  // Paused / stopped → Play with sound
  player.unMute();

  player.setVolume(Number(volumeBar.value));

  player.playVideo();
});

// =========================
// PLAYER STATE
// =========================

function onPlayerStateChange(event) {
  // Song is playing
  if (event.data === YT.PlayerState.PLAYING) {
    playButton.textContent = "⏸";
    playButton.title = "Pause";
  }

  // Song is paused
  else if (event.data === YT.PlayerState.PAUSED) {
    playButton.textContent = "▶";
    playButton.title = "Play";
  }

  // Song is finished
  else if (event.data === YT.PlayerState.ENDED) {
    const playlist = playlists[currentPlaylistName];

    if (!playlist || playlist.length === 0) {
      return;
    }

    // =========================
    // REPEAT
    // =========================

    if (repeatMode) {
      playPlaylistSong(currentPlaylistIndex);
    }

    // =========================
    // SHUFFLE
    // =========================
    else if (shuffleMode) {
      playPlaylistSong(getShuffleNextIndex());
    }

    // =========================
    // NORMAL NEXT
    // =========================
    else {
      playPlaylistSong(currentPlaylistIndex + 1);
    }
  }

  // Other states
  else {
    playButton.textContent = "▶";
    playButton.title = "Play";
  }
}

// =========================
// PROGRESS UPDATE
// =========================

setInterval(function () {
  if (!player || !player.getCurrentTime) return;

  const currentTime = player.getCurrentTime();
  const duration = player.getDuration();

  if (!duration) return;

  const progress = (currentTime / duration) * 100;

  progressBar.value = progress;

  currentTimeText.textContent = formatTime(currentTime);

  durationText.textContent = formatTime(duration);
}, 500);

// =========================
// FORMAT TIME
// =========================

function formatTime(seconds) {
  seconds = Math.floor(seconds);

  const minutes = Math.floor(seconds / 60);

  const remainingSeconds = seconds % 60;

  return minutes + ":" + String(remainingSeconds).padStart(2, "0");
}

// =========================
// SEEK SONG
// =========================

progressBar.addEventListener("click", function (event) {
  event.stopPropagation();
});

progressBar.addEventListener("input", function (event) {
  event.stopPropagation();

  if (!player) return;

  const duration = player.getDuration();

  const newTime = (Number(this.value) / 100) * duration;

  player.seekTo(newTime, true);
});
// =========================
// VOLUME CONTROL
// =========================

volumeBar.addEventListener("click", function (event) {

    event.stopPropagation();

});


volumeBar.addEventListener("input", function (event) {

    event.stopPropagation();

    const volume =
        Number(this.value);


    volumeText.textContent =
        volume + "%";


    // Save volume
    localStorage.setItem(
        "pujaVolume",
        volume
    );


    if (player) {

        player.setVolume(volume);


        if (volume > 0) {

            player.unMute();

            volumeButton.textContent =
                "🔊";

            volumeButton.title =
                "Mute";

        }

    }

});
// =========================
// MUTE / UNMUTE
// =========================

let previousVolume = Number(volumeBar.value);

volumeButton.title = "Mute";

volumeButton.addEventListener("click", function (event) {
  event.stopPropagation();

  if (!player) return;

  if (player.isMuted()) {
    player.unMute();

    player.setVolume(previousVolume);

    volumeBar.value = previousVolume;

    volumeText.textContent = previousVolume + "%";

    volumeButton.textContent = "🔊";

    volumeButton.title = "Mute";
  } else {
    previousVolume = Number(volumeBar.value);

    if (previousVolume === 0) {
      previousVolume = 80;
    }

    player.mute();

    volumeBar.value = 0;

    volumeText.textContent = "0%";

    volumeButton.textContent = "🔇";

    volumeButton.title = "Unmute";
  }
});

// =========================
// OTHER PLAYER BUTTONS
// =========================

document
  .querySelectorAll(".control-btn, .share-buttons button, .hero-buttons button")
  .forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  });
// =========================
// SHIULI FLOWER ANIMATION
// =========================

document.addEventListener("click", function (event) {
  // Don't create flowers on buttons or controls
  if (event.target.closest("button, input, a")) {
    return;
  }

  const flowerCount = 12;

  for (let i = 0; i < flowerCount; i++) {
    setTimeout(function () {
      const flower = document.createElement("div");

      flower.className = "shiuli-flower";

      // Create 5 petals
      for (let j = 0; j < 5; j++) {
        const petal = document.createElement("span");

        petal.className = "shiuli-petal";

        petal.style.transform = `rotate(${j * 72}deg) translateY(-7px)`;

        flower.appendChild(petal);
      }

      // Orange center
      const center = document.createElement("span");

      center.className = "shiuli-center";

      flower.appendChild(center);

      // Random movement
      const moveX = (Math.random() - 0.5) * 220;

      const moveY = 120 + Math.random() * 180;

      flower.style.left = event.clientX + "px";

      flower.style.top = event.clientY + "px";

      flower.style.setProperty("--x", moveX + "px");

      flower.style.setProperty("--y", moveY + "px");

      // Medium size
      const size = 0.85 + Math.random() * 0.35;

      flower.style.setProperty("--size", size);

      document.body.appendChild(flower);

      // Remove after animation
      setTimeout(function () {
        flower.remove();
      }, 5000);
    }, i * 170);
  }
});

// =========================
// DURGA PUJA COUNTDOWN
// =========================

function updatePujaCountdown() {
  const targetDate = new Date(2026, 9, 16, 0, 0, 0).getTime();

  const now = new Date().getTime();

  const difference = targetDate - now;

  if (difference <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

  const minutes = Math.floor((difference / (1000 * 60)) % 60);

  const seconds = Math.floor((difference / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");

  document.getElementById("hours").textContent = String(hours).padStart(2, "0");

  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0",
  );

  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0",
  );
}

updatePujaCountdown();

setInterval(updatePujaCountdown, 1000);
// =========================
// MAHALAYA PAGE OVERLAY
// =========================

function openMahalayaPage() {

    // Already open থাকলে আবার খুলবে না
    if (document.querySelector(".mahalaya-overlay")) {
        return;
    }

    // Overlay
    const overlay = document.createElement("div");

    overlay.className = "mahalaya-overlay";

    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.zIndex = "100000";
    overlay.style.background = "#0f0808";

    // Mahalaya page
    const iframe = document.createElement("iframe");

    iframe.src = "mahalaya.html";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "0";
    iframe.style.display = "block";

    // Close button
    const closeButton = document.createElement("button");

    closeButton.textContent = "← Back to Puja";

    closeButton.style.position = "fixed";
    closeButton.style.top = "14px";
    closeButton.style.left = "14px";
    closeButton.style.zIndex = "100001";

    closeButton.style.padding = "8px 14px";
    closeButton.style.border = "1px solid rgba(255, 210, 130, 0.35)";
    closeButton.style.borderRadius = "10px";

    closeButton.style.background =
        "rgba(20, 12, 10, 0.65)";

    closeButton.style.backdropFilter = "blur(8px)";
    closeButton.style.webkitBackdropFilter = "blur(8px)";

    closeButton.style.color = "#ffe3a6";
    closeButton.style.fontSize = "11px";
    closeButton.style.fontWeight = "600";
    closeButton.style.cursor = "pointer";

    closeButton.style.boxShadow =
        "0 4px 16px rgba(0,0,0,0.35)";

    closeButton.addEventListener("click", function () {
        closeMahalayaPage();
    });

    overlay.appendChild(iframe);
    overlay.appendChild(closeButton);

    document.body.appendChild(overlay);

    // Prevent background page scrolling
    document.body.style.overflow = "hidden";
}


// =========================
// CLOSE MAHALAYA PAGE
// =========================

function closeMahalayaPage() {

    const overlay = document.querySelector(".mahalaya-overlay");

    if (overlay) {
        overlay.remove();
    }

    // Restore scrolling
    document.body.style.overflow = "";
}
window.addEventListener("message", function (event) {

    const iframe = document.querySelector(".mahalaya-overlay iframe");

    if (!iframe || event.source !== iframe.contentWindow) {
        return;
    }

    if (event.data && event.data.type === "closeMahalaya") {
        closeMahalayaPage();
    }

});

// =========================
// SHASHTHI PAGE OVERLAY
// =========================

function openShashthiPage() {

    if (document.querySelector(".shashthi-overlay")) {
        return;
    }

    // Overlay
    const overlay = document.createElement("div");

    overlay.className = "shashthi-overlay";

    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.zIndex = "100000";
    overlay.style.background = "#0f0808";

    // Shashthi page
    const iframe = document.createElement("iframe");

    iframe.src = "shashthi.html";

    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "0";
    iframe.style.display = "block";

    // Close button
    const closeButton = document.createElement("button");

    closeButton.textContent = "← Back to Puja";

    closeButton.style.position = "fixed";
    closeButton.style.top = "14px";
    closeButton.style.left = "14px";
    closeButton.style.zIndex = "100001";

    closeButton.style.padding = "8px 14px";

    closeButton.style.border =
        "1px solid rgba(255, 210, 130, 0.35)";

    closeButton.style.borderRadius = "10px";

    closeButton.style.background =
        "rgba(20, 12, 10, 0.65)";

    closeButton.style.backdropFilter = "blur(8px)";
    closeButton.style.webkitBackdropFilter = "blur(8px)";

    closeButton.style.color = "#ffe3a6";

    closeButton.style.fontSize = "11px";
    closeButton.style.fontWeight = "600";

    closeButton.style.cursor = "pointer";

    closeButton.style.boxShadow =
        "0 4px 16px rgba(0,0,0,0.35)";

    closeButton.addEventListener(
        "click",
        function () {
            closeShashthiPage();
        }
    );

    overlay.appendChild(iframe);
    overlay.appendChild(closeButton);

    document.body.appendChild(overlay);

    // Main page scroll বন্ধ
    document.body.style.overflow = "hidden";
}
function openSaptamiPage() {

    if (autoPujaTimer) {
        clearInterval(autoPujaTimer);
        autoPujaTimer = null;
    }

    if (autoRestartTimer) {
        clearTimeout(autoRestartTimer);
        autoRestartTimer = null;
    }

    const oldPopup =
        document.querySelector(".puja-date-popup");

    if (oldPopup) {
        oldPopup.remove();
    }

    const oldOverlay =
        document.querySelector(".saptami-overlay");

    if (oldOverlay) {
        oldOverlay.remove();
    }

    const overlay =
        document.createElement("div");

    overlay.className =
        "saptami-overlay";

    const content =
        document.createElement("div");

    content.className =
        "saptami-overlay-content";

    const iframe =
        document.createElement("iframe");

    iframe.src = "saptami.html";

    iframe.title =
        "Maha Saptami Details";

    content.appendChild(iframe);

    overlay.appendChild(content);

    document.body.appendChild(overlay);

    requestAnimationFrame(function () {
        overlay.classList.add("show");
    });
}
// =========================
// CLOSE SHASHTHI PAGE
// =========================

function closeShashthiPage() {

    const overlay =
        document.querySelector(".shashthi-overlay");

    if (overlay) {
        overlay.remove();
    }

    // Main page scrolling restore
    document.body.style.overflow = "";
}
function closeSaptamiPage() {

    const overlay =
        document.querySelector(".saptami-overlay");

    if (overlay) {
        overlay.remove();
    }
}

// =========================
// SHASHTHI MESSAGE
// =========================

window.addEventListener(
    "message",
    function (event) {
      const iframe =
    document.querySelector(
        ".shashthi-overlay iframe, .saptami-overlay iframe"
    );

        if (
            !iframe ||
            event.source !== iframe.contentWindow
        ) {
            return;
        }

        if (
            event.data &&
            event.data.type === "closeShashthi"
        ) {
            closeShashthiPage();
        }

        if (
            event.data &&
            event.data.type === "closeSaptami"
        ) {
            closeSaptamiPage();
        }

    }
);


// =========================
// PUJA DAY DATE POPUP
// =========================

const pujaDays = document.querySelectorAll(".puja-day");

pujaDays.forEach(function (day) {
  day.addEventListener("click", function (event) {
    event.stopPropagation();

    // Remove old popup
    const oldPopup = document.querySelector(".puja-date-popup");

    if (oldPopup) {
      oldPopup.remove();
    }

    // Create popup
    const popup = document.createElement("div");

    popup.className = "puja-date-popup";

    // Get selected day
    const dayName = this.querySelector(".day-name").textContent;

    const date = this.getAttribute("data-date");
    popup.innerHTML = `
    <div class="popup-day">
        🪔 ${dayName}
    </div>

    <div class="popup-date">
        ${date}
    </div>

   ${ 
    dayName.trim().toLowerCase() === "mahalaya" 
    ? ` 
        <button class="popup-details-btn mahalaya-details-btn">
            View Mahalaya Details →
        </button>
    ` 
    : "" 
}
    ${
    dayName.trim().toLowerCase() === "shashthi"
    ? `
        <button class="popup-details-btn shashthi-details-btn">
            View Shashthi Details →
        </button>
    `
    : ""
}
   ${
        dayName.trim().toLowerCase() === "saptami"
        ? `
            <button class="popup-details-btn saptami-details-btn">
                View Saptami Details →
            </button>
        `
        : ""
}
 ${
        dayName.trim().toLowerCase() === "ashtami"
        ? `
            <button class="popup-details-btn ashtami-details-btn">
                View Ashtami Details →
            </button>
        `
        : ""
    }
${
    dayName.trim().toLowerCase() === "navami"
    ? `
        <button class="popup-details-btn navami-details-btn">
            View Navami Details →
        </button>
    `
    : ""
}
${
    dayName.trim().toLowerCase() === "dashami"
    ? `
        <button class="popup-details-btn dashami-details-btn">
            View Dashami Details →
        </button>
    `
    : ""
}
`;

    // Style popup
    popup.style.position = "fixed";

    popup.style.zIndex = "99999";

    popup.style.padding = "12px 18px";

    popup.style.background = "rgba(20, 15, 15, 0.42)";

    popup.style.border = "1px solid rgba(255,255,255,0.25)";

    popup.style.borderRadius = "14px";

    popup.style.backdropFilter = "blur(7px)";

    popup.style.boxShadow = "0 10px 30px rgba(0,0,0,0.45)";

    popup.style.color = "white";

    popup.style.textAlign = "center";

    popup.style.minWidth = "190px";

    // Text styling
    popup.querySelector(".popup-day").style.fontSize = "14px";

    popup.querySelector(".popup-day").style.fontWeight = "bold";

    popup.querySelector(".popup-date").style.fontSize = "11px";

    popup.querySelector(".popup-date").style.marginTop = "5px";

    popup.querySelector(".popup-date").style.opacity = "0.75";
    const mahalayaDetailsBtn =
    popup.querySelector(".mahalaya-details-btn");

if (mahalayaDetailsBtn) {

    mahalayaDetailsBtn.addEventListener(
        "click",
        function () {
            openMahalayaPage();
        }
    );

    mahalayaDetailsBtn.style.marginTop = "12px";
    mahalayaDetailsBtn.style.padding = "8px 14px";

    mahalayaDetailsBtn.style.border =
        "1px solid rgba(255, 210, 120, 0.35)";

    mahalayaDetailsBtn.style.borderRadius = "9px";

    mahalayaDetailsBtn.style.background =
        "linear-gradient(135deg, rgba(255, 190, 70, 0.18), rgba(130, 55, 25, 0.28))";

    mahalayaDetailsBtn.style.color = "#ffe0a3";

    mahalayaDetailsBtn.style.fontFamily =
        "Arial, sans-serif";

    mahalayaDetailsBtn.style.fontSize = "11px";
    mahalayaDetailsBtn.style.fontWeight = "600";

    mahalayaDetailsBtn.style.letterSpacing = "0.2px";
    mahalayaDetailsBtn.style.cursor = "pointer";

    mahalayaDetailsBtn.style.boxShadow =
        "0 4px 14px rgba(0, 0, 0, 0.25)";

    mahalayaDetailsBtn.style.transition =
        "all 0.2s ease";
}
    const shashthiDetailsBtn =
    popup.querySelector(".shashthi-details-btn");

if (shashthiDetailsBtn) {

    shashthiDetailsBtn.addEventListener(
        "click",
        function () {
            openShashthiPage();
        }
    );

    shashthiDetailsBtn.style.marginTop = "12px";
    shashthiDetailsBtn.style.padding = "8px 14px";

    shashthiDetailsBtn.style.border =
        "1px solid rgba(255, 210, 120, 0.35)";

    shashthiDetailsBtn.style.borderRadius = "9px";

    shashthiDetailsBtn.style.background =
        "linear-gradient(135deg, rgba(255, 190, 70, 0.18), rgba(130, 55, 25, 0.28))";

    shashthiDetailsBtn.style.color = "#ffe0a3";

    shashthiDetailsBtn.style.fontFamily =
        "Arial, sans-serif";

    shashthiDetailsBtn.style.fontSize = "11px";
    shashthiDetailsBtn.style.fontWeight = "600";

    shashthiDetailsBtn.style.letterSpacing = "0.2px";

    shashthiDetailsBtn.style.cursor = "pointer";

    shashthiDetailsBtn.style.boxShadow =
        "0 4px 14px rgba(0, 0, 0, 0.25)";

    shashthiDetailsBtn.style.transition =
        "all 0.2s ease";

    shashthiDetailsBtn.addEventListener(
        "mouseenter",
        function () {

            shashthiDetailsBtn.style.background =
                "linear-gradient(135deg, rgba(255, 190, 70, 0.30), rgba(150, 65, 25, 0.38))";

            shashthiDetailsBtn.style.borderColor =
                "rgba(255, 210, 120, 0.60)";

            shashthiDetailsBtn.style.transform =
                "translateY(-1px)";

            shashthiDetailsBtn.style.boxShadow =
                "0 6px 18px rgba(255, 170, 60, 0.18)";
        }
    );

    shashthiDetailsBtn.addEventListener(
        "mouseleave",
        function () {

            shashthiDetailsBtn.style.background =
                "linear-gradient(135deg, rgba(255, 190, 70, 0.18), rgba(130, 55, 25, 0.28))";

            shashthiDetailsBtn.style.borderColor =
                "rgba(255, 210, 120, 0.35)";

            shashthiDetailsBtn.style.transform =
                "translateY(0)";

            shashthiDetailsBtn.style.boxShadow =
                "0 4px 14px rgba(0, 0, 0, 0.25)";
        }
    );
}

const saptamiDetailsBtn =
    popup.querySelector(".saptami-details-btn");

if (saptamiDetailsBtn) {

    saptamiDetailsBtn.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            openSaptamiPage();
        }
    );

    /* Same design as Mahalaya / Shashthi */

    saptamiDetailsBtn.style.marginTop = "12px";
    saptamiDetailsBtn.style.padding = "8px 14px";

    saptamiDetailsBtn.style.border =
        "1px solid rgba(255, 210, 120, 0.35)";

    saptamiDetailsBtn.style.borderRadius = "9px";

    saptamiDetailsBtn.style.background =
        "linear-gradient(135deg, rgba(255, 190, 70, 0.18), rgba(130, 55, 25, 0.28))";

    saptamiDetailsBtn.style.color = "#ffe0a3";

    saptamiDetailsBtn.style.fontFamily =
        "Arial, sans-serif";

    saptamiDetailsBtn.style.fontSize = "11px";

    saptamiDetailsBtn.style.fontWeight = "600";

    saptamiDetailsBtn.style.letterSpacing = "0.2px";

    saptamiDetailsBtn.style.cursor = "pointer";

    saptamiDetailsBtn.style.boxShadow =
        "0 4px 14px rgba(0, 0, 0, 0.25)";

    saptamiDetailsBtn.style.transition =
        "all 0.2s ease";

    saptamiDetailsBtn.addEventListener(
        "mouseenter",
        function () {

            saptamiDetailsBtn.style.background =
                "linear-gradient(135deg, rgba(255, 190, 70, 0.30), rgba(150, 65, 25, 0.38))";

            saptamiDetailsBtn.style.borderColor =
                "rgba(255, 210, 120, 0.60)";

            saptamiDetailsBtn.style.transform =
                "translateY(-1px)";

            saptamiDetailsBtn.style.boxShadow =
                "0 6px 18px rgba(255, 170, 60, 0.18)";
        }
    );

    saptamiDetailsBtn.addEventListener(
        "mouseleave",
        function () {

            saptamiDetailsBtn.style.background =
                "linear-gradient(135deg, rgba(255, 190, 70, 0.18), rgba(130, 55, 25, 0.28))";

            saptamiDetailsBtn.style.borderColor =
                "rgba(255, 210, 120, 0.35)";

            saptamiDetailsBtn.style.transform =
                "translateY(0)";

            saptamiDetailsBtn.style.boxShadow =
                "0 4px 14px rgba(0, 0, 0, 0.25)";
        }
    );
}

    document.body.appendChild(popup);
    const ashtamiDetailsBtn =
    popup.querySelector(".ashtami-details-btn");

if (ashtamiDetailsBtn) {

    ashtamiDetailsBtn.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            openAshtamiPage();

        }
    );

}
const navamiDetailsBtn =
    popup.querySelector(".navami-details-btn");

if (navamiDetailsBtn) {

    navamiDetailsBtn.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            openNavamiPage();

        }
    );

    navamiDetailsBtn.style.marginTop = "12px";
    navamiDetailsBtn.style.padding = "8px 14px";

    navamiDetailsBtn.style.border =
        "1px solid rgba(255, 210, 120, 0.35)";

    navamiDetailsBtn.style.borderRadius = "9px";

    navamiDetailsBtn.style.background =
        "linear-gradient(135deg, rgba(255, 190, 70, 0.18), rgba(130, 55, 25, 0.28))";

    navamiDetailsBtn.style.color = "#ffe0a3";

    navamiDetailsBtn.style.fontFamily =
        "Arial, sans-serif";

    navamiDetailsBtn.style.fontSize = "11px";

    navamiDetailsBtn.style.fontWeight = "600";

    navamiDetailsBtn.style.letterSpacing = "0.2px";

    navamiDetailsBtn.style.cursor = "pointer";

    navamiDetailsBtn.style.boxShadow =
        "0 4px 14px rgba(0, 0, 0, 0.25)";

    navamiDetailsBtn.style.transition =
        "all 0.2s ease";
}
const dashamiDetailsBtn =
    popup.querySelector(".dashami-details-btn");

if (dashamiDetailsBtn) {

    dashamiDetailsBtn.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            openDashamiPage();

        }
    );

    dashamiDetailsBtn.style.marginTop = "12px";
    dashamiDetailsBtn.style.padding = "8px 14px";

    dashamiDetailsBtn.style.border =
        "1px solid rgba(255, 210, 120, 0.35)";

    dashamiDetailsBtn.style.borderRadius = "9px";

    dashamiDetailsBtn.style.background =
        "linear-gradient(135deg, rgba(255, 190, 70, 0.18), rgba(130, 55, 25, 0.28))";

    dashamiDetailsBtn.style.color = "#ffe0a3";

    dashamiDetailsBtn.style.fontFamily =
        "Arial, sans-serif";

    dashamiDetailsBtn.style.fontSize = "11px";

    dashamiDetailsBtn.style.fontWeight = "600";

    dashamiDetailsBtn.style.letterSpacing = "0.2px";

    dashamiDetailsBtn.style.cursor = "pointer";

    dashamiDetailsBtn.style.boxShadow =
        "0 4px 14px rgba(0, 0, 0, 0.25)";

    dashamiDetailsBtn.style.transition =
        "all 0.2s ease";
}
    // Position under clicked button
    const rect = this.getBoundingClientRect();

    let left = rect.left + rect.width / 2;

    let top = rect.bottom + 10;

    // Keep popup inside screen
    if (left < 110) {
      left = 110;
    }

    if (left > window.innerWidth - 110) {
      left = window.innerWidth - 110;
    }

    popup.style.left = left + "px";

    popup.style.top = top + "px";

    popup.style.transform = "translateX(-50%)";

    // Auto remove
    setTimeout(function () {
      if (popup.parentElement) {
        popup.remove();
      }
    }, 4000);
  });
});

 
// =========================
// AUTO PUJA DATE LOOP
// =========================

const autoPujaDays = document.querySelectorAll(".puja-day");

let autoPujaIndex = 0;

let autoPujaTimer = null;
let autoRestartTimer = null;

let isAutoClick = false;

// =========================
// SHOW NEXT PUJA DATE
// =========================

// =========================
// SHOW NEXT PUJA DATE
// =========================

function showNextPujaDate() {

  // Creator / Intro screen open থাকলে
  // কোনো automatic Puja popup দেখাবে না
  const intro =
    document.getElementById("pujaIntro");

  if (
    intro &&
    !intro.classList.contains("intro-hidden")
  ) {
    return;
  }

  if (autoPujaDays.length === 0) {
    return;
  }

  isAutoClick = true;

  autoPujaDays[autoPujaIndex].click();

  isAutoClick = false;

  autoPujaIndex++;

  if (autoPujaIndex >= autoPujaDays.length) {
    autoPujaIndex = 0;
  }
}
// =========================
// START AUTOMATIC LOOP
// =========================

// =========================
// START AUTOMATIC LOOP
// =========================

function startAutoPujaLoop() {

  const intro =
    document.getElementById("pujaIntro");

  // Intro / Creator screen open থাকলে
  // automatic loop start হবে না
  if (
    intro &&
    !intro.classList.contains("intro-hidden")
  ) {

    if (autoPujaTimer) {
      clearInterval(autoPujaTimer);
      autoPujaTimer = null;
    }

    return;
  }


  if (autoPujaTimer) {
    clearInterval(autoPujaTimer);
  }


  showNextPujaDate();


  autoPujaTimer = setInterval(function () {

    showNextPujaDate();

  }, 4500);

}
// =========================
// MANUAL CLICK
// =========================

autoPujaDays.forEach(function (day, index) {
  day.addEventListener("click", function () {
    // Automatic click
    if (isAutoClick) {
      return;
    }

    // Automatic loop stop
    if (autoPujaTimer) {
      clearInterval(autoPujaTimer);

      autoPujaTimer = null;
    }

    if (autoRestartTimer) {
      clearTimeout(autoRestartTimer);

      autoRestartTimer = null;
    }

    autoPujaIndex = index + 1;

    if (autoPujaIndex >= autoPujaDays.length) {
      autoPujaIndex = 0;
    }

    autoRestartTimer = setTimeout(function () {
      startAutoPujaLoop();

      autoRestartTimer = null;
    }, 5000);
  });
});

// =========================
// FIRST AUTOMATIC START
// =========================

setTimeout(function () {
  startAutoPujaLoop();
}, 3000);

// =========================
// ACTIVE PUJA DAY
// =========================

document.querySelectorAll(".puja-day").forEach(function (day) {
  day.addEventListener("click", function () {
    // Remove active from all days
    document.querySelectorAll(".puja-day").forEach(function (item) {
      item.classList.remove("active-day");
    });

    // Add active to selected day
    this.classList.add("active-day");
  });
});

// =========================
// PUJA MUSIC CATEGORY ENGINE
// =========================

let currentPlaylistName = "normal";
let currentPlaylistIndex = 0;

// Category buttons
const musicCategoryButtons = document.querySelectorAll(".music-category");

// Load selected song
function loadPujaSong(index, shouldPlay = true) {
  const currentPlaylist = playlists[currentPlaylistName];

  if (!currentPlaylist || currentPlaylist.length === 0) {
    console.log("No songs available in:", currentPlaylistName);

    return;
  }

  if (index < 0) {
    index = currentPlaylist.length - 1;
  }

  if (index >= currentPlaylist.length) {
    index = 0;
  }

  currentPlaylistIndex = index;

  const song = currentPlaylist[currentPlaylistIndex];

  // =========================
  // HIGHLIGHT CURRENT SONG
  // =========================

  document.querySelectorAll(".playlist-song").forEach(function (button) {
    button.classList.remove("current-song");
  });

  const currentMenu = document.querySelector(
    '[data-playlist-menu="' + currentPlaylistName + '"]',
  );

  if (currentMenu) {
    const songButtons = currentMenu.querySelectorAll(".playlist-song");

    if (songButtons[currentPlaylistIndex]) {
      songButtons[currentPlaylistIndex].classList.add("current-song");
    }
  }
  // Change song title
  const songTitle = document.querySelector(".song-details h2");

  if (songTitle) {
    songTitle.textContent = song.title;
  }

  // Change artist
  const artist = document.querySelector(".song-details p");

  if (artist) {
    artist.textContent = song.artist;
  }

  // Load YouTube video
  if (player && player.loadVideoById) {
    player.loadVideoById(song.videoId);

    if (!shouldPlay) {
      player.pauseVideo();
    }
  }
}

// =========================
// CATEGORY CLICK
// =========================

musicCategoryButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    const playlistName = this.dataset.playlist;

    if (!playlists[playlistName]) {
      return;
    }

    // Select category
    currentPlaylistName = playlistName;

    currentPlaylistIndex = 0;

    // Active button
    musicCategoryButtons.forEach(function (item) {
      item.classList.remove("active-category");
    });

    this.classList.add("active-category");

    // Load first song
    loadPujaSong(0, true);
  });
});

// =========================
// MUSIC CATEGORY CLICK
// =========================

document.querySelectorAll(".music-category").forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.stopPropagation();

    const category = this.dataset.playlist;

    const playlist = playlists[category];

    if (!playlist || playlist.length === 0) {
      console.log("No songs in:", category);

      return;
    }

    // Active category
    document.querySelectorAll(".music-category").forEach(function (item) {
      item.classList.remove("active-category");
    });

    this.classList.add("active-category");

    // First song of selected playlist
    const song = playlist[0];

    // Update song information
    const title = document.querySelector(".song-details h2");

    const artist = document.querySelector(".song-details p");

    if (title) {
      title.textContent = song.title;
    }

    if (artist) {
      artist.textContent = song.artist;
    }

    // Play selected YouTube song
    if (player && player.loadVideoById) {
      player.loadVideoById(song.videoId);

      player.unMute();

      player.setVolume(Number(volumeBar.value));
    }
  });
});

// =========================
// NEXT / PREVIOUS SONG
// =========================

const nextButton = document.querySelector('.control-btn[title="Next"]');

const previousButton = document.querySelector('.control-btn[title="Previous"]');

// =========================
// PLAY PLAYLIST SONG
// =========================

function playPlaylistSong(index) {
  const playlist = playlists[currentPlaylistName];

  if (!playlist || playlist.length === 0) {
    return;
  }

  // Reset shuffle history when playlist changes
  if (shuffleHistoryPlaylist !== currentPlaylistName) {
    shuffleHistory = [];

    shuffleHistoryPosition = -1;

    shuffleHistoryPlaylist = currentPlaylistName;
  }

  // Loop to first song
  if (index >= playlist.length) {
    index = 0;
  }

  // Loop to last song
  if (index < 0) {
    index = playlist.length - 1;
  }

  currentPlaylistIndex = index;

  const song = playlist[currentPlaylistIndex];

  // =========================
  // UPDATE SONG NAME
  // =========================

  const title = document.querySelector(".song-details h2");

  if (title) {
    title.textContent = song.title;
  }

  // =========================
  // UPDATE ARTIST
  // =========================

  const artist = document.querySelector(".song-details p");

  if (artist) {
    artist.textContent = song.artist;
  }

  // =========================
  // RESET PROGRESS
  // =========================

  progressBar.value = 0;

  currentTimeText.textContent = "0:00";

  durationText.textContent = "0:00";

  // =========================
  // LOAD NEW YOUTUBE SONG
  // =========================

  if (player && player.loadVideoById) {
    player.loadVideoById(song.videoId);

    player.unMute();

    player.setVolume(Number(volumeBar.value));

    // Update play button
    playButton.textContent = "⏸";

    playButton.title = "Pause";
  }
}

// =========================
// NEXT
// =========================

if (nextButton) {
  nextButton.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    const playlist = playlists[currentPlaylistName];

    if (!playlist || playlist.length === 0) {
      return;
    }

    // Shuffle ON
    if (shuffleMode) {
      // Save current song
      if (
        shuffleHistory.length === 0 ||
        shuffleHistory[shuffleHistory.length - 1] !== currentPlaylistIndex
      ) {
        saveShuffleHistory(currentPlaylistIndex);
      }

      // Get random next song
      const nextIndex = getShuffleNextIndex();

      // Save random song
      saveShuffleHistory(nextIndex);

      // Play random song
      playPlaylistSong(nextIndex);
    }

    // Shuffle OFF
    else {
      playPlaylistSong(currentPlaylistIndex + 1);
    }
  });
}

// =========================
// PREVIOUS
// =========================

if (previousButton) {
  previousButton.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    const playlist = playlists[currentPlaylistName];

    if (!playlist || playlist.length === 0) {
      return;
    }

    // Shuffle ON
    if (shuffleMode) {
      // Go back in shuffle history
      if (shuffleHistoryPosition > 0) {
        shuffleHistoryPosition--;

        const previousIndex = shuffleHistory[shuffleHistoryPosition];

        playPlaylistSong(previousIndex);
      }

      // No previous shuffle history
      else {
        playPlaylistSong(currentPlaylistIndex - 1);
      }
    }

    // Shuffle OFF
    else {
      playPlaylistSong(currentPlaylistIndex - 1);
    }
  });
}
// =========================
// MAHALAYA HOVER PLAYLIST
// =========================

const mahalayaWrapper = document.querySelector(".music-category-wrapper");

const mahalayaMenu = document.querySelector('[data-playlist-menu="mahalaya"]');

if (mahalayaWrapper && mahalayaMenu) {
  const mahalayaSongs = playlists.mahalaya;

  // Create song list
  mahalayaSongs.forEach(function (song, index) {
    const songButton = document.createElement("button");

    songButton.className = "playlist-song";

    songButton.textContent = index + 1 + ". " + song.title;

    songButton.addEventListener("click", function (event) {
      event.stopPropagation();
      // Close playlist after selecting a song
      const currentWrapper = event.currentTarget.closest(
        ".music-category-wrapper",
      );

      if (currentWrapper) {
        const currentMenu = currentWrapper.querySelector(".playlist-dropdown");

        if (currentMenu) {
          currentMenu.style.display = "none";
        }
      }

      // Select Mahalaya playlist
      currentPlaylistName = "mahalaya";

      currentPlaylistIndex = index;

      // Active category
      document.querySelectorAll(".music-category").forEach(function (item) {
        item.classList.remove("active-category");
      });

      const mahalayaButton = mahalayaWrapper.querySelector(".music-category");

      if (mahalayaButton) {
        mahalayaButton.classList.add("active-category");
      }

      // Play selected song
      playPlaylistSong(index);
    });

    mahalayaMenu.appendChild(songButton);
  });
}

// =========================
// SHASHTHI PLAYLIST LIST
// =========================

const shashthiMenu = document.querySelector('[data-playlist-menu="shashthi"]');

const shashthiButton = document.querySelector(
  '.music-category[data-playlist="shashthi"]',
);

if (shashthiMenu && shashthiButton) {
  const shashthiSongs = playlists.shashthi;

  shashthiSongs.forEach(function (song, index) {
    const songButton = document.createElement("button");

    songButton.type = "button";

    songButton.className = "playlist-song";

    songButton.textContent = index + 1 + ". " + song.title;

    songButton.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      // Select Shashthi
      currentPlaylistName = "shashthi";

      currentPlaylistIndex = index;

      // Highlight Shashthi
      document.querySelectorAll(".music-category").forEach(function (item) {
        item.classList.remove("active-category");
      });

      shashthiButton.classList.add("active-category");

      // Play selected song
      playPlaylistSong(index);
    });

    shashthiMenu.appendChild(songButton);
  });
}

// =========================
// SAPTAMI PLAYLIST LIST
// =========================

const saptamiMenu = document.querySelector('[data-playlist-menu="saptami"]');

const saptamiButton = document.querySelector(
  '.music-category[data-playlist="saptami"]',
);

if (saptamiMenu && saptamiButton) {
  const saptamiSongs = playlists.saptami;

  saptamiSongs.forEach(function (song, index) {
    const songButton = document.createElement("button");

    songButton.type = "button";

    songButton.className = "playlist-song";

    songButton.textContent = index + 1 + ". " + song.title;

    songButton.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      currentPlaylistName = "saptami";

      currentPlaylistIndex = index;

      // Active button

      document.querySelectorAll(".music-category").forEach(function (item) {
        item.classList.remove("active-category");
      });

      saptamiButton.classList.add("active-category");

      // Play selected song

      playPlaylistSong(index);
    });

    saptamiMenu.appendChild(songButton);
  });
}

// =========================
// ASHTAMI PLAYLIST LIST
// =========================

const ashtamiMenu = document.querySelector('[data-playlist-menu="ashtami"]');

const ashtamiButton = document.querySelector(
  '.music-category[data-playlist="ashtami"]',
);

if (ashtamiMenu && ashtamiButton) {
  const ashtamiSongs = playlists.ashtami;

  ashtamiSongs.forEach(function (song, index) {
    const songButton = document.createElement("button");

    songButton.type = "button";

    songButton.className = "playlist-song";

    songButton.textContent = index + 1 + ". " + song.title;

    songButton.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      currentPlaylistName = "ashtami";

      currentPlaylistIndex = index;

      // Active category
      document.querySelectorAll(".music-category").forEach(function (item) {
        item.classList.remove("active-category");
      });

      ashtamiButton.classList.add("active-category");

      // Play selected song
      playPlaylistSong(index);
    });

    ashtamiMenu.appendChild(songButton);
  });
}

// =========================
// NAVAMI PLAYLIST LIST
// =========================

const navamiMenu = document.querySelector('[data-playlist-menu="navami"]');

const navamiButton = document.querySelector(
  '.music-category[data-playlist="navami"]',
);

if (navamiMenu && navamiButton) {
  const navamiSongs = playlists.navami;

  navamiSongs.forEach(function (song, index) {
    const songButton = document.createElement("button");

    songButton.type = "button";

    songButton.className = "playlist-song";

    songButton.textContent = index + 1 + ". " + song.title;

    songButton.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      currentPlaylistName = "navami";

      currentPlaylistIndex = index;

      // Active category
      document.querySelectorAll(".music-category").forEach(function (item) {
        item.classList.remove("active-category");
      });

      navamiButton.classList.add("active-category");

      // Play selected song
      playPlaylistSong(index);
    });

    navamiMenu.appendChild(songButton);
  });
}

// =========================
// DASHAMI PLAYLIST LIST
// =========================

const dashamiMenu = document.querySelector('[data-playlist-menu="dashami"]');

const dashamiButton = document.querySelector(
  '.music-category[data-playlist="dashami"]',
);

if (dashamiMenu && dashamiButton) {
  const dashamiSongs = playlists.dashami;

  dashamiSongs.forEach(function (song, index) {
    const songButton = document.createElement("button");

    songButton.type = "button";

    songButton.className = "playlist-song";

    songButton.textContent = index + 1 + ". " + song.title;

    songButton.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      currentPlaylistName = "dashami";

      currentPlaylistIndex = index;

      // Active category

      document.querySelectorAll(".music-category").forEach(function (item) {
        item.classList.remove("active-category");
      });

      dashamiButton.classList.add("active-category");

      // Play selected song

      playPlaylistSong(index);
    });

    dashamiMenu.appendChild(songButton);
  });
}
// =========================
// NORMAL PLAYLIST LIST
// =========================

const normalMenu = document.querySelector('[data-playlist-menu="normal"]');

const normalButton = document.querySelector(
  '.music-category[data-playlist="normal"]',
);

if (normalMenu && normalButton) {
  const normalSongs = playlists.normal;

  normalSongs.forEach(function (song, index) {
    const songButton = document.createElement("button");

    songButton.type = "button";

    songButton.className = "playlist-song";

    songButton.textContent = index + 1 + ". " + song.title;

    songButton.addEventListener("click", function (event) {
      event.preventDefault();

      event.stopPropagation();

      currentPlaylistName = "normal";

      currentPlaylistIndex = index;

      // Active category

      document.querySelectorAll(".music-category").forEach(function (item) {
        item.classList.remove("active-category");
      });

      normalButton.classList.add("active-category");

      // Play selected song

      playPlaylistSong(index);
    });

    normalMenu.appendChild(songButton);
  });
}
/// =========================
// PUJA DAY → MUSIC CATEGORY SYNC
// =========================

const pujaMusicMap = {
  Mahalaya: "mahalaya",
  Shashthi: "shashthi",
  Saptami: "saptami",
  Ashtami: "ashtami",
  Navami: "navami",
  Dashami: "dashami",
};

document.querySelectorAll(".puja-day").forEach(function (day) {
  day.addEventListener("click", function () {
    const dayName = this.querySelector(".day-name").textContent.trim();

    const playlistName = pujaMusicMap[dayName];

    if (!playlistName) {
      return;
    }

    // Remove active from all music categories
    document.querySelectorAll(".music-category").forEach(function (button) {
      button.classList.remove("active-category");
    });

    // Find matching music category
    const musicButton = document.querySelector(
      '.music-category[data-playlist="' + playlistName + '"]',
    );

    // Highlight matching category
    if (musicButton) {
      musicButton.classList.add("active-category");
    }
  });
});

// =========================
// DEFAULT MUSIC CATEGORY
// =========================

currentPlaylistName = "normal";
currentPlaylistIndex = 0;

// Remove active state from all categories

document.querySelectorAll(".music-category").forEach(function (button) {
  button.classList.remove("active-category");
});

// Make Normal active by default

const defaultNormalButton = document.querySelector(
  '.music-category[data-playlist="normal"]',
);

if (defaultNormalButton) {
  defaultNormalButton.classList.add("active-category");
}

// =========================
// SHUFFLE MODE
// =========================

let shuffleMode = false;
// =========================
// SHUFFLE HISTORY
// =========================

let shuffleHistory = [];
let shuffleHistoryPosition = -1;
let shuffleHistoryPlaylist = null;

const shuffleButton = document.querySelector('.control-btn[title="Shuffle"]');

if (shuffleButton) {
  shuffleButton.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    shuffleMode = !shuffleMode;

    if (shuffleMode) {
      this.classList.add("active-category");

      this.title = "Shuffle On";
    } else {
      this.classList.remove("active-category");

      this.title = "Shuffle Off";
    }
  });
}

// =========================
// SHUFFLE NEXT SONG LOGIC
// =========================

function getShuffleNextIndex() {
  const playlist = playlists[currentPlaylistName];

  if (!playlist || playlist.length <= 1) {
    return currentPlaylistIndex;
  }

  let nextIndex;

  do {
    nextIndex = Math.floor(Math.random() * playlist.length);
  } while (nextIndex === currentPlaylistIndex);

  return nextIndex;
}

// =========================
// SAVE SHUFFLE HISTORY
// =========================

function saveShuffleHistory(index) {
  // Remove any forward history
  if (shuffleHistoryPosition < shuffleHistory.length - 1) {
    shuffleHistory = shuffleHistory.slice(0, shuffleHistoryPosition + 1);
  }

  // Add new song
  shuffleHistory.push(index);

  // Move to latest position
  shuffleHistoryPosition = shuffleHistory.length - 1;
}
// =========================
// REPEAT MODE
// =========================

let repeatMode = false;

const repeatButton = document.querySelector('.control-btn[title="Repeat"]');

if (repeatButton) {
  repeatButton.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    repeatMode = !repeatMode;

    if (repeatMode) {
      this.classList.add("active-category");

      this.title = "Repeat On";
    } else {
      this.classList.remove("active-category");

      this.title = "Repeat Off";
    }
  });
}
/// =========================
// CURRENT SONG SHARE
// =========================

const shareButton = document.querySelector(".share-buttons button");

if (shareButton) {
  shareButton.addEventListener("click", async function (event) {
    event.preventDefault();
    event.stopPropagation();

    const playlist = playlists[currentPlaylistName];

    if (!playlist || playlist.length === 0) {
      return;
    }

    const song = playlist[currentPlaylistIndex];

    if (!song || !song.videoId) {
      return;
    }

    const songUrl = "https://youtu.be/" + song.videoId;

    // Mobile / supported browsers
    if (navigator.share) {
      try {
        await navigator.share({
          title: song.title,
          text: "Listen to " + song.title,
          url: songUrl,
        });
      } catch (error) {
        // User closed share popup
        console.log("Share cancelled");
      }
    }

    // Desktop fallback
    else if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(songUrl);

        const oldText = this.textContent;

        this.textContent = "✓ COPIED";

        setTimeout(() => {
          this.textContent = oldText;
        }, 1500);
      } catch (error) {
        console.log("Copy failed");
      }
    }
  });
}

// =========================
// KEYBOARD MUSIC CONTROLS
// =========================

document.addEventListener("keydown", function (event) {
  // Don't interfere while typing
  const tag = event.target.tagName;

  if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") {
    return;
  }

  // Space = Play / Pause
  if (event.code === "Space") {
    event.preventDefault();

    if (playButton) {
      playButton.click();
    }
  }

  // Right Arrow = Next
  else if (event.code === "ArrowRight") {
    event.preventDefault();

    if (nextButton) {
      nextButton.click();
    }
  }

  // Left Arrow = Previous
  else if (event.code === "ArrowLeft") {
    event.preventDefault();

    if (previousButton) {
      previousButton.click();
    }
  }
});

// =========================
// CLOSE PLAYLIST ON OUTSIDE CLICK
// =========================

document.addEventListener("click", function (event) {
  const clickedInsidePlaylist = event.target.closest(".music-category-wrapper");

  if (clickedInsidePlaylist) {
    return;
  }

  document.querySelectorAll(".playlist-dropdown").forEach(function (menu) {
    menu.classList.remove("show");
  });
});


// =========================
// MOBILE PLAYLIST TAP
// =========================

document.querySelectorAll(".music-category-wrapper").forEach(function (wrapper) {

    const button =
        wrapper.querySelector(".music-category");

    const menu =
        wrapper.querySelector(".playlist-dropdown");


    if (!button || !menu) {
        return;
    }


    button.addEventListener("click", function (event) {

        // Only for mobile
        if (window.innerWidth > 768) {
            return;
        }


        event.preventDefault();
        event.stopPropagation();


        const isOpen =
            menu.style.display === "block";


        // Close all playlists
        document.querySelectorAll(
            ".playlist-dropdown"
        ).forEach(function (item) {

            item.style.display = "none";

        });


        // Open selected playlist
        if (!isOpen) {

            menu.style.display = "block";

        }

    });

});

// =========================
// BACKGROUND PAUSE / PLAY
// =========================

const backgroundToggle =
    document.getElementById("background-toggle");

let backgroundPaused = false;

if (backgroundToggle) {

    backgroundToggle.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();


        // Pause background slideshow
        if (!backgroundPaused) {

            clearInterval(backgroundTimer);

            backgroundTimer = null;

            backgroundPaused = true;

            this.textContent = "▶";

            this.title = "Play Background";

        }


        // Resume background slideshow
        else {

            backgroundTimer =
                setInterval(
                    changeBackground,
                    5000
                );

            backgroundPaused = false;

            this.textContent = "⏸";

            this.title = "Pause Background";

        }

    });

}

/* =========================
   ASHTAMI PAGE
========================= */

function openAshtamiPage() {

    // Remove existing Ashtami overlay
    const existing =
        document.querySelector(".ashtami-overlay");

    if (existing) {
        existing.remove();
    }

    // Create overlay
    const overlay =
        document.createElement("div");

    overlay.className =
        "ashtami-overlay";

    // Create iframe
    const iframe =
        document.createElement("iframe");

    iframe.src = "ashtami.html";
    iframe.title = "Maha Ashtami Details";

    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.display = "block";

    // Add iframe
    overlay.appendChild(iframe);

    // Add overlay to page
    document.body.appendChild(overlay);

    // Show animation
    requestAnimationFrame(function () {
        overlay.classList.add("show");
    });
}


/* =========================
   CLOSE ASHTAMI PAGE
========================= */

function closeAshtamiPage() {

    const overlay =
        document.querySelector(".ashtami-overlay");

    if (overlay) {
        overlay.remove();
    }
}


/* =========================
   ASHTAMI MESSAGE
========================= */

window.addEventListener(
    "message",
    function (event) {

        const iframe =
            document.querySelector(
                ".ashtami-overlay iframe"
            );

        if (
            !iframe ||
            event.source !== iframe.contentWindow
        ) {
            return;
        }

        if (
            event.data &&
            event.data.type === "closeAshtami"
        ) {
            closeAshtamiPage();
        }

    }
);

// =========================
// OPEN NAVAMI PAGE
// =========================

function openNavamiPage() {

    const oldOverlay =
        document.querySelector(".navami-overlay");

    if (oldOverlay) {
        oldOverlay.remove();
    }

    const overlay =
        document.createElement("div");

    overlay.className = "navami-overlay";

    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.zIndex = "999999";
    overlay.style.background = "#080404";

    const iframe =
        document.createElement("iframe");

    iframe.src = "navami.html";

    iframe.title = "Maha Navami Details";

    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.display = "block";

    overlay.appendChild(iframe);

    document.body.appendChild(overlay);

    requestAnimationFrame(function () {
        overlay.classList.add("show");
    });
}


// =========================
// CLOSE NAVAMI PAGE
// =========================

function closeNavamiPage() {

    const overlay =
        document.querySelector(".navami-overlay");

    if (overlay) {
        overlay.remove();
    }
}


// =========================
// NAVAMI MESSAGE
// =========================

window.addEventListener(
    "message",
    function (event) {

        const iframe =
            document.querySelector(
                ".navami-overlay iframe"
            );

        if (
            !iframe ||
            event.source !== iframe.contentWindow
        ) {
            return;
        }

        if (
            event.data &&
            event.data.type === "closeNavami"
        ) {
            closeNavamiPage();
        }

    }
);
// =========================
// OPEN DASHAMI PAGE
// =========================

function openDashamiPage() {

    const oldOverlay =
        document.querySelector(".dashami-overlay");

    if (oldOverlay) {
        oldOverlay.remove();
    }

    const overlay =
        document.createElement("div");

    overlay.className =
        "dashami-overlay";

    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.zIndex = "999999";
    overlay.style.background = "#080404";

    const iframe =
        document.createElement("iframe");

    iframe.src = "dashami.html";

    iframe.title =
        "Bijoya Dashami Details";

    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.display = "block";

    overlay.appendChild(iframe);

    document.body.appendChild(overlay);

    requestAnimationFrame(function () {
        overlay.classList.add("show");
    });
}


// =========================
// CLOSE DASHAMI PAGE
// =========================

function closeDashamiPage() {

    const overlay =
        document.querySelector(".dashami-overlay");

    if (overlay) {
        overlay.remove();
    }
}


// =========================
// DASHAMI MESSAGE
// =========================

window.addEventListener(
    "message",
    function (event) {

        const iframe =
            document.querySelector(
                ".dashami-overlay iframe"
            );

        if (
            !iframe ||
            event.source !== iframe.contentWindow
        ) {
            return;
        }

        if (
            event.data &&
            event.data.type === "closeDashami"
        ) {
            closeDashamiPage();
        }

    }
);

// ==================================================
// PUJA INTRO / CREATOR EXPERIENCE
// Agomoni → Creator Details → Main Website
// ==================================================

document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // ELEMENTS
    // =========================

    const pujaIntro =
        document.getElementById("pujaIntro");

    const introWelcome =
        document.getElementById("introWelcome");

    const introCreators =
        document.getElementById("introCreators");

    const enterExperienceBtn =
        document.getElementById("enterExperienceBtn");

    const startPujaBtn =
        document.getElementById("startPujaBtn");


    // =========================
    // SAFETY CHECK
    // =========================

    if (!pujaIntro) {
        console.log("Puja intro not found.");
        return;
    }


    // =========================
    // ENTER EXPERIENCE
    // Welcome → Creator Page
    // =========================

    if (enterExperienceBtn) {

        enterExperienceBtn.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                console.log(
                    "ENTER EXPERIENCE clicked"
                );


                // Hide welcome screen

                if (introWelcome) {

                    introWelcome.classList.add(
                        "intro-hidden"
                    );

                }


                // Show creator screen

                if (introCreators) {

                    introCreators.classList.add(
                        "creator-visible"
                    );

                }

            }
        );

    }


    // =========================
    // EXPLORE PUJA
    // Creator → Main Website
    // =========================

    if (startPujaBtn) {

        startPujaBtn.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                console.log(
                    "EXPLORE PUJA clicked"
                );


                // Hide entire intro

                pujaIntro.classList.add(
                    "intro-hidden"
                );


                // Restore main website

                document.body.classList.add(
                    "puja-main-active"
                );


                // If your existing main JS
                // has automatic Puja loop,
                // start it after entering main page.

                setTimeout(function () {

                    if (
                        typeof startAutoPujaLoop ===
                        "function"
                    ) {

                        startAutoPujaLoop();

                    }

                }, 500);

            }
        );

    }


    // =========================
    // ESCAPE KEY
    // Optional
    // =========================

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key !== "Escape") {
                return;
            }


            // If creator screen is open,
            // go back to welcome screen.

            if (
                introCreators &&
                introCreators.classList.contains(
                    "creator-visible"
                )
            ) {

                introCreators.classList.remove(
                    "creator-visible"
                );

                if (introWelcome) {

                    introWelcome.classList.remove(
                        "intro-hidden"
                    );

                }

            }

        }
    );


    // =========================
    // INITIAL STATE
    // =========================

    if (introWelcome) {

        introWelcome.classList.remove(
            "intro-hidden"
        );

    }


    if (introCreators) {

        introCreators.classList.remove(
            "creator-visible"
        );

    }


    console.log(
        "Puja Intro Experience initialized."
    );

});
// ==================================================
// ENTER EXPERIENCE → CREATOR PAGE
// ==================================================

document.addEventListener("DOMContentLoaded", function () {

    const enterButton =
        document.getElementById("enterExperienceBtn");

    const welcomeScreen =
        document.getElementById("introWelcome");

    const creatorScreen =
        document.getElementById("introCreators");


    console.log("Intro JS loaded");
    console.log("Enter button:", enterButton);


    if (!enterButton) {
        console.log(
            "ENTER EXPERIENCE button not found"
        );
        return;
    }


    enterButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            console.log(
                "ENTER EXPERIENCE CLICKED"
            );


            if (welcomeScreen) {

                welcomeScreen.style.display =
                    "none";

            }


            if (creatorScreen) {

                creatorScreen.style.display =
                    "flex";

            }

        }
    );

});
