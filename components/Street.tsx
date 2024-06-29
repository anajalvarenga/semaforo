import React, { useEffect, useState } from 'react';

import Car from './Car';

const colors = ['bg-black', 'bg-white', 'bg-slate-500', 'bg-red-500', 'bg-orange-500', 'bg-amber-500', 'bg-yellow-500', 'bg-lime-500', 'bg-green-500', 'bg-emerald-500', 'bg-teal-500', 'bg-cyan-500', 'bg-sky-500', 'bg-blue-500', 'bg-indigo-500', 'bg-violet-500', 'bg-purple-500', 'bg-fuchsia-500', 'bg-pink-500', 'bg-rose-500']

const Street = ({ numberOfCars }: { numberOfCars: number }) => {
  const [cars, setCars] = useState([
    { color: 'bg-red-500', position: -50, speed: 5 },
    { color: 'bg-blue-500', position: -87, speed: 4 },
    { color: 'bg-green-500', position: -100, speed: 6 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCars((prevCars) =>
        prevCars.map((car) => ({
          ...car,
          position: (car.position + 1) >= 100 ? -50 : (car.position + 1) % 100,
        }))
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

//   useEffect(() => {
//     // const newCars = []
//     // for (let i = 0; i < numberOfCars; i++) {
//     //     newCars.push({
//     //         color: colors[Math.floor(Math.random() * (19))],
//     //         position: -20 * i,
//     //         speed: 5
//     //     })
//     // }
//     // setCars(newCars);

//     const interval = setInterval(() => {
//         setCars((prevCars) =>
//           prevCars.map((car) => ({
//             ...car,
//             position: (car.position + 10) % 100,
//           }))
//         );
//       }, 1000);
  
//       return () => clearInterval(interval);
//   }, [numberOfCars]);

  return (
    <div className="relative w-full h-20 bg-gray-600 overflow-hidden mt-4">
      {cars.map((car, index) => (
        <Car key={index} color={car.color} position={car.position} speed={car.speed} />
      ))}
      <div className="absolute w-full h-1 bg-yellow-500 top-1/2 transform -translate-y-1/2"></div>
    </div>
  );
};

export default Street;
