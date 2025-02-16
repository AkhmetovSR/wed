import s from "./Temp.module.css";
import TempHome from "./TempHome/TempHome.jsx";
import { motion } from "framer-motion";

export default function Temp(props) {
    return (
        <motion.div className={s.Temp} transition={{duration: 0.1, delay: 0}}>
            <motion.div><TempHome i={props.i} transition={{duration: 0.1, delay: 0}}/></motion.div>

        </motion.div>
    );
}