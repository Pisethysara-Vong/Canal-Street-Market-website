import { useEffect } from "react";
import FoodHeader from "./components/foodHeader";


function Food() {
    useEffect(() => {
        document.title = 'Food | Canal Street Market'; // Change the title for About page
      }, []);
    return (
        <div className='flex flex-col w-full transition-all duration-500 bg-[#5ea3ec] px-8 py-8 lg:px-14 lg:py-14'>
            <FoodHeader />
        </div>
        
    );
}

export default Food;
