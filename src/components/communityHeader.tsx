import { motion } from 'framer-motion';
import logo from '../assets/f01b45f7-eb29-4c78-8ddb-e21869cba54c_removalai_preview.png'
import image from '../assets/market.png'
import sidebar from '../assets/sidebar menu.png';

interface CommunityHeaderProps {
    details: string;
    title: string;
}

const CommunityHeader = ({ details, title }: CommunityHeaderProps) => {
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
            <div onClick={() => handleClick("/menu")} className='w-16 hover:bg-[rgb(204,165,76)] rounded-[5px] duration-150 ease-out cursor-pointer'>
                <img src={sidebar} alt="Logo" />
            </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0}}
        viewport={{ once: true, amount: 0.5 }} // `once: true` ensures it only triggers once
        transition={{ duration: 0.5, ease: "easeOut" }}
        className='border-2 border-red-600 flex justify-self-end text-right lg:w-1/5 w-1/2 options-text mt-8 md:text-[15px] text-[13px]'>
            <p>{details}</p>
        </motion.div>
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        viewport={{ once: true, amount: 0.5 }} // `once: true` ensures it only triggers once
        transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
        className='flex flex-col w-full md:flex-row justify-start items-center md:gap-12 gap-4 mt-4 p-0'>
            <div className='border-2 border-red-600 w-full heading-text'>
                <div className='lg:text-[200px] text-6xl'>{title}</div>
            </div>
            <div className='md:hidden md:w-1/2 md:p-4 flex justify-center'>
                <div className='md:w-100 md:h-120'><img className='w-full h-full object-center' src={image} alt="" /></div>
            </div>
        </motion.div>
    </div>
  )
}

export default CommunityHeader