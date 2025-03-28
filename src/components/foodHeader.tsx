import food from '../assets/food.png'
import logo from '../assets/f01b45f7-eb29-4c78-8ddb-e21869cba54c_removalai_preview.png'

const FoodHeader = () => {
  return (
    <div>
        <div className='flex justify-between items-center'>
            <div className='w-16'>
                <img src={logo} alt="Logo" />
            </div>
        </div>
        <div className='text-right options-text mt-8'>
                <p>Food Hall Hours:</p>
                <p>Mon - Sun: 11:00AM - 8:00PM</p>
            </div>
        <div className='flex flex-col w-full md:flex-row md:justify-between items-center md:gap-12 gap-4 md:mt-10 mt-8 p-0'>
            <div className='md:w-1/2 w-full heading-text'>
                <div className='md:w-1/2 md:text-[160px] text-4xl'>The Food Hall</div>
            </div>
            <div className='md:w-1/2 md:p-4 flex justify-center'>
                <div className='md:w-100 md:h-120'><img className='w-full h-full object-center' src={food} alt="" /></div>
            </div>
        </div>
    </div>
  )
}

export default FoodHeader