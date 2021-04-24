import { useReducer, useEffect, useState, Fragment } from 'react'
import './App.css';
import Data from './Data'
import Reducer from './Reducers/Trafficlight'

var lightDurations = [700, 400, 200];
var timer;
var fechaHora = new Date();
var Contador;

function App() {
  
  const [trafficlights, dispatch] = useReducer(Reducer, Data)
  

  const [trafficlightIndex, setTrafficlightIndex] = useState(0);
  

  useEffect(() => {
    timer = setTimeout(() => {
      dispatch({ trafficlightId: trafficlightIndex })
      setTrafficlightIndex((trafficlightIndex + 1) % 3);
    }, lightDurations[trafficlightIndex]);
    return () => {
      clearTimeout(timer);
    };
    
  });
 
 
function Detener() {
 
lightDurations = [7000,400,200];

 console.log(lightDurations);
 sleep(7000);
 lightDurations = [700, 400, 200];
 console.log(lightDurations);

 }
 

  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  
 
  


  
  

  return (
   <div>
    <Fragment>
     {
       trafficlights.length > 0 && (
        <div className='container'>
          <div className='trafficlight-box'>
            {
              trafficlights.map((trafficlight) => {
                 return <p key={trafficlight.id} id='trafficlight' style={{backgroundColor: trafficlight.light, opacity: trafficlightIndex === trafficlight.id ? 1 : 0.3, boxShadow: trafficlightIndex === trafficlight.id ? '1px 1px 10px rgba(204, 204, 204, 0.5), -1px -1px 10px rgba(204, 204, 204, 0.5)' : null}} >
                 </p>
              })
            }

          </div>
<<<<<<< Updated upstream
          <br></br>
          <button onClick={Detener}>
        DETENER
      </button>
=======
         
>>>>>>> Stashed changes
        </div>
     
      )
      
    }
<<<<<<< Updated upstream
    
    </Fragment>
     
     
   
    
=======

    </Fragment>
   </div>
>>>>>>> Stashed changes
  );
}




export default App;
