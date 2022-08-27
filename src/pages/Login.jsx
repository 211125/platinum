import "../assets/stylesheets/app.css";
import {Link} from "react-router-dom";


function Login(){

    return (
        <div>

                    <div >
                        <form className="from">

                            <h1 className="from-title">Login</h1>

                            <div className="from-group">
                                <input  type="tex" className="from-input" placeholder="user"/>
                                <label  className="from-label">User</label>
                            </div>
                            <div className="from-group">
                                <input  type="password" className="from-input" placeholder="Password"/>
                                <label  className="from-label">Password</label>
                            </div>
                            <a href="https://platinum.upchiapas.edu.mx/login.php" className="recovery-pass">Forgot your password?</a>
                            <button className="from-submit">
                                <a href="/home" className="a link">Login</a></button>
                            <button   className="from-submit-Second" >
                                <a href="/signUp" className="a link">Sign Up</a>
                             </button>
                        </form>
                    </div>

        </div>


    );
}

export default Login;