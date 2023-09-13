import React, { useState } from 'react';
import Slogans from './components/Slogans/Slogans';
import FlipCard from './components/Flip_card_game/FlipCard';
import Instruments from './components/Musical_Instruments/Instruments';
import GK from './components/GKquiz/Quiz';
import './App.css'

function App() {
  const [ selectedComponent, setSelectedComponent ] = useState(null);

  return (

    <div id= "container">

    <header  className="header-container" >

      <div id="heading" >
        Cognitive Stimulation Therapy : Memory
      </div>

      <div>
        
        <button
          className="header button"
          onClick={() => setSelectedComponent(null)}
        >
          Return
        </button>
        </div>
      </header>
    <div >
      {selectedComponent === null ? (
        <div>
          <button
            
            onClick={() => setSelectedComponent('A')}
            
          >
            Session 1
          </button>
          <button
            
            onClick={() => setSelectedComponent('B')}
          >
            Session 2
          </button>
          
          <button
            
            onClick={() => setSelectedComponent('C')}
          >
            Session 3
          </button>
          
          <button
            
            onClick={() => setSelectedComponent('D')}
          >
            Session 4
          </button>
        </div>
      ) : (
        <div>
          { selectedComponent === 'A' ? (
            <Slogans/>
          ) : selectedComponent=== 'B' ? (
            <FlipCard />
          ):selectedComponent=== 'C' ? (
            <Instruments />
          ):(
            
              <GK />
            
          )}
        </div>
      )}

    </div>

    <footer className="footer-container">

    </footer>

    

    </div>


  );
}

export default App;

