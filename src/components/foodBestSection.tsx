import { motion, Variants } from 'framer-motion';
import ZigzagLine from "./zigzagLine"

const FoodBestSection = ({image, title, subtitle} : {image: string, title: string, subtitle: string}) => {
    const iconVariants = (start: number, end: number): Variants => ({
        initial: { y: start },
        animate: {
            y: [end, start],
            transition: {
            duration: 1, // Use dynamic duration
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            },
        },
    })
  return (
    <div>
        <ZigzagLine />
        <div className="flex flex-col md:flex-row md:justify-around items-center lg:gap-0 gap-12 lg:mt-12 lg:mb-12 mt-8 mb-8">
            <motion.div
            variants={iconVariants(-20, 20)}
            initial="initial"
            animate="animate" className='text-center lg:w-48 md:w-28 w-16'>
                <img src={image} alt="" />
            </motion.div>
            <div className="lg:w-[42%] flex flex-col lg:gap-8 gap-4 items-center justify-center">
                <p className="w-1/2 lg:text-8xl text-7xl text-center heading-text">{title}</p>
                <p className="options-text">{subtitle}</p>
            </div>
            <motion.div
            variants={iconVariants(20, -20)}
            initial="initial"
            animate="animate" className="text-center lg:w-48 md:w-28 w-16">
                <img src={image} alt="" />
                
            </motion.div>
        </div>
        <ZigzagLine />
    </div>
  )
}

export default FoodBestSection
