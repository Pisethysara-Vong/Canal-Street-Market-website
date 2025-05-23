import logo from '../assets/f01b45f7-eb29-4c78-8ddb-e21869cba54c_removalai_preview copy.png'
import image from '../assets/header.png';
import sidebar from '../assets/sidebar menu.png';

import {motion} from 'framer-motion';

const Header = () => {
    const handleClick = (url: string) => {
        window.location.href = url;
    };
    return (
        <div>
            <div className='flex justify-between items-center fixed md:w-fit w-full lg:pr-28 pr-16'>
                <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1}}
                viewport={{ once: true, amount: 0.5 }} // `once: true` ensures it only triggers once
                transition={{ duration: 1, ease: "easeOut" }}
                onClick={() => handleClick("/")}
                className='w-16 cursor-pointer' src={logo} />
                <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1}}
                viewport={{ once: true, amount: 0.5 }} // `once: true` ensures it only triggers once
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={() => handleClick("/menu")}
                className='w-16 hover:bg-neutral-300 rounded-[5px] duration-150 ease-out cursor-pointer md:hidden block' src={sidebar} />
            </div>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            viewport={{ once: true, amount: 0.5 }} // `once: true` ensures it only triggers once
            transition={{ duration: 0.5, delay: 1 }}
            className='lg:text-7xl text-4xl mt-68 lg:w-auto md:text-left text-justify tracking-normal heading-text'>
                Canal Street Market is a carefully curate retail market, food hall & community space open year-round at 265 Canal Street. Support <span className='underline decoration-dashed'>Small Business</span> this weekend!
            </motion.div>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            viewport={{ once: true, amount: 0.3 }} // `once: true` ensures it only triggers once
            transition={{ duration: 1, ease: "easeOut"}}
            className='w-full md:h-auto h-130 md:mt-32 md:mb-32 mt-16 mb-16'
            >
                <img className='w-full h-full object-cover' src={image} alt="" />

            </motion.div>
        </div>
    )
}

export default Header