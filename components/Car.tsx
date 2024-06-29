// components/Car.tsx
import React from 'react';

interface CarProps {
  color: string;
  position: number;
  speed: number;
}

const Car: React.FC<CarProps> = ({ color, position }) => {
  return (
    <div
      className={`w-10 h-5 ${color} rounded transition-all duration-100`}
      style={{
        position: 'absolute',
        left: `${position}%`,
      }}
    ></div>
  );
};

export default Car;
