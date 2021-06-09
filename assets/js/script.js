

const blocks = document.querySelectorAll(".block");
const playerText = document.getElementById("player");
const errorText = document.getElementById("error");
let player = "X";
let gameOver = false;
let winner ;


function startGame() {
    playerText.textContent = ` ${player} është Radha Juaj !`
    blocks.forEach(block => block.addEventListener("click", () => chooseArea(block)))
}

// Ndrimi i Lojtarve

function turnPlayer() {
    if (player === "X") {
        player = "O";
        playerText.textContent = `${player} është Radha Juaj !`
        return;
    } else if (player === "O") {
        player = "X";
        playerText.textContent = `${player} është Radha Juaj !`

    }
}

// Selektimi i Zones

function chooseArea(block) {
    if (block.textContent === "") {
        block.textContent = player;
        if (player === "O") {
            block.style.color = "black"
        }
        turnPlayer();
    } else {
        errorText.textContent = "Nuk është e zbrazët !"
        block.style.border = "1px solid red"
        setTimeout(() => {
            errorText.textContent = ""
            block.style.border = "1px solid black"
        }, 2500)
    }

 // funksioni i fitores
 function checkWin() {
   
    checkRows()
    checkColumns()
    checkDiagonals()
}

// funksioni i barazimit
function checkTie() {
    const values = [];
    blocks.forEach(block => values.push(block.textContent))
    if (!values.includes("")) {
        playerText.textContent = " Barazim , Provoni Përseri !";
        blocks.forEach(block => block.style.pointerEvents = 'none');
    }
}

    checkWin();
    checkTie();


// Fituesi dhe ndalja 
    if (gameOver) {
        playerText.textContent = `Loja Mbaroi, ${winner} Fitoi ! `;
        blocks.forEach(block => block.style.pointerEvents = 'none');
    }
}



   // Kontrollimi i Reshtave
function checkRows() {
    
    let row1 = blocks[0].textContent == blocks[1].textContent &&
        blocks[0].textContent == blocks[2].textContent && blocks[0].textContent !== ""
    let row2 = blocks[3].textContent == blocks[4].textContent &&
        blocks[3].textContent == blocks[5].textContent && blocks[3].textContent !== ""
    let row3 = blocks[6].textContent == blocks[7].textContent &&
        blocks[6].textContent == blocks[8].textContent && blocks[6].textContent !== ""

    if (row1 || row2 || row3) {
        gameOver = true
    }
    if (row1) return winner = blocks[0].textContent
    if (row2) return winner = blocks[3].textContent
    if (row3) return winner = blocks[6].textContent

}
// Kontrollimi i Kolonave
function checkColumns() {
    
    let col1 = blocks[0].textContent == blocks[3].textContent &&
        blocks[0].textContent == blocks[6].textContent && blocks[0].textContent !== ""
    let col2 = blocks[1].textContent == blocks[4].textContent &&
        blocks[1].textContent == blocks[7].textContent && blocks[1].textContent !== ""
    let col3 = blocks[2].textContent == blocks[5].textContent &&
        blocks[2].textContent == blocks[8].textContent && blocks[2].textContent !== ""

    if (col1 || col2 || col3) {
        gameOver = true
    }
    if (col1) return winner = blocks[0].textContent
    if (col2) return winner = blocks[1].textContent
    if (col3) return winner = blocks[2].textContent
}
// Kontrollimi i diagonaleve
function checkDiagonals() {
    
    let dia1 = blocks[0].textContent == blocks[4].textContent &&
        blocks[0].textContent == blocks[8].textContent && blocks[0].textContent !== ""
    let dia2 = blocks[2].textContent == blocks[4].textContent &&
        blocks[2].textContent == blocks[6].textContent && blocks[2].textContent !== ""

    if (dia1 || dia2) {
        gameOver = true
    }
    if (dia1) return winner = blocks[0].textContent
    if (dia2) return winner = blocks[2].textContent
}

startGame();



((Refresh) => {
    setTimeout((Refresh) => {
      document.getElementsByTagName("body")[0];
    }, 50)
  })();
  function sampleFunction() {
    location.reload();
  }