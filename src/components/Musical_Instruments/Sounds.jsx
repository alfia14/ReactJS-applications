import './styles.css'
import { Button } from '@material-ui/core';

const Sound = ({path}) => {
    const audio = new Audio(path);
    audio.loop = false;
    audio.play();
  
    return (
      <div>
        
        <Button
          variant='contained'
          color= 'primary'
          
          onClick={() => {
            audio.loop = false;
            audio.play();
          }}
        >
          Play
        </Button>
            
        <Button
          variant='contained'
          color= 'primary'
          onClick={() => {
            audio.loop = false;
            audio.pause();
          }}
        >
          Pause
        </Button>
        
      </div>
    );
  };

  export default Sound;