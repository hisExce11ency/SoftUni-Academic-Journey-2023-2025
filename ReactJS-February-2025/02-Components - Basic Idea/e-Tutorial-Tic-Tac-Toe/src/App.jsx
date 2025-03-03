import "./App.css";

import { useState } from "react";

import Board from "./components/Board";

export default function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState(Array(9).fill(null));
    const currentSquares = history[history.length - 1];

    function handlePlay(nextSquares) {
        const nextHistory = [...history, nextSquares];
        setHistory(nextHistory);
        setXIsNext(!xIsNext);
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                />
            </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    );
}
