import  Header  from '../components/aboutHeader';
import Options from '../components/options';
import Footer from '../components/footer';
import AboutEvents from '../components/aboutEvents';
import { motion } from 'framer-motion';
import logo from '../assets/f01b45f7-eb29-4c78-8ddb-e21869cba54c_removalai_preview copy.png'
import sidebar from '../assets/sidebar menu.png';


function About() {
    const handleClick = (url: string) => {
        window.location.href = url;
    };
    return (
        <div className=' flex flex-col transition-all duration-500 bg-white px-8 py-8 lg:px-14 lg:py-14'>
            <Header />
            <Options />
            <AboutEvents />
            <Footer />
        </div>
        
    );
}

export default About;
