import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from './pages/About';
import Community from './pages/Community';
import Food from './pages/Food';
import Retail from './pages/RetailMarket';
import Menu from './pages/Menu';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={
          <div className="overflow-x-hidden antialiased selection:bg-black selection:text-white min-h-screen">
          <div className="box-border h-full w-full m-0 p-0">
            <About />
          </div>
        </div>
        } />
        <Route path="/food" element={
          <div className="overflow-x-hidden antialiased selection:bg-black selection:text-white min-h-screen">
          <div className="box-border h-full w-full m-0 p-0">
            <Food />
          </div>
        </div>
        } />
        <Route path="/retail" element={
          <div className="overflow-x-hidden antialiased selection:bg-black selection:text-white min-h-screen">
          <div className="box-border h-full w-full m-0 p-0">
            <Retail />
          </div>
        </div>
        } />
        <Route path="/community" element={
          <div className="overflow-x-hidden antialiased selection:bg-black selection:text-white min-h-screen">
          <div className="box-border h-full w-full m-0 p-0">
            <Community />
          </div>
        </div>
        } />
        <Route path="/menu" element={
          <div className="overflow-x-hidden antialiased selection:bg-black selection:text-white min-h-screen">
          <div className="box-border h-full w-full m-0 p-0">
            <Menu />
          </div>
        </div>
        } />
        <Route path="/" element={
          <div className="overflow-x-hidden antialiased selection:bg-black selection:text-white min-h-screen">
          <div className="box-border h-full w-full m-0 p-0">
            <About />
          </div>
        </div>
        } />
      </Routes>
    </Router>

  );
  {/*const [activePanel, setActivePanel] = useState<string>('home');

  useEffect(() => {
    // Add click event listener to each panel
    const panels = document.querySelectorAll('.panel');
    panels.forEach((panel) => {
      panel.addEventListener('click', () => {
        setActivePanel(panel.id); // Set active panel by ID
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      panels.forEach((panel) => {
        panel.removeEventListener('click', () => {
          setActivePanel('');
        });
      });
    };
  }, []);

  return (
    <div className="box-border h-full w-full m-0 p-0">
      <div className="flex flex-wrap h-screen">
        <div id="home" className={`panel relative flex cursor-pointer transition-all duration-500 bg-white z-10 ${
            activePanel === 'home' ? 'w-[88%] left-0' : 'w-[4%] left-0'}`}>
          {activePanel === 'home' ? (
                <>
                  <About />
                </>
              ) : (
                <div className='w-16 h-fit mt-15 px-0.5 border-2 border-green-500 flex justify-center '>
                  <img className="w-full" src={logo} alt="Logo" />
                </div>
                
              )}
        </div>
        <div
          id="one"
          className={`panel relative flex flex-col items-center justify-center min-h-full cursor-pointer transition-all duration-500 bg-red-500 z-[75] ${
            activePanel === 'one' ? 'w-[88%] left-0' : 'w-[4%] left-0'
          }`}
        >
          {activePanel === 'one' ? (
                <>
                  <About />
                </>
              ) : (
                <p className="transform rotate-90">ONE</p>
              )}
          
        </div>

        <div
          id="two"
          className={`panel relative flex flex-col items-center justify-center min-h-full cursor-pointer transition-all duration-500 bg-purple-500 z-[50] ${
            activePanel === 'two' ? 'w-[88%] left-0' : 'w-[4%] left-0'
          }`}
        >
          {activePanel === 'two' ? (
                <>
                  <About />
                </>
              ) : (
                <p className="transform rotate-90">ONE</p>
              )}
        </div>

        <div
          id="three"
          className={`panel relative flex flex-col items-center justify-center min-h-full cursor-pointer transition-all duration-500 bg-orange-500 z-[25] ${
            activePanel === 'three' ? 'w-[88%] left-0' : 'w-[4%] left-0'
          }`}
        >
          {activePanel === 'three' ? (
                <>
                  <About />
                </>
              ) : (
                <p className="transform rotate-90">ONE</p>
              )}
        </div>
      </div>
    </div>
  );
  */}
}


export default App;
