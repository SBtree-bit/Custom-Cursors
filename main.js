var cursors = {
  "shrek": {
    "cursor": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/shrek/cursor.ico",
    "audio": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/shrek/audio.mp3"
  },
  "kitty": {
    "cursor": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/kitty/cursor.jpeg",
    "audio": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/kitty/audio.mp3"
  },
  "puppy": {
    "cursor": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/puppy/cursor.jpeg",
    "audio": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/puppy/audio.mp3"
  },
  "amongus": {
    "cursor": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/amongus/cursor.png",
    "audio": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/amongus/audio.mp3",
    "client": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/amongus/client.js"
  },
  "cinnamoroll": {
    "cursor": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/cinnamoroll/cursor.jpg"
  },
  "paw": {
    "cursor": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/paw/cursor.jpg"
  },
  "bigbrain": {
    "cursor": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/bigbrain/cursor.jpg",
    "audio": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/bigbrain/audio.mp3"
  },
  "arek": {
    "cursor": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/arek/cursor.jpg"
  }
//};

alert("works")

const aprilfools = false

var elements = document.getElementsByTagName("*");

let selection = prompt("Which cursor would you want?");

selection = selection.toLowerCase();

selection = selection.replace(/\s/g, '');
/*
if (selection != "dontrickrollme" && aprilfools) {
  const video = document.createElement("video");
  video.innerHTML = "<source src=\"https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/rickroll.mp4\" type=\"video/mp4\"></source>";
  document.body.innerHTML = "";
  document.body.appendChild(video);
  video.play();
} else {*/
  selection = prompt("Which cursor would you want?");

  selection = selection.toLowerCase();

  selection = selection.replace(/\s/g, '');
  try {
    var audio=document.createElement("audio");
    audio.src=cursors[selection].audio.;
    audio.loop=false;
    audio.play()
  } catch(a) {
    console.log("Unable to play audio.")
  }
  var listening
  for (var i = 0; i < elements.length; i++) {
    var listener = function handleClick(event){
      if (!listening) {
        try {
          var audio=document.createElement("audio");
          audio.src=cursors[selection].audio;
          audio.loop=false;
          audio.play().then(() => {
            listening = false
          })
          listening = true
        } catch(a) {
          console.log("Unable to play audio.")
        }
      }
    }
    elements[i].removeEventListener("click", listener);
    elements[i].addEventListener('click', listener);
  }

  var css=`\n* {\n\tcursor: url('${cursors[selection].cursor}'), auto;\n}`;
  style=document.createElement("style");
  style.innerHTML=css;
  document.head.appendChild(style);
  function run_ability() {
    var ablityreq = new XMLHttpRequest()
    abilityreq.open("GET", cursors[section].client)
    abilityreq.onload = function() {
      eval(this.responseText)
    }
    abilityreq.send()
  }
  var ability = '<input type="button" value="Use Cursor Ability" onclick="run_ability()" style="float: right;">';
  var firstElement = document.body.childNodes[0]
  firstElement.insertAdjacentHTML('beforebegin', ability)
}
