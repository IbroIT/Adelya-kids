import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle, Instagram, Sparkles, Shirt, Users, Star } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHover, setActiveHover] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Блокировка скролла при открытом мобильном меню
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { 
      name: 'Этапы работы', 
      href: '#process',
      icon: Sparkles
    },
    { 
      name: 'Пошив одежды', 
      href: '#sewing',
      icon: Shirt
    },
    { 
      name: 'Отзывы', 
      href: '#feedback',
      icon: Users
    },
    { 
      name: 'Контакты', 
      href: '#contact',
      icon: Star
    },
  ];

  const socialIcons = [
    { 
      icon: MessageCircle, 
      href: 'https://wa.me/996773988444', 
      color: 'text-pink-500',
      hoverColor: 'text-pink-600',
      bgColor: 'bg-pink-50',
      name: 'WhatsApp'
    },
    { 
      icon: Instagram, 
      href: 'https://instagram.com/dordoykids', 
      color: 'text-pink-500',
      hoverColor: 'text-pink-600',
      bgColor: 'bg-pink-50',
      name: 'Instagram'
    },
    { 
      icon: 'Telegram', 
      href: 'https://t.me/dordoykids', 
      color: 'text-pink-500',
      hoverColor: 'text-pink-600',
      bgColor: 'bg-pink-50',
      name: 'Telegram'
    },
  ];

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const mobileMenuBackdropVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const mobileMenuPanelVariants = {
    closed: {
      x: '100%',
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const mobileMenuItemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1 + 0.2,
        type: "spring",
        stiffness: 300
      }
    })
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl py-2 border-b border-pink-100' 
            : 'bg-gradient-to-r from-pink-500 to-pink-600 py-4'
        }`}
      >
        {/* Анимированный фон при скролле */}
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-white via-pink-50 to-white"
          />
        )}

        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between">
            {/* Логотип */}
            <motion.div
              className="flex items-center space-x-3 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                className="relative"
                whileHover={{ 
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <div className={`text-center relative z-10 p-3 rounded-2xl ${
                  isScrolled 
                    ? 'bg-gradient-to-br from-pink-100 to-pink-100' 
                    : 'bg-white/20 backdrop-blur-sm'
                }`}>
                  <motion.div
                    className={`text-3xl font-bold font-cursive ${
                      isScrolled ? 'text-pink-600' : 'text-white'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    Dk
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className={`text-xs mt-1 ${
                      isScrolled ? 'text-gray-600' : 'text-pink-100'
                    }`}
                  >
                    Байерская компания в Бишкеке
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="relative"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  onHoverStart={() => setActiveHover(item.name)}
                  onHoverEnd={() => setActiveHover(null)}
                >
                  <motion.a
                    href={item.href}
                    className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 group overflow-hidden flex items-center space-x-2 ${
                      isScrolled
                        ? 'text-gray-700 hover:text-pink-600'
                        : 'text-white hover:text-pink-100'
                    }`}
                  >
                    <motion.div
                      animate={{ 
                        rotate: activeHover === item.name ? [0, 360] : 0,
                        scale: activeHover === item.name ? 1.2 : 1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-4 h-4" />
                    </motion.div>
                    
                    <span className="relative z-10">{item.name}</span>

                    <motion.div
                      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 rounded-full ${
                        isScrolled ? 'bg-pink-500' : 'bg-white'
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: activeHover === item.name ? '80%' : '0%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </motion.div>
              ))}
            </div>

            {/* Правая часть - Контакты и соцсети */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Соцсети */}
              <motion.div 
                className="flex items-center space-x-1 bg-white/80 backdrop-blur-sm rounded-2xl p-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                {socialIcons.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      delay: index * 0.1 + 0.6,
                      type: "spring",
                      stiffness: 300
                    }}
                    whileHover={{ 
                      scale: 1.3,
                      y: -3,
                      rotate: [0, -10, 10, 0],
                    }}
                    whileTap={{ scale: 0.8 }}
                    className={`p-2 rounded-xl transition-all duration-300 relative group ${social.bgColor} ${social.color}`}
                    title={social.name}
                  >
                    {social.icon === 'Telegram' ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.78 5.42-.92 6.8-.06.67-.36.89-.84.55-2.33-1.72-3.98-2.78-6.45-4.56-.54-.35-.54-.35.08-.53 2.69-.85 6.57-2.06 8.49-2.65.54-.16 1.02.1.64.89z"/>
                      </svg>
                    ) : (
                      <social.icon className="w-5 h-5" />
                    )}
                  </motion.a>
                ))}
              </motion.div>

              {/* Телефон */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center space-x-3"
              >
                <motion.a
                  href="tel:+996773988444"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px -10px rgba(236, 72, 153, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 overflow-hidden relative group ${
                    isScrolled
                      ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg'
                      : 'bg-white text-pink-600 shadow-lg'
                  }`}
                >
                  <Phone className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">+996 773 988 444</span>
                </motion.a>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className={`text-sm whitespace-nowrap ${
                    isScrolled ? 'text-gray-600' : 'text-pink-100'
                  }`}
                >
                  Получить консультацию
                </motion.div>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-3 rounded-2xl transition-all duration-300 backdrop-blur-sm ${
                isScrolled 
                  ? 'bg-pink-50 text-pink-600 hover:bg-pink-100' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
              aria-label="Меню"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={mobileMenuBackdropVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={handleMobileMenuClose}
            />
            
            {/* Menu Panel */}
            <motion.div
              variants={mobileMenuPanelVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-white z-50 md:hidden shadow-2xl overflow-y-auto"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600 font-cursive">Dk</div>
                    <div className="text-xs text-gray-600 mt-1">Байерская компания в Бишкеке</div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleMobileMenuClose}
                    className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Menu Items */}
                <nav className="flex-1">
                  <div className="space-y-2">
                    {menuItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        custom={index}
                        variants={mobileMenuItemVariants}
                        initial="closed"
                        animate="open"
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleMobileMenuClose}
                        className="flex items-center space-x-3 p-4 rounded-2xl text-gray-700 hover:text-pink-600 hover:bg-pink-50 font-medium transition-all duration-200 group"
                      >
                        <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                          <item.icon className="w-5 h-5 text-pink-600" />
                        </div>
                        <span className="text-lg">{item.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </nav>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-6 border-t border-gray-200"
                >
                  <div className="flex justify-center space-x-4 mb-6">
                    {socialIcons.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          delay: 0.7 + index * 0.1,
                          type: "spring",
                          stiffness: 300
                        }}
                        whileHover={{ 
                          scale: 1.2,
                          y: -5
                        }}
                        whileTap={{ scale: 0.8 }}
                        className={`p-3 rounded-2xl ${social.bgColor} ${social.color} transition-all duration-300`}
                        onClick={handleMobileMenuClose}
                      >
                        {social.icon === 'Telegram' ? (
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.78 5.42-.92 6.8-.06.67-.36.89-.84.55-2.33-1.72-3.98-2.78-6.45-4.56-.54-.35-.54-.35.08-.53 2.69-.85 6.57-2.06 8.49-2.65.54-.16 1.02.1.64.89z"/>
                          </svg>
                        ) : (
                          <social.icon className="w-6 h-6" />
                        )}
                      </motion.a>
                    ))}
                  </div>

                  {/* Phone */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="text-center"
                  >
                    <motion.a
                      href="tel:+996773988444"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleMobileMenuClose}
                      className="block w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-4 px-6 rounded-2xl font-semibold shadow-lg mb-3"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <Phone className="w-5 h-5" />
                        <span>+996 773 988 444</span>
                      </div>
                    </motion.a>
                    <p className="text-sm text-gray-600">
                      Получить консультацию
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;