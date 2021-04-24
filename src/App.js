import React, { useReducer, useEffect, useState, Fragment } from 'react'
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
            dispatch({trafficlightId: trafficlightIndex})
            setTrafficlightIndex((trafficlightIndex + 1) % 3);
        }, lightDurations[trafficlightIndex]);
        return () => {
            clearTimeout(timer);
        };

    });

var s=10;
    function Detener() {
         s=10;
        lightDurations = [7000, 400, 200];
        console.log(s);
    }
    var tme=10;

    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();

        } while (currentDate - date < milliseconds);

    }

var a;


        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [counter, setCounter] = React.useState(10);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        React.useEffect(() => {
            const timer =
                counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
            return () => clearInterval(timer);
        }, [counter]);
        a = counter;
   














    return (

        <Fragment>
            {
                trafficlights.length > 0 && (
                    <div className='container'>
                        <div className='trafficlight-box'>
                            {
                                trafficlights.map((trafficlight) => {
                                    return <p key={trafficlight.id} id='trafficlight' style={{
                                        backgroundColor: trafficlight.light,
                                        opacity: trafficlightIndex === trafficlight.id ? 1 : 0.3,
                                        boxShadow: trafficlightIndex === trafficlight.id ? '1px 1px 10px rgba(204, 204, 204, 0.5), -1px -1px 10px rgba(204, 204, 204, 0.5)' : null
                                    }}>
                                    </p>
                                })
                            }

                        </div>

                        <br></br>
                        <button onClick={Detener}>
                            DETENER
                        </button>


                        <div>Tiempo para Cruzar: {a}s</div>

                    </div>

                )
            }


        </Fragment>
    );
}






export default App;
