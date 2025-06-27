import { useLanguage } from '../contexts/LanguageContext';
import Logo from './Logo';
import { FiTarget, FiCode, FiServer, FiUsers } from 'react-icons/fi';

const getServices = (t: (key: string) => string) => [
  {
    title: t('about.services.strategic.title'),
    description: t('about.services.strategic.description'),
    icon: <FiTarget className="w-6 h-6 text-blue-600" />,
  },
  {
    title: t('about.services.technical.title'),
    description: t('about.services.technical.description'),
    icon: <FiCode className="w-6 h-6 text-blue-600" />,
  },
  {
    title: t('about.services.operations.title'),
    description: t('about.services.operations.description'),
    icon: <FiServer className="w-6 h-6 text-blue-600" />,
  },
  {
    title: t('about.services.training.title'),
    description: t('about.services.training.description'),
    icon: <FiUsers className="w-6 h-6 text-blue-600" />,
  },
];

const getStats = (t: (key: string) => string) => [
  { number: '20+', label: t('about.stats.experience') },
  { number: '100+', label: t('about.stats.projects') },
  { number: '24/7', label: t('about.stats.support') },
];

export default function About() {
  const { t } = useLanguage();
  const services = getServices(t);
  const stats = getStats(t);

  return (
    <div className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background blur elements */}
      <div className="absolute -left-40 -bottom-40 w-80 h-80 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40" />
      <div className="absolute right-20 top-20 w-64 h-64 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto mb-12">
          <h2 className="section-title text-center">
            {t('about.heading')}
          </h2>
          <p className="section-subtitle text-center mx-auto">
            {t('about.description')}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="card hover-lift rounded-2xl p-8 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-blue-50 shadow-sm">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fadeInUp animation-delay-200">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card hover-lift rounded-2xl p-8 text-center transition-all duration-300"
            >
              <div className="inline-flex justify-center items-center rounded-full bg-blue-50 w-16 h-16 mb-4">
                <span className="text-3xl font-bold text-blue-600">
                  {stat.number.split('+')[0]}
                  {stat.number.includes('+') && <span className="text-blue-500">+</span>}
                </span>
              </div>
              <div className="text-gray-600 font-medium mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center">
            <Logo className="h-12 w-12 mr-3" />
            <span className="text-xl font-semibold text-gray-900">relain</span>
          </div>
        </div>
      </div>
      <div className="section-divider" />
    </div>
  );
}
