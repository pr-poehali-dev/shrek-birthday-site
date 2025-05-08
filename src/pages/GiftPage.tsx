import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import MusicPlayer from "@/components/MusicPlayer";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

const GiftPage: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [giftShown, setGiftShown] = useState(false);

  // Функция для создания эффекта конфетти
  const launchConfetti = () => {
    if (typeof window.confetti !== "function") {
      console.warn("Конфетти не загружены");
      return;
    }

    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval: any = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // Запускаем конфетти с двух сторон
      window.confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });

      window.confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  const handleOpenGift = () => {
    setIsDialogOpen(true);
    launchConfetti();
    setGiftShown(true);
  };

  const handleOpenPDF = () => {
    // В реальном проекте тут будет ссылка на PDF документ
    alert("Здесь откроется PDF с подарком!");
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-green-700 relative">
      <div className="absolute inset-0 z-0">
        {/* Болотные элементы фона */}
        <div className="absolute w-40 h-40 bg-green-800 rounded-full opacity-40 top-60 left-20 blur-xl"></div>
        <div className="absolute w-60 h-60 bg-yellow-900 rounded-full opacity-30 bottom-40 right-20 blur-xl"></div>
        <div className="absolute w-32 h-32 bg-green-600 rounded-full opacity-50 top-1/3 right-1/3 blur-xl"></div>

        {/* Пузырьки болота */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-green-200 rounded-full opacity-40 animate-bubble"
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              bottom: "-20px",
              animationDuration: `${Math.random() * 10 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <NavBar />

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center font-[cursive]">
          Твой подарок ждёт!
        </h1>

        <div className="text-xl text-white text-center mb-12 bg-green-800/50 max-w-2xl mx-auto p-6 rounded-xl backdrop-blur-sm">
          <p>Нажми на коробку, чтобы открыть свой особенный подарок!</p>
        </div>

        {/* Анимированная коробка подарка */}
        <div className="flex justify-center mb-12">
          <button
            onClick={handleOpenGift}
            className={`relative transition-all duration-700 transform ${giftShown ? "scale-110" : "hover:scale-105 animate-float"}`}
            aria-label="Открыть подарок"
          >
            <div className="relative">
              {/* Коробка подарка */}
              <div className="w-64 h-64 bg-red-600 rounded-lg shadow-2xl relative overflow-hidden">
                {/* Ленточка */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-yellow-400"></div>
                <div className="absolute top-0 bottom-0 left-0 right-0 m-auto w-6 h-full bg-yellow-400"></div>
                <div className="absolute top-0 left-0 right-0 bottom-0 m-auto w-full h-6 bg-yellow-400"></div>

                {/* Эффект блеска */}
                <div className="absolute top-2 right-8 w-4 h-4 bg-white rounded-full opacity-70"></div>
                <div className="absolute top-10 right-12 w-2 h-2 bg-white rounded-full opacity-50"></div>
              </div>

              {/* Брызги воды */}
              {giftShown
                ? [...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute bg-blue-200 rounded-full animate-splash"
                      style={{
                        width: `${Math.random() * 15 + 5}px`,
                        height: `${Math.random() * 15 + 5}px`,
                        left: `${Math.random() * 100}%`,
                        bottom: "0",
                        animationDuration: `${Math.random() * 1 + 0.5}s`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))
                : null}
            </div>
          </button>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-green-800 text-white border-yellow-500">
          <DialogHeader>
            <DialogTitle className="text-3xl text-center text-yellow-400 font-[cursive]">
              Ура! Подарок открыт!
            </DialogTitle>
            <DialogDescription className="text-white text-lg text-center">
              Шрек и его друзья приготовили для тебя особенный сюрприз!
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center my-6">
            <img
              src="https://i.imgur.com/3RVBcQH.png"
              alt="Шрек"
              className="h-32 object-contain"
            />
          </div>
          <DialogFooter className="flex justify-center">
            <Button
              onClick={handleOpenPDF}
              className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold"
            >
              <Icon name="Gift" className="mr-2 h-5 w-5" />
              Открыть подарок
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <MusicPlayer />
    </div>
  );
};

export default GiftPage;
