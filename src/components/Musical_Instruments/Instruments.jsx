import React, { useState, useEffect } from 'react';
import { QiRoboService } from '../services/QIService';
import Sound from './Sounds';
import questions from './instruments_data';
import './styles.css'
const Instruments = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [ fact, setFact] = useState(0)

  const handleOptionClick = (option) => {

   
      if (option.correct) {
        setScore(score + 1);
        handleDialogue( questions[fact].fact + "Yes, you got it right!")
      }
      else{
        handleDialogue("Oops, it's fine. Better luck next time")
      }
   

      
      setFact(fact+1)
      setTimeout(() => {
      
      setCurrentQuestion(currentQuestion + 1);
       }, 1000);

      
       setCurrentQuestion(currentQuestion + 1);
    


    
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
    <div id="App">

      <div id="question">
      <h1>{questions[currentQuestion].question}</h1>
     
      </div>
      <div id="sound">
      <Sound path = {questions[currentQuestion].audiopath}>
      

      </Sound>
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
      {/* <p>Score: {score}</p> */}
    </div>
  );
}

export default Instruments;



