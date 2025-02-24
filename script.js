let currentOpening = [];
let slicedMoves = [];
let currentPosition = -1;
let chess;
let board;
let selectedColor = 'white';

function initializeApp() {
    if (typeof Chess === 'undefined' || typeof Chessboard2 === 'undefined') {
        document.getElementById('movesDisplay').innerHTML = '<p class="error-message">Error: Chess libraries failed to load. Please check your internet connection or CDN availability.</p>';
        console.error('Chess.js or Chessboard2 failed to load.');
        return;
    }

    chess = new Chess();
    const boardConfig = {
        draggable: false,
        position: chess.fen(),
        moveSpeed: 'slow',
        orientation: 'white'
    };
    board = Chessboard2('board', boardConfig);
    console.log('Initial FEN:', chess.fen());
    board.position(chess.fen(), false);

    const colorOptions = document.querySelectorAll('.color-option');
    if (colorOptions.length === 0) {
        console.error('No .color-option elements found in the DOM');
        return;
    }
    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            selectedColor = option.getAttribute('data-color');
            board.orientation(selectedColor);
            document.getElementById('colorSelection').classList.add('hidden');
            document.getElementById('openingSelection').classList.add('visible');
            populateOpenings(selectedColor);
        });
    });

    showMove();
}

function populateOpenings(color) {
    const openingButtons = document.getElementById('openingButtons');
    if (!openingButtons) {
        console.error('Element #openingButtons not found in the DOM');
        return;
    }
    openingButtons.innerHTML = '';
    const openingsList = openings[color];
    for (let opening in openingsList) {
        const button = document.createElement('button');
        button.textContent = opening;
        button.addEventListener('click', () => selectOpening(color, opening));
        openingButtons.appendChild(button);
    }
}

function sliceMoves(openingMoves) {
    slicedMoves = [];
    openingMoves.forEach((movePair) => {
        const parts = movePair.split(' ');
        const moveNum = parts[0];
        const whiteMove = parts[1];
        const blackMove = parts[2] || '';
        slicedMoves.push({ moveNum, white: whiteMove, black: blackMove });
    });
}

function selectOpening(side, selectedOpening) {
    chess.reset();
    currentOpening = openings[side][selectedOpening];
    sliceMoves(currentOpening);
    currentPosition = -1;
    document.getElementById('openingSelection').classList.remove('visible');
    const mainContent = document.getElementById('mainContent');
    mainContent.classList.add('visible');
    document.title = `Chess Opening Trainer - ${selectedOpening}`;
    document.getElementById('title').textContent = `Chess Opening Trainer - ${selectedOpening}`;
    setTimeout(() => {
        console.log('Setting initial position, FEN:', chess.fen());
        board.position(chess.fen(), false);
        board.resize();
    }, 50);
    document.getElementById('prevBtn').disabled = false;
    document.getElementById('nextBtn').disabled = false;
    document.getElementById('resetBtn').disabled = false;
    showMove();
}

function showMove() {
    const movesDisplay = document.getElementById('movesDisplay');
    if (!movesDisplay) {
        console.error('Element #movesDisplay not found in the DOM');
        return;
    }
    let movesHtml = '<table><thead><tr><th>Move</th><th>White</th><th>Black</th></tr></thead><tbody>';
    
    if (currentPosition === -1) {
        movesDisplay.innerHTML = '<p>Press "Next" to start the opening</p>';
    } else {
        slicedMoves.forEach((move, index) => {
            const whiteIndex = index * 2;
            const blackIndex = whiteIndex + 1;
            const isWhiteCurrent = whiteIndex === currentPosition;
            const isBlackCurrent = blackIndex === currentPosition;
            movesHtml += `<tr>
                <td>${move.moveNum}</td>
                <td ${isWhiteCurrent ? 'class="current-move"' : ''}>${move.white}</td>
                <td ${isBlackCurrent ? 'class="current-move"' : ''}>${move.black || ''}</td>
            </tr>`;
        });
        movesHtml += '</tbody></table>';
        movesDisplay.innerHTML = movesHtml;

        setTimeout(() => {
            const highlightedMove = movesDisplay.querySelector('.current-move');
            if (highlightedMove) {
                highlightedMove.scrollIntoView({ behavior: 'smooth', block: 'center' });
                console.log('Scrolling to move:', highlightedMove.textContent);
            } else {
                console.log('No highlighted move found');
            }
        }, 200);
    }

    document.getElementById('prevBtn').disabled = currentPosition <= -1;
    document.getElementById('nextBtn').disabled = currentPosition >= (slicedMoves.length * 2) - 1;
}

function nextMove() {
    if (currentPosition < (slicedMoves.length * 2) - 1) {
        currentPosition++;
        const moveIndex = Math.floor(currentPosition / 2);
        const isWhiteMove = currentPosition % 2 === 0;
        const move = isWhiteMove ? slicedMoves[moveIndex].white : slicedMoves[moveIndex].black;
        console.log(`Next Move: ${move}, Position: ${currentPosition}, FEN Before: ${chess.fen()}`);
        const result = chess.move(move);
        if (result) {
            console.log(`Move Successful: ${move}, FEN After: ${chess.fen()}`);
            board.position(chess.fen(), true);
        } else {
            console.error(`Move Failed: ${move}, FEN: ${chess.fen()}`);
            currentPosition--; // Revert position on failure
        }
        showMove();
    } else {
        console.log('No more moves to play');
    }
}

function prevMove() {
    if (currentPosition > -1) {
        console.log(`Previous Move, Position: ${currentPosition}, FEN Before: ${chess.fen()}`);
        chess.undo();
        currentPosition--;
        console.log(`Undo Successful, Position: ${currentPosition}, FEN After: ${chess.fen()}`);
        board.position(chess.fen(), true);
        showMove();
    } else {
        console.log('At start position');
    }
}

function resetTrainer() {
    console.log('Reset triggered at:', new Date().toISOString());
    chess.reset(); // Reset chess state to initial position
    currentPosition = -1; // Reset move position
    board.position(chess.fen(), false); // Update board to initial position without animation
    console.log('Reset to start position, FEN:', chess.fen());
    showMove(); // Refresh move display
    // Buttons remain enabled since we're staying in #mainContent
}

function toggleTheme() {
    const body = document.body;
    const toggleButton = document.getElementById('themeToggle');
    if (!body.classList.contains('dark')) {
        body.classList.add('dark');
        toggleButton.textContent = '🌙';
        toggleButton.setAttribute('aria-label', 'Switch to dark theme');
    } else {
        body.classList.remove('dark');
        toggleButton.textContent = '☀️';
        toggleButton.setAttribute('aria-label', 'Switch to light theme');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    document.getElementById('prevBtn').addEventListener('click', prevMove);
    document.getElementById('nextBtn').addEventListener('click', nextMove);
    document.getElementById('resetBtn').addEventListener('click', resetTrainer);
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
});