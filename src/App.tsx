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
}

export default App;
