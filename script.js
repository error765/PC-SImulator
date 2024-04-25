let easterEggCounter = 0
var error = new Audio('error.mp3');
var clicksound = new Audio('click.mp3');
const body = document.getElementById("body")
body.addEventListener("click", click);
function click() {
  clicksound.play()
}
function closePCSimMessage(){
    easterEggCounter++
    document.querySelector(".window-container").innerHTML = ""
    setTimeout(function(){
        if (easterEggCounter == 5) {
            document.querySelector('.window-container').innerHTML = '<div class="window" style="width: 300px;"><div class="title-bar"><div class="title-bar-text">PC Simulator</div><div class="title-bar-controls"><button aria-label="Minimize"></button><button aria-label="Maximize"></button></div></div><div class="window-body"><p><b>STOP CLOSING THE WINDOW...</b><br>Now... Do You Have A Save File?...</p><button onclick="yes(\'sf\')">Yes</button><button onclick="no(\'sf\')">No</button></div></div>';
        } else {
            document.querySelector('.window-container').innerHTML = '<div class="window" style="width: 300px;"><div class="title-bar"><div class="title-bar-text">PC Simulator</div><div class="title-bar-controls"><button aria-label="Minimize"></button><button aria-label="Maximize"></button><button aria-label="Close" onclick="closePCSimMessage()"></button></div></div><div class="window-body"><p>Do You Have A Save File?</p><button onclick="yes(\'sf\')">Yes</button><button onclick="no(\'sf\')">No</button></div></div>';
        }
        error.play()
    }, 1000)
}
function yes(what){
    error.play()
    if(what == 'sf'){
        document.querySelector('.window-container').innerHTML = "<div class='window-container'><div class='window' style='width: 300px'><div class='title-bar'><div class='title-bar-text'>PC Simulator</div><div class='title-bar-controls'><button aria-label='Minimize'></button><button aria-label='Maximize'></button><button aria-label='Close' onclick='closePCSimMessage()'></button></div></div><div class='window-body'><p>Put Your File Here</p><input type='file' accept='.pc'></input></div></div></div>"
    }
    if(what == 'ng'){
        document.querySelector('.window-container').innerHTML = "<div class='window-container'><div class='window' style='width: 300px'><div class='title-bar'><div class='title-bar-text'>PC Simulator</div><div class='title-bar-controls'><button aria-label='Minimize'></button><button aria-label='Maximize'></button><button aria-label='Close' onclick='closePCSimMessage()'></button></div></div><div class='window-body'><p>Creating New Game...</p><img src='https://www.randomnoun.com/wpf/shell32-avi/tshell32_161.gif'></img></div></div></div>"
    }
}
function no(what){
    error.play()
    if(what == 'sf'){
        document.querySelector('.window-container').innerHTML = "<div class='window-container'><div class='window' style='width: 300px'><div class='title-bar'><div class='title-bar-text'>PC Simulator</div><div class='title-bar-controls'><button aria-label='Minimize'></button><button aria-label='Maximize'></button><button aria-label='Close' onclick='closePCSimMessage()'></button></div></div><div class='window-body'><p>Do You Want To Start A New Game?</p><button onclick=yes('ng')>Yes</button><button onclick=no(ng)>No</button></div></div></div></div>"
    }
}
function coordinate(event) {
    let x = event.clientX;
    let y = event.clientY;
    let cursor = document.querySelector(".cursor")
    cursor.setAttribute("style","top: " + y + "; right: " + x + ";")
}