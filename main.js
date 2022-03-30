var cursors = {
  "shrek_1": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/shrek_1.ico",
  "kitty_1": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/kitty_1.jpeg",
  "puppy_1": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/puppy_1.jpeg",
  "amongus_1": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/amongus_1.png",
	"shrek_2": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/shrek_2.ico",
	"kitty_2": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/kitty_2.jpeg",
	"puppy_2": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/puppy_2.jpeg",
	"amongus_2": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/amongus_1.png",
	"shrek_3": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/shrek_3.ico",
	"kitty_3": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/kitty_3.jpeg",
	"puppy_3": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/puppy_3.jpeg",
	"amongus_3": "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/amongus_3.png"
};

let selection = prompt("Which cursor would you want?");

selection = selection.toLowerCase();

selection = selection.replace(/\s/g, '');

let size = prompt("Which size? 1-3");

while (size != 1 || size != 2 || size != 3) {
	size = prompt("Invalid size. Must be 1-3.");
}

selection = selection + size;

var css=`\n* {\n\tcursor: url('${cursors[selection]}'), auto;\n}`;
style=document.createElement("style");
style.innerHTML=css;
document.head.appendChild(style);
