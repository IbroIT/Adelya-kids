import React, { useState, useEffect } from 'react';

const EpicProductPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const steps = [
    {
      id: 1,
      title: "Выбор товара",
      description: "Вы можете выбрать готовые позиции из нашего каталога или написать свои предпочтения по товару.",
      icon: "🛒"
    },
    {
      id: 2,
      title: "Фото и видео",
      description: "Находим товар и отправляем вам фото и видео. По необходимости можем показать одежду на видео-звонке.",
      icon: "📸"
    },
    {
      id: 3,
      title: "Всё прозрачно",
      description: "Байер заполняет счёт-фактуру, где указано количество изделий и стоимость.",
      icon: "📋"
    },
    {
      id: 4,
      title: "Маркировка одежды",
      description: "По необходимости предоставляем услуги по маркировке одежды.",
      icon: "🏷️"
    },
    {
      id: 5,
      title: "Сбор товара",
      description: "Собираем товар и готовим к отправке. Отправляем вам видео собранного товара.",
      icon: "📦"
    },
    {
      id: 6,
      title: "Доставка",
      description: "Отправляем доставку транспортной компанией по вашему адресу.",
      icon: "🚚"
    }
  ];

  const products = [
    {
      id: 1,
      name: "Сиреневое платье",
      description: "С короткими объёмными рукавами",
      color: "bg-purple-200",
      image: "💜"
    },
    {
      id: 2,
      name: "Синий костюм",
      description: "С белыми декоративными вставками",
      color: "bg-blue-200",
      image: "👕"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Автоматическая смена шагов
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id='process' className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Заголовок страницы */}
        <div className={`text-center lg:text-left mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
            Вы получите нужный вам товар<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              в необходимом количестве
            </span>
          </h1>
          
          {/* Подзаголовок */}
          <div className="inline-block relative">
            <p className="text-lg lg:text-xl text-pink-600 font-medium mb-2">
              На рынке есть много продавцов, которые могут отправить не тот товар
            </p>
            <p className="text-lg lg:text-xl text-pink-600 font-semibold">
              И вот как мы это решаем
            </p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-pink-500 transform scale-x-0 transition-transform duration-500 delay-300 rounded-full animate-underline"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Левая колонка - Шаги процесса */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative p-6 rounded-2xl border-2 transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                  activeStep === index
                    ? 'border-pink-500 bg-white shadow-2xl shadow-pink-100'
                    : 'border-pink-200 bg-white/80 shadow-lg'
                } ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Номер шага с анимацией */}
                <div className={`absolute -left-4 -top-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 scale-110 shadow-lg'
                    : 'bg-pink-400'
                }`}>
                  {step.icon}
                </div>
                
                <div className="ml-8">
                  <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                    activeStep === index ? 'text-pink-700' : 'text-gray-800'
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Индикатор прогресса */}
                {activeStep === index && (
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-pulse"></div>
                )}
              </div>
            ))}
          </div>

          {/* Правая колонка - Визуальная часть */}
          <div className="relative">
            <div className="bg-gradient-to-br from-pink-400 to-purple-600 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
              
              {/* Декоративные элементы */}
              <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white/30 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-white/30 rounded-full animate-bounce"></div>
              
              {/* Сетка линий */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
              </div>

              {/* Продукты */}
              <div className="relative z-10 grid grid-cols-1 gap-6">
                {products.map((product, index) => (
                  <div
                    key={product.id}
                    className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 transform transition-all duration-500 ${
                      activeStep === index * 3 ? 'scale-105 rotate-1' : 'scale-100'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl ${product.color} shadow-lg`}>
                        {product.image}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-lg">{product.name}</h3>
                        <p className="text-gray-600 text-sm">{product.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Активный шаг индикатор */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-white font-semibold">Текущий шаг:</span>
                  <span className="text-white font-bold">{steps[activeStep]?.title}</span>
                </div>
              </div>
            </div>

            {/* Плавающие элементы */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Прогресс бар */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="flex justify-between mb-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-pink-500 scale-125'
                    : 'bg-pink-200 hover:bg-pink-300'
                }`}
              />
            ))}
          </div>
          <div className="w-full bg-pink-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-pink-400 to-purple-500 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Глобальные анимации */}
      <style jsx>{`
        @keyframes underline {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .animate-underline {
          animation: underline 0.5s ease-out forwards;
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
};

export default EpicProductPage;