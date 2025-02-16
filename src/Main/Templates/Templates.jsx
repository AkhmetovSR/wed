import s from "./Templates.module.css";
import Carousel from "./Carousel.jsx";
import React from "react";
import {AnimatePresence, motion} from "framer-motion";
import {useLocation} from "react-router-dom";

export default function Templates() {
    return (
        <AnimatePresence>
            <motion.div className={s.Templates} initial={{scale: 1.2}} animate={{scale: 1}} exit={{scale: 1.2}} transition={{duration: 0.1}}>
                <Carousel/>
            </motion.div>
        </AnimatePresence>
    );
}