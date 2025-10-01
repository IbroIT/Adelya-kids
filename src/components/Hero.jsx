
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Scissors, Shirt, Star } from 'lucide-react';

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
      color: "from-green-400 to-blue-500",
      delay: 0.8
    },
    {
      icon: Shirt,
      title: "Качественные материалы",
      description: "Используем только лучшие ткани и фурнитуру",
      color: "from-blue-400 to-purple-500",
      delay: 1.0
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-green-50 to-blue-50 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 overflow-hidden">
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
          className="absolute -top-1/2 -right-1/4 w-1/2 h-1/2 bg-gradient-to-r from-green-200 to-transparent rounded-full opacity-20 blur-xl"
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
          className="absolute -bottom-1/2 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-blue-200 to-transparent rounded-full opacity-20 blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Текстовая часть */}
          <div className="space-y-8">
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              {/* Бейдж */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full"
              >
                <Star className="w-4 h-4 fill-current" />
                <span className="font-semibold">Лидер рынка с 2016 года</span>
              </motion.div>

              {/* Заголовок */}
              <motion.h1
                variants={itemVariants}
                className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
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
                  className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent bg-[length:200%_auto]"
                >
                  оптовым закупом
                </motion.span>{' '}
                детской одежды в Кыргызстане
              </motion.h1>

              {/* Описание */}
              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Профессиональная байерская компания, предоставляющая полный цикл услуг 
                от проектирования до поставки качественной детской одежды оптом
              </motion.p>
            </motion.div>

            {/* CTA Кнопки */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px -10px rgba(16, 185, 129, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 hover:bg-green-600 transition-colors"
              >
                <span>Начать сотрудничество</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-green-500 hover:text-green-600 transition-colors"
              >
                Смотреть каталог
              </motion.button>
            </motion.div>

            {/* Статистика */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 pt-8"
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
                  <div className="text-2xl font-bold text-green-600">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.text}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Изображение и карточки */}
          <div className="relative">
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
                  className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl shadow-2xl overflow-hidden"
                >
                  {/* Заглушка для изображения - в реальном проекте заменить на <img> */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-4xl">👧</span>
                      </div>
                      <p>Фото девочки в стильной одежде</p>
                    </div>
                  </div>
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
                  className="absolute -top-4 -right-4 w-24 h-24 bg-green-300 rounded-full opacity-20 blur-xl"
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
                  className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-300 rounded-full opacity-20 blur-xl"
                />
              </div>
            </motion.div>

            {/* Плавающие карточки */}
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
                className={`absolute ${
                  index === 0 ? 'left-0 bottom-20' : 'right-0 top-20'
                } bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20 max-w-xs`}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-12 h-12 bg-gradient-to-r ${card.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  <card.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="font-bold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Волнообразный разделитель */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-12 text-white"
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