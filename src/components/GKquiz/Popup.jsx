import React from 'react';
import '../Slogans/slogans_styles.css'
import { QiRoboService } from '../services/QIService'

const handleDialogue = (text) => {
  QiRoboService.onService("ALTextToSpeech", (ALTextToSpeech) => {
    ALTextToSpeech.say(text);
  });
}
const Popup = ({ score }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Task completed!</h2>
        <p>Your score: {score}</p>
        <p>Thanks for playing!</p>
        { handleDialogue(" Amazing. You were absolutely wonderful. That's all for today. I will see you next time. Touch my head sensor to close the application.")}
      </div>
    </div>
  );
};

export default Popup;