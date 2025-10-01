import React, { useState, useEffect } from 'react';
import { 
  Lightbulb, 
  Ruler, 
  Scissors, 
  ShoppingCart, 
  Package, 
  CheckCircle,
  ArrowRight,
  Calendar,
  Users,
  BadgePercent
} from 'lucide-react';
import sewingMachine from '/src/assets/sewing-machine-svgrepo-com.svg';


const TailoringServices = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const steps = [
    {
      id: 1,
      icon: Lightbulb,
      title: "Ваша идея",
      description: "Отправьте фото или эскиз одежды, которую хотите произвести",
      details: "Принимаем любые форматы: скетчи, фото аналогичных моделей, технические задания",
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: 2,
      icon: Ruler,
      title: "Разработка лекал",
      description: "Создаём профессиональные лекала на основе вашей задумки",
      details: "Используем CAD-системы для точного проектирования и градации размеров",
      color: "from-blue-400 to-cyan-500"
    },
    {
      id: 3,
      icon: Scissors,
      title: "Создание тестового образца",
      description: "Шьём пробный образец и отправляем на утверждение",
      details: "Проверяем посадку, качество материалов и соответствие техническим требованиям",
      color: "from-green-400 to-emerald-500"
    },
    {
      id: 4,
      icon: ShoppingCart,
      title: "Закуп материалов",
      description: "Организуем закуп тканей и фурнитуры",
      details: "Работаем с проверенными поставщиками тканей, ниток, фурнитуры и упаковки",
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 5,
      icon: sewingMachine,
      title: "Пошив партии",
      description: "Отшиваем всю партию на основе утверждённого образца",
      details: "Современное оборудование и контроль качества на каждом этапе производства",
      color: "from-red-400 to-rose-500"
    },
    {
      id: 6,
      icon: Package,
      title: "Упаковка и доставка",
      description: "Упаковываем и отправляем транспортной компанией",
      details: "Индивидуальная упаковка, маркировка и организация логистики до вашего склада",
      color: "from-indigo-400 to-violet-500"
    }
  ];

  const features = [
    { icon: Users, text: "Детская, мужская и женская одежда" },
    { icon: Calendar, text: "Срок выполнения от 14 дней" },
    { icon: BadgePercent, text: "Гарантия качества" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Заголовок и вводная информация */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Предоставляем услуги по{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                оптовому пошиву одежды
              </span>
            </h2>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
              <div className="flex items-center gap-3 text-lg text-gray-600">
                <CheckCircle className="w-6 h-6 text-green-500" />
                Отшиваем детскую, мужскую и женскую одежду
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                  Минимальная партия — от 500 шт.
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping" />
              </div>
            </div>

            {/* Кнопка CTA */}
            <button className="group bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-12 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 mb-12">
              <div className="flex items-center gap-3">
                <span className="text-lg">Заказать пошив</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>

        {/* Особенности */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-xl">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">{feature.text}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Пошаговый процесс работы */}
        <div className="relative">
          {/* Декоративная линия процесса */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-200 to-emerald-200 transform -translate-x-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setActiveStep(index)}
                onClick={() => setActiveStep(index)}
              >
                <div
                  className={`h-full bg-white rounded-3xl p-8 shadow-xl border-2 transition-all duration-300 ${
                    activeStep === index
                      ? 'border-green-500 shadow-2xl scale-105'
                      : 'border-green-200 hover:border-green-300'
                  }`}
                >
                  
                  {/* Номер шага */}
                  <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg shadow-lg bg-gradient-to-r ${step.color} transform group-hover:scale-110 transition-transform duration-300`}>
                    {step.id}
                  </div>

                  {/* Иконка */}
                  <div className="mb-6 pt-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}>
                    {typeof step.icon === "string" ? (
                        <img src={step.icon} alt={step.title} className="w-8 h-8" />
                    ) : (
                        <step.icon className="w-8 h-8 text-white" />
                    )}
                    </div>

                  </div>

                  {/* Заголовок и описание */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Дополнительная информация */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    activeStep === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-sm text-gray-500 bg-gray-50 rounded-lg p-3">
                      {step.details}
                    </p>
                  </div>

                  {/* Индикатор активности */}
                  <div className={`w-full h-1 mt-4 bg-gradient-to-r ${step.color} rounded-full transform transition-all duration-300 ${
                    activeStep === index ? 'scale-x-100' : 'scale-x-0'
                  }`} />
                </div>

                {/* Соединительные линии для мобильной версии */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-green-200 to-emerald-200" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Почему выбирают нас?
              </h3>
              <ul className="space-y-3">
                {[
                  "Опыт работы в швейном производстве более 10 лет",
                  "Современное оборудование и технологии",
                  "Строгий контроль качества на всех этапах",
                  "Гибкие условия сотрудничества",
                  "Конфиденциальность и защита ваших идей"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                Рассчитать стоимость
              </h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Тип одежды
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Детская одежда</option>
                    <option>Мужская одежда</option>
                    <option>Женская одежда</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Количество (шт.)
                  </label>
                  <input 
                    type="number" 
                    min="500"
                    defaultValue="500"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300">
                  Получить расчёт
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Финальный CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-900 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Готовы начать сотрудничество?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Оставьте заявку и получите бесплатную консультацию нашего специалиста
            </p>
            <button className="bg-green-500 hover:bg-green-400 text-gray-900 font-bold py-4 px-12 rounded-2xl transform hover:scale-105 transition-all duration-300">
              Обсудить проект
            </button>
          </div>
        </div>
      </div>

      {/* Анимации */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default TailoringServices;