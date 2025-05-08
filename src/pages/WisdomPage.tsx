
import React from 'react';
import NavBar from '@/components/NavBar';
import MusicPlayer from '@/components/MusicPlayer';
import { Card, CardContent } from "@/components/ui/card";

// Массив цитат из болота
const quotes = [
  {
    text: "Знаешь, что я думаю? Я думаю, что ты просто не понимаешь, что такое настоящая дружба.",
    character: "Шрек",
    color: "green"
  },
  {
    text: "Каждый из нас имеет свои недостатки. Но именно они делают нас уникальными.",
    character: "Фиона",
    color: "teal"
  },
  {
    text: "Ты знаешь, Шрек, иногда нужно просто поверить в себя и идти вперед, даже если все вокруг говорят, что ты не сможешь.",
    character: "Осел",
    color: "gray"
  },
  {
    text: "Не важно, как ты выглядишь снаружи. Главное — это то, что у тебя внутри.",
    character: "Шрек",
    color: "green"
  },
  {
    text: "Любовь — это не просто чувства. Это выбор, который мы делаем каждый день.",
    character: "Фиона",
    color: "teal"
  },
  {
    text: "Я всегда говорил: если у тебя есть мечта, иди к ней! Даже если ты — осел!",
    character: "Осел",
    color: "gray"
  },
  {
    text: "Иногда лучше быть одному, чем с кем попало.",
    character: "Шрек",
    color: "green"
  },
  {
    text: "Люди так быстро растут... И цветочки, и птички, и гномики, и медведи, и вещи.",
    character: "Осел",
    color: "gray"
  },
  {
    text: "Пока не будете жить счастливо, не умрете!",
    character: "Шрек",
    color: "green"
  }
];

// Компонент карточки цитаты
const QuoteCard: React.FC<{quote: typeof quotes[0], index: number}> = ({ quote, index }) => {
  const bgColor = {
    green: "bg-green-700 hover:bg-green-600",
    teal: "bg-teal-700 hover:bg-teal-600",
    gray: "bg-gray-700 hover:bg-gray-600"
  }[quote.color];
  
  const delay = `${index * 0.1}s`;
  
  return (
    <Card className={`transition-all duration-300 transform hover:scale-105 animate-fadeIn ${bgColor}`}
          style={{ animationDelay: delay }}>
      <CardContent className="p-6">
        <p className="text-white text-lg mb-4">"{quote.text}"</p>
        <p className="text-white/80 text-right font-semibold">— {quote.character}</p>
      </CardContent>
    </Card>
  );
};

const WisdomPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-800 to-green-950 relative">
      <div className="absolute inset-0 z-0">
        {/* Болотные элементы фона */}
        <div className="absolute w-40 h-40 bg-green-700 rounded-full opacity-30 top-60 left-10 blur-xl"></div>
        <div className="absolute w-60 h-60 bg-green-600 rounded-full opacity-20 bottom-40 right-20 blur-xl"></div>
        <div className="absolute w-52 h-52 bg-yellow-900 rounded-full opacity-10 top-1/3 right-1/3 blur-xl"></div>
      </div>
      
      <NavBar />
      
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center font-[cursive]">
          Мудрость из болота
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quotes.map((quote, index) => (
            <QuoteCard key={index} quote={quote} index={index} />
          ))}
        </div>
      </div>
      
      <MusicPlayer />
    </div>
  );
};

export default WisdomPage;
