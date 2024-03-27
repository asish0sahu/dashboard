import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 
import imag1 from '../assets/home1.jpg';
import imag2 from '../assets/home2.jpg';
import imag3 from '../assets/home3.jpg';

const TopView = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    imag1,
    imag2,
    imag3
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative">
      <div className="overflow-hidden relative w-full">
        <img
          src={images[currentImage]}
          alt={`Slide ${currentImage + 1}`}
          className="w-full"
        />
        <div className="absolute inset-y-0 left-0 flex justify-between w-full">
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded-l-md hover:bg-gray-700 focus:outline-none"
            onClick={prevImage}
          >
            <FaChevronLeft /> 
          </button>
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700 focus:outline-none"
            onClick={nextImage}
          >
            <FaChevronRight /> 
          </button>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 bg-opacity-1 text-white font-bold py-2 px-4 rounded mr-4 focus:outline-none">
          Invest Now
        </button>
        <button className="bg-green-500 hover:bg-green-700 bg-opacity-1 text-white font-bold py-2 px-4 rounded focus:outline-none">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default TopView;
