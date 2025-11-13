import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useLanguage } from '../contexts/LanguageContext';

interface ImpressumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ImpressumModal({ isOpen, onClose }: ImpressumModalProps) {
  const { t } = useLanguage();

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6 max-h-[90vh] overflow-y-auto">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-display font-bold leading-6 text-brand-900"
                    >
                      {t('impressum.title')}
                    </Dialog.Title>
                    <div className="mt-8 text-left space-y-8">
                      <div>
                        <h4 className="text-lg font-semibold text-brand-900 mb-2">
                          {t('impressum.company')}
                        </h4>
                        <p className="text-brand-600 whitespace-pre-line">
                          {t('impressum.company.name')}
                          {'\n'}
                          {t('impressum.company.address')}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-brand-900 mb-2">
                          {t('impressum.contact')}
                        </h4>
                        <p className="text-brand-600 whitespace-pre-line">
                          {t('impressum.contact.email')}
                          {'\n'}
                          {t('impressum.contact.phone')}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-brand-900 mb-2">
                          {t('impressum.legal')}
                        </h4>
                        <p className="text-brand-600 whitespace-pre-line">
                          {t('impressum.legal.managing')}
                          {'\n\n'}
                          {t('impressum.legal.register')}
                          {'\n'}
                          {t('impressum.legal.register_court')}
                          {'\n'}
                          {t('impressum.legal.vat')}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-brand-900 mb-2">
                          {t('impressum.responsible')}
                        </h4>
                        <p className="text-brand-600 whitespace-pre-line">
                          {t('impressum.responsible.text')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 sm:mt-12">
                  <button
                    type="button"
                    className="glass-effect hover-lift w-full rounded-lg bg-blue-600 bg-opacity-90 px-3.5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all duration-300"
                    onClick={onClose}
                  >
                    {t('impressum.close')}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
