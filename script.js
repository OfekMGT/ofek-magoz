const languageButton = document.querySelector('.language-toggle');
const heroVisual = document.querySelector('.hero-visual');
const translatableElements = document.querySelectorAll('[data-en][data-he]');
const yearElement = document.querySelector('.footer-year');

function setLanguage(language) {
  const isHebrew = language === 'he';
  document.documentElement.lang = isHebrew ? 'he' : 'en';
  document.documentElement.dir = isHebrew ? 'rtl' : 'ltr';

  for (const element of translatableElements) {
    element.textContent = element.dataset[language];
  }

  languageButton.setAttribute('aria-pressed', String(isHebrew));
  languageButton.setAttribute('aria-label', isHebrew ? 'החלפת שפה' : 'Switch language');
  languageButton.querySelector('.toggle-label').textContent = isHebrew ? 'English' : 'עברית';
  heroVisual.setAttribute('aria-label', isHebrew ? 'תקריב של לוח מעגלים אלקטרוני' : 'Close-up of an electronic circuit board');
  localStorage.setItem('ofek-portfolio-language', language);
}

languageButton.addEventListener('click', () => {
  setLanguage(document.documentElement.lang === 'he' ? 'en' : 'he');
});

yearElement.textContent = new Date().getFullYear();
setLanguage(localStorage.getItem('ofek-portfolio-language') || 'en');
