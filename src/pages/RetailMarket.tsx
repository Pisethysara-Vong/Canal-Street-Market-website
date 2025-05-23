import { useEffect } from "react";
import FoodHeader from "../components/foodHeader";
import FoodBestSection from "../components/foodBestSection";
import Footer from "../components/footer";
import rose from "../assets/2a2acabb846f52811a8a44ae9e1a2f66-removebg-preview.png"
import roseReverse from "../assets/2a2acabb846f52811a8a44ae9e1a2f66-removebg-preview reverse.png"
import retail from '../assets/retail.png';
import RetailSelection from "../components/retailSelection";



function Retail() {
    useEffect(() => {
        document.title = 'Retail | Canal Street Market'; // Change the title for About page
      }, []);
    return (
        <div className='flex flex-col w-full bg-[#f64444] px-8 py-8 lg:px-14 lg:py-14'>
            <FoodHeader hours="Retail Market Hours:" schedule="Thurs - Sun: 11:00AM - 7:00PM" title="The Retail Market" image={retail} bgHover='hover:bg-[rgb(200,60,60)]'/>
            <RetailSelection />
            <FoodBestSection image1={rose} image2={roseReverse} title="The Best of NYC" subtitle="All under one roof!" />
            <Footer />
        </div>
        
    );
}

export default Retail;
