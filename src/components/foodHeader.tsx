import React from 'react'
import food from '../assets/food.png'

const FoodHeader = () => {
  return (
    <div>
        <div className='text-right options-text'>
            <p>Food Hall Hours:</p>
            <p>Mon - Sun: 11:00AM - 8:00PM</p>
        </div>
        <div className='border-2 border-red-600 flex flex-col w-full md:flex-row md:justify-between items-center md:gap-12 gap-4 md:mt-10 mt-8 p-0'>
            <div className='border-2 border-green-600 md:w-1/2 w-full heading-text'>
                <div className='md:w-1/2 md:text-[160px] text-4xl'>The Food Hall</div>
            </div>
            <div className='border-2 border-red-600 md:w-1/2 md:p-4'>
                <div className='md:w-100 md:h-120'><img className='w-full h-full object-center' src={food} alt="" /></div>
            </div>
        </div>
    </div>
  )
}

export default FoodHeader