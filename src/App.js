import React, {useReducer, useEffect, useState, Fragment} from 'react'
import './App.css';
import './css/bootstrap.css';
import logo from './img/its.png';
import logof from './img/itsf.png';
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

    var s = 10;

    function Detener() {
        s = 10;
        lightDurations = [700, 400, 200];
        lightDurations = [7000, 400, 200];
        console.log(s);
    }

    var tme = 10;

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
        <div>
            <header className="bg-light text-center text-lg-start">

                <div className="text-center p-3" style={{backgroundColor: "#dbe9f4"}}>
                    <img src={logof} alt="Logof"/>

                    <h4 className="text-dark">Intelligent Traffic System to Help the Pedestrian</h4>
                </div>

            </header>
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
                            <div className="grey-bg container-fluid">
                                <section id="minimal-statistics">
                                    <div className="row">
                                        <div className="col-xl-12 col-sm-12 col-12">
                                            <div className="card">
                                                <div className="card-content">
                                                    <div style={{backgroundColor:"#808080", borderRadius:"10px"}} className="card-body">
                                                        <div className="media d-flex">
                                                            <div  className="align-self-center">
                                                                <i className="font-large-2 "></i>
                                                            </div>
                                                            <div  className="media-body text-center">
                                                                <h3>Tiempo para Cruzar: {a}s</h3>
                                                                <button type="button" class="btn btn-danger btn-circle btn-xl" onClick={Detener}>
                                                                    DETENER
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </section>
                            </div>

                    </div>

                    )
                    }


                    </Fragment>
                    <footer className="bg-light text-center text-lg-start">

                    <div className="text-center p-3" style={{backgroundColor: "#dbe9f4"}}>
                    <img src={logo} alt="Logo"/>

                    <h6 className="text-dark">Intelligent Traffic System to Help the Pedestrian</h6>
                    <h5>© 2020 Copyright: I.T.S.H.P</h5>
                    </div>

                    </footer>


                    </div>
                    );
                    }


                    export default App;
