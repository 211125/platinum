import "../assets/stylesheets/app.css";
import {Link} from "react-router-dom";
import DatoEScolar from "../components/DatoEScolar";
import TableAfirmativa from "../components/TableAfirmativa";
import TableTutorados from "../components/TableTutorados";



function Login(){

    return (
       <div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <button className="cssbuttons-io-button">
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
                                fill="currentColor"></path>
                        </svg>
                        <span>Download</span>
                    </button>
                    <p>SECRETARÍA ACADÉMICA</p>
                    <p>PROGRAMA INSTITUCIONAL DE TUTORÍAS</p>
                    <p>REPORTE DE LABOR TUTORIAL MAYO -AGOSTO 2022</p>
                    <div className="container1">
                        <label  className="">Nombre del tutor: . </label>
                        <input  type="tex" className="input-from" />
                        <label  className="">Programa Académico:</label>
                        <input  type="tex" className="input-from" />

                    </div>
                    <div className="table1">
                    <  DatoEScolar />
                    </div>
                    <div className="table1">
                        < TableAfirmativa />
                    </div>

                    <div className="table2">
                        < TableTutorados />
                    </div>

                    <div className="controls" >

                        <textarea id="comentarios" rows="5" cols="30"></textarea><br/>
                        <label  className="">Nombre del tutor: . </label>


                    </div><br/>
                    <p>COMENTARIOS ADICIONALES:</p>
                    <div className="controls1" >

                        <textarea id="comentarios" rows="5" cols="30"></textarea><br/>
                        <label  className="">Nombre y firma del Coordinador de Tutorías </label>


                    </div>

                </div>
                </div>
                </div>
       </div>
    );
}

export default Login;