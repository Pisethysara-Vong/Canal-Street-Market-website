import { useState } from 'react';
import map from '../assets/map.png';

const HoverComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true); // Trigger function when mouse enters
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Trigger function when mouse leaves
  };

  const image = () => {
    return (
      <img
        src={map}
        alt="Example"
        style={{ width: '100px', height: '100px', position: 'absolute'}}
      />
    );
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='relative z-0'
    >
      {isHovered ? image() : null}
      <span className='relative z-2'>Hover me!</span>
    </div>
  );
};

export default HoverComponent;
