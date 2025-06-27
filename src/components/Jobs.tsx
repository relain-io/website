import { FiArrowRight, FiMapPin, FiClock, FiCheck } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';

interface JobPosition {
  title: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

const getJobs = (t: (key: string, options?: { returnObjects: boolean }) => any) => [
  {
    title: t('jobs.cloud.title'),
    description: t('jobs.cloud.description'),
    location: t('jobs.remote'),
    type: t('jobs.fulltime'),
    requirements: t('jobs.cloud.requirements', { returnObjects: true }),
  },
  {
    title: t('jobs.devops.title'),
    description: t('jobs.devops.description'),
    location: t('jobs.remote'),
    type: t('jobs.fulltime'),
    requirements: t('jobs.devops.requirements', { returnObjects: true }),
  },
  {
    title: t('jobs.cloud_solutions_architect.title'),
    description: t('jobs.cloud_solutions_architect.description'),
    location: t('jobs.munich'),
    type: t('jobs.fulltime'),
    requirements: t('jobs.cloud_solutions_architect.requirements', { returnObjects: true }),
  },
];

export default function Jobs() {
  const { t } = useLanguage();
  const jobs = getJobs(t);

  return (
    <div className="relative py-16 sm:py-20 overflow-hidden" id="jobs">
      {/* Background elements */}
      <div className="absolute -left-20 top-40 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-25" />
      <div className="absolute -right-20 bottom-40 w-72 h-72 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-25" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto mb-12">
          <h2 className="section-title text-center mx-auto">
            {t('jobs.heading')}
          </h2>
          <p className="section-subtitle text-center mx-auto">
            {t('jobs.description')}
          </p>
        </div>

        <div className="grid gap-8 mx-auto animate-fadeInUp">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="card hover-lift rounded-2xl p-0 transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                          <FiMapPin className="w-3.5 h-3.5" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
                          <FiClock className="w-3.5 h-3.5" />
                          {job.type}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-6">
                        {job.description}
                      </p>
                      
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
                          {t('jobs.requirements')}
                        </h4>
                        <ul className="space-y-2">
                          {job.requirements.map((requirement, idx) => (
                            <li key={idx} className="flex gap-2 text-gray-600 text-sm">
                              <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <span>{requirement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex-shrink-0 mt-6 lg:mt-0">
                      <a
                        href={`mailto:info@relain.io?subject=Application for ${job.title}`}
                        className="inline-flex items-center gap-2 btn-primary hover-lift px-6 py-3 text-sm font-medium"
                      >
                        {t('jobs.apply')}
                        <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fadeInUp animation-delay-300">
          <p className="text-gray-600 mb-4">
            {t('jobs.open_positions')}
          </p>
          <a
            href="mailto:careers@relain.io"
            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            careers@relain.io <FiArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
      <div className="section-divider" />
    </div>
  );
}
