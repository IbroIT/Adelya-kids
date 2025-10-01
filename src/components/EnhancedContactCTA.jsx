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
      url: 'https://wa.me/996773988444',
      color: '#25D366',
      description: 'Быстрые ответы'
    },
    {
      id: 2,
      platform: 'Telegram',
      icon: Send,
      url: 'https://t.me/dordoykids',
      color: '#0088cc',
      description: 'Мгновенные сообщения'
    },
    {
      id: 3,
      platform: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/dordoykids',
      color: '#E4405F',
      description: 'Прямые сообщения'
    }
  ];

  return (
    <section className="relative bg-green-500 overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Декоративные органические линии */}
      <div className="absolute inset-0 pointer-events-none">
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
        <div className="text-center mb-12">
          {/* Главный заголовок */}
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Не нашли ответа
            <br />
            на свой вопрос?
          </h2>

          {/* Подзаголовок */}
          <p className={`text-xl md:text-2xl text-white/90 mb-12 font-light transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Напишите нам в мессенджерах
          </p>

          {/* CTA кнопки */}
          <div className={`flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 mb-16 transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {ctaButtons.map((button, index) => (
              <a
                key={button.id}
                href={button.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-transparent border-2 border-white/90 text-white w-full md:w-96 h-20 rounded-2xl flex items-center justify-between px-8 transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <button.icon 
                      className="w-6 h-6 text-white" 
                      style={{ color: button.color }}
                    />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-lg">
                      Напишите в {button.platform}
                    </div>
                    <div className="text-white/70 text-sm">
                      {button.description}
                    </div>
                  </div>
                </div>
                
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                
                {/* Эффект при наведении */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Футер */}
        <div className={`flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20 transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Логотип и подпись слева */}
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">Dk</span>
            </div>
            <div className="text-white">
              <div className="font-bold text-lg">Dordoykids</div>
              <div className="text-white/80 text-sm">Байерская компания в Бишкеке</div>
            </div>
          </div>

          {/* Политика конфиденциальности по центру */}
          <div className="mb-6 md:mb-0">
            <a 
              href="/privacy" 
              className="text-white/60 hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              <Shield className="w-4 h-4" />
              Политика конфиденциальности
            </a>
          </div>

          {/* Телефон и консультация справа */}
          <div className="text-right">
            <a 
              href="tel:+996773988444" 
              className="text-white font-semibold text-lg hover:text-white/80 transition-colors duration-300 block mb-2"
            >
              +996 773 988 444
            </a>
            <a 
              href="/consultation" 
              className="text-white/80 hover:text-white transition-colors duration-300 underline underline-offset-4 flex items-center gap-2 justify-end"
            >
              <Phone className="w-4 h-4" />
              Получить консультацию
            </a>
          </div>
        </div>

        {/* Дополнительные декоративные элементы */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Плавающие частицы */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Стили для анимаций */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(-10px) rotate(240deg);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        /* Улучшение контраста для доступности */
        @media (max-width: 768px) {
          section {
            background: #6CAD4D; /* Немного темнее зеленый для мобильных */
          }
        }
      `}</style>
    </section>
  );
};

// Дополнительный компонент для улучшения доступности
const AccessibilityOverlay = () => (
  <div className="sr-only">
    <h1>Контактная информация Dordoykids</h1>
    <p>Свяжитесь с нами через мессенджеры: WhatsApp, Telegram, Instagram</p>
    <p>Телефон: +996 773 988 444</p>
    <p>Компания: Dordoykids - Байерская компания в Бишкеке</p>
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