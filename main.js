let selection = prompt("Which cursor would you want?");

selection = selection.toLowerCase();

selection = selection.replace(/\s/g, '');

function run() {
  var cursors = {
    "shrek": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/shrek.ico",
    "kitty": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/kitty.jpeg",
    "puppy": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/puppy.jpeg",
    "amongus": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/amongus.png",
    "cinnamoroll": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/cinamoroll.jpg"
  };

  var elements = document.getElementsByTagName("*");

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

run();

window.frame.forEach(() => {
  let code = `
    var cursors = {
      "shrek": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/shrek.ico",
      "kitty": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/kitty.jpeg",
      "puppy": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/puppy.jpeg",
      "amongus": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/amongus.png",
      "cinnamoroll": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/cinamoroll.jpg"
    };

    var elements = document.getElementsByTagName("*");

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
  `;
  let script = this.document.createElement("script");
  this.document.head.appendChild();
  script.src = "data:text/javascript;base64," + btoa(code);
})
