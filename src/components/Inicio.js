import React from "react";
import { Link } from "react-router-dom";

function Inicio(){
    return(
        <React.Fragment>
        <div className="xd">
            <form  className="form-box" id="form">
                <h3>Ingreso</h3>
                <div className="mb-3">
                <Link to="/duenos" className="btn btn-outline-primary" >Nueva Cita</Link>
                </div >
                <div >
                    <Link to="/vercitas" className="btn btn-outline-primary" >ver citas</Link>
                </div>
            </form>
        </div>
    </React.Fragment>)

}
export default Inicio;