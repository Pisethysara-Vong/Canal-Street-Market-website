import logo from '../assets/f01b45f7-eb29-4c78-8ddb-e21869cba54c_removalai_preview.png'
import image from '../assets/food.png'


interface CommunityHeaderProps {
    details: string;
    title: string;
}

const CommunityHeader = ({ details, title }: CommunityHeaderProps) => {
  return (
    <div>
        <div className='flex justify-between items-center'>
            <div className='w-16'>
                <img src={logo} alt="Logo" />
            </div>
        </div>
        <div className='border-2 border-red-600 flex justify-self-end text-right lg:w-1/5 w-1/2 options-text mt-8 md:text-[15px] text-[13px]'>
                <p>{details}</p>
                
            </div>
        <div className='flex flex-col w-full md:flex-row justify-start items-center md:gap-12 gap-4 mt-4 p-0'>
            <div className='border-2 border-red-600 w-full heading-text'>
                <div className='lg:text-[200px] text-6xl'>{title}</div>
            </div>
            
        </div>
    </div>
  )
}

export default CommunityHeader