import DiagonalLinesComponent from "./diagonalLine"

const MarketEvents = () => {
  return (
    <div>
      <div className="border-2 border-blue-600 flex md:flex-row flex-col justify-between md:gap-4 lg:mt-32 mt-16">
        <div className="border-2 border-red-600 md:w-1/4 flex flex-col justify-between items-center md:order-1 order-2 ">
            <div className="w-full h-auto md:block hidden">
                <DiagonalLinesComponent />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center items-center md:my-15 my-8 gap-6 options-text font-semibold text-[15px]">
                <div className="text-[13px]">09/21 (past)</div>
                <div className='text-center'>Small Business Retail Pop Up Weekend!</div>
            </div>
            <DiagonalLinesComponent />
            <div className="md:w-1/2 flex flex-col justify-center items-center md:my-15 my-8 gap-6 options-text font-semibold text-[15px]">
                <div className="text-[13px]">12/11 (past)</div>
                <div className='text-center'>Hack City 12/11</div>
            </div>
            <DiagonalLinesComponent />
        </div>
        <div className="border-2 border-red-600 md:w-1/3 flex flex-col justify-between items-center md:order-2 order-1">
            <div className="w-full h-auto md:block hidden">
                <DiagonalLinesComponent />
            </div>
            <div className="flex flex-col justify-center items-center md:my-15 my-8 heading-text">
                <div className='text-center lg:text-9xl md:text-7xl text-5xl'>Market Events</div>
            </div>
            <DiagonalLinesComponent />
        </div>
        <div className="border-2 border-red-600 md:w-1/4 flex flex-col justify-between items-center order-3">
            <div className="w-full h-auto md:block hidden">
                <DiagonalLinesComponent />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center items-center md:my-15 my-8 gap-6 options-text font-semibold text-[15px]">
                <div className="text-[13px]">02/07 (past)</div>
                <div className='text-center'>New Balance x Paperboy Paris by Greenhouse @ Canal Street Market</div>
            </div>
            <DiagonalLinesComponent />
            <div className="md:w-1/2 flex flex-col justify-center items-center md:my-15 my-8 gap-6 options-text font-semibold text-[15px]">
                <div className="text-[13px]">07/27 (past)</div>
                <div className='text-center'>Taiwanese Wave</div>
            </div>
            <div className="w-full h-auto md:block hidden">
                <DiagonalLinesComponent />
            </div>
        </div>
      </div>
    </div>
  )
}

export default MarketEvents