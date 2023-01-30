// This will be the component that decides which child component is rendered
import { useState } from 'react';
import Mole from './mole';
import EmptySlot from './EmptySlot';

function MoleContainer(props){
    let [theMole,setTheMole] = useState(false)
  const handleClick = () => {
    props.setScore(props.score + 1)
    setMole(false)
  } 
   
  let displayMole = theMole ? <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick} /> : <EmptySlot toggle={setTheMole} />

  return(
      <div style={{'display': 'inline-block', 'width': '30vw'}}>
          {displayMole}
      </div>
    )
}

export default MoleContainer;