import "../assets/stylesheets/app.css";
import React, { useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import logo from "../assets/img/logo.png";
function SignUp(){




    return (
        <React.Fragment>

                        <div className="from-first">

                            <form className="from-second">
                                <img src={logo} className="logo" alt=""/><br/>
                                <h1 className="from-title">Sign Up</h1>
                                <div className="from-group">
                                    <input  type="tex" className="from-input" placeholder="email"/>
                                    <label  className="from-label">Email</label>
                                </div>
                                <div className="from-group">
                                    <input  type="tex" className="from-input" placeholder="user"/>
                                    <label  className="from-label">User</label>
                                </div>
                                <div className="from-group">
                                    <input  type="tex" className="from-input" placeholder="Password"/>
                                    <label  className="from-label">Password</label>
                                </div>

                                <button className="from-submit">Login</button>
                            </form>
                        </div>

        </React.Fragment>
    );
}

export default SignUp;