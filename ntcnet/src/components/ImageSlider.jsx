import React, { useEffect, useState } from 'react';

const images = [
  'https://cdn.pixabay.com/photo/2022/03/22/10/27/ethereum-7084736_640.jpg',
  'https://cdn.pixabay.com/photo/2020/06/10/11/19/coin-5282271_640.jpg',
  'https://cdn.pixabay.com/photo/2019/10/30/19/53/cryptocurrency-4590430_640.jpg',
  'https://cdn.pixabay.com/photo/2021/11/20/14/51/btc-6812103_640.jpg',
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 3000); // change image every 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl h-44 overflow-hidden rounded-xl mx-auto shadow-lg">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
