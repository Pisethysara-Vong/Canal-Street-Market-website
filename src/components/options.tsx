import image from '../assets/market.png';
import image2 from '../assets/retail.png';
import image3 from '../assets/food.png';
import { motion } from 'framer-motion';
const Options = () => {
  return (
    <div className="flex flex-col mb-16">
      <div className="lg:text-8xl text-6xl lg:w-1/2 tracking-normal mb-16 heading-text">A New Kind of Market</div>
      <div className='flex flex-col md:flex-row w-full justify-between gap-5'>
        <div className='w-full md:w-1/3 flex flex-col justify-start items-center mb-8 md:mb-0'>
          <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1}}
          viewport={{ once: true, amount: 0.3 }} // `once: true` ensures it only triggers once
          transition={{ duration: 1, ease: "easeOut"}}
          className='w-full md:h-120 h-130'><img className='w-full h-full object-cover' src={image} alt="" /></motion.div>
          <div className='w-full text-justify mt-8 md:text-[18px] text-[15px] tracking-normal options-text'>
            Merging retail, food, art, and culture, Canal Street Market highlights top retail and design concepts, restaurants, and up-and-coming players in the downtown New York City community.
          </div>
        </div>
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        viewport={{ once: true, amount: 0.3 }} // `once: true` ensures it only triggers once
        transition={{ duration: 1, ease: "easeOut"}}
        className='w-full md:w-1/3 flex flex-col justify-start items-center mb-8 md:mb-0'>
          <div className='w-full md:h-120 h-130'><img className='w-full h-full object-cover' src={image2} alt="" /></div>
          <div className='w-full text-justify mt-8 md:text-[18px] text-[15px] tracking-normal options-text'>
          Retail Market Hours:
          Thursday – Sun: 11:00AM - 7:00PM
          </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        viewport={{ once: true, amount: 0.3 }} // `once: true` ensures it only triggers once
        transition={{ duration: 1, ease: "easeOut" }}
        className='w-full md:w-1/3 flex flex-col justify-start items-center'>
          <div className='w-full md:h-120 h-130'><img className='w-full h-full object-cover' src={image3} alt="" /></div>
          <div className='w-full text-justify mt-8 md:text-[18px] text-[15px] tracking-normal options-text'>
          Food Hall Hours:
          Mon – Sun: 11:00AM - 8:00PM
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Options;
