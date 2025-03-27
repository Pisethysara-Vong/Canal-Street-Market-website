import MarketEvents from './components/marketEvents';
import  Header  from './components/header';
import Options from './components/options';
import Footer from './components/footer';

function App() {
    return (
        <div className='flex flex-col transition-all duration-500 bg-white px-8 py-8 lg:px-14 lg:py-14'>
            <Header />
            <Options />
            <MarketEvents />
            <Footer />
        </div>
        
    );
}

export default App;
