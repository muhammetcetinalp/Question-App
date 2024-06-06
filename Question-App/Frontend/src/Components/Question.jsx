import React, { useState, useEffect } from 'react';

const shuffleArray = (array) => {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
};

const Question = ({ questionData, handleNext }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showMessage, setShowMessage] = useState(false);
    const [shuffledOptions, setShuffledOptions] = useState([]);

    useEffect(() => {
        const options = shuffleArray([questionData.correct_answer, ...questionData.incorrect_answers]);
        setShuffledOptions(options);
        setSelectedAnswer(null);
    }, [questionData]);

    const handleChange = (e) => {
        setSelectedAnswer(e.target.value);
    };

    const handleNextClick = () => {
        if (selectedAnswer === "correct") {
            handleNext();
        } else {
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 2000);
            setShuffledOptions(prevOptions =>
                prevOptions.filter(option => option !== selectedAnswer)
            );
        }
    };

    return (
        <div className="card">
            <h2>{questionData.question}</h2>
            <div id="options">
                {shuffledOptions.map((option, index) => (
                    <div className="option" key={index}>
                        <input
                            type="radio"
                            className="ans"
                            name="answer"
                            value={option === questionData.correct_answer ? "correct" : option}
                            onChange={handleChange}
                            checked={selectedAnswer === (option === questionData.correct_answer ? "correct" : option)}
                        />
                        <label>{option}</label>
                    </div>
                ))}
            </div>
            {showMessage && <div className="wrong-answer-message">Wrong Answer</div>}
            <button className="Next1" onClick={handleNextClick}>Next Question</button>
        </div>
    );
};

export default Question;
