import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Scissors, Shirt, Star } from 'lucide-react';
import HeroImg from '../assets/hero_img.jpg'
const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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
        stiffness: 100
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const cards = [
    {
      icon: Scissors,
      title: "Услуги оптового пошива одежды",
      description: "Профессиональный пошив детской одежды большими партиями",
      color: "from-pink-400 to-purple-500",
      delay: 0.8
    },
    {
      icon: Shirt,
      title: "Качественные материалы",
      description: "Используем только лучшие ткани и фурнитуру",
      color: "from-purple-400 to-pink-500",
      delay: 1.0
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Анимированный фон - исправлен для адаптива */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Основной градиентный фон */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-50 to-purple-50" />
        
        {/* Анимированные элементы */}
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
          className="absolute -top-1/2 -right-1/4 w-full md:w-1/2 h-1/2 bg-gradient-to-r from-pink-200 to-transparent rounded-full opacity-20 blur-xl"
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
          className="absolute -bottom-1/2 -left-1/4 w-full md:w-1/2 h-1/2 bg-gradient-to-r from-purple-200 to-transparent rounded-full opacity-20 blur-xl"
        />
        
        {/* Дополнительные статические элементы для лучшего покрытия на мобильных */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-100 rounded-full opacity-10 blur-2xl" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-100 rounded-full opacity-10 blur-2xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-pink-100 rounded-full opacity-5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-20 md:pt-32 pb-16 md:pb-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Текстовая часть */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <motion.div
              variants={itemVariants}
              className="space-y-4 md:space-y-6"
            >
              {/* Бейдж */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="inline-flex items-center space-x-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full"
              >
                <Star className="w-4 h-4 fill-current" />
                <span className="font-semibold text-sm md:text-base">Лидер рынка с 2016 года</span>
              </motion.div>

              {/* Заголовок */}
              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Более 7 лет занимаемся{' '}
                <motion.span
                  initial={{ backgroundPosition: '200%' }}
                  animate={{ backgroundPosition: '0%' }}
                  transition={{ 
                    duration: 2, 
                    ease: "easeInOut",
                    delay: 0.7
                  }}
                  className="bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent bg-[length:200%_auto]"
                >
                  оптовым закупом
                </motion.span>{' '}
                детской одежды в Кыргызстане
              </motion.h1>

              {/* Описание */}
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-600 leading-relaxed"
              >
                Профессиональная байерская компания, предоставляющая полный цикл услуг 
                от проектирования до поставки качественной детской одежды оптом
              </motion.p>
            </motion.div>

            {/* CTA Кнопки */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
            ><a href="https://wa.me/996706421414" target="_blank">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px -10px rgba(236, 72, 153, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg flex items-center justify-center space-x-2 transition-colors"
              >
                <span>Начать сотрудничество</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </motion.button>
              </a>
            </motion.div>

            {/* Статистика */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 md:gap-8 pt-6 md:pt-8"
            >
              {[
                { number: '7+', text: 'Лет опыта' },
                { number: '500+', text: 'Довольных клиентов' },
                { number: '10K+', text: 'Единиц продукции' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.text}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-xl md:text-2xl font-bold text-pink-600">{stat.number}</div>
                  <div className="text-gray-600 text-xs md:text-sm mt-1">{stat.text}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Изображение и карточки */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            {/* Основное изображение */}
            <motion.div
              variants={floatingVariants}
              animate="float"
              className="relative z-10"
            >
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl shadow-2xl overflow-hidden"
                >
                  <img src={HeroImg} alt="" />
                </motion.div>
                
                {/* Декоративные элементы */}
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-16 h-16 md:w-24 md:h-24 bg-pink-300 rounded-full opacity-20 blur-xl"
                />
                <motion.div
                  animate={{
                    rotate: -360,
                    scale: [1.2, 1, 1.2]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-20 h-20 md:w-32 md:h-32 bg-purple-300 rounded-full opacity-20 blur-xl"
                />
              </div>
            </motion.div>

            {/* Плавающие карточки - скрыты на мобильных, видны на планшетах и десктопе */}
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50, y: -50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ 
                  delay: card.delay,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5
                }}
                className={`hidden md:absolute ${
                  index === 0 ? 'left-0 bottom-8 lg:bottom-20' : 'right-0 top-8 lg:top-20'
                } bg-white/80 backdrop-blur-md rounded-2xl p-4 lg:p-6 shadow-2xl border border-white/20 max-w-xs`}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r ${card.color} rounded-xl flex items-center justify-center mb-3 lg:mb-4`}
                >
                  <card.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </motion.div>
                <h3 className="font-bold text-gray-800 text-sm lg:text-base mb-2">{card.title}</h3>
                <p className="text-gray-600 text-xs lg:text-sm">{card.description}</p>
              </motion.div>
            ))}

            {/* Карточки для мобильных - отображаются под изображением */}
            <div className="md:hidden grid gap-4 mt-6">
              {cards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20"
                >
                  <div className={`w-10 h-10 bg-gradient-to-r ${card.color} rounded-xl flex items-center justify-center mb-3`}>
                    <card.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-xs">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Волнообразный разделитель */}
      <div className="absolute bottom-0 left-0 right-0">
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

export default Hero;