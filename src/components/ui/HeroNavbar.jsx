import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Mail } from 'lucide-react';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { useTranslations } from 'next-intl';

const HeroNavbar = () => {
  const t = useTranslations('Navigation');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCataloguePopup, setShowCataloguePopup] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');


  const navItems = [
    { name: t('home'), href: "/" },
    { name: t('projects'), href: "/projects" },
    { name: t('clients'), href: "/clients" },
    { name: t('careers'), href: "/careers" },
    { name: t('contact'), href: "/contact" }
  ];

  const handleCatalogueDownload = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);

      // Simulate PDF download
      setTimeout(() => {
        setShowCataloguePopup(false);
        setEmail('');
        setSubmitStatus('');
      }, 2000);
    }, 1500);
  };

  return (
    <>

      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed z-50 top-4 left-0 right-0 px-4 transition-all duration-300"
      >
        <div
          className="mx-auto transition-all duration-300 max-w-6xl px-6 py-3 rounded-full border shadow-xl"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px) saturate(180%)',
            borderColor: 'rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
          }}
        >
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-3 group"
            >
              <div className="h-10 w-auto flex items-center justify-center overflow-hidden">
                <img src="/images/aicon-removebg-preview.png" alt="Aiconmac Logo" className="w-full h-full object-contain" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-md transition-colors font-light tracking-wide text-gray-900 hover:text-gray-600"
                    style={{ textShadow: '0 0 15px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.5)' }}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Catalogue Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <LanguageSwitcher
                className="text-gray-900 border-gray-300"
                style={{ textShadow: '0 0 15px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.5)' }}
              />

              <motion.button
                onClick={() => setShowCataloguePopup(true)}
                className="hidden sm:flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-sm rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                <span className="font-medium">{t('catalogue')}</span>
              </motion.button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 transition-colors duration-300 text-gray-700 hover:text-gray-900"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu - Positioned absolutely relative to the container */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="lg:hidden absolute top-full left-0 right-0 mt-2 p-4 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-100 overflow-hidden"
              >
                <div className="space-y-3">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 text-gray-700 hover:text-gray-900 font-light"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <button
                    onClick={() => {
                      setShowCataloguePopup(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center space-x-2 w-full py-3 px-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-sm rounded-lg mt-4"
                  >
                    <Download className="w-4 h-4" />
                    <span>{t('downloadCatalogue')}</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Catalogue Download Popup */}
      <AnimatePresence>
        {showCataloguePopup && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => !isSubmitting && setShowCataloguePopup(false)}
            />

            {/* Popup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative">
                {/* Close Button */}
                <button
                  onClick={() => !isSubmitting && setShowCataloguePopup(false)}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  disabled={isSubmitting}
                >
                  <X size={20} />
                </button>

                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-light text-gray-900 mb-2">{t('success')}</h3>
                    <p className="text-gray-600">{t('downloadingMessage')}</p>
                  </motion.div>
                ) : (
                  <>
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Download className="w-8 h-8 text-amber-600" />
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-light text-center text-gray-900 mb-2">
                      {t('downloadCatalogue')}
                    </h2>
                    <p className="text-center text-gray-600 mb-8 text-sm">
                      {t('emailPrompt')}
                    </p>

                    {/* Form */}
                    <form onSubmit={handleCatalogueDownload} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t('emailAddress')}
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            required
                            disabled={isSubmitting}
                            className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>{t('processing')}</span>
                          </>
                        ) : (
                          <>
                            <Download className="w-5 h-5" />
                            <span>{t('downloadCatalogue')}</span>
                          </>
                        )}
                      </button>

                      <p className="text-xs text-center text-gray-500">
                        {t('consent')}
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>


    </>
  );
};

export default HeroNavbar;