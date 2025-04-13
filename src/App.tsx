import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import About from './pages/About';
import Community from './pages/Community';
import Food from './pages/Food';
import Retail from './pages/RetailMarket';
import Menu from './pages/Menu';
import logo from './assets/logo.png';
import {motion} from 'framer-motion';

const PANEL_ROUTES: Record<string, string> = {
  home: '/',
  one: '/food',
  two: '/retail',
  three: '/community',
};

const ROUTE_PANELS: Record<string, string> = {
  '/': 'home',
  '/about': 'home',
  '/food': 'one',
  '/retail': 'two',
  '/community': 'three',
};

function AppContent() {
  const location = useLocation(); {/* get current URL path */}
  const navigate = useNavigate(); {/* programmatically changes the URL path */}
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 1024);
  const [activePanel, setActivePanel] = useState<string>('home');

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      const isNowDesktop = window.innerWidth >= 1024;
      setIsDesktop(isNowDesktop);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Sync active panel with route on mount or location change. Runs when from mobile to desktop
  useEffect(() => {
    const panel = ROUTE_PANELS[location.pathname]; {/* get the panel corresponding to the current URL path */}

    {/* check if isDesktop is true, if panel returns a usable value, and if the current activePanel is already the same */}
    if (isDesktop && panel && panel !== activePanel) {
      setActivePanel(panel);
    }
  }, [location.pathname, isDesktop]); {/* dependencies; effect triggered when one or both of these values change */}

  const handlePanelClick = (id: string) => {
    setActivePanel(id);
    localStorage.setItem('activePanel', id);
    window.scrollTo(0, 0);
    if (isDesktop) {
      navigate(PANEL_ROUTES[id]); {/* changes the current URL path on desktop to corresponding panel */}
    }
  };

  if (!isDesktop) {
    return (
      <Routes>
        <Route path="/" element={<div className="box-border h-screen w-full m-0 p-0"><About /></div>} />
        <Route path="/about" element={<div className="box-border h-screen w-full m-0 p-0"><About /></div>} />
        <Route path="/food" element={<div className="box-border h-screen w-full m-0 p-0"><Food /></div>} />
        <Route path="/retail" element={<div className="box-border h-screen w-full m-0 p-0"><Retail /></div>} />
        <Route path="/community" element={<div className="box-border h-screen w-full m-0 p-0"><Community /></div>} />
        <Route path="/menu" element={<div className="box-border h-screen w-full m-0 p-0"><Menu /></div>} />
      </Routes>
    );
  }

  // Desktop view
  return (
    <div className="relative h-full w-full m-0 p-0 overflow-x-hidden selection:bg-black selection:text-white">
      <div className="lg:flex w-full h-full hidden">
        {/* Home Panel */}
        <div
          className={`relative transition-all duration-500 ${activePanel === 'home' ? 'w-[88%] h-screen z-10 bg-white' : 'w-[4%]'}`}
          onClick={() => handlePanelClick('home')}
        >
          {activePanel === 'home' ? (
            <div className="scrollable h-full">
              <About />
            </div>
          ) : (
            <div className="w-16 h-fit mt-16 px-0.5 flex justify-center">
              <img className="w-full" src={logo} alt="Logo" />
            </div>
          )}
        </div>

        {/* Food Panel */}
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{     // smooth drop
          opacity: { duration: 1, ease: "easeOut" },   // synced fade
        }}
          className={`relative transition-all duration-500 bg-[#5ea3ec] ${activePanel === 'one' ? 'w-[88%] h-screen bg-[#5ea3ec] z-20' : 'w-[4%]'}`}
          onClick={() => handlePanelClick('one')}
        >
          {activePanel === 'one' ? (
            <div className="scrollable h-full"><Food /></div>
          ) : (
            <div className="h-full relative text-black">
              <div className="flex h-1/2 items-center justify-center w-full text-center text-sm">餐饮</div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 tracking-wider options-text text-xl">Food</div>
            </div>
          )}
        </motion.div>

        {/* Retail Panel */}
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{     // smooth drop
          opacity: { duration: 1, ease: "easeOut", delay: 0.3 },   // synced fade
        }}
          className={`relative transition-all duration-500 bg-[#f64444] ${activePanel === 'two' ? 'w-[88%] h-screen bg-[#f64444] z-30' : 'w-[4%]'}`}
          onClick={() => handlePanelClick('two')}
        >
          {activePanel === 'two' ? (
            <div className="scrollable h-full"><Retail /></div>
          ) : (
            <div className="h-full relative text-black">
              <div className="flex h-1/2 items-center justify-center w-full text-center text-sm">购物</div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 tracking-wider options-text text-xl">Retail</div>
            </div>
          )}
        </motion.div>

        {/* Community Panel */}
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{     // smooth drop
          opacity: { duration: 1, ease: "easeOut", delay: 0.6 },   // synced fade
        }}
          className={`relative transition-all duration-500 bg-[#ffb400] ${activePanel === 'three' ? 'w-[88%] h-screen bg-[#ffb400] z-40' : 'w-[4%]'}`}
          onClick={() => handlePanelClick('three')}
        >
          {activePanel === 'three' ? (
            <div className="scrollable h-full"><Community /></div>
          ) : (
            <div className="h-full relative text-black">
              <div className="flex h-1/2 items-center justify-center w-full text-center text-sm">文化</div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 tracking-wider options-text text-xl">Community</div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
