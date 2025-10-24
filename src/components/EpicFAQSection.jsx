import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EpicFAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqItems = [
    {
      question: "Сколько дней длится доставка?",
      answer: "Доставка занимает от 3 до 7 рабочих дней в зависимости от вашего региона. Экспресс-доставка доступна за дополнительную плату - 1-2 дня.",
      icon: "🚚",
      color: "from-blue-500 to-cyan-500"
    },
    {
      question: "Как производится оплата?",
      answer: "Оплата происходит после подтверждения заказа и проверки товара. Мы выставляем счет с полной детализацией заказа.",
      icon: "💳",
      color: "from-pink-500 to-purple-500"
    },
    {
      question: "Какие есть способы оплаты?",
      answer: "Мы принимаем банковские карты (Visa, MasterCard, МИР), банковские переводы, электронные кошельки (ЮMoney, Qiwi) и наличные при самовывозе.",
      icon: "💰",
      color: "from-yellow-500 to-orange-500"
    },
    {
      question: "Где посмотреть ассортимент?",
      answer: "Полный каталог товаров доступен в нашем мобильном приложении, на сайте в разделе 'Каталог', а также мы можем отправить вам актуальный прайс-лист по запросу.",
      icon: "📱",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const answerVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.3
      }
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Заголовок секции */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              «Сколько дней длится доставка?»
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 font-medium">
            Ответили на этот и другие часто задаваемые вопросы
          </p>
          
          {/* Декоративный элемент */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
          </div>
        </motion.div>

        {/* FAQ Аккордеон */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                activeIndex === index 
                  ? 'border-pink-300 shadow-2xl scale-105' 
                  : 'border-gray-200 hover:border-pink-200'
              }`}
            >
              {/* Вопрос */}
              <button
                onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between group"
              >
                <div className="flex items-center space-x-4">
                  {/* Иконка */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-lg shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  
                  {/* Текст вопроса */}
                  <div className="flex-1">
                    <h3 className={`text-lg lg:text-xl font-bold transition-colors duration-300 ${
                      activeIndex === index ? 'text-pink-700' : 'text-gray-800 group-hover:text-pink-600'
                    }`}>
                      {item.question}
                    </h3>
                  </div>
                </div>

                {/* Иконка плюс/минус */}
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white transition-all duration-500 transform ${
                  activeIndex === index ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
                }`}>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-500 ${
                      activeIndex === index ? 'rotate-45' : 'rotate-0'
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>

              {/* Ответ */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    variants={answerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="pl-16 border-l-2 border-pink-300">
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {item.answer}
                        </p>
                        
                        {/* Дополнительные детали */}
                        {index === 0 && (
                          <div className="mt-4 p-4 bg-pink-50 rounded-lg border border-pink-200">
                            <p className="text-sm text-pink-700 font-medium">
                              💡 <strong>Совет:</strong> Для ускорения доставки рекомендуем указывать полный адрес с индексом
                            </p>
                          </div>
                        )}
                        
                        {index === 2 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">💳 Банковские карты</span>
                            <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">🏦 Переводы</span>
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">📱 Электронные кошельки</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">💵 Наличные</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default EpicFAQSection;