var cursors = {
  "shrek": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/shrek.ico",
  "kitty": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/kitty.jpeg",
  "puppy": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/puppy.jpeg",
  "amongus": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/amongus.png",
  "cinamonroll": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/cinamonroll.jpg"
};

var elements = document.getElementsByTagName("*");

let selection = prompt("Which cursor would you want?");

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
  elements[i].registerEventHandler("click", () => {
    try {
      var audio=document.createElement("audio");
      audio.src=`https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/${selection}.mp3`;
      audio.loop=false;
      audio.play()
    } catch(a) {
      console.log("Unable to play audio.")
    }
  })
}

var css=`\n* {\n\tcursor: url('${cursors[selection]}'), auto;\n}`;
style=document.createElement("style");
style.innerHTML=css;
document.head.appendChild(style);
