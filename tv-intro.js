// Insert TV screen elements
const screen = document.getElementById('screen');

// GIF/video inside screen
const screenContent = document.createElement('img'); 
screenContent.src = 'occy.gif'; // <-- Your GIF here
screenContent.classList.add('screen-content');
screen.appendChild(screenContent);

// CRT overlays
const vignette = document.createElement('div');
vignette.classList.add('vignette');
screen.appendChild(vignette);

const scanlines = document.createElement('div');
scanlines.classList.add('scanlines');
screen.appendChild(scanlines);

// Initialize Webamp
const songFiles = [
  "02 Disco.mp3",
  "03 Wondering.mp3",
  "04 Greta.mp3",
  "07 I'm Not Alone.mp3",
  "14 Jack.mp3",
  "15 Suprise Valley.mp3",
  "16 Papa's Home.mp3",
  "18 Tie Your Shoes.mp3",
  "19 Papa's Home.mp3",
  "20 Pickin' Up The Pieces.mp3"
];

const initialTracks = songFiles.map(file => ({
  metaData: { artist: "Widespread Panic", title: file.replace(".mp3","") },
  url: `https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_HERE`
}));

const webamp = new Webamp({ initialTracks });
webamp.renderWhenReady(document.getElementById("webamp-container"));

