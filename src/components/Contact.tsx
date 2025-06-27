import { useState } from 'react';
import { FiMail, FiPhone, FiSend, FiCheck } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', company: '', message: '' });
      }, 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="relative py-16 sm:py-20 overflow-hidden" id="contact">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto mb-12">
          <h2 className="section-title text-center mx-auto">
            {t('contact.heading')}
          </h2>
          <p className="section-subtitle text-center mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start animate-fadeInUp">
          {/* Contact Information */}
          <div className="relative">
            <div className="card rounded-2xl p-8 space-y-8">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500 rounded-full opacity-10"></div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('contact.location')}
                </h3>
                <p className="text-gray-600 whitespace-pre-line">
                  {t('contact.location.address')}
                </p>
              </div>
              
              <div className="space-y-6 mt-8">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 shadow-sm">
                    <FiMail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{t('contact.email')}</p>
                    <a href="mailto:info@relain.io" className="text-gray-600 hover:text-blue-600 transition-colors">
                      info@relain.io
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 shadow-sm">
                    <FiPhone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{t('contact.phone')}</p>
                    <a href="tel:+4989123456789" className="text-gray-600 hover:text-blue-600 transition-colors">
                      +49 89 123 456 789
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 mt-8 border-t border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <p className="text-sm text-gray-600">{t('contact.response_time')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card rounded-2xl p-8 shadow-lg border border-gray-100 animate-fadeInUp animation-delay-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder={t('contact.form.name.placeholder')}
                    required
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder={t('contact.form.email.placeholder')}
                    required
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.company')}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder={t('contact.form.company.placeholder')}
                  disabled={isSubmitting || isSubmitted}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder={t('contact.form.message.placeholder')}
                  required
                  disabled={isSubmitting || isSubmitted}
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full flex items-center justify-center gap-2 btn-primary hover-lift px-8 py-3 text-sm font-medium text-white transition-all duration-300 ${isSubmitted ? 'bg-green-600' : ''} ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
                >
                  {isSubmitted ? (
                    <>
                      <FiCheck className="w-4 h-4" />
                      {t('contact.form.submitted')}
                    </>
                  ) : isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('contact.form.submitting')}
                    </>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4" />
                      {t('contact.form.submit')}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="section-divider" />
    </div>
  );
}
