const fs = require('fs');
const path = require('path');

const basePath = path.join('c:', 'Users', 'suugi', 'OneDrive', 'Desktop', 'Kstudy-master', 'Kstudy-master');
const blogPath = path.join(basePath, 'blog.html');
const pricingPath = path.join(basePath, 'pricing.html');
const storyPath = path.join(basePath, 'success-story.html');
const jsPath = path.join(basePath, 'js', 'app.min.js');

let blogContent = fs.readFileSync(blogPath, 'utf8');
let priceContent = fs.readFileSync(pricingPath, 'utf8');
let storyContent = fs.readFileSync(storyPath, 'utf8');
let jsContent = fs.readFileSync(jsPath, 'utf8');

// Update blog.html
blogContent = blogContent.replace('<p class="hero-badge">✍️ Блог</p>', '<p class="hero-badge" data-translate="blogBadge">✍️ Блог</p>');
blogContent = blogContent.replace('<p>&copy; 2026 K-Study Bridge. Блогын шинэ санаа, бодит туршлага.</p>', '<p data-translate="blogFooterText">&copy; 2026 K-Study Bridge. Блогын шинэ санаа, бодит туршлага.</p>');

// Update pricing.html
priceContent = priceContent.replace('<p class="hero-badge">💼 Үнийн багц</p>', '<p class="hero-badge" data-translate="priceBadge">💼 Үнийн багц</p>');
priceContent = priceContent.replace('<p style="font-weight: 600; font-size: 16px; margin-bottom: 10px; color: var(--accent-primary);">Аль багцыг сонгох нь зүйтэй вэ?</p>', '<p style="font-weight: 600; font-size: 16px; margin-bottom: 10px; color: var(--accent-primary);"><span data-translate="priceFaq3Q">Аль багцыг сонгох нь зүйтэй вэ?</span></p>');
priceContent = priceContent.replace('<p style="font-size: 14px; color: var(--text-secondary); line-height: 1.6;">Ихэнх оюутнууд "Professional" багцыг сонгодог. Энэ нь үнэ болон үйлчилгээний хамгийн зөв, тэнцвэртэй сонголт юм.</p>', '<p style="font-size: 14px; color: var(--text-secondary); line-height: 1.6;"><span data-translate="priceFaq3A">Ихэнх оюутнууд "Professional" багцыг сонгодог. Энэ нь үнэ болон үйлчилгээний хамгийн зөв, тэнцвэртэй сонголт юм.</span></p>');
priceContent = priceContent.replace('<p style="font-weight: 600; font-size: 16px; margin-bottom: 10px; color: var(--accent-primary);">Үйлчилгээний хугацааг сунгах боломжтой юу?</p>', '<p style="font-weight: 600; font-size: 16px; margin-bottom: 10px; color: var(--accent-primary);"><span data-translate="priceFaq4Q">Үйлчилгээний хугацааг сунгах боломжтой юу?</span></p>');
priceContent = priceContent.replace('<p style="font-size: 14px; color: var(--text-secondary); line-height: 1.6;">Тийм ээ, хэрэв нэмэлт зөвлөгөө шаардлагатай бол үйлчилгээг сунгах багц (₩200,000 / 3 сар) авч болно.</p>', '<p style="font-size: 14px; color: var(--text-secondary); line-height: 1.6;"><span data-translate="priceFaq4A">Тийм ээ, хэрэв нэмэлт зөвлөгөө шаардлагатай бол үйлчилгээг сунгах багц (₩200,000 / 3 сар) авч болно.</span></p>');
priceContent = priceContent.replace('<p>&copy; 2026 K-Study Bridge. Итгэлтэй төлбөр, итгэлтэй замнал.</p>', '<p data-translate="priceFooterText">&copy; 2026 K-Study Bridge. Итгэлтэй төлбөр, итгэлтэй замнал.</p>');

priceContent = priceContent.replace('<li><span style="color: #10b981; font-weight: bold; margin-right: 8px;">✓</span> 1 сарын турш и-мэйлээр зөвлөгөө өгөх</li>', '<li><span style="color: #10b981; font-weight: bold; margin-right: 8px;">✓</span> <span data-translate="pricePlan1F4">1 сарын турш и-мэйлээр зөвлөгөө өгөх</span></li>');
priceContent = priceContent.replace('<li style="color: var(--text-muted);"><span style="color: #ef4444; font-weight: bold; margin-right: 8px;">✗</span> Визний бичиг баримт шалгах</li>', '<li style="color: var(--text-muted);"><span style="color: #ef4444; font-weight: bold; margin-right: 8px;">✗</span> <span data-translate="pricePlan1F5">Визний бичиг баримт шалгах</span></li>');
priceContent = priceContent.replace('<li style="color: var(--text-muted);"><span style="color: #ef4444; font-weight: bold; margin-right: 8px;">✗</span> Орон байр хайх үйлчилгээ</li>', '<li style="color: var(--text-muted);"><span style="color: #ef4444; font-weight: bold; margin-right: 8px;">✗</span> <span data-translate="pricePlan1F6">Орон байр хайх үйлчилгээ</span></li>');

priceContent = priceContent.replace('<li><span style="color: #10b981; font-weight: bold; margin-right: 8px;">✓</span> ЭСЯ-ны ярилцлагад бэлтгэх (Zoom)</li>', '<li><span style="color: #10b981; font-weight: bold; margin-right: 8px;">✓</span> <span data-translate="pricePlan2F5">ЭСЯ-ны ярилцлагад бэлтгэх (Zoom)</span></li>');
priceContent = priceContent.replace('<li><span style="color: #10b981; font-weight: bold; margin-right: 8px;">✓</span> Орон байр хайх үндсэн туслалцаа</li>', '<li><span style="color: #10b981; font-weight: bold; margin-right: 8px;">✓</span> <span data-translate="pricePlan2F6">Орон байр хайх үндсэн туслалцаа</span></li>');
priceContent = priceContent.replace('<li><span style="color: #10b981; font-weight: bold; margin-right: 8px;">✓</span> 3 сарын турш 24/7 зөвлөгөө, дэмжлэг</li>', '<li><span style="color: #10b981; font-weight: bold; margin-right: 8px;">✓</span> <span data-translate="pricePlan2F7">3 сарын турш 24/7 зөвлөгөө, дэмжлэг</span></li>');

priceContent = priceContent.replace('<li><span style="color: #10b981; font-weight: bold; margin-right: 8px;">✓</span> Орон байрны дээд зэрэглэлийн сонголтууд</li>', '<li><span style="color: #10b981; font-weight: bold; margin-right: 8px;">✓</span> <span data-translate="pricePlan3F5">Орон байрны дээд зэрэглэлийн сонголтууд</span></li>');
priceContent = priceContent.replace('<li><span style="color: #10b981; font-weight: bold; margin-right: 8px;">✓</span> Гадаад иргэний үнэмлэх (ARC) захиалах</li>', '<li><span style="color: #10b981; font-weight: bold; margin-right: 8px;">✓</span> <span data-translate="pricePlan3F6">Гадаад иргэний үнэмлэх (ARC) захиалах</span></li>');
priceContent = priceContent.replace('<li><span style="color: #10b981; font-weight: bold; margin-right: 8px;">✓</span> Банкны данс нээх, утас авах үйлчилгээ</li>', '<li><span style="color: #10b981; font-weight: bold; margin-right: 8px;">✓</span> <span data-translate="pricePlan3F7">Банкны данс нээх, утас авах үйлчилгээ</span></li>');
priceContent = priceContent.replace('<li><span style="color: #10b981; font-weight: bold; margin-right: 8px;">✓</span> 6 сарын турш бүх төрлийн зөвлөгөө, дэмжлэг</li>', '<li><span style="color: #10b981; font-weight: bold; margin-right: 8px;">✓</span> <span data-translate="pricePlan3F8">6 сарын турш бүх төрлийн зөвлөгөө, дэмжлэг</span></li>');
priceContent = priceContent.replace('<li><span style="color: #10b981; font-weight: bold; margin-right: 8px;">✓</span> Сөүлд амьдрах дасан зохицох тусгай сургалт</li>', '<li><span style="color: #10b981; font-weight: bold; margin-right: 8px;">✓</span> <span data-translate="pricePlan3F9">Сөүлд амьдрах дасан зохицох тусгай сургалт</span></li>');

// Update success-story.html
storyContent = storyContent.replace('<p class="hero-badge">🎓 Амжилтын түүх</p>', '<p class="hero-badge" data-translate="storyBadge">🎓 Амжилтын түүх</p>');
storyContent = storyContent.replace('<p>&copy; 2026 K-Study Bridge. БНСУ-д суралцахад итгэлтэй алх.</p>', '<p data-translate="storyFooterText">&copy; 2026 K-Study Bridge. БНСУ-д суралцахад итгэлтэй алх.</p>');

storyContent = storyContent.replace('<h2 style="text-align: center; margin-bottom: 40px;">K-Study Bridge-ийн үр дүн</h2>', '<h2 style="text-align: center; margin-bottom: 40px;" data-translate="storyStatsTitle">K-Study Bridge-ийн үр дүн</h2>');
storyContent = storyContent.replace('<p>Амжилттай зөвлөсөн оюутан</p>', '<p data-translate="storyStats1">Амжилттай зөвлөсөн оюутан</p>');
storyContent = storyContent.replace('<p>Визний амжилтын түвшин</p>', '<p data-translate="storyStats2">Визний амжилтын түвшин</p>');
storyContent = storyContent.replace('<p>Хамтрагч их сургуулиуд</p>', '<p data-translate="storyStats3">Хамтрагч их сургуулиуд</p>');
storyContent = storyContent.replace('<p>Туршлага, найдвартай байдал</p>', '<p data-translate="storyStats4">Туршлага, найдвартай байдал</p>');
storyContent = storyContent.replace('15+ жил', '<span data-translate="storyStats4Value">15+ жил</span>');

fs.writeFileSync(blogPath, blogContent, 'utf8');
fs.writeFileSync(pricingPath, priceContent, 'utf8');
fs.writeFileSync(storyPath, storyContent, 'utf8');

// We need to add these new keys to app.min.js
const newTranslations = {
  en: {
    blogBadge: "✍️ Blog",
    blogFooterText: "&copy; 2026 K-Study Bridge. Blog's new ideas and real experiences.",
    priceBadge: "💼 Pricing Plans",
    priceFaq3Q: "Which plan should I choose?",
    priceFaq3A: "Most students choose the 'Professional' plan. It is the most balanced choice of price and service.",
    priceFaq4Q: "Can I extend the service period?",
    priceFaq4A: "Yes, if you need additional consulting, you can get an extension package (₩200,000 / 3 months).",
    priceFooterText: "&copy; 2026 K-Study Bridge. Reliable payment, reliable journey.",
    pricePlan1F4: "1 month of email consulting",
    pricePlan1F5: "Visa document check",
    pricePlan1F6: "Housing search service",
    pricePlan2F5: "Embassy interview preparation (Zoom)",
    pricePlan2F6: "Basic housing search assistance",
    pricePlan2F7: "3 months of 24/7 consulting and support",
    pricePlan3F5: "Premium housing options",
    pricePlan3F6: "Alien Registration Card (ARC) application",
    pricePlan3F7: "Bank account and phone number setup",
    pricePlan3F8: "6 months of all kinds of consulting and support",
    pricePlan3F9: "Special training for adapting to life in Seoul",
    storyBadge: "🎓 Success Stories",
    storyFooterText: "&copy; 2026 K-Study Bridge. Step with confidence to study in Korea.",
    storyStatsTitle: "K-Study Bridge Results",
    storyStats1: "Successfully Advised Students",
    storyStats2: "Visa Success Rate",
    storyStats3: "Partner Universities",
    storyStats4: "Experience and Reliability",
    storyStats4Value: "15+ years"
  },
  mn: {
    blogBadge: "✍️ Блог",
    blogFooterText: "&copy; 2026 K-Study Bridge. Блогын шинэ санаа, бодит туршлага.",
    priceBadge: "💼 Үнийн багц",
    priceFaq3Q: "Аль багцыг сонгох нь зүйтэй вэ?",
    priceFaq3A: "Ихэнх оюутнууд 'Professional' багцыг сонгодог. Энэ нь үнэ болон үйлчилгээний хамгийн зөв, тэнцвэртэй сонголт юм.",
    priceFaq4Q: "Үйлчилгээний хугацааг сунгах боломжтой юу?",
    priceFaq4A: "Тийм ээ, хэрэв нэмэлт зөвлөгөө шаардлагатай бол үйлчилгээг сунгах багц (₩200,000 / 3 сар) авч болно.",
    priceFooterText: "&copy; 2026 K-Study Bridge. Итгэлтэй төлбөр, итгэлтэй замнал.",
    pricePlan1F4: "1 сарын турш и-мэйлээр зөвлөгөө өгөх",
    pricePlan1F5: "Визний бичиг баримт шалгах",
    pricePlan1F6: "Орон байр хайх үйлчилгээ",
    pricePlan2F5: "ЭСЯ-ны ярилцлагад бэлтгэх (Zoom)",
    pricePlan2F6: "Орон байр хайх үндсэн туслалцаа",
    pricePlan2F7: "3 сарын турш 24/7 зөвлөгөө, дэмжлэг",
    pricePlan3F5: "Орон байрны дээд зэрэглэлийн сонголтууд",
    pricePlan3F6: "Гадаад иргэний үнэмлэх (ARC) захиалах",
    pricePlan3F7: "Банкны данс нээх, утас авах үйлчилгээ",
    pricePlan3F8: "6 сарын турш бүх төрлийн зөвлөгөө, дэмжлэг",
    pricePlan3F9: "Сөүлд амьдрах дасан зохицох тусгай сургалт",
    storyBadge: "🎓 Амжилтын түүх",
    storyFooterText: "&copy; 2026 K-Study Bridge. БНСУ-д суралцахад итгэлтэй алх.",
    storyStatsTitle: "K-Study Bridge-ийн үр дүн",
    storyStats1: "Амжилттай зөвлөсөн оюутан",
    storyStats2: "Визний амжилтын түвшин",
    storyStats3: "Хамтрагч их сургуулиуд",
    storyStats4: "Туршлага, найдвартай байдал",
    storyStats4Value: "15+ жил"
  },
  ko: {
    blogBadge: "✍️ 블로그",
    blogFooterText: "&copy; 2026 K-Study Bridge. 블로그의 새로운 아이디어와 실제 경험.",
    priceBadge: "💼 가격 플랜",
    priceFaq3Q: "어떤 플랜을 선택해야 합니까?",
    priceFaq3A: "대부분의 학생들은 'Professional' 플랜을 선택합니다. 가격과 서비스의 가장 균형 잡힌 선택입니다.",
    priceFaq4Q: "서비스 기간을 연장할 수 있습니까?",
    priceFaq4A: "네, 추가 상담이 필요한 경우 연장 패키지(₩200,000 / 3개월)를 이용할 수 있습니다.",
    priceFooterText: "&copy; 2026 K-Study Bridge. 신뢰할 수 있는 결제, 신뢰할 수 있는 여정.",
    pricePlan1F4: "1개월 이메일 상담",
    pricePlan1F5: "비자 서류 확인",
    pricePlan1F6: "숙소 검색 서비스",
    pricePlan2F5: "대사관 인터뷰 준비 (Zoom)",
    pricePlan2F6: "기본 숙소 검색 지원",
    pricePlan2F7: "3개월 24/7 상담 및 지원",
    pricePlan3F5: "프리미엄 숙소 옵션",
    pricePlan3F6: "외국인 등록증 (ARC) 신청",
    pricePlan3F7: "은행 계좌 및 전화번호 개통",
    pricePlan3F8: "6개월 모든 종류의 상담 및 지원",
    pricePlan3F9: "서울 생활 적응을 위한 특별 교육",
    storyBadge: "🎓 성공 사례",
    storyFooterText: "&copy; 2026 K-Study Bridge. 한국 유학을 향해 자신감 있게 나아가세요.",
    storyStatsTitle: "K-Study Bridge 결과",
    storyStats1: "성공적으로 상담한 학생",
    storyStats2: "비자 성공률",
    storyStats3: "파트너 대학교",
    storyStats4: "경험 및 신뢰성",
    storyStats4Value: "15+ 년"
  }
};

let enMatch = jsContent.match(/en:\{([^}]+)\}/);
let mnMatch = jsContent.match(/mn:\{([^}]+)\}/);
let koMatch = jsContent.match(/ko:\{([^}]+)\}/);

function injectTranslations(langCode, newObj, jsCode) {
  let entries = Object.keys(newObj).map(k => `"${k}":"${newObj[k]}"`).join(',');
  return jsCode.replace(new RegExp(`${langCode}:\\{`), `${langCode}:{${entries},`);
}

jsContent = injectTranslations('en', newTranslations.en, jsContent);
jsContent = injectTranslations('mn', newTranslations.mn, jsContent);
jsContent = injectTranslations('ko', newTranslations.ko, jsContent);

fs.writeFileSync(jsPath, jsContent, 'utf8');

console.log('Update 2 completed');
