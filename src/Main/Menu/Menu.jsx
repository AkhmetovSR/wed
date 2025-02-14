import s from "./Menu.module.css";
import {NavLink} from "react-router-dom";

export default function Menu() {
    return (
        <div className={s.Menu}>
            <NavLink to="/" className={s.MenuButton}>asd</NavLink>
            <NavLink to="/Templates" className={s.MenuButton}>asd</NavLink>
            <NavLink to="/HowMake" className={s.MenuButton}>asd</NavLink>
            <NavLink to="/" className={s.MenuButton}>asd</NavLink>
            <NavLink to="/" className={s.MenuButton}>asd</NavLink>
        </div>
    );
}