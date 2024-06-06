import React from 'react';

const EndGame = ({ startNewGame }) => (
    <div className="card">
        <h1>You've Reached End Of The Game</h1>
        <button id="NewGame" onClick={startNewGame}>New Game</button>
    </div>
);

export default EndGame;
