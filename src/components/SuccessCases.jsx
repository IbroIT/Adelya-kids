// src/components/SuccessCases.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Package, Store } from 'lucide-react';

const SuccessCases = () => {
  const stats = [
    {
      icon: Users,
      number: "3000+",
      text: "довольных клиентов",
      delay: 0.8
    },
    {
      icon: TrendingUp,
      number: "97%",
      text: "повторных заказов",
      delay: 1.0
    },
    {
      icon: Package,
      number: "50K+",
      text: "отправленных заказов",
      delay: 1.2
    },
    {
      icon: Store,
      number: "7",
      text: "лет на рынке",
      delay: 1.4
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.8
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

  const imageVariants = {
    hidden: { 
      x: 100, 
      opacity: 0,
      rotateY: 90 
    },
    visible: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 1.5
      }
    }
  };

  const floatVariants = {
    float: {
      y: [-15, 15, -15],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Единый задний фон для всех устройств */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Основной градиентный фон */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900" />
        
        {/* Пузырьки фона */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/3 right-1/3 w-32 h-32 md:w-40 md:h-40 bg-white/5 rounded-full blur-2xl"
        />
        
        {/* Градиентные пятна */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-24 -left-24 w-48 h-48 md:w-64 md:h-64 bg-pink-400/20 rounded-full"
        />

        {/* Дополнительные градиентные элементы для лучшего заполнения */}
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 right-10 w-40 h-40 md:w-56 md:h-56 bg-purple-500/15 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-10 left-10 w-28 h-28 md:w-36 md:h-36 bg-violet-400/20 rounded-full blur-xl"
        />
        
        {/* Дополнительные градиенты для единообразия */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Левая часть - Текст */}
          <div className="text-white order-2 lg:order-1">
            {/* Заголовок с декоративным элементом */}
            <motion.div
              variants={itemVariants}
              className="mb-6 md:mb-8"
            >
              <div className="flex items-start space-x-3 md:space-x-4">
                <motion.h1
                  className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  Помогли заработать
                  <br />
                  <motion.span
                    initial={{ backgroundPosition: '200%' }}
                    whileInView={{ backgroundPosition: '0%' }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 2, 
                      ease: "easeInOut",
                      delay: 0.3
                    }}
                    className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent bg-[length:200%_auto]"
                  >
                    более 3000 клиентам
                  </motion.span>
                </motion.h1>
                
                {/* Декоративный элемент - "вспышка" */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="flex flex-col space-y-1 md:space-y-2 mt-2 md:mt-4"
                >
                  <div className="w-1.5 h-6 md:w-2 md:h-8 bg-white/80 rotate-45 rounded-full" />
                  <div className="w-1.5 h-4 md:w-2 md:h-6 bg-white/60 -rotate-45 rounded-full ml-1 md:ml-2" />
                </motion.div>
              </div>
            </motion.div>

            {/* Подзаголовок */}
            <motion.div
              variants={itemVariants}
              className="mb-8 md:mb-12"
            >
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed font-light max-w-2xl"
              >
                Мы понимаем, что для вас важно заработать с продажи товара,
                поэтому внимательно относимся к его подбору
              </motion.p>
            </motion.div>

            {/* Статистика */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.text}
                  custom={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5
                  }}
                  className="text-center p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: stat.delay,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3"
                  >
                    <stat.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: stat.delay + 0.2 }}
                    className="text-xl md:text-2xl font-bold text-white mb-1"
                  >
                    {stat.number}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: stat.delay + 0.3 }}
                    className="text-white/80 text-xs md:text-sm"
                  >
                    {stat.text}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Кнопка */}
            <motion.div
              variants={itemVariants}
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px -10px rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg flex items-center justify-center space-x-2 md:space-x-3 hover:bg-gray-50 transition-all duration-300 shadow-2xl w-full sm:w-auto"
              >
                <span>Стать следующим успешным клиентом</span>
                <TrendingUp className="w-4 h-4 md:w-5 md:h-5" />
              </motion.button>
            </motion.div>
          </div>

          {/* Правая часть - Изображения */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="grid grid-cols-2 gap-4 md:gap-6 relative z-10">
              {/* Первое изображение - Деньги и коробки */}
              <motion.div
                variants={imageVariants}
                className="relative"
              >
                <motion.div
                  variants={floatVariants}
                  animate="float"
                  className="bg-gray-900 rounded-xl md:rounded-2xl p-4 md:p-6 h-60 md:h-80 flex flex-col justify-end relative overflow-hidden shadow-2xl border border-white/10"
                >
                  {/* Декоративные элементы */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  {/* Коробки */}
                  <div className="relative z-10 space-y-2 md:space-y-3">
                    <div className="flex space-x-1 md:space-x-2">
                      <div className="w-12 h-8 md:w-16 md:h-12 bg-pink-500 rounded-lg transform rotate-12 shadow-lg" />
                      <div className="w-10 h-6 md:w-14 md:h-10 bg-pink-400 rounded-lg transform -rotate-6 shadow-lg" />
                      <div className="w-8 h-5 md:w-12 md:h-8 bg-pink-300 rounded-lg transform rotate-6 shadow-lg" />
                    </div>
                    
                    {/* Деньги */}
                    <div className="flex space-x-1">
                      <div className="w-6 h-3 md:w-8 md:h-4 bg-purple-400 rounded transform rotate-3" />
                      <div className="w-7 h-3 md:w-10 md:h-4 bg-purple-500 rounded transform -rotate-2" />
                      <div className="w-5 h-3 md:w-7 md:h-4 bg-purple-600 rounded transform rotate-1" />
                      <div className="w-6 h-3 md:w-9 md:h-4 bg-purple-400 rounded transform -rotate-3" />
                    </div>
                  </div>

                  {/* Текст на изображении */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                    className="absolute top-4 md:top-6 left-4 md:left-6 z-10"
                  >
                    <div className="text-white font-semibold text-sm md:text-lg">Прибыль + Доставка</div>
                  </motion.div>
                </motion.div>

                {/* Декоративный элемент */}
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-4 h-4 md:w-8 md:h-8 bg-yellow-400 rounded-full opacity-60"
                />
              </motion.div>

              {/* Второе изображение - Магазин */}
              <motion.div
                variants={imageVariants}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <motion.div
                  variants={floatVariants}
                  animate="float"
                  transition={{ delay: 1 }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl md:rounded-2xl p-4 md:p-6 h-60 md:h-80 relative overflow-hidden shadow-2xl border border-white/10"
                >
                  {/* Интерьер магазина */}
                  <div className="absolute inset-0">
                    {/* Стеллажи */}
                    <div className="absolute bottom-0 left-0 right-0 h-12 md:h-16 bg-gray-200" />
                    <div className="absolute bottom-12 md:bottom-16 left-3 md:left-4 right-3 md:right-4 h-0.5 md:h-1 bg-gray-300" />
                    
                    {/* Вешалки с одеждой */}
                    <div className="absolute top-16 md:top-20 left-4 md:left-6 space-y-2 md:space-y-3">
                      <div className="flex space-x-2 md:space-x-3">
                        <div className="w-6 h-8 md:w-8 md:h-12 bg-pink-200 rounded" />
                        <div className="w-6 h-6 md:w-8 md:h-10 bg-purple-200 rounded" />
                        <div className="w-6 h-10 md:w-8 md:h-14 bg-pink-300 rounded" />
                      </div>
                    </div>
                    
                    {/* Кассовая стойка */}
                    <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 w-8 h-5 md:w-12 md:h-8 bg-gray-700 rounded" />
                    
                    {/* Товары на полках */}
                    <div className="absolute bottom-16 md:bottom-20 left-3 md:left-4 right-3 md:right-4 flex justify-between">
                      <div className="w-4 h-2 md:w-6 md:h-4 bg-pink-300 rounded" />
                      <div className="w-4 h-2 md:w-6 md:h-4 bg-purple-300 rounded" />
                      <div className="w-4 h-2 md:w-6 md:h-4 bg-yellow-300 rounded" />
                      <div className="w-4 h-2 md:w-6 md:h-4 bg-cyan-300 rounded" />
                    </div>
                  </div>

                  {/* Текст на изображении */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.3 }}
                    className="absolute top-4 md:top-6 left-4 md:left-6"
                  >
                    <div className="text-gray-800 font-semibold text-sm md:text-lg">Магазин мечты</div>
                    <div className="text-gray-600 text-xs md:text-sm">Готовый бизнес под ключ</div>
                  </motion.div>
                </motion.div>

                {/* Декоративный элемент */}
                <motion.div
                  animate={{
                    rotate: -360,
                    scale: [1.1, 1, 1.1]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -bottom-1 -left-1 md:-bottom-2 md:-left-2 w-3 h-3 md:w-6 md:h-6 bg-purple-400 rounded-full opacity-70"
                />
              </motion.div>
            </div>

            {/* Соединяющая стрелка - скрыта на мобильных */}
            <motion.div
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5, duration: 1.5 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 hidden md:block"
            >
              <svg
                width="200"
                height="80"
                viewBox="0 0 200 80"
                fill="none"
                className="text-white/30"
              >
                <path
                  d="M10 40 C50 10, 150 70, 190 40"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="8 8"
                />
                <path
                  d="M190 40 L175 30 M190 40 L175 50"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Анимированные частицы */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
            className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default SuccessCases;