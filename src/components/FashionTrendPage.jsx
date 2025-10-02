import React, { useState, useEffect } from 'react';
import { ChevronRight, TrendingUp, RefreshCw, Sparkles } from 'lucide-react';

const FashionTrendPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Имитация данных о новых поступлениях
  const newArrivals = [
    { id: 1, name: 'Весенняя коллекция', days: 2 },
    { id: 2, name: 'Спортивные костюмы', days: 5 },
    { id: 3, name: 'Вечерние платья', days: 1 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
          
          {/* Левая часть - Текст и CTA */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            
            {/* Заголовок с анимацией */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-pink-600" />
                <span className="text-lg font-semibold text-gray-600 tracking-wide">
                  АКТУАЛЬНЫЕ ТРЕНДЫ 2024
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-pink-600 to-purple-500 bg-clip-text text-transparent">
                  Следим за
                </span>
                <br />
                <span className="bg-gradient-to-r from-pink-700 to-purple-600 bg-clip-text text-transparent">
                  трендами
                </span>
                <br />
                <span className="bg-gradient-to-r from-pink-600 to-purple-500 bg-clip-text text-transparent">
                  и отслеживаем
                </span>
                <br />
                <span className="relative">
                  <span className="bg-gradient-to-r from-pink-700 to-purple-600 bg-clip-text text-transparent">
                    популярные модели
                  </span>
                  <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-yellow-500" />
                </span>
              </h1>
            </div>

            {/* Подзаголовок */}
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light max-w-2xl">
              Каталог регулярно пополняется новыми и актуальными позициями на текущий сезон
            </p>

            {/* Статистика обновлений */}
            <div className="grid grid-cols-3 gap-4 py-6">
              {newArrivals.map((item, index) => (
                <div
                  key={item.id}
                  className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-pink-600">{item.days}</div>
                  <div className="text-sm text-gray-500 mt-1">дней назад</div>
                  <div className="text-xs font-medium text-gray-700 mt-2">{item.name}</div>
                </div>
              ))}
            </div>

            {/* Кнопка CTA */}
            <div>
              <button className="group relative bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold py-5 px-10 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                
                <div className="relative flex items-center justify-center gap-3">
                  <span className="text-lg">Перейти в каталог</span>
                  <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                
                {/* Эффект блеска */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute -inset-10 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:translate-x-40 transition-all duration-1000" />
                </div>
              </button>
              
              {/* Дополнительная информация под кнопкой */}
              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-gray-500">
                <RefreshCw className="w-4 h-4" />
                <span>Обновление каталога каждые 48 часов</span>
              </div>
            </div>

            {/* Преимущества */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                'Только сезонные коллекции',
                'Прямые поставки от брендов',
                'Эксклюзивные модели',
                'Быстрое обновление ассортимента'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-pink-500 rounded-full" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Правая часть - Визуальная часть */}
          <div className={`relative transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            
            {/* Основное изображение */}
            <div className="relative">
              {/* Декоративный фон */}
              <div className="absolute -inset-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl transform rotate-2" />
              <div className="absolute -inset-8 bg-gradient-to-br from-pink-50 to-purple-100 rounded-3xl transform -rotate-1" />
              
              {/* Контейнер изображения */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-700">
                <div className={`aspect-square bg-gradient-to-br from-gray-100 to-gray-200 transition-all duration-1000 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}>
                  
                  {/* Placeholder с анимацией загрузки */}
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-pink-600" />
                    </div>
                  )}
                  
                  {/* Имитация изображения с журналом CORREY */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm transform rotate-2 hover:rotate-0 transition-transform duration-500">
                      
                      {/* Обложка журнала */}
                      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white p-6 rounded-t-2xl">
                        <div className="text-2xl font-bold tracking-widest">CORREY</div>
                        <div className="text-sm text-pink-100 mt-1">Spring Collection 2024</div>
                      </div>
                      
                      {/* Содержимое журнала */}
                      <div className="p-6">
                        <div className="grid grid-cols-2 gap-4">
                          {/* Левая страница - футболка */}
                          <div className="space-y-2">
                            <div className="bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg aspect-square flex items-center justify-center">
                              <div className="w-3/4 h-3/4 bg-pink-400 rounded relative">
                                <div className="absolute top-2 left-2 right-2 h-4 bg-white rounded" />
                              </div>
                            </div>
                            <div className="text-xs text-gray-600">Classic T-Shirt</div>
                          </div>
                          
                          {/* Правая страница - шорты */}
                          <div className="space-y-2">
                            <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
                              <div className="w-3/4 h-3/4 bg-white border-2 border-gray-300 rounded" />
                            </div>
                            <div className="text-xs text-gray-600">Summer Shorts</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Декоративный медвежонок */}
                  <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full shadow-lg transform -rotate-12">
                    <div className="absolute inset-2 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full">
                      {/* Лицо медвежонка */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between">
                        <div className="w-2 h-2 bg-gray-800 rounded-full" />
                        <div className="w-2 h-2 bg-gray-800 rounded-full" />
                      </div>
                      <div className="absolute top-8 left-6 right-6 h-1 bg-gray-800 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Плавающие элементы */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-500 rounded-full" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-500 rounded-full" />
            
            {/* Текст на изображении */}
            <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform hover:scale-110 transition-all duration-300">
              <div className="text-sm font-semibold text-gray-900">New Arrivals</div>
              <div className="text-xs text-gray-600">Just in</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionTrendPage;