import classNames from 'classnames';
import logo from '../assets/f01b45f7-eb29-4c78-8ddb-e21869cba54c_removalai_preview.png'
import sidebar from '../assets/sidebar menu.png';
import { delay, motion } from 'framer-motion';


interface FoodHeaderProps {
    hours: string;
    schedule: string;
    title: string;
    image: string;
    bgHover: string
}

const FoodHeader = ({ hours, schedule, title, image, bgHover }: FoodHeaderProps) => {
    const handleClick = (url: string) => {
        window.location.href = url;
    };
  return (
    <div>
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        viewport={{ once: true, amount: 0.5 }} // `once: true` ensures it only triggers once
        transition={{ duration: 0.5, ease: "easeOut" }}
        className='flex justify-between items-center'>
            <div className='w-16'>
                <img src={logo} alt="Logo" />
            </div>
            <div onClick={() => handleClick("/menu")} className={classNames("w-16 rounded-[5px] duration-150 ease-out cursor-pointer", bgHover)}>
                <img src={sidebar} alt="sidebar" />
            </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0}}
        viewport={{ once: true, amount: 0.5 }} // `once: true` ensures it only triggers once
        transition={{ duration: 0.5, ease: "easeOut" }}
        className='text-right options-text mt-8'>
            <p>{hours}</p>
            <p>{schedule}</p>
            
        </motion.div>
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        viewport={{ once: true, amount: 0.5 }} // `once: true` ensures it only triggers once
        transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
        className='flex flex-col w-full md:flex-row md:justify-between items-center md:gap-12 gap-4 mt-4 p-0'>
            <div className='md:w-1/2 w-full heading-text'>
                <div className='md:w-1/2 md:text-[160px] text-6xl'>{title}</div>
            </div>
            <div className='md:w-1/2 md:p-4 flex justify-center'>
                <div className='md:w-100 md:h-120'><img className='w-full h-full object-center' src={image} alt="" /></div>
            </div>
        </motion.div>
    </div>
  )
}

export default FoodHeader