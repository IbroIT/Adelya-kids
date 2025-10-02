// src/components/ConsultationSection.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, User, MessageCircle, ArrowRight, CheckCircle, Shield } from 'lucide-react';

const ConsultationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Сброс формы через 5 секунд
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
    hidden: { y: 30, opacity: 0 },
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

  const formVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.5
      }
    }
  };

  const successVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200
      }
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-pink-500 to-rose-600 relative overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Органические линии */}
        <motion.svg
          className="absolute top-0 left-0 w-full h-full opacity-10"
          viewBox="0 0 1200 800"
          fill="none"
        >
          <motion.path
            d="M0,400 C150,500 350,300 600,400 C850,500 1050,300 1200,400"
            stroke="white"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,600 C200,500 400,700 600,600 C800,500 1000,700 1200,600"
            stroke="white"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,200 C300,300 500,100 800,200 C1100,300 900,100 1200,200"
            stroke="white"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          />
        </motion.svg>

        {/* Плавающие элементы */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-8 h-8 bg-white/20 rounded-full"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-16 w-6 h-6 bg-white/15 rounded-full"
        />
        <motion.div
          animate={{
            y: [-15, 15, -15],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 left-1/4 w-4 h-4 bg-white/25 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Заголовок */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Хотите получить консультацию по закупу одежды?
            </h2>
          </motion.div>

          {/* Подзаголовок */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <p className="text-xl lg:text-2xl text-white/90 mb-4 leading-relaxed">
              На консультации по закупу одежды вы сможете получить ценные советы и рекомендации по выбору ассортимента
            </p>
            <p className="text-lg text-white/80">
              Оставьте заявку и мы свяжемся с вами в ближайшее время
            </p>
          </motion.div>

          {/* Форма */}
          <motion.div
            variants={formVariants}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Поле имени */}
                    <motion.div
                      variants={itemVariants}
                      className="relative"
                    >
                      <label className="block text-left text-gray-700 font-medium mb-3">
                        Ваше Имя
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                          placeholder="Введите ваше имя"
                        />
                      </div>
                    </motion.div>

                    {/* Поле телефона */}
                    <motion.div
                      variants={itemVariants}
                      className="relative"
                    >
                      <label className="block text-left text-gray-700 font-medium mb-3">
                        Номер телефона
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                          placeholder="+996 ___ ___ ___"
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Поле сообщения */}
                  <motion.div
                    variants={itemVariants}
                    className="relative"
                  >
                    <label className="block text-left text-gray-700 font-medium mb-3">
                      Опишите ваш запрос
                    </label>
                    <div className="relative">
                      <MessageCircle className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Интересующий товар, количество, стиль, бюджет..."
                      />
                    </div>
                  </motion.div>

                  {/* Чекбокс согласия */}
                  <motion.div
                    variants={itemVariants}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        required
                        className="w-4 h-4 text-pink-500 bg-gray-100 border-gray-300 rounded focus:ring-pink-500 focus:ring-2"
                      />
                    </div>
                    <label className="text-sm text-gray-600">
                      Я соглашаюсь с условиями обработки данных и{' '}
                      <a href="#" className="text-pink-500 hover:text-pink-600 underline">
                        политикой конфиденциальности
                      </a>
                    </label>
                  </motion.div>

                  {/* Кнопка отправки */}
                  <motion.button
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 30px -10px rgba(236, 72, 153, 0.5)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-pink-500 text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-pink-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-3"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>Отправка...</span>
                      </>
                    ) : (
                      <>
                        <span>Записаться на консультацию</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>

                  {/* Юридическая информация */}
                  <motion.div
                    variants={itemVariants}
                    className="text-center"
                  >
                    <p className="text-xs text-gray-500 flex items-center justify-center space-x-2">
                      <Shield className="w-3 h-3" />
                      <span>Нажимая на кнопку вы соглашаетесь с условиями обработки данных и политикой конфиденциальности</span>
                    </p>
                  </motion.div>
                </motion.form>
              ) : (
                // Сообщение об успешной отправке
                <motion.div
                  key="success"
                  variants={successVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-pink-500" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Заявка отправлена!
                  </h3>
                  <p className="text-gray-600 text-lg mb-2">
                    Спасибо за вашу заявку
                  </p>
                  <p className="text-gray-500">
                    Наш специалист свяжется с вами в ближайшее время
                  </p>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 5 }}
                    className="h-1 bg-pink-500 rounded-full mt-6"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Дополнительные преимущества */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8 mt-12"
          >
            {[
              {
                icon: Phone,
                title: "Быстрый ответ",
                description: "Свяжемся в течение 15 минут"
              },
              {
                icon: MessageCircle,
                title: "Экспертная помощь",
                description: "Опытные консультанты"
              },
              {
                icon: CheckCircle,
                title: "Без обязательств",
                description: "Консультация бесплатна"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="text-white text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4"
                >
                  <item.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-white/80 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationSection;