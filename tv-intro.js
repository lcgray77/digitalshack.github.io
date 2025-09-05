// TV Screen Effects
class ScreenEffect {
  constructor(parent) {
    this.parent = typeof parent === "string" ? document.querySelector(parent) : parent;
    this.effects = {};
    this.render();
  }

  render() {
    const container = document.createElement("div");
    container.classList.add("screen-container");

    const wrapper = document.createElement("div");
    wrapper.classList.add("screen-wrapper");

    container.appendChild(wrapper);
    this.parent.appendChild(container);

    this.nodes = { container, wrapper };
  }

  add(type, options = {}) {
    let node;
    switch(type) {
      case "image":
        node = document.createElement("img");
        node.src = options.src;
        node.style.width = "100%";
        node.style.height = "100%";
        node.style.filter = `blur(${options.blur || 0}px)`;
        this.nodes.wrapper.appendChild(node);
        break;
      case "video":
        node = document.createElement("video");
        node.src = options.src;
        node.autoplay = true;
        node.loop = true;
        node.muted = true;
        node.style.width = "100%";
        node.style.height = "100%";
        node.style.filter = `blur(${options.blur || 0}px)`;
        this.nodes.wrapper.appendChild(node);
        break;
      case "vignette":
        node = document.createElement("div");
        node.classList.add("vignette");
        this.nodes.container.appendChild(node);
        break;
      case "scanlines":
        node = document.createElement("div");
        node.classList.add("scanlines");
        this.nodes.wrapper.appendChild(node);
        break;
    }
    this.effects[type] = { node, enabled: true };
  }
}

// Initialize Screen
const screen = new ScreenEffect("#screen");

// Start TV animation
const tvScreen = document.getElementById("screen");
tvScreen.classList.add("tv-on");

// Add your GIF/video here
screen.add("image", { src: "occy.gif", blur: 1.2 });
screen.add("scanlines");
screen.add("vignette");

// --- Webamp Player ---
// Replace URLs with your hosted MP3 links
const songFiles = [
  "https://your-domain.com/music/02_Disco.mp3",
  "https://your-domain.com/music/03_Wondering.mp3",
  "https://your-domain.com/music/04_Greta.mp3"
];

const initialTracks = songFiles.map(file => ({
  metaData: { artist: "Widespread Panic", title: file.split("/").pop().replace(".mp3","") },
  url: file
}));

const webamp = new Webamp({ initialTracks });
webamp.renderWhenReady(document.getElementById("webamp-container"));

