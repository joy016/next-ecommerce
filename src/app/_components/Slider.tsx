'use client';
import Link from 'next/link';
import { SHOP_NOW_BTN, slides } from '../../../constants/homepage';
import Image from 'next/image';
import { useState } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {slides.map((item) => (
          <div
            className="w-screen h-full flex flex-col gap-16 xl:flex-row"
            key={item.id}
          >
            <div className="h-1/2 xl:w-1/2 xl:h-full flex justify-center items-center flex-col text-center gap-8 2xl:gap-12">
              <h2 className="text-3xl">{item.description}</h2>
              <h1 className="text-7xl font-bold">{item.title}</h1>
              <Link href={item.url}>
                <button className="bg-black p-4 text-white rounded-md">
                  {SHOP_NOW_BTN}
                </button>
              </Link>
            </div>
            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
              <Image
                src={item.img}
                fill
                sizes="100%"
                className="object-cover"
                alt="Picture of the author"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute flex gap-4 m-auto left-1/2">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full cursor-pointer ring-1 ring-black flex justify-center items-center ${
              currentSlide === index && 'scale-150'
            }`}
            onClick={() => setCurrentSlide(index)}
            key={slide.id}
          >
            {currentSlide === index && (
              <div className="w-[6px] h-[6px] bg-black rounded-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
