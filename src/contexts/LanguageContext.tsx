import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, options?: { returnObjects: boolean }) => any;
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.technologies': 'Technologies',
    'nav.jobs': 'Jobs',
    'nav.contact': 'Contact',
    'lang.switch': 'DE',
    // Technologies Section
    'tech.title': 'Technologies',
    'tech.heading': 'Cloud Native Excellence',
    'tech.description': 'We provide end-to-end solutions across the entire stack, from datacenter infrastructure to cutting-edge cloud-native technologies.',
    
    'tech.public_cloud.name': 'Public Cloud',
    'tech.public_cloud.category': 'Infrastructure',
    'tech.public_cloud.description': 'Expert implementation and management of AWS, Azure and GCP with a focus on enterprise-grade solutions.',
    
    'tech.container.name': 'Container Platforms',
    'tech.container.category': 'Orchestration',
    'tech.container.description': 'Enterprise container orchestration with Kubernetes and OpenShift for secure, scalable workloads.',
    
    'tech.devops.name': 'DevOps & GitOps',
    'tech.devops.category': 'Automation',
    'tech.devops.description': 'Modern development practices with GitOps workflows for reliable, automated deployments.',
    
    'tech.infrastructure.name': 'Infrastructure',
    'tech.infrastructure.category': 'Systems',
    'tech.infrastructure.description': 'High-performance Enterprise Linux systems and virtualization solutions for reliable infrastructure.',
    
    'tech.network.name': 'Network & Security',
    'tech.network.category': 'Infrastructure',
    'tech.network.description': 'Advanced networking solutions with security built-in for robust enterprise infrastructure.',
    
    'tech.mlops.name': 'ML/AI Ops',
    'tech.mlops.category': 'Machine Learning',
    'tech.mlops.description': 'Streamlined MLOps and AIOps pipelines for scalable machine learning in production.',
    // Hero Section
    'hero.badge': 'Cloud Infrastructure Solutions',
    'hero.title': 'Modern Cloud Infrastructure',
    'hero.subtitle': 'Made Simple',
    'hero.description': 'We help businesses build and operate modern cloud infrastructure with Kubernetes and cloud-native technologies. Our expertise ensures your applications run efficiently, securely, and reliably at scale.',
    'hero.cta.primary': 'Contact',
    'hero.cta.secondary': 'Learn more',
    'hero.features.cloud.title': 'Cloud Infrastructure',
    'hero.features.cloud.description': 'Scalable, secure cloud solutions on AWS, Azure, and GCP',
    'hero.features.development.title': 'Custom Development',
    'hero.features.development.description': 'Modern cloud-native application development',
    'hero.features.support.title': '24/7 Support',
    'hero.features.support.description': 'Professional monitoring and management',
    // About Section
    'about.title': 'About',
    'about.heading': 'About relain',
    'about.description': 'We bridge the gap between business goals and technical implementation. With expertise spanning cloud infrastructure, software development, and managed operations, we deliver tailored solutions for organizations of all sizes.',
    
    'about.services.strategic.title': 'Strategic Consulting',
    'about.services.strategic.description': 'We partner with you to develop technology strategies that drive growth, optimize costs, and improve efficiency. Our consultants bring industry expertise to help you make informed decisions.',
    
    'about.services.technical.title': 'Technical Implementation',
    'about.services.technical.description': 'From cloud infrastructure to custom software development, we deliver scalable, secure solutions aligned with your business objectives.',
    
    'about.services.operations.title': 'Managed Operations',
    'about.services.operations.description': 'Our team provides ongoing support, monitoring, and maintenance to keep your systems running smoothly 24/7.',
    
    'about.services.training.title': 'Training & Knowledge Transfer',
    'about.services.training.description': 'We empower your team through workshops, documentation, and hands-on training, building the capabilities you need for long-term success.',
    
    'about.stats.experience': 'Years Combined Experience',
    'about.stats.projects': 'Successful Projects',
    'about.stats.support': 'Support & Operations',
    // Services Section
    'services.title': 'Services',
    'services.heading': 'Cloud-Native Solutions',
    'services.description': 'We provide comprehensive cloud infrastructure services tailored to help your business thrive in today\'s digital landscape.',
    
    'services.cloud.name': 'Cloud Infrastructure',
    'services.cloud.description': 'Scalable, secure cloud infrastructure built on industry-leading platforms and best practices.',
    'services.cloud.features': [
      'Multi-cloud and hybrid cloud architecture',
      'Infrastructure as Code (IaC)',
      'High availability design',
      'Disaster recovery planning',
      'Cost optimization strategies'
    ],

    'services.containers.name': 'Container Orchestration',
    'services.containers.description': 'Modernize your application infrastructure with expert Kubernetes implementation and management.',
    'services.containers.features': [
      'Kubernetes cluster setup and management',
      'Container migration strategies',
      'CI/CD pipeline integration',
      'Monitoring and observability solutions',
      'Security hardening'
    ],

    'services.devops.name': 'DevOps Automation',
    'services.devops.description': 'Streamline your development lifecycle with automated workflows and modern DevOps practices.',
    'services.devops.features': [
      'CI/CD pipeline design and implementation',
      'Infrastructure automation',
      'Configuration management',
      'Release management',
      'Performance optimization'
    ],

    'services.security.name': 'Cloud Security',
    'services.security.description': 'Protect your cloud infrastructure with comprehensive security solutions and industry best practices.',
    'services.security.features': [
      'Security assessment and auditing',
      'Identity and access management',
      'Network security architecture',
      'Compliance implementation',
      'Security monitoring and incident response'
    ],
    // Jobs Section
    'jobs.title': 'Jobs',
    'jobs.heading': 'Join Our Team',
    'jobs.description': 'We\'re looking for talented professionals to join our growing team. Explore our current openings below.',
    'jobs.location': 'Location',
    'jobs.type': 'Type',
    'jobs.apply': 'Apply Now',
    'jobs.remote': 'Remote',
    'jobs.fulltime': 'Full-time',
    'jobs.munich': 'Munich, Germany',
    'jobs.open_positions': 'Don\'t see a role that fits? Contact us anyway - we\'re always looking for talented people!',
    'jobs.requirements': 'Requirements',
    
    'jobs.cloud.title': 'Cloud Infrastructure Engineer',
    'jobs.cloud.description': 'Join us to design and implement scalable cloud solutions that help our clients succeed.',
    'jobs.cloud.requirements': [
      'Experience with major cloud providers (AWS, Azure, GCP)',
      'Strong knowledge of Infrastructure as Code',
      'Experience with Kubernetes and container technologies',
      'Understanding of networking and security concepts',
      'Excellent communication skills'
    ],

    'jobs.devops.title': 'DevOps Engineer',
    'jobs.devops.description': 'Help us build and maintain CI/CD-Pipelines and automation workflows for our clients.',
    'jobs.devops.requirements': [
      'Experience with CI/CD tools and practices',
      'Knowledge of containerization and orchestration',
      'Scripting and automation expertise',
      'Experience with monitoring and observability tools',
      'Team-oriented mindset'
    ],
    
    'jobs.cloud_solutions_architect.title': 'Cloud Solutions Architect',
    'jobs.cloud_solutions_architect.description': 'Design scalable, secure cloud-native solutions for our enterprise clients.',
    'jobs.cloud_solutions_architect.requirements': [
      'Strong background in cloud architecture and design',
      'Experience with multi-cloud environments',
      'Knowledge of cloud security best practices',
      'Excellent communication and consulting skills',
      'Project management experience'
    ],

    // Contact Section
    'contact.title': 'Contact',
    'contact.heading': 'Get in Touch',
    'contact.description': 'Ready to transform your cloud infrastructure? Reach out to us today to start the conversation.',
    'contact.form.name': 'Name',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Tell us about your project',
    'contact.form.company': 'Company',
    'contact.form.company.placeholder': 'Your company name',
    'contact.form.submit': 'Send Message',
    'contact.form.submitted': 'Message Sent',
    'contact.form.submitting': 'Sending...',
    'contact.location': 'Our Location',
    'contact.location.address': 'Südliche Münchner Str. 60c\n82031 Grünwald\nGermany',
    'contact.email': 'Email Us',
    'contact.phone': 'Call Us',
    'contact.response_time': 'We typically respond within 24 hours',

    // Footer Section
    'footer.company': 'Company',
    'footer.company_description': 'We are a cloud infrastructure consulting company specializing in modern, scalable solutions for businesses of all sizes.',
    'footer.about': 'About',
    'footer.jobs': 'Jobs',
    'footer.contact': 'Contact',
    'footer.services': 'Services',
    'footer.cloud': 'Cloud Infrastructure',
    'footer.containers': 'Container Orchestration',
    'footer.devops': 'DevOps Automation',
    'footer.security': 'Cloud Security',
    'footer.technologies': 'Technologies',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',
    'footer.rights': 'All rights reserved.',
    'footer.impressum': 'Legal Notice',
    'footer.quick_links': 'Quick Links',
    'impressum.title': 'Legal Notice',
    'impressum.company': 'Company Information',
    'impressum.company.name': 'Relain GmbH',
    'impressum.company.address': 'Südliche Münchner Str. 60c\n82031 Grünwald\nGermany',
    'impressum.contact': 'Contact Information',
    'impressum.contact.email': 'E-Mail: info@relain.io',
    'impressum.contact.phone': 'Phone: +49 89 54197499',
    'impressum.legal': 'Legal Details',
    'impressum.legal.managing': 'Managing Directors: Philipp Müller, Daniel Sel',
    'impressum.legal.register': 'Commercial Register: HRB 291534',
    'impressum.legal.register_court': 'Register Court: Amtsgericht München',
    'impressum.legal.vat': 'VAT ID: DE367277954',
    'impressum.responsible': 'Responsible for Content',
    'impressum.responsible.text': 'Responsible for content pursuant to § 55 Abs. 2 RStV:\Relain GmbH\nSüdliche Münchner Str. 60c\n82031 Grünwald\nGermany',
    'impressum.close': 'Close',
  },
  de: {
    'nav.home': 'Start',
    'nav.services': 'Leistungen',
    'nav.about': 'Über uns',
    'nav.technologies': 'Technologien',
    'nav.jobs': 'Jobs',
    'nav.contact': 'Kontakt',
    'lang.switch': 'EN',
    // Technologies Section
    'tech.title': 'Technologien',
    'tech.heading': 'Cloud Native Exzellenz',
    'tech.description': 'Wir bieten umfassende Lösungen für den gesamten Technologie-Stack, von der Rechenzentrumsinfrastruktur bis hin zu modernen Cloud-nativen Technologien.',
    
    'tech.public_cloud.name': 'Public Cloud',
    'tech.public_cloud.category': 'Infrastruktur',
    'tech.public_cloud.description': 'Professionelle Implementierung und Verwaltung von AWS, Azure und GCP mit Fokus auf Unternehmenslösungen.',
    
    'tech.container.name': 'Container-Plattformen',
    'tech.container.category': 'Orchestrierung',
    'tech.container.description': 'Enterprise Container-Orchestrierung mit Kubernetes und OpenShift für sichere, skalierbare Workloads.',
    
    'tech.devops.name': 'DevOps & GitOps',
    'tech.devops.category': 'Automatisierung',
    'tech.devops.description': 'Moderne Entwicklungspraktiken mit GitOps-Workflows für zuverlässige, automatisierte Deployments.',
    
    'tech.infrastructure.name': 'Infrastruktur',
    'tech.infrastructure.category': 'Systeme',
    'tech.infrastructure.description': 'Leistungsstarke Enterprise Linux-Systeme und Virtualisierungslösungen für zuverlässige Infrastruktur.',
    
    'tech.network.name': 'Netzwerk & Sicherheit',
    'tech.network.category': 'Infrastruktur',
    'tech.network.description': 'Fortschrittliche Netzwerklösungen mit integrierter Sicherheit für robuste Unternehmensinfrastruktur.',
    
    'tech.mlops.name': 'ML/AI Ops',
    'tech.mlops.category': 'Machine Learning',
    'tech.mlops.description': 'Optimierte MLOps und AIOps-Pipelines für skalierbare Machine-Learning-Anwendungen in der Produktion.',
    // Hero Section
    'hero.badge': 'Cloud Infrastruktur Lösungen',
    'hero.title': 'Moderne Cloud-Infrastruktur',
    'hero.subtitle': 'Einfach Umgesetzt',
    'hero.description': 'Wir unterstützen Unternehmen beim Aufbau und Betrieb moderner Cloud-Infrastruktur mit Kubernetes und Cloud-nativen Technologien. Unsere Expertise sorgt dafür, dass Ihre Anwendungen effizient, sicher und zuverlässig im großen Maßstab laufen.',
    'hero.cta.primary': 'Kontakt',
    'hero.cta.secondary': 'Mehr erfahren',
    'hero.features.cloud.title': 'Cloud-Infrastruktur',
    'hero.features.cloud.description': 'Skalierbare, sichere Cloud-Lösungen auf AWS, Azure und GCP',
    'hero.features.development.title': 'Individuelle Entwicklung',
    'hero.features.development.description': 'Moderne cloud-native Anwendungsentwicklung',
    'hero.features.support.title': '24/7 Support',
    'hero.features.support.description': 'Professionelles Monitoring und Management',
    // About Section
    'about.title': 'Über uns',
    'about.heading': 'Über relain',
    'about.description': 'Wir überbrücken die Lücke zwischen Geschäftszielen und technischer Umsetzung. Mit Expertise in Cloud-Infrastruktur, Softwareentwicklung und Betriebsmanagement liefern wir maßgeschneiderte Lösungen für Organisationen jeder Größe.',
    
    'about.services.strategic.title': 'Strategische Beratung',
    'about.services.strategic.description': 'Wir entwickeln gemeinsam mit Ihnen Technologiestrategien, die Wachstum fördern, Kosten optimieren und die Effizienz steigern. Unsere Berater bringen Branchenerfahrung mit, um Ihnen fundierte Entscheidungen zu ermöglichen.',
    
    'about.services.technical.title': 'Technische Umsetzung',
    'about.services.technical.description': 'Von Cloud-Infrastruktur bis zur individuellen Softwareentwicklung – wir liefern skalierbare, sichere Lösungen, die auf Ihre Geschäftsziele abgestimmt sind.',
    
    'about.services.operations.title': 'Betriebsmanagement',
    'about.services.operations.description': 'Unser Team bietet kontinuierliche Unterstützung, Überwachung und Wartung, damit Ihre Systeme rund um die Uhr reibungslos laufen.',
    
    'about.services.training.title': 'Schulung & Wissenstransfer',
    'about.services.training.description': 'Wir stärken Ihr Team durch Workshops, Dokumentation und praktische Schulungen und bauen die Fähigkeiten auf, die Sie für langfristigen Erfolg benötigen.',
    
    'about.stats.experience': 'Jahre Erfahrung',
    'about.stats.projects': 'Erfolgreiche Projekte',
    'about.stats.support': 'Support & Betrieb',
    // Services Section
    'services.title': 'Leistungen',
    'services.heading': 'Cloud-Native Lösungen',
    'services.description': 'Wir bieten umfassende Cloud-Infrastruktur-Dienste, die auf die Bedürfnisse Ihres Unternehmens in der heutigen digitalen Welt zugeschnitten sind.',
    
    'services.cloud.name': 'Cloud-Infrastruktur',
    'services.cloud.description': 'Skalierbare, sichere Cloud-Infrastruktur auf Basis führender Plattformen und bewährter Methoden.',
    'services.cloud.features': [
      'Multi-Cloud und Hybrid-Cloud-Architektur',
      'Infrastructure as Code (IaC)',
      'Hochverfügbarkeitsdesign',
      'Disaster-Recovery-Planung',
      'Kostenoptimierungsstrategien'
    ],

    'services.containers.name': 'Container-Orchestrierung',
    'services.containers.description': 'Modernisieren Sie Ihre Anwendungsinfrastruktur mit professioneller Kubernetes-Implementierung und -Management.',
    'services.containers.features': [
      'Kubernetes-Cluster-Setup und -Verwaltung',
      'Container-Migrationsstrategien',
      'CI/CD-Pipeline-Integration',
      'Monitoring- und Observability-Lösungen',
      'Sicherheitshärtung'
    ],

    'services.devops.name': 'DevOps-Automatisierung',
    'services.devops.description': 'Optimieren Sie Ihren Entwicklungszyklus mit automatisierten Workflows und modernen DevOps-Praktiken.',
    'services.devops.features': [
      'CI/CD-Pipeline-Design und -Implementierung',
      'Infrastruktur-Automatisierung',
      'Konfigurationsmanagement',
      'Release-Management',
      'Performance-Optimierung'
    ],

    'services.security.name': 'Cloud-Sicherheit',
    'services.security.description': 'Schützen Sie Ihre Cloud-Infrastruktur mit umfassenden Sicherheitslösungen und Branchenstandards.',
    'services.security.features': [
      'Sicherheitsbewertung und -Auditing',
      'Identitäts- und Zugriffsmanagement',
      'Netzwerksicherheitsarchitektur',
      'Compliance-Implementierung',
      'Sicherheitsüberwachung und Vorfallreaktion'
    ],
    // Jobs Section
    'jobs.title': 'Jobs',
    'jobs.heading': 'Werde Teil unseres Teams',
    'jobs.description': 'Wir suchen talentierte Fachkräfte für unser wachsendes Team. Entdecken Sie unsere aktuellen Stellenangebote.',
    'jobs.location': 'Standort',
    'jobs.type': 'Art',
    'jobs.apply': 'Jetzt Bewerben',
    'jobs.remote': 'Remote',
    'jobs.fulltime': 'Vollzeit',
    'jobs.munich': 'München, Deutschland',
    'jobs.open_positions': 'Keine passende Stelle dabei? Kontaktieren Sie uns trotzdem - wir suchen immer nach talentierten Personen!',
    'jobs.requirements': 'Anforderungen',
    
    'jobs.cloud.title': 'Cloud Infrastructure Engineer',
    'jobs.cloud.description': 'Gestalten und implementieren Sie skalierbare Cloud-Lösungen, die unseren Kunden zum Erfolg verhelfen.',
    'jobs.cloud.requirements': [
      'Erfahrung mit führenden Cloud-Anbietern (AWS, Azure, GCP)',
      'Fundierte Kenntnisse in Infrastructure as Code',
      'Erfahrung mit Kubernetes und Container-Technologien',
      'Verständnis von Netzwerk- und Sicherheitskonzepten',
      'Ausgezeichnete Kommunikationsfähigkeiten'
    ],

    'jobs.devops.title': 'DevOps Engineer',
    'jobs.devops.description': 'Helfen Sie uns, CI/CD-Pipelines und Automatisierungs-Workflows für unsere Kunden zu entwickeln und zu warten.',
    'jobs.devops.requirements': [
      'Erfahrung mit CI/CD-Tools und -Praktiken',
      'Kenntnisse in Containerisierung und Orchestrierung',
      'Expertise in Scripting und Automatisierung',
      'Erfahrung mit Monitoring- und Observability-Tools',
      'Teamorientierte Denkweise'
    ],
    
    'jobs.cloud_solutions_architect.title': 'Cloud Solutions Architect',
    'jobs.cloud_solutions_architect.description': 'Entwerfen Sie skalierbare, sichere Cloud-native Lösungen für unsere Unternehmenskunden.',
    'jobs.cloud_solutions_architect.requirements': [
      'Fundierte Kenntnisse in Cloud-Architektur und -Design',
      'Erfahrung mit Multi-Cloud-Umgebungen',
      'Kenntnisse der Cloud-Sicherheit nach Best Practices',
      'Hervorragende Kommunikations- und Beratungsfähigkeiten',
      'Projektmanagement-Erfahrung'
    ],

    // Contact Section
    'contact.title': 'Kontakt',
    'contact.heading': 'Kontaktieren Sie uns',
    'contact.description': 'Bereit, Ihre Cloud-Infrastruktur zu transformieren? Sprechen Sie uns noch heute an, um das Gespräch zu beginnen.',
    'contact.form.name': 'Name',
    'contact.form.name.placeholder': 'Ihr Name',
    'contact.form.email': 'E-Mail',
    'contact.form.email.placeholder': 'ihre@email.com',
    'contact.form.message': 'Nachricht',
    'contact.form.message.placeholder': 'Erzählen Sie uns von Ihrem Projekt',
    'contact.form.company': 'Unternehmen',
    'contact.form.company.placeholder': 'Ihr Unternehmensname',
    'contact.form.submit': 'Nachricht Senden',
    'contact.form.submitted': 'Nachricht Gesendet',
    'contact.form.submitting': 'Wird gesendet...',
    'contact.location': 'Unser Standort',
    'contact.location.address': 'Südliche Münchner Str. 60c\n82031 Grünwald\nDeutschland',
    'contact.email': 'E-Mail',
    'contact.phone': 'Telefon',
    'contact.response_time': 'Wir antworten in der Regel innerhalb von 24 Stunden',

    // Footer Section
    'footer.company': 'Unternehmen',
    'footer.company_description': 'Wir sind ein Beratungsunternehmen für Cloud-Infrastruktur, das auf moderne, skalierbare Lösungen für Unternehmen jeder Größe spezialisiert ist.',
    'footer.about': 'Über uns',
    'footer.jobs': 'Karriere',
    'footer.contact': 'Kontakt',
    'footer.services': 'Leistungen',
    'footer.cloud': 'Cloud-Infrastruktur',
    'footer.containers': 'Container-Orchestrierung',
    'footer.devops': 'DevOps-Automatisierung',
    'footer.security': 'Cloud-Sicherheit',
    'footer.technologies': 'Technologien',
    'footer.legal': 'Rechtliches',
    'footer.privacy': 'Datenschutz',
    'footer.terms': 'AGB',
    'footer.cookies': 'Cookie-Richtlinie',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.impressum': 'Impressum',
    'footer.quick_links': 'Schnellzugriff',
    'impressum.title': 'Impressum',
    'impressum.company': 'Angaben gemäß § 5 TMG',
    'impressum.company.name': 'Relain GmbH',
    'impressum.company.address': 'Südliche Münchner Str. 60c\n82031 Grünwald\nDeutschland',
    'impressum.contact': 'Kontakt',
    'impressum.contact.email': 'E-Mail: info@relain.io',
    'impressum.contact.phone': 'Telefon: +49 89 123 456 789',
    'impressum.legal': 'Rechtliche Angaben',
    'impressum.legal.managing': 'Geschäftsführer: Philipp Müller, Daniel Sel',
    'impressum.legal.register': 'Handelsregister: HRB 291534',
    'impressum.legal.register_court': 'Registergericht: Amtsgericht München',
    'impressum.legal.vat': 'USt-IdNr.: DE367277954',
    'impressum.responsible': 'Verantwortlich für den Inhalt',
    'impressum.responsible.text': 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:\nRelain GmbH\nSüdliche Münchner Str. 60c\n82031 Grünwald\nDeutschland',
    'impressum.close': 'Schließen',
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'de',
  setLanguage: () => {},
  t: () => '',
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('de');

  const t = (key: string, options?: { returnObjects: boolean }): any => {
    const translation = translations[language][key as keyof typeof translations.en];
    if (options?.returnObjects) {
      return translation || [];
    }
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
