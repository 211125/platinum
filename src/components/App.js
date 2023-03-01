import { Routes, Route} from "react-router-dom";
import Inicio from "./Inicio";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import User from "../pages/User";
import Atencion from "../pages/Atencion";

function App() {
    return (
        <div className="App">
            <Routes>

                <Route exact path="/home" element={<Login />} />
                <Route exact path="/" element={<User />} />
                <Route exact path="/SignUp" element={<SignUp />} />
                <Route exact path="/Atencion" element={<Atencion />} />
            </Routes>
        </div>
    );
}

export default App;
