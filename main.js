var cursors = {
  "shrek": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/shrek.ico",
  "kitty": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/kitty.jpeg",
  "puppy": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/puppy.jpeg",
  "amongus": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/amongus.png",
  "cinamonroll": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/cinamonroll.jpg"
};

let selection = prompt("Which cursor would you want?");

selection = selection.toLowerCase();

selection = selection.replace(/\s/g, '');

var css=`\n* {\n\tcursor: url('${cursors[selection]}'), auto;\n}`;
style=document.createElement("style");
style.innerHTML=css;
document.head.appendChild(style);
