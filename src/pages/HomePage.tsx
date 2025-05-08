
import React from 'react';
import NavBar from '@/components/NavBar';
import MusicPlayer from '@/components/MusicPlayer';

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
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          {/* Цифра 20 в стиле Шрека */}
          <div className="relative">
            <div className="text-[15rem] font-bold text-green-500 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] mb-8 flex relative">
              <span>2</span>
              <span>0</span>
              
              {/* Уши Шрека */}
              <div className="absolute -top-20 -left-12 w-24 h-32 bg-green-500 rounded-tl-[50%] rounded-tr-[50%] transform rotate-[-30deg]"></div>
              <div className="absolute -top-20 right-0 w-24 h-32 bg-green-500 rounded-tl-[50%] rounded-tr-[50%] transform rotate-[30deg]"></div>
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

          {/* Персонажи */}
          <div className="flex justify-center items-end mt-8 flex-wrap gap-4">
            <img 
              src="https://i.imgur.com/3RVBcQH.png" 
              alt="Шрек" 
              className="h-48 object-contain animate-bounce" 
              style={{animationDuration: "3s"}}
            />
            <img 
              src="https://i.imgur.com/JcF9WJ2.png" 
              alt="Осел" 
              className="h-40 object-contain animate-bounce" 
              style={{animationDuration: "2.5s", animationDelay: "0.3s"}}
            />
            <img 
              src="https://i.imgur.com/tL3rXl0.png" 
              alt="Фиона" 
              className="h-44 object-contain animate-bounce" 
              style={{animationDuration: "3.5s", animationDelay: "0.7s"}}
            />
            <img 
              src="https://i.imgur.com/SskSsyM.png" 
              alt="Кот в сапогах" 
              className="h-36 object-contain animate-bounce" 
              style={{animationDuration: "3.2s", animationDelay: "0.5s"}}
            />
          </div>
        </div>
      </div>
      
      <MusicPlayer />
    </div>
  );
};

export default HomePage;
