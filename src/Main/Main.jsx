import s from "./Main.module.css";
import Menu from "./Menu/Menu.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./Home/Home.jsx";
import Templates from "./Templates/Templates.jsx";
import HowMake from "./HowMake/HowMake.js";

export default function Main() {
    return (
        <div className={s.Main}>
            <Menu/>
            <Routes>
                <Route path="/"                 element={<Home/>}></Route>
                <Route path="/Templates"        element={<Templates/>}></Route>
                <Route path="/HowMake"          element={<HowMake/>}></Route>
                {/*<Route path="/Templates/asd"    element={<HowMake/>}></Route>*/}

            </Routes>
        </div>
    );
}