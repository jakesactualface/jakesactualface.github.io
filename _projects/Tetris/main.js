// formatting UI
let UIhtml = '<style>';
UIhtml += '    project-view {';
UIhtml += '        background: #202028;';
UIhtml += '        display: flex;';
UIhtml += '        color: #fff;';
UIhtml += '        font-family: sans-serif;';
UIhtml += '        font-size: 2em;';
UIhtml += '        text-align: center;';
UIhtml += '    }';
UIhtml += '    body {';
UIhtml += '        background:#202028;';
UIhtml += '        color: white;'
UIhtml += '    }';
UIhtml += '    .player{';
UIhtml += '        flex: 1 1 auto;';
UIhtml += '    }';
UIhtml += '    canvas {';
UIhtml += '        border: solid .2em #fff;';
UIhtml += '        height: 90vh;';
UIhtml += '    }';
UIhtml += '</style>';

document.head.innerHTML += UIhtml;

const controls = [
    [37, 39, 40, 81, 87, 38, 68, 80],
];

// block scrolling for up and down arrow keys
const blockableKeys = [38, 40];

document.addEventListener('keydown', (function(e) {
    var key = e.which;
    if(blockableKeys.includes(key)) {
        e.preventDefault();
        return false;
    }
    return true;
}));

controls.forEach((set, x) => {
    document.addEventListener('keydown', event => {
        if (event.keyCode === set[0]) {
            tetri[x].player.move(-1);
        } else if (event.keyCode === set[1]) {
            tetri[x].player.move(1);
        } else if (event.keyCode === set[2]) {
            tetri[x].player.drop();
        } else if (event.keyCode === set[3]) {
            tetri[x].player.rotate(-1);
        } else if (event.keyCode === set[4]) {
            tetri[x].player.rotate(1);
        } else if (event.keyCode === set[5]) {
            tetri[x].player.freeFall();
        } else if (event.keyCode === set[6]) {
            tetri[x].player.holdPiece();
        } else if (event.keyCode === set[7]) {
            tetri[x].player.paused = !tetri[x].player.paused;
    
            if (tetri[x].player.gameOver) {
                tetri[x].endGame();
            }
        } 
    });

    createPlayerElements(document);
});

const playerElements = document.querySelectorAll('.player');

function createPlayerElements(doc) {
    var playerDiv = doc.createElement('div');
    playerDiv.className = 'player';

    var scoreDiv = doc.createElement('div');
    scoreDiv.className = 'score';

    var sideCanvas = doc.createElement('canvas');
    sideCanvas.className = 'side';
    sideCanvas.width = 40;
    sideCanvas.height = 400;

    var tetrisCanvas = doc.createElement('canvas');
    tetrisCanvas.className = 'tetris';
    tetrisCanvas.width = 240;
    tetrisCanvas.height = 400;

    playerDiv.appendChild(scoreDiv);
    playerDiv.appendChild(sideCanvas);
    playerDiv.appendChild(tetrisCanvas);

    doc.body.appendChild(playerDiv);
}

function updateScores() {
    [...playerElements].forEach((element, x) => {
        element.children[0].innerText = tetri[x].player.score;
    });
}

const tetri = [];

[...playerElements].forEach(element => {
    const canvas = element.children[2];
    const side = element.children[1];
    const tetris = new Tetris(canvas, side);

    tetri.push(tetris);
});

updateScores();
