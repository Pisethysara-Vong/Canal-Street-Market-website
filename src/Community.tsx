import { useEffect } from "react";
import CommunityHeader from "./components/communityHeader";
import Footer from "./components/footer";
import MarketEvents from "./components/marketEvents";
import Features from "./components/features";



function Community() {
    useEffect(() => {
        document.title = 'Community | Canal Street Market'; // Change the title for About page
      }, []);
    return (
        <div className='flex flex-col w-full bg-[#ffb400] px-8 py-8 lg:px-14 lg:py-14'>
            <CommunityHeader details="Our mixed-use space hosts ongoing events, podcasts & artists in residence" title="Canal St. Community" />
            <MarketEvents />
            <Features />
            <Footer />
        </div>
        
    );
}

export default Community;
