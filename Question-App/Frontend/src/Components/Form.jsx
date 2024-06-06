import React from 'react';

const Form = ({ startGame }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        startGame();
    };

    return (
        <form id="form" onSubmit={handleSubmit}>
            <label>Select Category:</label>
            <select id="kind">
                <option value="General Knowledge">General Knowledge</option>
                <option value="Books">Books</option>
                <option value="Film">Film</option>
                <option value="Music">Music</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Sports">Sports</option>
                <option value="Geography">Geography</option>
                <option value="History">History</option>
                <option value="Animals">Animals</option>
                <option value="Vehicles">Vehicles</option>
            </select>
            <br />
            <label>Number of Questions:</label>
            <input type="number" id="number" min="1" max="50" />
            <br />
            <label>Select Difficulty:</label>
            <select id="difficulty">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            <br />
            <label>Select Type:</label>
            <select id="type">
                <option value="multiple">Multiple Choice</option>
                <option value="boolean">True / False</option>
            </select>
            <br />
            <button type="submit" id="button">Get General Knowledge Questions</button>
        </form>
    );
};

export default Form;
