var tasks = [
  "https://raw.githubusercontent.com/SBtree-bit/Custom-Cursors/main/amongus/tasks/wires.js"
]
//var randomTask = tasks[(Math.random()*25)]
var randomTask = tasks[0]
if (!taskreq) {
  var taskreq = new XMLHttpRequest()
}
taskreq.open("GET", randomTask)
taskreq.onload = function() {
  eval(this.responseText)
}
taskreq.send()
