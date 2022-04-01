var cursors = {
  "shrek": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/shrek.ico",
  "kitty": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/kitty.jpeg",
  "puppy": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/puppy.jpeg",
  "amongus": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/amongus.png",
  "cinnamoroll": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/cinnamoroll.jpg",
  "paw": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/paw.jpg",
  "bigbrain": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/bigbrain.jpg"
};

const aprilfools = true

var elements = document.getElementsByTagName("*");

let selection = prompt("Which cursor would you want?");

selection = selection.toLowerCase();

selection = selection.replace(/\s/g, '');

if (selection != "don'trickrollme" && aprilfools) {
  const video = document.createElement("video");
  video.innerHTML = "<source src=\"https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/rickroll.mp4\" type=\"video/mp4\"></source>";
  document.body.innerHTML = "";
  document.body.appendChild(video);
  video.play();
} else {
  selection = prompt("Which cursor would you want?");

  selection = selection.toLowerCase();

  selection = selection.replace(/\s/g, '');
  try {
    var audio=document.createElement("audio");
    audio.src=`https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/${selection}.mp3`;
    audio.loop=false;
    audio.play()
  } catch(a) {
    console.log("Unable to play audio.")
  }

  for (var i = 0; i < elements.length; i++) {
    var listener = function handleClick(event){
      try {
        var audio=document.createElement("audio");
        audio.src=`https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/${selection}.mp3`;
        audio.loop=false;
        audio.play()
      } catch(a) {
        console.log("Unable to play audio.")
      } 
    }
    elements[i].removeEventListener("click", listener);
    elements[i].addEventListener('click', listener);
  }

  var css=`\n* {\n\tcursor: url('${cursors[selection]}'), auto;\n}`;
  style=document.createElement("style");
  style.innerHTML=css;
  document.head.appendChild(style);
}
