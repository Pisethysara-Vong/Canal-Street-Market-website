import { useEffect } from "react";
import FoodHeader from "./components/foodHeader";
import FoodSelection from "./components/foodSelection";
import FoodBestSection from "./components/foodBestSection";
import Footer from "./components/footer";


function Food() {
    useEffect(() => {
        document.title = 'Food | Canal Street Market'; // Change the title for About page
      }, []);
    return (
        <div className='flex flex-col w-full transition-all duration-500 bg-[#5ea3ec] px-8 py-8 lg:px-14 lg:py-14'>
            <FoodHeader />
            <FoodSelection />
            <FoodBestSection />
            <Footer />
        </div>
        
    );
}

export default Food;
