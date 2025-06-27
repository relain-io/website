import { useLanguage } from '../contexts/LanguageContext';

const getTechnologies = (t: (key: string) => string) => [
  {
    name: t('tech.public_cloud.name'),
    category: t('tech.public_cloud.category'),
    description: t('tech.public_cloud.description'),
    logos: [
      'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg',
      'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg'
    ],
    features: ['AWS', 'Azure', 'Google Cloud'],
  },
  {
    name: t('tech.container.name'),
    category: t('tech.container.category'),
    description: t('tech.container.description'),
    logos: [
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg',
      'https://upload.wikimedia.org/wikipedia/commons/3/3a/OpenShift-LogoType.svg'
    ],
    features: ['Kubernetes', 'OpenShift', 'Rancher'],
  },
  {
    name: t('tech.devops.name'),
    category: t('tech.devops.category'),
    description: t('tech.devops.description'),
    logos: [
      'https://raw.githubusercontent.com/cncf/artwork/master/projects/argo/icon/color/argo-icon-color.svg',
      'https://raw.githubusercontent.com/cncf/artwork/master/projects/flux/icon/color/flux-icon-color.svg'
    ],
    features: ['ArgoCD', 'Flux', 'Tekton'],
  },
  {
    name: t('tech.infrastructure.name'),
    category: t('tech.infrastructure.category'),
    description: t('tech.infrastructure.description'),
    logos: [
      'https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg',
      'https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg'
    ],
    features: ['RHEL', 'VMware', 'KVM'],
  },
  {
    name: t('tech.network.name'),
    category: t('tech.network.category'),
    description: t('tech.network.description'),
    logos: [
      'https://upload.wikimedia.org/wikipedia/commons/8/83/Cisco_logo_blue_2016.svg',
      'https://upload.wikimedia.org/wikipedia/commons/5/5b/F5_Networks_logo.svg'
    ],
    features: ['SDN', 'Zero Trust', 'BGP'],
  },
  {
    name: t('tech.mlops.name'),
    category: t('tech.mlops.category'),
    description: t('tech.mlops.description'),
    logos: [
      'https://raw.githubusercontent.com/kubeflow/marketing-materials/main/logos/Kubeflow-Icon.svg',
      'https://raw.githubusercontent.com/mlflow/mlflow/master/assets/icon.svg'
    ],
    features: ['Kubeflow', 'MLflow', 'Seldon'],
  },
];

export default function Technologies() {
  const { t } = useLanguage();
  const technologies = getTechnologies(t);

  return (
    <div className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute -right-40 top-40 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      <div className="absolute -left-40 bottom-40 w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="section-title text-center mx-auto">
            {t('tech.heading')}
          </h2>
          <p className="section-subtitle text-center mx-auto">
            {t('tech.description')}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:mx-0 lg:mt-16 lg:max-w-none lg:grid-cols-3">
          {technologies.map((tech, idx) => (
            <div
              key={tech.name}
              className="card hover-lift rounded-2xl p-8 relative group animate-fadeInUp"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 rounded-full py-1 px-2">
                    {tech.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900 mb-3">
                  {tech.name}
                </h3>
                
                <p className="text-base leading-7 text-gray-600 mb-6">
                  {tech.description}
                </p>
                
                <div className="mt-auto">
                  <div className="flex gap-3 mb-6">
                    {tech.logos.map((logo, index) => (
                      <div 
                        key={index} 
                        className="h-14 w-14 flex items-center justify-center rounded-lg bg-white shadow-sm border border-gray-100 transition-transform group-hover:shadow-md"
                      >
                        <img
                          src={logo}
                          alt={`${tech.name} logo ${index + 1}`}
                          className="h-8 w-8 object-contain"
                        />
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {tech.features.map((feature, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full bg-gray-50 border border-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center p-4 rounded-xl bg-blue-50 max-w-sm mx-auto">
            <span className="text-gray-700 font-medium text-sm">
              Full stack expertise from infrastructure to application layer
            </span>
          </div>
        </div>
      </div>
      <div className="section-divider" />
    </div>
  );
}
