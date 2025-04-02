import image3 from '../assets/bereop tech.png'
import image2 from '../assets/joe rice rolls.png'
import image from '../assets/amdc.png'
import image4 from '../assets/izakaya.png'


const Features = () => {
    const handleClick = (url: string) => {
        window.open(url, "_blank");
    };
  return (
    <div>
        <div className="lg:text-8xl text-6xl lg:w-1/2 tracking-normal md:mt-24 mt-16 heading-text">Features</div>
        <div className="md:grid grid-cols-2 flex flex-col md:gap-12 gap-10 md:mt-16 md:mb-8 mb-6 mt-8 border-2">
            <div onClick={() => handleClick("https://canalstreet.market/community/feature/amdc")} className='border-2 border-green-400 flex flex-col md:gap-4 gap-2 cursor-pointer'>
                <div className='md:h-120 w-full'>
                    <img className='w-full h-full object-cover' src={image} alt="" />
                </div>
                <div className='border-2 border-dashed text-center p-4 heading-text md:text-4xl text-xl'>
                    CSM Community - AMDC
                </div>
            </div>
            <div onClick={() => handleClick("https://canalstreet.market/community/feature/joe-rong")} className='border-2 border-green-400 flex flex-col md:gap-4 gap-2 cursor-pointer'>
                <div className='md:h-120 w-full'>
                    <img className='w-full h-full object-cover' src={image2} alt="" />
                </div>
                <div className='border-2 border-dashed text-center p-4 heading-text md:text-4xl text-xl'>
                    CSM Community - Joe's Steam Rice Rolls
                </div>
            </div>
            <div onClick={() => handleClick("https://canalstreet.market/community/feature/csm-community/")} className='border-2 border-green-400 flex flex-col md:gap-4 gap-2 cursor-pointer'>
                <div className='md:h-120 w-full'>
                    <img className='w-full h-full object-cover' src={image3} alt="" />
                </div>
                <div className='border-2 border-dashed text-center p-4 heading-text md:text-4xl text-xl'>
                    CSM Community - Bereop Tech
                </div>
            </div>
            <div onClick={() => handleClick("https://canalstreet.market/community/feature/csm-community---izakaya/")} className='border-2 border-green-400 flex flex-col md:gap-4 gap-2 cursor-pointer'>
                <div className='md:h-120 w-full'>
                    <img className='w-full h-full object-cover' src={image4} alt="" />
                </div>
                <div className='border-2 border-dashed text-center p-4 heading-text md:text-4xl text-xl'>
                    CSM Community - Izakaya
                </div>
            </div>
        </div>
        <div onClick={() => handleClick("https://canalstreet.market/community/feature/")} className="w-full border-2 border-black md:text-[16px] text-[15px] py-4 text-center hover:bg-black hover:text-white duration-250 ease-out cursor-pointer options-text">
            <button>View all stories</button>
        </div>
    </div>
  )
}

export default Features