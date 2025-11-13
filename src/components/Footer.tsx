import { Link } from 'react-scroll';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';
import ImpressumModal from './ImpressumModal';
import { FiGithub, FiTwitter, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);

  const navigation = {
    main: [
      { name: t('footer.about'), href: 'about' },
      { name: t('footer.services'), href: 'services' },
      // Jobs section disabled - uncomment to re-enable
      // { name: t('footer.jobs'), href: 'jobs' },
      { name: t('footer.contact'), href: 'contact' },
    ],
    social: [
      {
        name: 'GitHub',
        href: 'https://github.com/relain',
        icon: FiGithub,
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/relaincloud',
        icon: FiTwitter,
      },
      {
        name: 'LinkedIn',
        href: 'https://linkedin.com/company/relain',
        icon: FiLinkedin,
      },
    ],
    legal: [
      { name: t('footer.privacy'), href: '#' },
      { name: t('footer.terms'), href: '#' },
      { name: t('footer.cookies'), href: '#' },
      { 
        name: t('footer.impressum'), 
        href: '#', 
        onClick: (e: React.MouseEvent) => {
          e.preventDefault();
          setIsImpressumOpen(true);
        }
      },
    ],
    contact: [
      { 
        icon: FiMail,
        content: 'info@relain.io',
        href: 'mailto:info@relain.io'
      },
      { 
        icon: FiMapPin,
        content: 'Munich, Germany',
        href: 'https://maps.google.com/?q=Munich,Germany'
      },
      { 
        icon: FiPhone,
        content: '+49 89 54197499',
        href: 'tel:+498954197499'
      }
    ]
  };

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 pt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 animate-fadeInUp" style={{ animationDelay: '100ms' }}>
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Relain</h3>
            <p className="text-gray-600 text-sm mb-6 max-w-xs">
              {t('footer.company_description')}
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('footer.quick_links')}</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-300 cursor-pointer"
                    smooth={true}
                    duration={500}
                    aria-label={item.name}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={item.onClick}
                    className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-300 cursor-pointer"
                    aria-label={item.name}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              {navigation.contact.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="flex items-center gap-3 text-gray-600 hover:text-blue-600 text-sm transition-colors duration-300"
                    target={item.icon === FiMapPin ? "_blank" : undefined}
                    rel={item.icon === FiMapPin ? "noopener noreferrer" : undefined}
                  >
                    <item.icon className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                    <span>{item.content}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Relain. {t('footer.rights')}
          </p>
          <div className="mt-4 md:mt-0">
            <img 
              src="/logos/relain-logo.svg" 
              alt="Relain" 
              className="h-8 w-auto" 
            />
          </div>
        </div>
      </div>
      
      <ImpressumModal isOpen={isImpressumOpen} onClose={() => setIsImpressumOpen(false)} />
    </footer>
  );
}
