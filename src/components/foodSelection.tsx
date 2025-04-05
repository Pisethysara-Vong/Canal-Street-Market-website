import { useState, useEffect } from "react";
import { foodItems } from "../constants/foodAndRetail";
import { motion } from "framer-motion";

const FoodSelection = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isHoverEnabled, setIsHoverEnabled] = useState<boolean>(true);

    useEffect(() => {
        const handleResize = () => {
            setIsHoverEnabled(window.innerWidth >= 768); // Disable hover if width < 768px (md breakpoint)
        };

        handleResize(); // Check on mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleMouseEnter = (index: number) => {
        if (isHoverEnabled) setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        if (isHoverEnabled) setHoveredIndex(null);
    };

    const getImagePosition = () => {
        if (hoveredIndex === null) return "";
        const column = hoveredIndex % 3;
        if (column === 0) return "left-0 transform translate-x-0";
        if (column === 1) return "left-1/2 transform -translate-x-1/2";
        return "right-0 transform translate-x-0";
    };

    const image = (img: string) => (
        <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            src={img}
            alt="Food Item"
            className={`absolute lg:w-[25%] w-[45%] top-1/2 -translate-y-1/2 pointer-events-none ${getImagePosition()}`}
        />
    );

    const handleClick = (url: string) => {
        window.open(url, "_blank");
    };

    return (
        <div className="relative md:grid grid-cols-3 flex flex-col md:gap-24 gap-4 lg:mt-26 lg:mb-26 mb-18 mt-18 z-0">
            {/* Conditionally rendered image */}
            {isHoverEnabled && hoveredIndex !== null && image(foodItems[hoveredIndex].image)}

            {/* Food Items */}
            {foodItems.map((food, index) => (
                <div
                    key={index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(food.url)}
                    className="flex flex-col gap-4 relative z-10 cursor-pointer"
                >
                    <div className="options-text md:text-xl relative">{food.option}</div>
                    <div className="heading-text md:text-4xl text-2xl relative">{food.name}</div>
                </div>
            ))}
        </div>
    );
};

export default FoodSelection;
