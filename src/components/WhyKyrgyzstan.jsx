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
      color: "from-green-400 to-emerald-500",
      delay: 0.3
    },
    {
      icon: Clock,
      title: "Быстрая доставка",
      description: "В среднем доставка занимает от 2 до 10 календарных дней",
      color: "from-blue-400 to-cyan-500",
      delay: 0.5
    },
    {
      icon: DollarSign,
      title: "Низкая стоимость доставки",
      description: "Стоимость до 1$ за 1 кг",
      color: "from-emerald-400 to-green-500",
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
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-green-50 relative overflow-hidden">
      {/* Декоративные элементы фона */}
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
          className="absolute -top-20 -right-20 w-40 h-40 bg-green-100 rounded-full opacity-30"
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
          className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-100 rounded-full opacity-30"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Левая часть - Визуальные элементы и заголовок */}
          <div className="relative">
            {/* Заголовок */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Почему стоит заказывать одежду из{' '}
                <motion.span
                  initial={{ backgroundPosition: '200%' }}
                  whileInView={{ backgroundPosition: '0%' }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 2, 
                    ease: "easeInOut"
                  }}
                  className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent bg-[length:200%_auto]"
                >
                  Кыргызстана
                </motion.span>
                , а не из России, Китая и других стран
              </h2>
            </motion.div>

            {/* Подзаголовок с волнистой линией */}
            <motion.div
              variants={itemVariants}
              className="mb-12"
            >
              <div className="relative inline-block">
                <h3 className="text-2xl lg:text-3xl font-semibold text-gray-800">
                  Ключевое — сэкономите деньги и время
                </h3>
                <motion.svg
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  fill="none"
                >
                  <path
                    d="M2 6C25.5 2 45.5 1.5 67.5 3C89.5 4.5 110.5 6.5 132.5 5.5C154.5 4.5 175.5 1.5 198 2"
                    stroke="url(#wave)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="wave" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </div>
            </motion.div>

            {/* Визуальные элементы */}
            <div className="relative h-64">
              {/* Толстовка */}
              <motion.div
                variants={floatVariants}
                animate="float"
                className="absolute left-10 top-10"
              >
                <div className="relative">
                  <Shirt className="w-20 h-20 text-green-500" />
                  <motion.div
                    variants={starVariants}
                    animate="twinkle"
                    className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full"
                  />
                </div>
              </motion.div>

              {/* Самолет */}
              <motion.div
                variants={floatVariants}
                animate="float"
                transition={{ delay: 1 }}
                className="absolute right-20 top-4"
              >
                <div className="relative">
                  <Plane className="w-16 h-16 text-blue-500 transform rotate-45" />
                  <motion.div
                    variants={starVariants}
                    animate="twinkle"
                    transition={{ delay: 0.5 }}
                    className="absolute -bottom-1 -left-1 w-3 h-3 bg-yellow-400 rounded-full"
                  />
                </div>
              </motion.div>

              {/* Коробка */}
              <motion.div
                variants={floatVariants}
                animate="float"
                transition={{ delay: 2 }}
                className="absolute left-20 bottom-8"
              >
                <div className="relative">
                  <Package className="w-14 h-14 text-emerald-500" />
                  <motion.div
                    variants={starVariants}
                    animate="twinkle"
                    transition={{ delay: 1 }}
                    className="absolute top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"
                  />
                </div>
              </motion.div>

              {/* Дополнительные звездочки */}
              <motion.div
                variants={starVariants}
                animate="twinkle"
                className="absolute top-4 left-32 w-2 h-2 bg-yellow-400 rounded-full"
              />
              <motion.div
                variants={starVariants}
                animate="twinkle"
                transition={{ delay: 0.3 }}
                className="absolute bottom-16 right-32 w-1.5 h-1.5 bg-yellow-400 rounded-full"
              />
              <motion.div
                variants={starVariants}
                animate="twinkle"
                transition={{ delay: 0.7 }}
                className="absolute top-20 right-10 w-1 h-1 bg-yellow-400 rounded-full"
              />
            </div>

            {/* CTA Кнопка */}
            <motion.div
              variants={itemVariants}
              className="mt-12"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-3 hover:bg-gray-800 transition-all duration-300 shadow-lg"
              >
                <span>Перейти в каталог</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>

          {/* Правая часть - Преимущества */}
          <div className="space-y-6">
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
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
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
                    className={`w-14 h-14 bg-gradient-to-r ${advantage.color} rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow`}
                  >
                    <advantage.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Текст */}
                  <div className="flex-1">
                    <motion.h3
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: advantage.delay + 0.1 }}
                      className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors"
                    >
                      {advantage.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: advantage.delay + 0.2 }}
                      className="text-gray-600 leading-relaxed"
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
                  className="h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mt-4 transform origin-left"
                />
              </motion.div>
            ))}

            {/* Дополнительная информация */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 mt-8"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="text-center"
              >
                <p className="text-gray-700 font-semibold">
                  💡 <span className="text-green-600">Бонус:</span> При заказе от 1000 единиц — 
                  <span className="text-green-600 font-bold"> бесплатная доставка</span>
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

export default WhyKyrgyzstan;