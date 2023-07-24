const terminalText = document.querySelector('#terminal-text');

let line = document.querySelector('.line');
let currentChar = 0;

let cursor1 = document.querySelector('#last-char-cursor');
cursor1.classList.add("cursor");

document.addEventListener("keydown", e => {
  console.log(e.key);
 /* let lastCharCursor = document.getElementById('#last-char-cursor');
  lastCharCursor.remove();
  */
  let newChar = document.createElement('span');
  let cursor = document.querySelector('#last-char-cursor');
  if (e.key != "ArrowLeft") {
    cursor.remove();
  }
  newChar.innerText = e.key;
  if (e.key == " ") {
    newChar.innerHTML = '&nbsp;'
    currentChar++;
  }
  if (e.key == "Backspace") {
    newChar.innerHTML = '';
    for (i=0; i<line.children.length; i++)
      {
        console.log(line.children[i]);
      }
    let last = line.children.length-1;
    line.removeChild(line.children[last]);
  }
  
  if (e.key != "Backspace" && e.key != "ArrowLeft" && e.key != "ArrowRight" && e.key != "Shift" && e.key != "CapsLock") {
    newChar.classList.add("letter");
    line.appendChild(newChar);
    currentChar++;

    let screenHeightTemporary = document.createElement("div");
    screenHeightTemporary.style.position = 'absolute';
    screenHeightTemporary.style.top = '0';
    screenHeightTemporary.style.left = '0';
    screenHeightTemporary.style.bottom = '0';
    screenHeightTemporary.style.right = '0';
    screenHeightTemporary.style.width = '0px';
    screenHeightTemporary.style.height = '100vh';
    screenHeightTemporary.setAttribute("id", "screen-height_temporary");
    document.body.appendChild(screenHeightTemporary);

    console.log(document.querySelector('#screen-height_temporary').offsetHeight);
    if (document.querySelector('#terminal-text').getBoundingClientRect().height > document.querySelector('#screen-height_temporary').offsetHeight) {
      if (!document.querySelector('#terminal-custom-scrollbar')) {
        let terminalCustomScrollbar = document.createElement("div");
      terminalCustomScrollbar.style.position = 'absolute';
      terminalCustomScrollbar.style.top = '0';
      terminalCustomScrollbar.style.left = 'calc(100vw - 20px)';
      terminalCustomScrollbar.style.bottom = '0';
      terminalCustomScrollbar.style.right = '0';
      terminalCustomScrollbar.style.width = '20px';
      terminalCustomScrollbar.style.height = '100vh';
      terminalCustomScrollbar.style.backgroundColor = 'gray';
    /*  terminalCustomScrollbar.style.display = 'flex';
      terminalCustomScrollbar.style.flexDirection = 'column';
      terminalCustomScrollbar.style.justifyContent = 'space-between';
      terminal.innerHTML = '<button style="width: 20px; height: 20px;"></button> <button style="width: 20px; height: 20px;"></button>'; */
      terminalCustomScrollbar.setAttribute("id", "terminal-custom-scrollbar");
      document.body.appendChild(terminalCustomScrollbar);

      terminalText.style.width = 'calc(100vw - 20px)';
      }
      
    } else {
      if (document.querySelector('#terminal-custom-scrollbar')) {
        document.querySelector('#terminal-custom-scrollbar').remove();
        terminalText.style.width = '100vw';
      }
      
    }
      
  }

  if (e.key != "ArrowLeft") {
    cursor = document.createElement("span");
    cursor.style.width = '9.64px';
    cursor.style.height = '16px';
    cursor.innerHTML = '.';
    cursor.setAttribute("id", "last-char-cursor");
    cursor.classList.add("cursor");
    line.appendChild(cursor);
  }
  
  /* lastCharCursor = document.createElement("span");
  span.innerText = ' ';
  span.id = 'last-char-cursor';
  line.appendChild(lastCharCursor);
  */
  
  if (e.key == "ArrowLeft") {
    currentChar--;
    console.log(document.querySelectorAll('.letter').length);
    if (currentChar == document.querySelectorAll('.letter').length-1) {
      document.querySelector('#last-char-cursor').classList.remove("cursor");

      let lineElements = document.querySelector('.line').children; 
console.log(lineElements[lineElements.length-2].innerHTML);
      lineElements[lineElements.length-2].classList.add("cursor");
    }
    
  }


  if (e.key == "ArrowRight") {
    console.log(document.querySelectorAll('.letter').length);
    if (currentChar == document.querySelectorAll('.letter').length-2) {
      currentChar++;
      console.log("a");

      let lineElements = document.querySelector('.line').children; 
console.log(lineElements[lineElements.length-4].innerHTML);
      lineElements[lineElements.length-2].classList.remove("cursor");

      document.querySelector('#last-char-cursor').classList.add("cursor");
    }
    
  }
  
});