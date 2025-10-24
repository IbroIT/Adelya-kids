import React, { useState, useEffect } from 'react'; 
import { 
  MessageCircle, 
  Phone, 
  Shield, 
  ArrowRight,
  MessageSquare,
  Send,
  Instagram
} from 'lucide-react';

const ContactCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const ctaButtons = [
    {
      id: 1,
      platform: 'WhatsApp',
      icon: MessageCircle,
      url: '#',
      color: '#25D366',
      description: 'Быстрые ответы'
    },
    {
      id: 2,
      platform: 'Telegram',
      icon: Send,
      url: '#',
      color: '#0088cc',
      description: 'Мгновенные сообщения'
    },
    {
      id: 3,
      platform: 'Instagram',
      icon: Instagram,
      url: '#',
      color: '#E4405F',
      description: 'Прямые сообщения'
    }
  ];

  return (
    <section id='contact' className="relative bg-gradient-to-r from-pink-500 to-purple-600 overflow-hidden py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      
      {/* Декоративные органические линии - скрыты на мобильных */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {/* Левая органическая линия */}
        <div className="absolute left-0 top-0 w-1/4 h-full opacity-20">
          <svg viewBox="0 0 304 374" fill="none" className="w-full h-full">
            <path 
              d="M304 42C254 42 200 80 150 120C100 160 50 200 0 250V416H304V42Z" 
              stroke="white" 
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        
        {/* Правая органическая линия */}
        <div className="absolute right-0 top-0 w-1/4 h-full opacity-20">
          <svg viewBox="0 0 377 325" fill="none" className="w-full h-full">
            <path 
              d="M73 38C123 38 177 76 227 116C277 156 327 196 377 246V363H0V90C25 64 48 38 73 38Z" 
              stroke="white" 
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Основной контент */}
        <div className="text-center mb-8 sm:mb-12">
          {/* Главный заголовок */}
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Не нашли ответа
            <br />
            на свой вопрос?
          </h2>

          {/* Подзаголовок */}
          <p className={`text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-12 font-light transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Напишите нам в мессенджерах
          </p>

          {/* CTA кнопки */}
          <div className={`flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {ctaButtons.map((button, index) => (
              <a
                key={button.id}
                href={button.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-transparent border-2 border-white/90 text-white w-full sm:w-80 md:w-96 h-16 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-between px-4 sm:px-6 md:px-8 transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <button.icon 
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" 
                      style={{ color: button.color }}
                    />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm sm:text-base md:text-lg whitespace-nowrap">
                      {button.platform}
                    </div>
                    <div className="text-white/70 text-xs sm:text-sm hidden sm:block">
                      {button.description}
                    </div>
                  </div>
                </div>
                
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                
                {/* Эффект при наведении */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Футер */}
        <div className={`flex flex-col md:flex-row justify-between items-center pt-6 sm:pt-8 border-t border-white/20 transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Логотип и подпись слева */}
          <div className="flex items-center gap-3 sm:gap-4 mb-4 md:mb-0 order-2 md:order-1">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-base md:text-lg">Dk</span>
            </div>
            <div className="text-white">
              <div className="font-bold text-base sm:text-lg md:text-lg">Adelya kids</div>
              <div className="text-white/80 text-xs sm:text-sm">Байерская компания в Бишкеке</div>
            </div>
          </div>

          {/* Политика конфиденциальности по центру */}
          <div className="mb-4 md:mb-0 order-1 md:order-2">
            <a 
              href="/privacy" 
              className="text-white/60 hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm sm:text-base"
            >
              <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="whitespace-nowrap">Политика конфиденциальности</span>
            </a>
          </div>

          {/* Телефон и консультация справа */}
          <div className="text-center md:text-right order-3">
            <a 
              href="tel:+996773988444" 
              className="text-white font-semibold text-base sm:text-lg hover:text-white/80 transition-colors duration-300 block mb-1 sm:mb-2 whitespace-nowrap"
            >
              +996 773 988 444
            </a>
            <a 
              href="/consultation" 
              className="text-white/80 hover:text-white transition-colors duration-300 underline underline-offset-4 flex items-center gap-2 justify-center md:justify-end text-sm sm:text-base"
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Получить консультацию</span>
            </a>
          </div>
        </div>

        {/* Дополнительные декоративные элементы - скрыты на мобильных */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-xl hidden md:block" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-xl hidden md:block" />
      </div>

      {/* Стили для улучшения контраста */}
      <style jsx>{`
        /* Улучшение контраста для доступности */
        @media (max-width: 768px) {
          section {
            background: linear-gradient(to right, #EC4899, #8B5CF6);
          }
        }

        /* Оптимизация для очень маленьких экранов */
        @media (max-width: 360px) {
          .text-3xl {
            font-size: 1.75rem;
          }
          .text-lg {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

// Дополнительный компонент для улучшения доступности
const AccessibilityOverlay = () => (
  <div className="sr-only">
    <h1>Контактная информация Adelya kids</h1>
    <p>Свяжитесь с нами через мессенджеры: WhatsApp, Telegram, Instagram</p>
    <p>Телефон: +996 773 988 444</p>
    <p>Компания: Adelya kids - Байерская компания в Бишкеке</p>
  </div>
);

export default function EnhancedContactCTA() {
  return (
    <>
      <AccessibilityOverlay />
      <ContactCTA />
    </>
  );
}