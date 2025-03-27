"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import CardDepoimento from "../sections/cardDepoimentos";

interface DepoimentoCarouselProps {
  depoimentos: {
    titulo: string;
    texto: string;
    // imgSrc: string;
    nome: string;
    atividade: string;
  }[];
}

const DepoimentoCarousel: React.FC<DepoimentoCarouselProps> = ({
  depoimentos,
}) => {
  const [currentDepoimento, setCurrentDepoimento] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentDepoimento((prevIndex) =>
      prevIndex === 0 ? depoimentos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = useCallback(() => {
    setCurrentDepoimento((prevIndex) =>
      prevIndex === depoimentos.length - 1 ? 0 : prevIndex + 1
    );
  }, [setCurrentDepoimento, depoimentos]);

  const handleDotClick = (index: number) => {
    setCurrentDepoimento(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        handleNext();
      }
    }, 5000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  const startDragging = (e: React.TouchEvent | React.MouseEvent) => {
    const startX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const onMove = (event: TouchEvent | MouseEvent) => {
      const moveX =
        "touches" in event ? event.touches[0].clientX : event.clientX;
      const diffX = startX - moveX;

      if (diffX > 50) {
        handleNext();
        cleanup();
      } else if (diffX < -50) {
        handlePrev();
        cleanup();
      }
    };

    const cleanup = () => {
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchend", cleanup);
      window.removeEventListener("mouseup", cleanup);
    };

    window.addEventListener("touchmove", onMove);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchend", cleanup);
    window.addEventListener("mouseup", cleanup);
  };

  return (
    <>
    <main className="w-full">
        <section className="relative w-full max-w-screen-xl mx-auto">
            <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10"
            >
            <Image
                src="/left.png"
                width={100}
                height={100}
                alt="left"
                className="hidden lg:block"
                style={{ scale: 0.35 }}
            />
            </button>
            <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10"
            >
            <Image
                src="/right.png"
                width={100}
                height={100}
                alt="right"
                className="hidden lg:block"
                style={{ scale: 0.35 }}
            />
            </button>

            {/* Seção do Carrossel */}
            <section
            className="relative overflow-hidden mx-auto w-full max-w-full h-[300px] md:h-[400px] rounded-lg border shadow-md"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={startDragging}
            onMouseDown={startDragging}
            ref={carouselRef}
            >
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentDepoimento * 100}%)` }}
            >
                {depoimentos.map((depoimento, index) => (
                <div
                    key={index}
                    className="min-w-full h-full flex items-center justify-center rounded-lg"
                >
                    <CardDepoimento {...depoimento} />
                </div>
                ))}
            </div>
            </section>

            {/* Dots de navegação */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {depoimentos.map((_, index) => (
                <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                    currentDepoimento === index ? "bg-gray-500" : "bg-gray-300/70"
                }`}
                onClick={() => handleDotClick(index)}
                />
            ))}
            </div>
        </section>
    </main>


    </>
  );
};

export default DepoimentoCarousel;