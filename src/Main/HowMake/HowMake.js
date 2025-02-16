import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HowMake.css"

const HowMake = () => {
    const [active, setActive] = useState(2); // Индекс активного слайда
    const [fullscreen, setFullscreen] = useState(null); // Индекс полноэкранного слайда

    const items = [
        {
            id: 1,
            content: (
                <>
                    <h1>Slide 1</h1>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni
                    magnam unde ipsam repudiandae explicabo expedita labore, sequi minus
                    neque beatae voluptatum, quasi accusamus quia quis voluptas laborum
                    ad! Ab totam doloribus, excepturi possimus rem vel quia fugit molestiae
                    officiis!
                </>
            ),
        },
        {
            id: 2,
            content: (
                <>
                    <h1>Slide 2</h1>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni
                    magnam unde ipsam repudiandae explicabo expedita labore, sequi minus
                    neque beatae voluptatum, quasi accusamus quia quis voluptas laborum
                    ad! Ab totam doloribus, excepturi possimus rem vel quia fugit molestiae
                    officiis!
                </>
            ),
        },
        {
            id: 3,
            content: (
                <>
                    <h1>Slide 3</h1>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni
                    magnam unde ipsam repudiandae explicabo expedita labore, sequi minus
                    neque beatae voluptatum, quasi accusamus quia quis voluptas laborum
                    ad! Ab totam doloribus, excepturi possimus rem vel quia fugit molestiae
                    officiis!
                </>
            ),
        },
        {
            id: 4,
            content: (
                <>
                    <h1>Slide 4</h1>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni
                    magnam unde ipsam repudiandae explicabo expedita labore, sequi minus
                    neque beatae voluptatum, quasi accusamus quia quis voluptas laborum
                    ad! Ab totam doloribus, excepturi possimus rem vel quia fugit molestiae
                    officiis!
                </>
            ),
        },
    ];

    const handleNext = () => {
        setActive((prev) => (prev + 1 < items.length ? prev + 1 : prev));
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
    };

    const handleFullscreen = (index) => {
        setFullscreen(index === fullscreen ? null : index);
    };

    return (
        <div className="slider-container">
            <div className="slider">
                {items.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className={`item ${index === active ? "active" : ""}`}
                        style={{
                            zIndex: index === active ? 1 : 0,
                        }}
                        onClick={() => handleFullscreen(index)}
                        initial={{ x: (index - active) * 120, scale: 0.8 }}
                        animate={{
                            x: fullscreen === null ? (index - active) * 120 : 0,
                            y: fullscreen === index ? 0 : 0,
                            scale: fullscreen === index ? 1 : index === active ? 1 : 0.8,
                            width: fullscreen === index ? "100vw" : "200px",
                            height: fullscreen === index ? "100vh" : "320px",
                            borderRadius: fullscreen === index ? "0" : "10px",
                        }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        {item.content}
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {fullscreen !== null && (
                    <motion.div
                        className="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setFullscreen(null)}
                    />
                )}
            </AnimatePresence>

            <button className="nav-button prev" onClick={handlePrev}>
                {"<"}
            </button>
            <button className="nav-button next" onClick={handleNext}>
                {">"}
            </button>
        </div>
    );
};

export default HowMake;