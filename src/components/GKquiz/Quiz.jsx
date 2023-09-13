import React, { useState, useEffect } from 'react';
import '../Slogans/slogans_styles.css'
import { QiRoboService } from '../services/QIService'
import questions from './gkquiz';
import Popup from './Popup';
const GK = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [ fact, setFact] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleOptionClick = (option) => {

   
      if (option.correct) {
        setScore(score + 1);
        handleDialogue(questions[fact].fact + ", Yes, you got it right!")
      }
      if(!option.correct){
        handleDialogue("Oops, I see what you thought there.")
      }
   

     
      setFact(fact+1)
      
      setCurrentQuestion(currentQuestion + 1);
      if (currentQuestion === questions.length-2) {
        setShowPopup(true);
      }
  
    
  }

     const  handleDialogue = (text) => {
        QiRoboService.onService("ALTextToSpeech", (ALTextToSpeech) => {
          ALTextToSpeech.say(text);
        });
    }




    useEffect(() => {
    
        handleDialogue(questions[currentQuestion].question)

    },[currentQuestion] )

  return (
    <div id="box">

      

      <div id="question">
      <h1>{ questions[currentQuestion].question}</h1>
      
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
      
      {showPopup && <Popup score={score} />}
    </div>
  );
}

export default GK;



