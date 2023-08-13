let box = document.querySelectorAll(".box");
let start = document.getElementById("start");
let quit = document.getElementById("quit");
let message = document.getElementById("turn-or-win");
let gridContainer = document.getElementById("grid-container");

let iswin = false;
let count = 0;

start.addEventListener ("click", () => {
    start.style.display = "none";
    quit.style.display = "none";
    message.style.display = "block";
    box.forEach(b => {
        b.classList.add("active");
        b.textContent = "";
        b.style.backgroundColor = "white";
        b.style.color = "rgb(2, 2, 91)";
    })
    gridContainer.style.backgroundColor = "whiteSmoke";
    message.textContent = "X's turn";
    message.style.color = "pink";
})

quit.addEventListener("click", () => {
    box.forEach(b => {
        // b.classList.add("active");
        b.textContent = "";
        b.style.backgroundColor = "white";
        b.style.color = "rgb(2, 2, 91)";
    })
    gridContainer.style.backgroundColor = "whiteSmoke";
    start.textContent = "start";
    message.style.display = "none";
    quit.style.display = "none";
    message.style.color = "pink";
})

box.forEach(b => {
    b.addEventListener("click", () => {
        count++;
        if (b.textContent!="x" && b.textContent!="o" && !iswin) {
            if (count%2==1) {
                b.textContent = "x";
            }
            else {
                b.textContent = "o";
            }
            
            if(canWin()===true) {
                if (count%2==1) {
                    message.textContent = `X won the game!`;
                }
                else {
                    message.textContent = `O won the game!`;
                }
                iswin = false;
                count = 0;
                start.style.display = "block";
                start.textContent = "play again";
                box.forEach(B => {
                    B.classList.remove("active");
                    B.style.backgroundColor = "rgb(167, 245, 167)";
                });
                gridContainer.style.backgroundColor = "rgb(27, 173, 27)";
                quit.style.display = "block";
                return;
            }

            else if (count==9 && !iswin) {
                message.textContent = "Game drawed!";
                count = 0;
                start.style.display = "block";
                start.textContent = "play again";
                box.forEach(B => {
                    B.classList.remove("active");
                    B.style.backgroundColor = "rgb(232, 122, 122)";
                });
                gridContainer.style.backgroundColor = "rgb(209, 21, 21)";
                message.style.color = "rgb(232, 122, 122)";
                quit.style.display = "block";
                return;
            }
    
            else {
                if (count%2==1) {
                    message.textContent = "O's turn";
                }
                else {
                    message.textContent = "X's turn";
                }
            }
        }
    })
})

function canWin() {
    let b1 = document.getElementById("box1");
    let b2 = document.getElementById("box2");
    let b3 = document.getElementById("box3");
    let b4 = document.getElementById("box4");
    let b5 = document.getElementById("box5");
    let b6 = document.getElementById("box6");
    let b7 = document.getElementById("box7");
    let b8 = document.getElementById("box8");
    let b9 = document.getElementById("box9");

    if (b1.textContent === "x" && b2.textContent === "x" && b3.textContent === "x" || b1.textContent === "o" && b2.textContent === "o" && b3.textContent === "o") {
        b1.style.color = "rgb(27, 173, 27)";
        b2.style.color = "rgb(27, 173, 27)";
        b3.style.color = "rgb(27, 173, 27)";
        message.style.color = "rgb(167, 245, 167)";
        console.log(b1);
        return true;
    }
    if (b4.textContent === "x" && b5.textContent === "x" && b6.textContent === "x" || b4.textContent === "o" && b5.textContent === "o" && b6.textContent === "o") {
        b4.style.color = "rgb(27, 173, 27)";
        b5.style.color = "rgb(27, 173, 27)";
        b6.style.color = "rgb(27, 173, 27)";
        message.style.color = "rgb(167, 245, 167)";
                console.log(2);
        return true;
    }
    if (b7.textContent === "x" && b8.textContent === "x" && b9.textContent === "x" || b7.textContent === "o" && b8.textContent === "o" && b9.textContent === "o") {
        b7.style.color = "rgb(27, 173, 27)";
        b8.style.color = "rgb(27, 173, 27)";
        b9.style.color = "rgb(27, 173, 27)";
        message.style.color = "rgb(167, 245, 167)";
        console.log(3);
        return true;
    }
    if (b1.textContent === "x" && b4.textContent === "x" && b7.textContent === "x" || b7.textContent === "o" && b1.textContent === "o" && b4.textContent === "o") {
        b1.style.color = "rgb(27, 173, 27)";
        b4.style.color = "rgb(27, 173, 27)";
        b7.style.color = "rgb(27, 173, 27)";
        message.style.color = "rgb(167, 245, 167)";
        console.log(4);
        return true;
    }
    if (b2.textContent === "x" && b5.textContent === "x" && b8.textContent === "x" || b2.textContent === "o" && b8.textContent === "o" && b5.textContent === "o") {
        b2.style.color = "rgb(27, 173, 27)";
        b5.style.color = "rgb(27, 173, 27)";
        b8.style.color = "rgb(27, 173, 27)";
        message.style.color = "rgb(167, 245, 167)";
        console.log(5);
        return true;
    }
    if (b3.textContent === "x" && b6.textContent === "x" && b9.textContent === "x" || b3.textContent === "o" && b6.textContent === "o" && b9.textContent === "o") {
        b1.style.color = "rgb(27, 173, 27)";
        b6.style.color = "rgb(232, 122, 122)";
        b9.style.color = "rgb(232, 122, 122)";
        message.style.color = "rgb(167, 245, 167)";
        console.log(6);
        return true;
    }
    if (b1.textContent === "x" && b5.textContent === "x" && b9.textContent === "x" || b1.textContent === "o" && b5.textContent === "o" && b9.textContent === "o") {
        b1.style.color = "rgb(27, 173, 27)";
        b5.style.color = "rgb(27, 173, 27)";
        b9.style.color = "rgb(27, 173, 27)";
        message.style.color = "rgb(167, 245, 167)";
        console.log(7);
        return true;
    }
    if (b7.textContent === "x" && b3.textContent === "x" && b5.textContent === "x" || b7.textContent === "o" && b3.textContent === "o" && b5.textContent === "o") {
        b7.style.color = "rgb(27, 173, 27)";
        b3.style.color = "rgb(27, 173, 27)";
        b5.style.color = "rgb(27, 173, 27)";
        message.style.color = "rgb(167, 245, 167)";
        console.log(8);
        return true;
    }
    console.log(9);
    return false;
}