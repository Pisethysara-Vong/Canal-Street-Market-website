import { useEffect } from "react";
import CommunityHeader from "../components/communityHeader";
import Footer from "../components/footer";
import MarketEvents from "../components/marketEvents";
import Features from "../components/features";
import MarketRadio from "../components/marketRadio";
import MenuOptions from "../components/menuOptions";



function Menu() {
    useEffect(() => {
        document.title = 'Menu | Canal Street Market'; // Change the title for About page
      }, []);
    return (
        <div className='flex flex-col w-full h-dvh'>
            <MenuOptions />
        </div>
        
    );
}

export default Menu;
