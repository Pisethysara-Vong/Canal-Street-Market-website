import classNames from 'classnames';
import logo from '../assets/f01b45f7-eb29-4c78-8ddb-e21869cba54c_removalai_preview.png'
import sidebar from '../assets/sidebar menu.png';


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
        <div className='flex justify-between items-center'>
            <div className='w-16'>
                <img src={logo} alt="Logo" />
            </div>
            <div onClick={() => handleClick("/menu")} className={classNames("w-16 rounded-[5px] duration-150 ease-out cursor-pointer", bgHover)}>
                <img src={sidebar} alt="sidebar" />
            </div>
        </div>
        <div className='text-right options-text mt-8'>
                <p>{hours}</p>
                <p>{schedule}</p>
                
            </div>
        <div className='flex flex-col w-full md:flex-row md:justify-between items-center md:gap-12 gap-4 mt-4 p-0'>
            <div className='md:w-1/2 w-full heading-text'>
                <div className='md:w-1/2 md:text-[160px] text-6xl'>{title}</div>
            </div>
            <div className='md:w-1/2 md:p-4 flex justify-center'>
                <div className='md:w-100 md:h-120'><img className='w-full h-full object-center' src={image} alt="" /></div>
            </div>
        </div>
    </div>
  )
}

export default FoodHeader