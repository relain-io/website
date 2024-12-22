document.addEventListener('DOMContentLoaded', () => {
    let currentLang = localStorage.getItem('language') || 'en';
    updateLanguage(currentLang);
    updateButtonText(currentLang);
});

function updateButtonText(lang) {
    const button = document.getElementById('language-switcher');
    button.textContent = lang === 'en' ? 'DE' : 'EN';
}

function updateLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
    updateButtonText(lang);

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.dataset.i18n;
        const keys = key.split('.');
        let translation = translations[lang];
        
        for (const k of keys) {
            translation = translation[k];
        }
        
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
}

function toggleLanguage() {
    const currentLang = localStorage.getItem('language') || 'en';
    const newLang = currentLang === 'en' ? 'de' : 'en';
    updateLanguage(newLang);
}