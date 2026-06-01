const fs = require('fs');
const files = ['blog.html', 'pricing.html', 'success-story.html'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Replace header navigation links
  content = content.replace('<span>БНСУ-д Суралцах Гүүр</span>', '<span data-translate="logoTagline">БНСУ-д Суралцах Гүүр</span>');
  content = content.replace('<a class="skip-link" href="#main-content">Контент руу үсрэх</a>', '<a class="skip-link" href="#main-content" data-translate="skipLink">Контент руу үсрэх</a>');
  content = content.replace('<li><a href="index.html" class="nav-link">Нүүр</a></li>', '<li><a href="index.html" class="nav-link" data-translate="navHome">Нүүр</a></li>');
  content = content.replace('Үйлчилгээ <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>', '<span data-translate="navServices">Үйлчилгээ</span> <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>');
  content = content.replace('<li><a href="index.html#services">Үйлчилгээний товч</a></li>', '<li><a href="index.html#services" data-translate="dropServiceOverview">Үйлчилгээний товч</a></li>');
  content = content.replace('<li><a href="service-university.html">Сургуулийн үйлчилгээ</a></li>', '<li><a href="service-university.html" data-translate="dropUniPage">Сургуулийн үйлчилгээ</a></li>');
  content = content.replace('<li><a href="service-visa.html">Визийн үйлчилгээ</a></li>', '<li><a href="service-visa.html" data-translate="dropVisaPage">Визийн үйлчилгээ</a></li>');
  content = content.replace('<li><a href="service-housing.html">Байрны үйлчилгээ</a></li>', '<li><a href="service-housing.html" data-translate="dropHousingPage">Байрны үйлчилгээ</a></li>');
  content = content.replace('<li><a href="service-living.html">Амьдралын үйлчилгээ</a></li>', '<li><a href="service-living.html" data-translate="dropLivingPage">Амьдралын үйлчилгээ</a></li>');
  
  content = content.replace('<li><a href="index.html#dashboard" class="nav-link">Интерактив Булан</a></li>', '<li><a href="index.html#dashboard" class="nav-link" data-translate="navDashboard">Интерактив Булан</a></li>');
  content = content.replace('<li><a href="index.html#booking" class="nav-link">Зөвлөгөө Авах</a></li>', '<li><a href="index.html#booking" class="nav-link" data-translate="navBooking">Зөвлөгөө Авах</a></li>');
  content = content.replace('<li><a href="index.html#faq" class="nav-link">Асуулт Хариулт</a></li>', '<li><a href="index.html#faq" class="nav-link" data-translate="navFaq">Асуулт Хариулт</a></li>');
  content = content.replace('<li><a href="success-story.html" class="nav-link">Амжилтын түүх</a></li>', '<li><a href="success-story.html" class="nav-link" data-translate="navStory">Амжилтын түүх</a></li>');
  content = content.replace('<li><a href="pricing.html" class="nav-link">Үнэ</a></li>', '<li><a href="pricing.html" class="nav-link" data-translate="navPricing">Үнэ</a></li>');
  content = content.replace('<li><a href="blog.html" class="nav-link">Блог</a></li>', '<li><a href="blog.html" class="nav-link" data-translate="navBlog">Блог</a></li>');
  
  // missing titles and headers
  content = content.replace('<title>K-Study Bridge | Блог</title>', '<title data-translate="titleBlog">K-Study Bridge | Блог</title>');
  content = content.replace('<title>K-Study Bridge | Үнийн Багц</title>', '<title data-translate="titlePricing">K-Study Bridge | Үнийн Багц</title>');
  content = content.replace('<title>K-Study Bridge | Амжилтын Түүх</title>', '<title data-translate="titleStory">K-Study Bridge | Амжилтын Түүх</title>');

  content = content.replace('<h1>Таны хэрэгцээнд нийцсэн үйлчилгээний үнэ</h1>', '<h1 data-translate="priceHeroTitle">Таны хэрэгцээнд нийцсэн үйлчилгээний үнэ</h1>');
  content = content.replace('<p>Сургалтын, визний, байрны болон амьдралын дэмжлэгийн багцуудын онцлох давуу тал, төлбөрийн нөхцөл, үед тохирсон шийдлүүд.</p>', '<p data-translate="priceHeroSubtitle">Сургалтын, визний, байрны болон амьдралын дэмжлэгийн багцуудын онцлох давуу тал, төлбөрийн нөхцөл, үед тохирсон шийдлүүд.</p>');
  content = content.replace(/<span class="price-period">\(Нэг удаагийн төлбөр\)<\/span>/g, '<span class="price-period" data-translate="pricePeriod">(Нэг удаагийн төлбөр)</span>');
  
  content = content.replace('<h1>Манай оюутнуудын бодит амжилт</h1>', '<h1 data-translate="storyHeroTitle">Манай оюутнуудын бодит амжилт</h1>');
  
  // Write back
  fs.writeFileSync(file, content, 'utf8');
});

// Update app.min.js with these new keys
const jsPath = 'js/app.min.js';
let jsContent = fs.readFileSync(jsPath, 'utf8');

const newTranslations = {
  en: {
    titleBlog: "K-Study Bridge | Blog",
    titlePricing: "K-Study Bridge | Pricing Packages",
    titleStory: "K-Study Bridge | Success Stories",
    priceHeroTitle: "Service Packages Tailored for You",
    priceHeroSubtitle: "Highlights, terms, and custom solutions for our admission, visa, housing, and integration packages.",
    pricePeriod: "(One-time payment)",
    storyHeroTitle: "Real Success Stories from Our Students",
    skipLink: "Skip to Content"
  },
  mn: {
    titleBlog: "K-Study Bridge | Блог",
    titlePricing: "K-Study Bridge | Үнийн Багц",
    titleStory: "K-Study Bridge | Амжилтын Түүх",
    priceHeroTitle: "Таны хэрэгцээнд нийцсэн үйлчилгээний үнэ",
    priceHeroSubtitle: "Сургалтын, визний, байрны болон амьдралын дэмжлэгийн багцуудын онцлох давуу тал, төлбөрийн нөхцөл, үед тохирсон шийдлүүд.",
    pricePeriod: "(Нэг удаагийн төлбөр)",
    storyHeroTitle: "Манай оюутнуудын бодит амжилт",
    skipLink: "Контент руу үсрэх"
  },
  ko: {
    titleBlog: "K-Study Bridge | 블로그",
    titlePricing: "K-Study Bridge | 가격 플랜",
    titleStory: "K-Study Bridge | 성공 사례",
    priceHeroTitle: "맞춤형 서비스 가격 플랜",
    priceHeroSubtitle: "유학, 비자, 숙소, 생활 지원 플랜의 주요 장점과 결제 조건, 맞춤형 솔루션.",
    pricePeriod: "(일시불 결제)",
    storyHeroTitle: "학생들의 실제 성공 사례",
    skipLink: "콘텐츠로 건너뛰기"
  }
};

function injectTranslations(langCode, newObj, jsCode) {
  let entries = Object.keys(newObj).map(k => `"${k}":"${newObj[k]}"`).join(',');
  return jsCode.replace(new RegExp(`${langCode}:\\{`), `${langCode}:{${entries},`);
}

jsContent = injectTranslations('en', newTranslations.en, jsContent);
jsContent = injectTranslations('mn', newTranslations.mn, jsContent);
jsContent = injectTranslations('ko', newTranslations.ko, jsContent);

fs.writeFileSync(jsPath, jsContent, 'utf8');

console.log("Nav and titles replaced, translations added.");
