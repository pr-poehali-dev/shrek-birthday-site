import React from "react";
import NavBar from "@/components/NavBar";
import MusicPlayer from "@/components/MusicPlayer";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-700 overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        {/* Болотные элементы фона */}
        <div className="absolute w-40 h-40 bg-green-700 rounded-full opacity-50 top-20 left-20 blur-xl"></div>
        <div className="absolute w-60 h-60 bg-green-800 rounded-full opacity-40 bottom-40 right-20 blur-xl"></div>
        <div className="absolute w-32 h-32 bg-yellow-900 rounded-full opacity-30 bottom-10 left-1/4 blur-xl"></div>
      </div>

      <NavBar />

      <div className="container mx-auto px-4 py-20 pt-24 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          {/* Цифра 20 в стиле Шрека без ушей */}
          <div className="relative">
            <div className="text-[15rem] font-bold text-green-500 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] mb-8 flex relative">
              <span>2</span>
              <span>0</span>
            </div>
          </div>

          <h1 className="text-5xl font-bold text-white mb-6 font-[cursive] animate-bounce">
            С Днём Рождения!
          </h1>

          <div className="bg-green-600/70 p-8 rounded-xl backdrop-blur-sm max-w-2xl">
            <p className="text-xl text-white leading-relaxed text-center">
              Эй! В этот особенный день, все болото сбежалось поздравить тебя!
              Даже Шрек вылез из своего дома, а это о многом говорит!
            </p>
          </div>
        </div>

        {/* Добавляем изображение Шрека с друзьями */}
        <div className="flex justify-center mt-12">
          <img
            src="https://cdn.poehali.dev/files/6dddf07c-37c1-485d-bfcb-afa523376b5e.png"
            alt="Шрек и его друзья"
            className="max-w-full md:max-w-lg rounded-xl shadow-xl animate-fadeIn"
          />
        </div>
      </div>

      <MusicPlayer />
    </div>
  );
};

export default HomePage;
