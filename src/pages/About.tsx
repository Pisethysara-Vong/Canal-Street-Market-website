import  Header  from '../components/aboutHeader';
import Options from '../components/options';
import Footer from '../components/footer';
import AboutEvents from '../components/aboutEvents';

function About() {
    return (
        <div className='flex flex-col transition-all duration-500 bg-white px-8 py-8 lg:px-14 lg:py-14'>
            <Header />
            <Options />
            <AboutEvents />
            <Footer />
        </div>
        
    );
}

export default About;
