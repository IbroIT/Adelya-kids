// src/components/WhyKyrgyzstan.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingDown, Clock, DollarSign, Package, Plane, Shirt } from 'lucide-react';

const WhyKyrgyzstan = () => {
  const advantages = [
    {
      icon: TrendingDown,
      title: "Низкая цена товара",
      description: "Цены минимум на 30% ниже по сравнению с рынками России",
      color: "from-pink-400 to-purple-500",
      delay: 0.3
    },
    {
      icon: Clock,
      title: "Быстрая доставка",
      description: "В среднем доставка занимает от 2 до 10 календарных дней",
      color: "from-purple-400 to-pink-500",
      delay: 0.5
    },
    {
      icon: DollarSign,
      title: "Низкая стоимость доставки",
      description: "Стоимость до 1$ за 1 кг",
      color: "from-pink-500 to-purple-600",
      delay: 0.7
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const floatVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const starVariants = {
    twinkle: {
      opacity: [0.3, 1, 0.3],
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-white via-pink-50 to-purple-100">
      {/* Единый задний фон для всех устройств */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Основной градиентный фон */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-50 to-purple-100" />
        
        {/* Декоративные элементы */}
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
          className="absolute -top-20 -right-20 w-32 h-32 md:w-40 md:h-40 bg-pink-200 rounded-full opacity-30"
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
          className="absolute -bottom-20 -left-20 w-48 h-48 md:w-60 md:h-60 bg-purple-200 rounded-full opacity-30"
        />
        
        {/* Дополнительные декоративные элементы для лучшего заполнения пространства */}
        <motion.div
          animate={{
            rotate: 180,
            scale: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-10 w-20 h-20 md:w-28 md:h-28 bg-pink-100 rounded-full opacity-40"
        />
        <motion.div
          animate={{
            rotate: -180,
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-8 w-16 h-16 md:w-24 md:h-24 bg-purple-100 rounded-full opacity-40"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          {/* Левая часть - Визуальные элементы и заголовок */}
          <div className="relative order-2 lg:order-1">
            {/* Заголовок */}
            <motion.div
              variants={itemVariants}
              className="mb-6 md:mb-8"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 md:mb-6">
                Почему стоит заказывать одежду из{' '}
                <motion.span
                  initial={{ backgroundPosition: '200%' }}
                  whileInView={{ backgroundPosition: '0%' }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 2, 
                    ease: "easeInOut"
                  }}
                  className="bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent bg-[length:200%_auto]"
                >
                  Кыргызстана
                </motion.span>
                , а не из России, Китая и других стран
              </h2>
            </motion.div>

            {/* Подзаголовок с волнистой линией */}
            <motion.div
              variants={itemVariants}
              className="mb-8 md:mb-12"
            >
              <div className="relative inline-block">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
                  Ключевое — сэкономите деньги и время
                </h3>
                <motion.svg
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full"
                  height="6"
                  viewBox="0 0 200 6"
                  fill="none"
                >
                  <path
                    d="M2 4C25.5 2 45.5 1.5 67.5 3C89.5 4.5 110.5 6.5 132.5 5.5C154.5 4.5 175.5 1.5 198 2"
                    stroke="url(#wave)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="wave" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#EC4899" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </div>
            </motion.div>

            {/* Визуальные элементы */}
            <div className="relative h-48 sm:h-56 md:h-64 mb-8 md:mb-0">
              {/* Толстовка */}
              <motion.div
                variants={floatVariants}
                animate="float"
                className="absolute left-4 sm:left-10 top-8 sm:top-10"
              >
                <div className="relative">
                  <Shirt className="w-16 h-16 sm:w-20 sm:h-20 text-pink-500" />
                  <motion.div
                    variants={starVariants}
                    animate="twinkle"
                    className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full"
                  />
                </div>
              </motion.div>

              {/* Самолет */}
              <motion.div
                variants={floatVariants}
                animate="float"
                transition={{ delay: 1 }}
                className="absolute right-8 sm:right-20 top-2 sm:top-4"
              >
                <div className="relative">
                  <Plane className="w-12 h-12 sm:w-16 sm:h-16 text-purple-500 transform rotate-45" />
                  <motion.div
                    variants={starVariants}
                    animate="twinkle"
                    transition={{ delay: 0.5 }}
                    className="absolute -bottom-1 -left-1 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"
                  />
                </div>
              </motion.div>

              {/* Коробка */}
              <motion.div
                variants={floatVariants}
                animate="float"
                transition={{ delay: 2 }}
                className="absolute left-12 sm:left-20 bottom-4 sm:bottom-8"
              >
                <div className="relative">
                  <Package className="w-12 h-12 sm:w-14 sm:h-14 text-pink-600" />
                  <motion.div
                    variants={starVariants}
                    animate="twinkle"
                    transition={{ delay: 1 }}
                    className="absolute top-1 -right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full"
                  />
                </div>
              </motion.div>

              {/* Дополнительные звездочки */}
              <motion.div
                variants={starVariants}
                animate="twinkle"
                className="absolute top-4 left-24 sm:left-32 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full"
              />
              <motion.div
                variants={starVariants}
                animate="twinkle"
                transition={{ delay: 0.3 }}
                className="absolute bottom-12 right-24 sm:right-32 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-yellow-400 rounded-full"
              />
              <motion.div
                variants={starVariants}
                animate="twinkle"
                transition={{ delay: 0.7 }}
                className="absolute top-16 right-6 sm:right-10 w-1 h-1 bg-yellow-400 rounded-full"
              />
            </div>

            {/* CTA Кнопка */}
            <motion.div
              variants={itemVariants}
              className="mt-8 md:mt-12"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px -10px rgba(236, 72, 153, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-base md:text-lg flex items-center justify-center space-x-2 hover:shadow-xl transition-all duration-300 shadow-lg w-full sm:w-auto"
              >
                <span>Перейти в каталог</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </motion.button>
            </motion.div>
          </div>

          {/* Правая часть - Преимущества */}
          <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                whileHover={{ 
                  scale: 1.02,
                  y: -5
                }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start space-x-3 md:space-x-4">
                  {/* Иконка */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: advantage.delay,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5
                    }}
                    className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r ${advantage.color} rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow flex-shrink-0`}
                  >
                    <advantage.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                  </motion.div>

                  {/* Текст */}
                  <div className="flex-1 min-w-0">
                    <motion.h3
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: advantage.delay + 0.1 }}
                      className="text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-2 group-hover:text-pink-600 transition-colors line-clamp-2"
                    >
                      {advantage.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: advantage.delay + 0.2 }}
                      className="text-gray-600 leading-relaxed text-sm md:text-base"
                    >
                      {advantage.description}
                    </motion.p>
                  </div>
                </div>

                {/* Декоративная линия */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: advantage.delay + 0.3, duration: 0.8 }}
                  className="h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mt-3 md:mt-4 transform origin-left"
                />
              </motion.div>
            ))}

            {/* Дополнительная информация */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-4 md:p-6 border border-pink-200 mt-6 md:mt-8"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="text-center"
              >
                <p className="text-gray-700 font-semibold text-sm md:text-base">
                  💡 <span className="text-pink-600">Бонус:</span> При заказе от 1000 единиц — 
                  <span className="text-pink-600 font-bold"> бесплатная доставка</span>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Волнообразный разделитель снизу */}
      <div className="absolute bottom-0 left-0 right-0 transform rotate-180">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-8 md:h-12 text-white"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            className="fill-current"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            className="fill-current"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            className="fill-current"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default WhyKyrgyzstan;