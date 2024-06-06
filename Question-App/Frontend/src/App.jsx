import React, { useState } from 'react';
import Question from './Components/Question';
import axios from 'axios';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [gameState, setGameState] = useState('start');

  const startGame = async () => {
    const number = document.querySelector("#myInput").value;
    const category = document.querySelector("#form")[0].value;
    const difficulty = document.querySelector("#form")[2].value;
    const type = document.querySelector("#form")[3].value;

    if (isNaN(number) || number <= 0) {
      alert("Please enter a valid number!");
      return;
    }

    try {
      const response = await axios.get('http://127.0.0.1:8080/questions', {
        params: {
          category: category,
          difficulty: difficulty,
          type: type,
          amount: number
        }
      });
      const data = response.data;

      if (data.length > 0) {
        setQuestions(data);
        setCurrentQuestionIndex(0);
        setGameState('playing');
      } else {
        alert("Could not fetch questions. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
      alert("An error occurred while fetching questions. Please try again.");
    }
  };




  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameState('end');
    }
  };

  const handleNewGame = () => {
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setGameState('start');
  };

  return (
    <div>
      {gameState === 'start' && (
        <div>
          <form id="form">
            Select Category::
            <select>
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
            Number of Questions:
            <input type="text" id="myInput" placeholder="Give a Number Up to 50" />
            <br />
            Select Difficulty:
            <select>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <br />
            Select Type:
            <select>
              <option value="multiple">Multiple Choice</option>
              <option value="boolean">True / False</option>
            </select>
          </form>
          <button id="button" onClick={startGame}>Get General Knowledge Questions</button>
        </div>
      )}
      {gameState === 'playing' && (
        <Question
          questionData={questions[currentQuestionIndex]}
          handleNext={handleNextQuestion}
        />
      )}
      {gameState === 'end' && (
        <div className="card">
          <h1>You've Reached End Of The Game</h1>
          <button id="NewGame" onClick={handleNewGame}>New Game</button>
        </div>
      )}
    </div>
  );
};

export default App;
