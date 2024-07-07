// i is for new lines
// j is for printing/creating each line
let checkerBoard = '';
let checkerSize = 8;
for (let i = 1; i <= checkerSize; i++) {
    for(let j = 1; j <= checkerSize / 2; j++) {
        if ( i % 2 == 1) {
            checkerBoard += ' #';
        } else if (i % 2 == 0) {
            checkerBoard += '# ';
        }
    }
    checkerBoard += '\n';
}
let checkerPrint = document.getElementById("checkerPrint");
checkerPrint.innerHTML = checkerBoard
//let scrollingDogTitle = document.getElementById("scrolling-dog-title");
//scrollingDogTitle.innerHTML = `Hello ${userName}!`;