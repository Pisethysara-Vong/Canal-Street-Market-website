import logo from '../assets/logo.png';
import image from '../assets/header.png';
import {motion} from 'framer-motion';

const Header = () => {
    return (
        <div>
            <motion.img
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }} // `once: true` ensures it only triggers once
            transition={{ duration: 0.5, ease: "easeOut" }}
            className='w-16 mb-32' src={logo} />
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            viewport={{ once: true, amount: 0.5 }} // `once: true` ensures it only triggers once
            transition={{ duration: 1, delay: 1 }}
            className='lg:text-7xl text-4xl mt-48 lg:w-4/5 md:text-justify tracking-normal heading-text'>
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