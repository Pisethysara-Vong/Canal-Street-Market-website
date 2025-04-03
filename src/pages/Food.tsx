import { useEffect } from "react";
import FoodHeader from "../components/foodHeader";
import FoodSelection from "../components/foodSelection";
import FoodBestSection from "../components/foodBestSection";
import Footer from "../components/footer";
import smileyFace from "../assets/happy-face.png"
import food from '../assets/food.png'



function Food() {
    useEffect(() => {
        document.title = 'Food | Canal Street Market'; // Change the title for About page
      }, []);
    return (
        <div className='flex flex-col w-full bg-[#5ea3ec] px-8 py-8 lg:px-14 lg:py-14'>
            <FoodHeader hours="Food Hall Hours:" schedule="Mon - Sun: 11:00AM - 8:00PM" title="The Food Hall" image={food} bgHover='hover:bg-[rgb(75,140,186)]' />
            <FoodSelection />
            <FoodBestSection image1={smileyFace} image2={smileyFace} title="The Best of NYC" subtitle="All under one roof!" />
            <Footer />
        </div>
        
    );
}

export default Food;
