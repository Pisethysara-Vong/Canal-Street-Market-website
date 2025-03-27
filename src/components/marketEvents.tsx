import DashedLine from './dashedLine';
import map from '../assets/map.png';


const MarketEvents = () => {
    const handleClick = (url: string) => {
        window.open(url, "_blank");
    };
    return (
        <div className="md:mt-16 mt-12 flex flex-col justify-start items-center">
            <div className="lg:text-8xl text-6xl lg:w-1/2 text-center tracking-normal mb-8 heading-text">
                Market Events
            </div>
            {DashedLine(100, 0)}
            {DashedLine(100, 0)}
            <div className="flex flex-col md:flex-row w-full md:justify-evenly md:m-12 m-4 lg:text-2xl text-xl tracking-normal options-text">
                <div className="flex flex-col md:w-1/3 justify-start items-center md:border-none border-b-2 border-dashed border-black p-4 ">
                    <div>09/21</div>
                    <div className='text-center'>Small Business Retail Pop Up Weekend!</div>
                </div>
                <div className="flex flex-col md:w-1/3  justify-start items-center md:border-none border-b-2 border-dashed border-black p-4">
                    <div>02/07</div>
                    <div className='text-center'>New Balance x Paperboy Paris by Greenhouse @ Canal Street Market</div>
                </div>
                <div className="flex flex-col md:w-1/3  justify-start items-center p-4">
                    <div>12/11</div>
                    <div className='text-center'>Hack City 12/11</div>
                </div>
            </div>
            {DashedLine(0, 100)}
            {DashedLine(0, 100)}
            <button onClick={() => handleClick("https://canalstreet.market/community/event/")} className='relative border-2 border-black lg:bottom-13 md:bottom-12 bottom-9 bg-white lg:w-1/6 w-1/5 md:p-4 p-2 md:text-xl text-center hover:bg-black hover:text-white duration-250 ease-out cursor-pointer options-text'>See all</button>
            <div className='flex md:flex-row flex-col w-full h-full md:justify-between md:items-start md:gap-10 gap-4 justify-start items-center md:mt-16 mt-6 heading-text'>
                <div onClick={() => handleClick("https://www.google.com/maps/place/265+Canal+St,+New+York,+NY+10013/@40.7190077,-74.0030314,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598a1c3945dd:0x6b44c616961ec727!8m2!3d40.7190077!4d-74.0008427")} className='md:w-1/2 md:h-full w-full h-1/2 flex justify-center items-center cursor-pointer'>
                    <div className='border-2 border-black border-dashed w-full h-full flex justify-center items-center md:text-6xl text-5xl text-center md:p-4 p-2'>
                        265 Canal St. New York, NY
                    </div>
                </div>
                <div onClick={() => handleClick("https://www.google.com/maps/place/265+Canal+St,+New+York,+NY+10013/@40.7190077,-74.0030314,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598a1c3945dd:0x6b44c616961ec727!8m2!3d40.7190077!4d-74.0008427")} className='md:w-1/2 md:h-full w-full h-1/2 border-2 border-black border-dashed flex justify-center items-center cursor-pointer'>
                    <div className='w-full h-full'>
                        <img className='w-full h-full object-cover' src={map} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketEvents