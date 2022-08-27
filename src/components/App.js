import { Routes, Route} from "react-router-dom";
import Inicio from "./Inicio";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import User from "../pages/User";

function App() {
    return (
        <div className="App">
            <Routes>

                <Route exact path="/" element={<Login />} />
                <Route exact path="/home" element={<User />} />
                <Route exact path="/SignUp" element={<SignUp />} />
            </Routes>
        </div>
    );
}

export default App;
