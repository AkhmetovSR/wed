import s from "./Carousel.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import React from "react";
import MenuTemp from "./MenuTemp.jsx";
import Temp from "./Temp/Temp.jsx";
import Temp1 from "./Temp1/Temp1.jsx";
import Temp2 from "./Temp2/Temp2.jsx";
import Temp3 from "./Temp3/Temp3.jsx";
import Temp4 from "./Temp4/Temp4.jsx";

const Templates = [
    {id: 1, wife: "asd", man: "asd", text: "", day: "", month: "", year: "", img: "", navLink: "/HowMake"},
    {id: 2, wife: "qwe", man: "asd", text: "", day: "", month: "", year: "", img: "", navLink: "/HowMake"},
    {id: 3, wife: "zxc", man: "asd", text: "", day: "", month: "", year: "", img: "", navLink: "/Templates/asd"},
    {id: 4, wife: ",./", man: "asd", text: "", day: "", month: "", year: "", img: "", navLink: "/Templates/asd"},
    {id: 5, wife: ",./", man: "asd", text: "", day: "", month: "", year: "", img: "", navLink: "/Templates/asd"},
    {id: 6, wife: ",./", man: "asd", text: "", day: "", month: "", year: "", img: "", navLink: "/Templates/asd"},
    {id: 7, wife: ",./", man: "asd", text: "", day: "", month: "", year: "", img: "", navLink: "/Templates/asd"}
];

const Carousel = ({ children }) => {
    const [active, setActive] = useState(1);
    const [selectedSlideId, setSelectedSlideId] = useState(null); // Состояние для выбранного слайда
    let [x, setX] = useState(6);
    let startX = 0;
    let endX = 0;
    let startY = 0;
    let endY = 0;

    // Обработчик начала касания
    function onTapStart(event, info) {
        startX = info.point.x;
        startY = info.point.y;
    }
    // Обработчик завершения касания
    function onTap(event, info, index) {
        endX = info.point.x;
        endY = info.point.y;
        // Оригинальная логика свайпа
        if (active !== 6) startX - endX > 10 ? setActive(active + 1) : startX += 0;
        if (active !== 0) endX - startX > 10 ? setActive(active - 1) : endX += 0;
    }
    // Функция закрытия при клике
    const closeFullscreen = () => setSelectedSlideId(null);

    return (
        <motion.div className={s.RightDiv} transition={{duration: 0.1, delay: 0}}>
            {/* Рендерим слайды */}
            {React.Children.map(children, (child, index) => {
                const id = child.props["data-id"];
                return (
                    <motion.div
                        key={id}
                        className={s.CardCont}
                        onTapStart={(e, info) => onTapStart(e, info)}
                        onTap={(e, info) => onTap(e, info, index)}
                        layoutId={`slide-${id}`} // Уникальный ID для анимации
                        style={{
                            "--abs": Math.abs(active - index),
                            opacity: Math.abs(active - index) >= 3 ? "0" : "1",
                            display: Math.abs(active - index) > 2 ? "none" : "block",
                            touchAction: "none",
                        }}
                        animate={{
                            rotateY: ((active - index) / 10) * 10,
                            scaleY: 1 + (Math.abs(active - index) / 2.5 * -0.9),
                            translateZ: (Math.abs(active - index) / 2) * 5,
                            translateX: (Math.sign(index - active) * Math.abs(index - active)) * 5 * x,
                            zIndex: active > index ? index - active + 1 : active - index + 1,
                        }}
                        transition={{duration: 0.1, delay: 0}}
                    >
                        <button className={s.expandButton} onClick={() => setSelectedSlideId(id)}>⤢</button>
                        {child}
                    </motion.div>
                );
            })}

            {/* Модальное окно для полноэкранного просмотра */}
            {selectedSlideId !== null && (
                <motion.div
                    className={s.fullscreenOverlay}
                    // onClick={() => setSelectedSlideId(null)} // Закрыть при клике
                    // initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    // transition={{duration: 0.1, delay: 0}}
                >
                    <motion.div
                        className={s.fullscreenContent}
                        layoutId={`slide-${selectedSlideId}`} // Анимация перехода
                        transition={{duration: 0.1, delay: 0}}
                    >
                        <button className={s.closeButton} onClick={closeFullscreen}>×</button>
                        {React.Children.toArray(children).find(
                            (child) => child.props["data-id"] === selectedSlideId
                        ).props.children}
                    </motion.div>
                </motion.div>
            )}
        </motion.div>
    );
};

export default function RightDiv() {
    return (
        <Carousel>
            {Templates.map((i) => (
                <div data-id={i.id} key={i.id} className={s.Temp}>
                    <MenuTemp/>
                    <Temp i={i}/>
                    {/*{i.wife}*/}
                </div>
            ))}
        </Carousel>
    );
}

// Проверяем, был ли это клик (минимальное перемещение)
// const deltaX = Math.abs(startX - endX);
// const deltaY = Math.abs(startY - endY);
// if (deltaX < 5 && deltaY < 5) {
//     const id = React.Children.toArray(children)[index].props["data-id"];
//     setSelectedSlideId(id); // Устанавливаем выбранный слайд
//     return;
// }