import React, { useState, useEffect } from 'react';
import './slogans_styles.css'
import { QiRoboService } from '../services/QIService';
import questions from './slogan_data';
import Popup from './Popup';

const Slogans = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [fact, setFact] = useState(0);
  const [popup, setPopup] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  const handleOptionClick = (option) => {
    if (option.correct) {
      setScore(score + 1);
      handleDialogue(questions[fact].fact + ", Yes, you got it right!")
    } else {
      handleDialogue("Oops, better luck next time. The actual product is " + questions[fact].fact )
    }

    setFact(fact + 1)
    setTimeout(() => {
      
      setCurrentQuestion(currentQuestion + 1);
       }, 1000);

    if (currentQuestion === questions.length - 1) {
      setPopup(true);
    }
  }

  const handleDialogue = (text) => {
    QiRoboService.onService("ALTextToSpeech", (ALTextToSpeech) => {
      ALTextToSpeech.say(text);
    });
  }

  useEffect(() => {
    if (showPopup) {
      // Show the popup on the first render
      setPopup(true);
    } else {
      handleDialogue(questions[currentQuestion].question);
    }
  }, [currentQuestion, showPopup]);

  const handlePopupClose = () => {
    // Close the popup and start the quiz
    setPopup(false);
    setShowPopup(false);
  }

  return (
    <div id="box">
      {showPopup && popup && (
        <div className="popup">
          <div className='popup-content'>
          <h2>Welcome to the Slogans quiz!</h2>
          { handleDialogue("Test your knowledge of famous slogans and catchphrases.  If some of these products are unfamiliar, just have a guess if you are unsure. Click the start button to start the activity. ")}
          <button  style={{ textAlign: 'center', alignContent: 'center', marginLeft: '0'}} onClick={handlePopupClose}>Start</button>
        </div>
        </div>
      )}
      {!showPopup && (
        <div>
          <div id="question">
            <h1>{questions[currentQuestion].question}</h1>
          </div>

          <div id="answers">
            <ul>
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index}>
                  <img src={option.image} onClick={() => handleOptionClick(option)} />
                </div>
              ))}
            </ul>
          </div>

          {popup && <Popup score={score} />}
        </div>
      )}
    </div>
  );
}

export default Slogans;
