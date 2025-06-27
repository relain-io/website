import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Link } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from './Logo';
import { useLanguage } from '../contexts/LanguageContext';

const navigation = [
  { name: 'nav.home', to: 'hero' },
  { name: 'nav.services', to: 'services' },
  { name: 'nav.about', to: 'about' },
  { name: 'nav.technologies', to: 'technologies' },
  { name: 'nav.jobs', to: 'jobs' },
  { name: 'nav.contact', to: 'contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'de' : 'en');
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-md bg-white/90 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer -m-1.5 p-1.5 flex items-center gap-3"
            aria-label="Home"
          >
            <Logo className="h-10 w-10" aria-hidden="true" />
            <span className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              relain
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100/50 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Open main menu"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              activeClass="text-blue-600 after:scale-x-100"
              className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer hover:text-blue-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-blue-600 after:transition-transform hover:after:scale-x-100 px-1 py-2"
              aria-label={t(item.name)}
            >
              {t(item.name)}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          <button
            onClick={toggleLanguage}
            className="text-sm font-semibold leading-6 px-3 py-1 rounded-full border border-gray-200 hover:border-blue-200 text-gray-900 hover:text-blue-600 transition-all"
            aria-label={t('lang.switch')}
          >
            {t('lang.switch')}
          </button>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="ml-6 inline-flex items-center gap-x-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors duration-300"
            aria-label={t('hero.cta.primary')}
          >
            {t('hero.cta.primary')}
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen} id="mobile-menu">
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" aria-hidden="true" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-xl menu-appear">
          <div className="flex items-center justify-between">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              duration={500}
              className="-m-1.5 p-1.5 flex items-center gap-3"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Home"
            >
              <Logo className="h-10 w-10" aria-hidden="true" />
              <span className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                relain
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-8 flow-root">
            <div className="-my-6 divide-y divide-gray-100">
              <div className="space-y-1 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="menu-item -mx-3 block rounded-lg px-4 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label={t(item.name)}
                  >
                    {t(item.name)}
                  </Link>
                ))}
              </div>
              <div className="py-6 flex flex-col gap-3">
                <button
                  onClick={() => {
                    toggleLanguage();
                    setMobileMenuOpen(false);
                  }}
                  className="menu-item flex items-center justify-center rounded-lg border border-gray-200 px-4 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                  style={{ animationDelay: '0.35s' }}
                  aria-label={t('lang.switch')}
                >
                  {t('lang.switch')}
                </button>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="menu-item flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-base font-semibold text-white hover:bg-blue-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ animationDelay: '0.4s' }}
                  aria-label={t('hero.cta.primary')}
                >
                  {t('hero.cta.primary')}
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
