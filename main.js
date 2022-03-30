var cursors = {
  "shrek_1": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/shrek_1.ico",
  "kitty_1": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/kitty_1.jpeg",
  "puppy_1": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/puppy_1.jpeg",
  "amongus_1": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/amongus_1.png"
};

let selection = prompt("Which cursor would you want?");

selection = selection.toLowerCase();

var css=`\n* {\n\tcursor: url('${cursors[selection]}'), auto;\n}`;
style=document.createElement("style");
style.innerHTML=css;
document.head.appendChild(style);
