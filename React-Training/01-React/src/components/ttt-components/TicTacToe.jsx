import { useState } from 'react'

const TicTacToe = () => {
    const WINNING_LINES = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Diagonal top-left to bottom-right
        [2, 4, 6]  // Diagonal top-right to bottom-left
    ];

    function calculateWinner(squares) {
        for (let i = 0; i < WINNING_LINES.length; i++) {
            const [a, b, c] = WINNING_LINES[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return { winner: squares[a], line: [a, b, c] };
            }
        }
        return null;
    }

    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const winInfo = calculateWinner(board);
    const winner = winInfo?.winner || null;
    const winningLine = winInfo?.line || [];
    const isDraw = !winner && board.every((square) => square !== null);

    const handleSquareClick = (index) => {
        // Ignore click if square is already filled or game has a winner
        if (board[index] || winner) {
            return;
        }

        const updatedBoard = [...board];
        updatedBoard[index] = isXNext ? 'X' : 'O';

        setBoard(updatedBoard);
        setIsXNext((prev) => !prev);
    };

    const handleRestart = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
    };

    // Determine current game status message
    let statusMessage;
    if (winner) {
        statusMessage = `Winner: Player ${winner}`;
    } else if (isDraw) {
        statusMessage = "It's a Draw!";
    } else {
        statusMessage = `Next Turn: Player ${isXNext ? 'X' : 'O'}`;
    }

  return (
    <div className="flex max-w-5xl mx-auto mt-10 mb-10 px-8 py-8 rounded-xl shadow-xl flex-col items-center justify-center bg-slate-100">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-md sm:p-8">
        {/* Header */}
        <h1 className="text-center text-2xl font-bold text-slate-900">
          Tic-Tac-Toe
        </h1>

        {/* Status Banner */}
        <div
          role="status"
          aria-live="polite"
          className={`mt-4 rounded-lg py-2.5 text-center text-sm font-semibold transition-colors ${
            winner
              ? 'bg-emerald-100 text-emerald-800'
              : isDraw
              ? 'bg-amber-100 text-amber-800'
              : 'bg-slate-100 text-slate-700'
          }`}
        >
          {statusMessage}
        </div>

        {/* 3x3 Game Board */}
        <div
          className="mt-6 grid grid-cols-3 gap-2.5"
          role="grid"
          aria-label="Tic Tac Toe Board"
        >
          {board.map((value, index) => {
            const isWinningCell = winningLine.includes(index);

            return (
              <button
                key={index}
                type="button"
                onClick={() => handleSquareClick(index)}
                disabled={Boolean(value) || Boolean(winner)}
                aria-label={`Row ${Math.floor(index / 3) + 1}, Column ${
                  (index % 3) + 1
                }${value ? `, occupied by ${value}` : ', empty'}`}
                className={`flex aspect-square items-center justify-center rounded-xl border-2 text-4xl font-extrabold transition focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                  isWinningCell
                    ? 'border-emerald-500 bg-emerald-50'
                    : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                } ${
                  value === 'X'
                    ? 'text-indigo-600'
                    : value === 'O'
                    ? 'text-rose-500'
                    : 'cursor-pointer'
                } disabled:cursor-default`}
              >
                {value}
              </button>
            );
          })}
        </div>

        {/* Restart Button */}
        <button
          type="button"
          onClick={handleRestart}
          className="mt-6 w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow-xs transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Restart Game
        </button>
      </div>
    </div>
  )
}

export default TicTacToe
