import { Link } from 'react-scroll';
import { useLanguage } from '../contexts/LanguageContext';

const getServices = (t: (key: string, options?: { returnObjects: boolean }) => any) => [
  {
    name: t('services.cloud.name'),
    description: t('services.cloud.description'),
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
        />
      </svg>
    ),
    features: t('services.cloud.features', { returnObjects: true }) as string[],
  },
  {
    name: t('services.containers.name'),
    description: t('services.containers.description'),
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
        />
      </svg>
    ),
    features: t('services.containers.features', { returnObjects: true }) as string[],
  },
  {
    name: t('services.devops.name'),
    description: t('services.devops.description'),
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    features: t('services.devops.features', { returnObjects: true }) as string[],
  },
  {
    name: t('services.security.name'),
    description: t('services.security.description'),
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    features: t('services.security.features', { returnObjects: true }) as string[],
  },
];

export default function Services() {
  const { t } = useLanguage();
  const services = getServices(t);

  return (
    <div className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="section-title text-center mx-auto">
            {t('services.heading')}
          </h2>
          <p className="section-subtitle text-center mx-auto">
            {t('services.description')}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {services.map((service, idx) => (
            <div 
              key={service.name} 
              className="card hover-lift rounded-2xl p-8 animate-fadeInUp"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 text-blue-600">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold leading-7 text-gray-900">
                  {service.name}
                </h3>
                
                <p className="mt-3 text-base leading-7 text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <div className="mt-auto">
                  <ul className="space-y-3">
                    {service.features.map((feature: string, index: number) => (
                      <li key={index} className="flex gap-x-3 text-sm text-gray-600">
                        <svg
                          className="h-5 w-5 flex-none text-blue-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="contact"
            className="btn-primary hover-lift inline-block animate-fadeInUp animation-delay-300"
            smooth={true}
            duration={500}
          >
            {t('hero.cta.primary')}
          </Link>
        </div>
      </div>
      <div className="section-divider" />
    </div>
  );
}
