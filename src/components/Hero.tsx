import { Link } from 'react-scroll';
import { useLanguage } from '../contexts/LanguageContext';
import { FiArrowRight, FiMessageSquare, FiCode, FiCloud } from 'react-icons/fi';

const CloudInfrastructureIllustration = () => (
  <svg
    className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="cloud-pattern"
        width={200}
        height={200}
        x="50%"
        y={-1}
        patternUnits="userSpaceOnUse"
      >
        <path d="M.5 200V.5H200" fill="none" />
      </pattern>
    </defs>
    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
      <path
        d="M-200 0h201v201h-201Z M600 0h201v201h-201Z"
        strokeWidth={0}
      />
    </svg>
    <rect
      width="100%"
      height="100%"
      strokeWidth={0}
      fill="url(#cloud-pattern)"
    />
  </svg>
);

const BackgroundGradient = () => (
  <div
    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    aria-hidden="true"
  >
    <div
      className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-indigo-600 opacity-25 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
      style={{
        clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      }}
    />
  </div>
);

const BackgroundGradient2 = () => (
  <div
    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
    aria-hidden="true"
  >
    <div
      className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-600 to-indigo-600 opacity-25 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
      style={{
        clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      }}
    />
  </div>
);

// Floating element decoration
const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 right-[15%] w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div className="absolute top-1/3 left-[15%] w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-1/4 right-1/3 w-28 h-28 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
  </div>
);

// Feature cards
const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 animate-fadeInUp" style={{ animationDelay: delay }}>
    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
      <Icon className="w-5 h-5 text-blue-600" />
    </div>
    <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative isolate min-h-screen flex items-center" id="hero">
      {/* Background Effects */}
      <CloudInfrastructureIllustration />
      <BackgroundGradient />
      <BackgroundGradient2 />
      <FloatingElements />

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex justify-center mb-6">
            <div className="relative rounded-full pl-4 pr-5 py-1.5 text-sm leading-6 text-gray-700 font-medium ring-1 ring-gray-900/10 hover:ring-gray-900/20 flex items-center space-x-2">
              <span className="absolute inset-0 animate-pulse rounded-full bg-blue-50 opacity-50"></span>
              <div className="relative flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
                <span>{t('hero.badge')}</span>
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl animate-fadeInUp">
              {t('hero.title')}{' '}
              <span className="gradient-text whitespace-nowrap">
                {t('hero.subtitle')}
              </span>
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600 animate-fadeInUp animation-delay-100">
              {t('hero.description')}
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6 animate-fadeInUp animation-delay-200">
              <Link
                to="contact"
                className="btn-primary hover-lift flex items-center gap-2"
                smooth={true}
                duration={500}
                aria-label={t('hero.cta.primary')}
              >
                {t('hero.cta.primary')}
                <FiMessageSquare className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                to="services"
                className="text-sm font-medium leading-6 text-gray-900 hover:text-blue-600 transition-colors flex items-center group"
                smooth={true}
                duration={500}
                aria-label={t('hero.cta.secondary')}
              >
                {t('hero.cta.secondary')} 
                <FiArrowRight className="ml-1 transition-transform group-hover:translate-x-1 w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            <FeatureCard 
              icon={FiCloud} 
              title={t('hero.features.cloud.title')} 
              description={t('hero.features.cloud.description')}
              delay="0.3s"
            />
            <FeatureCard 
              icon={FiCode} 
              title={t('hero.features.development.title')} 
              description={t('hero.features.development.description')}
              delay="0.4s"
            />
            <FeatureCard 
              icon={FiMessageSquare} 
              title={t('hero.features.support.title')} 
              description={t('hero.features.support.description')}
              delay="0.5s"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
