// src/components/PricingSection.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, TrendingDown, Check, Star, Zap } from 'lucide-react';

const PricingSection = () => {
  const [hoveredRow, setHoveredRow] = useState(null);

  const pricingPlans = [
    {
      range: "от 10 000 до 15 999",
      currency: "Кыргызских сомов",
      price: "1 000",
      type: "фиксированная",
      color: "from-pink-400 to-rose-500",
      popular: false,
      features: ["Базовый подбор", "Консультация", "Помощь с заказом"]
    },
    {
      range: "от 16 000 до 25 999",
      currency: "Кыргызских сомов",
      price: "1 500",
      type: "фиксированная",
      color: "from-rose-400 to-pink-500",
      popular: false,
      features: ["Расширенный подбор", "Приоритетная поддержка", "Анализ рынка"]
    },
    {
      range: "от 26 000 до 35 999",
      currency: "Кыргызских сомов",
      price: "2 500",
      type: "фиксированная",
      color: "from-pink-500 to-fuchsia-500",
      popular: true,
      features: ["Персональный менеджер", "Экспресс-доставка", "Гарантия качества"]
    },
    {
      range: "от 36 000 до 45 999",
      currency: "Кыргызских сомов",
      price: "3 500",
      type: "фиксированная",
      color: "from-fuchsia-500 to-purple-500",
      popular: false,
      features: ["VIP поддержка", "Выгодные условия", "Персональные скидки"]
    },
    {
      range: "от 46 000 до 65 999",
      currency: "Кыргызских сомов",
      price: "4 500",
      type: "фиксированная",
      color: "from-purple-500 to-violet-500",
      popular: false,
      features: ["Премиум сервис", "Эксклюзивные поставщики", "Максимальный приоритет"]
    },
    {
      range: "от 140 000",
      currency: "Кыргызских сомов",
      price: "4%",
      type: "процентная",
      color: "from-violet-500 to-indigo-500",
      popular: false,
      features: ["Индивидуальные условия", "Прямые контракты", "Специальные цены"]
    },
    {
      range: "от 300 000",
      currency: "Кыргызских сомов",
      price: "3%",
      type: "процентная",
      color: "from-indigo-500 to-purple-600",
      popular: false,
      features: ["Оптимизация логистики", "Бесплатная доставка", "Персональные условия"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 30, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const hoverVariants = {
    hover: {
      scale: 1.02,
      y: -5,
      boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Исправленный фон для адаптива */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Основной градиентный фон */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
        
        {/* Анимированные элементы - увеличены для мобильных */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -right-20 w-40 h-40 md:w-60 md:h-60 bg-pink-100 rounded-full opacity-30"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.1, 1, 1.1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -left-20 w-60 h-60 md:w-80 md:h-80 bg-purple-100 rounded-full opacity-30"
        />
        
        {/* Дополнительные статические элементы для равномерного покрытия */}
        <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-pink-50 rounded-full opacity-20" />
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-purple-50 rounded-full opacity-20" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gray-100 rounded-full opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Стоимость наших услуг
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Прозрачная система комиссий, которая становится выгоднее с ростом суммы заказа
          </motion.p>
        </motion.div>

        {/* Основная таблица */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Заголовки колонок */}
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 mb-8">
            <div className="lg:col-span-3">
              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-3 p-4 bg-white rounded-2xl shadow-lg border border-gray-100"
              >
                <Calculator className="w-8 h-8 text-pink-500" />
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Сумма заказа</h3>
                  <p className="text-gray-600 text-sm">Диапазон стоимости товаров</p>
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-2">
              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-3 p-4 bg-white rounded-2xl shadow-lg border border-gray-100"
              >
                <TrendingDown className="w-8 h-8 text-purple-500" />
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Наша комиссия</h3>
                  <p className="text-gray-600 text-sm">Стоимость услуг</p>
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-2">
              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-3 p-4 bg-white rounded-2xl shadow-lg border border-gray-100"
              >
                <Zap className="w-8 h-8 text-yellow-500" />
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Преимущества</h3>
                  <p className="text-gray-600 text-sm">Что включено</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Строки с тарифами */}
          <div className="space-y-4">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index}
                whileHover="hover"
                onHoverStart={() => setHoveredRow(index)}
                onHoverEnd={() => setHoveredRow(null)}
                className={`relative ${
                  plan.popular ? 'ring-2 ring-yellow-400' : ''
                }`}
              >
                <motion.div
                  variants={hoverVariants}
                  className={`grid grid-cols-1 lg:grid-cols-7 gap-6 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 ${
                    hoveredRow === index ? 'bg-gray-50' : ''
                  }`}
                >
                  {/* Бейдж популярного тарифа */}
                  {plan.popular && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                    >
                      <div className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                        <Star className="w-3 h-3 fill-current" />
                        <span>САМЫЙ ВЫБИРАЕМЫЙ</span>
                      </div>
                    </motion.div>
                  )}

                  {/* Сумма заказа */}
                  <div className="lg:col-span-3 flex items-center">
                    <motion.div
                      animate={hoveredRow === index ? { x: 10 } : { x: 0 }}
                      className="flex-1"
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {plan.range}
                      </h3>
                      <p className="text-gray-600">{plan.currency}</p>
                    </motion.div>
                  </div>

                  {/* Комиссия */}
                  <div className="lg:col-span-2 flex items-center">
                    <motion.div
                      animate={hoveredRow === index ? { scale: 1.1 } : { scale: 1 }}
                      className={`w-20 h-20 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                    >
                      {plan.price}
                    </motion.div>
                    <div className="ml-4">
                      <div className="text-sm text-gray-600">{plan.type} комиссия</div>
                      {plan.type === "процентная" && (
                        <div className="text-xs text-gray-500">от суммы заказа</div>
                      )}
                    </div>
                  </div>

                  {/* Преимущества */}
                  <div className="lg:col-span-2">
                    <div className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                          className="flex items-center space-x-2 text-sm"
                        >
                          <Check className="w-4 h-4 text-pink-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Декоративная линия между строками */}
                {index < pricingPlans.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="h-0.5 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full mx-6 mt-4 transform origin-left"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        

        
      </div>
    </section>
  );
};

export default PricingSection;