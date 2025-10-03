import React, { useState, useEffect, useRef } from 'react';

const TestimonialsPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const testimonialsRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      author: "Кл. Дарья Ессентуки",
      text: "Получили товар, качество на высшем уровне, будем и дальше с вами сотрудничать, большое спасибо",
      time: "14:54",
      theme: "dark",
      avatar: "👩‍💼"
    },
    {
      id: 2,
      author: "Татьяна Пермь",
      text: "Девочки привет\nТовар пришёл супер 👍👍👍👍\nИ быстро 👍\nНа следующей неделе может удастся нам куртки эти взять, если будут ещё)))\nСпасибо вам за работу! 💐💐💐",
      time: "16:29",
      theme: "light",
      avatar: "👩‍🎓"
    },
    {
      id: 3,
      author: "Кл Любовь Петропавловск",
      text: "Девочки, добрый день!\nСпасибо Вам за работу. Сегодня получила товар, отличного качества!\nОтдельная благодарность Тахмине 🌹🌹😍👏",
      time: "17:09",
      theme: "dark",
      avatar: "👩‍❤️‍👨"
    },
    {
      id: 4,
      author: "Анонимный клиент",
      text: "здравствуй, товар вчера получила 👍 все супер. Уже успела продать) спасибо большое 🌹\nЗдравствуйте 😊",
      time: "15:59",
      theme: "light",
      avatar: "🙂"
    }
  ];

  // Автопрокрутка
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Верхняя часть */}
        <div className="text-center mb-16">
          <div className="relative">
            {/* Главный заголовок */}
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                «Качество на высшем уровне,
              </span>
              <br />
              <span className="text-gray-800">
                будем и дальше с Вами сотрудничать»
              </span>
            </h1>
            
            {/* Подзаголовок */}
            <div className="flex justify-end mb-8">
              <div className="w-full md:w-2/3 lg:w-1/2">
                <p className="text-xl md:text-2xl text-pink-600 font-medium mb-6">
                  Вот что пишут наши клиенты после знакомства с нами
                </p>
                
                {/* Кнопка */}
                <button
                  onClick={nextTestimonial}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Листать отзывы →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя часть - отзывы */}
        <div className="relative">
          {/* Основной отзыв */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transform transition-all duration-500 ${
                  index === currentTestimonial
                    ? 'scale-105 opacity-100 z-10'
                    : 'scale-95 opacity-40'
                }`}
              >
                <div
                  className={`rounded-3xl p-6 shadow-2xl border-2 ${
                    testimonial.theme === 'dark'
                      ? 'bg-gray-900 text-white border-gray-700'
                      : 'bg-white text-gray-800 border-gray-200'
                  } transition-all duration-300 hover:shadow-2xl`}
                >
                  {/* Заголовок чата */}
                  <div className={`flex items-center justify-between mb-4 pb-3 border-b ${
                    testimonial.theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{testimonial.avatar}</div>
                      <div>
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className={`text-sm ${
                          testimonial.theme === 'dark' ? 'text-pink-400' : 'text-pink-600'
                        }`}>
                          онлайн
                        </div>
                      </div>
                    </div>
                    <div className={`text-sm ${
                      testimonial.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {testimonial.time}
                    </div>
                  </div>

                  {/* Сообщение */}
                  <div className="space-y-3">
                    {testimonial.text.split('\n').map((line, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-2xl max-w-xs ${
                          testimonial.theme === 'dark'
                            ? 'bg-gray-800 text-white'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {line}
                      </div>
                    ))}
                  </div>

                  {/* Индикатор набора сообщения */}
                  <div className={`flex items-center space-x-1 mt-4 ${
                    testimonial.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-current rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-current rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    <span className="text-sm ml-2">печатает...</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Навигация */}
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-gray-700"
            >
              ←
            </button>
            
            {/* Индикаторы */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-pink-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-gray-700"
            >
              →
            </button>
          </div>
        </div>

        {/* Дополнительная статистика */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">500+</div>
              <div className="text-gray-600">довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">98%</div>
              <div className="text-gray-600">положительных отзывов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">24/7</div>
              <div className="text-gray-600">поддержка клиентов</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;