const fs = require('fs');
const path = require('path');

const appJsPath = path.join('c:', 'Users', 'suugi', 'OneDrive', 'Desktop', 'Kstudy-master', 'Kstudy-master', 'js', 'app.min.js');

let content = fs.readFileSync(appJsPath, 'utf8');

const newTranslations = {
  en: {
    blogTitle: "Blog Articles",
    blogSubtitle: "Latest tips, guides, and updates about studying and living in South Korea.",
    blogPost1Title: "5 Important Things to Know Before Studying in Korea",
    blogPost1Meta: "📅 May 2026 | ✍️ K-Study Bridge Team",
    blogPost1Excerpt: "What should you pay attention to when first arriving in Korea? Here are 5 important things about visa conditions and cultural differences.",
    blogReadMore: "Read More ➔",
    blogPost2Title: "How to Prepare for the TOPIK Exam?",
    blogPost2Meta: "📅 Apr 2026 | ✍️ Academic Advisor",
    blogPost2Excerpt: "How should you study to reach TOPIK Level 4 or higher? Exam structure and preparation tips.",
    blogPost3Title: "Student Dormitory or Private Studio?",
    blogPost3Meta: "📅 Mar 2026 | ✍️ Living Manager",
    blogPost3Excerpt: "A comparison of the pros and cons of dormitories versus private housing (goshiwon, one-room) for new students.",
    blogSidebarTitle: "Get Updates",
    blogSidebarText: "Receive the latest tips and scholarship info from K-Study Bridge directly to your email.",
    blogSidebarInput: "Your Email Address",
    blogSidebarBtn: "Subscribe",
    blogCatTitle: "Categories",
    blogCatVisa: "Visa & Documents (12)",
    blogCatScholarship: "Scholarships (8)",
    blogCatAdmission: "Admissions (15)",
    blogCatLife: "Life in Korea (20)",
    priceTitle: "Service Packages",
    priceSubtitle: "Choose the package that best fits your needs and budget. We will be with you throughout the whole process.",
    pricePlan1Name: "Basic",
    pricePlan1Desc: "For students preparing their own documents but who need professional review and guidance.",
    pricePlan1Price: "₮250,000",
    pricePlan1F1: "University Consultation (1 hour)",
    pricePlan1F2: "Essay and CV Review",
    pricePlan1F3: "Visa Document Checklist",
    pricePlan2Name: "Professional",
    pricePlan2Desc: "A comprehensive service handling university and visa applications entirely.",
    pricePlan2Price: "₮750,000",
    pricePlan2F1: "University Selection & Guarantee",
    pricePlan2F2: "Full Document Preparation",
    pricePlan2F3: "Embassy Interview Prep",
    pricePlan2F4: "Housing Finder Service",
    pricePlan3Name: "Premium",
    pricePlan3Desc: "VIP support from start to finish, until you arrive and settle in Korea.",
    pricePlan3Price: "₮1,500,000",
    pricePlan3F1: "Includes all Professional features",
    pricePlan3F2: "Airport Pickup",
    pricePlan3F3: "Bank, Phone, & ARC Setup",
    pricePlan3F4: "First Month Personal Mentorship",
    pricePopularBadge: "Most Popular",
    priceBtnSelect: "Select",
    priceCustomTitle: "Need a Custom Plan?",
    priceCustomDesc: "If you have specific needs not covered by the above packages (e.g., family visa, PhD), please contact us for a custom quote.",
    priceBtnContact: "Contact Us",
    priceFaqTitle: "Frequently Asked Questions",
    priceFaq1Q: "Can I pay in installments?",
    priceFaq1A: "The Premium package can be paid in 2 installments. Half at the contract signing, and the remaining half after university acceptance.",
    priceFaq2Q: "Are university application fees included in the package price?",
    priceFaq2A: "No. University application fees and embassy visa fees are not included in our service fees.",
    storyTitle: "Student Success Stories",
    storySubtitle: "Read real testimonials from students who achieved their dreams through K-Study Bridge.",
    storyLabelMajor: "Major:",
    storyLabelVisa: "Visa Type:",
    story1Name: "Urangoo",
    story1Meta: "Seoul National University (SNU) Graduate",
    story1Date: "2024 - Seoul National University",
    story1Major: "Computer Science",
    story1Visa: "D-2 (Bachelor's)",
    story1Text: '"I passed TOPIK II Level 5 with the help of K-Study Bridge. They reliably prepared all the documents for university registration and visa application. Now I work as an engineer at Samsung."',
    story2Name: "Anar",
    story2Meta: "KAIST Master's Final Year",
    story2Date: "2023 - KAIST (Master's)",
    story2Major: "Materials Science",
    story2Visa: "D-2 (Master's)",
    story2Text: '"I previously applied to KAIST and got rejected. K-Study Bridge completely improved my application materials and I successfully got in. They also helped me a lot with housing and getting an ARC."',
    story3Name: "Enkhjin",
    story3Meta: "Yonsei University Student",
    story3Date: "2024 - Yonsei University",
    story3Major: "Korean Language and Literature",
    story3Visa: "D-2 (Bachelor's)",
    story3Text: '"I scored high on the TOPIK II exam following K-Study Bridge\'s study plan. As a result, I received a 100% scholarship from Yonsei University. Their advice on adapting to life in Seoul was also very useful."',
    story4Name: "Lkhagvadulam",
    story4Meta: "Ewha Womans University PhD Candidate",
    story4Date: "2022 - Ewha Womans University (PhD)",
    story4Major: "Women's Studies and Leadership",
    story4Visa: "D-2 (PhD)",
    story4Text: '"Competition for the PhD program was fierce, and I was very worried. K-Study Bridge guided me perfectly on how to prepare for the interview and write my essay. I am now also working as a research assistant."'
  },
  mn: {
    blogTitle: "Блог нийтлэлүүд",
    blogSubtitle: "Солонгос дахь сурлага, амьдралын талаарх хамгийн сүүлийн үеийн зөвлөгөө, мэдээлэл.",
    blogPost1Title: "Солонгост суралцахдаа анхаарах 5 чухал зүйл",
    blogPost1Meta: "📅 2026 оны 5 сар | ✍️ K-Study Bridge Баг",
    blogPost1Excerpt: "Солонгост анх ирэхэд юуг анхаарах хэрэгтэй вэ? Визний нөхцөл, соёлын ялгааны талаар таны мэдэх ёстой 5 чухал зүйлийг хүргэж байна.",
    blogReadMore: "Цааш унших ➔",
    blogPost2Title: "TOPIK шалгалтад хэрхэн бэлдэх вэ?",
    blogPost2Meta: "📅 2026 оны 4 сар | ✍️ Сургалтын зөвлөх",
    blogPost2Excerpt: "TOPIK-ийн 4 болон түүнээс дээш түвшинд хүрэхийн тулд ямар арга барилаар суралцах хэрэгтэй вэ? Шалгалтын бүтэц болон бэлтгэх зөвлөмжүүд.",
    blogPost3Title: "Оюутны дотуур байр уу, эсвэл тусдаа байр уу?",
    blogPost3Meta: "📅 2026 оны 3 сар | ✍️ Амьдрал хариуцсан менежер",
    blogPost3Excerpt: "Шинэ оюутнуудад зориулан дотуур байр болон хувийн орон сууцны (гошивон, нэг өрөө) давуу болон сул талуудыг харьцууллаа.",
    blogSidebarTitle: "Шинэ мэдээлэл авах",
    blogSidebarText: "K-Study Bridge-ийн хамгийн сүүлийн үеийн зөвлөгөө, тэтгэлгийн мэдээллийг имэйлээрээ цаг алдалгүй хүлээн аваарай.",
    blogSidebarInput: "Таны имэйл хаяг",
    blogSidebarBtn: "Бүртгүүлэх",
    blogCatTitle: "Ангилал",
    blogCatVisa: "Виз болон Бичиг баримт (12)",
    blogCatScholarship: "Тэтгэлэг (8)",
    blogCatAdmission: "Сургууль, Элсэлт (15)",
    blogCatLife: "Солонгос дахь амьдрал (20)",
    priceTitle: "Үйлчилгээний багцууд",
    priceSubtitle: "Та өөрийн хэрэгцээ, төсөвт хамгийн сайн нийцэх багцыг сонгоно уу. Бид бүх үйл явцад тантай хамт байх болно.",
    pricePlan1Name: "Basic",
    pricePlan1Desc: "Бүх зүйлээ өөрөө бэлдэж буй ч мэргэжлийн хяналт шаардлагатай оюутнуудад зориулав.",
    pricePlan1Price: "₮250,000",
    pricePlan1F1: "Сургуулийн зөвлөгөө (1 цаг)",
    pricePlan1F2: "Эсээ болон CV хяналт",
    pricePlan1F3: "Визний бичиг баримтын чеклист",
    pricePlan2Name: "Professional",
    pricePlan2Desc: "Сургууль болон визний материалыг бүрэн хариуцаж гүйцэтгэх цогц үйлчилгээ.",
    pricePlan2Price: "₮750,000",
    pricePlan2F1: "Сургууль сонголт, элсэлтийн баталгаа",
    pricePlan2F2: "Эсээ, материалыг бүрэн бэлтгэх",
    pricePlan2F3: "ЭСЯ-ны визний ярилцлагын бэлтгэл",
    pricePlan2F4: "Орон сууц хайх үйлчилгээ",
    pricePlan3Name: "Premium",
    pricePlan3Desc: "Эхнээс нь дуустал бүх зүйлийг бид хариуцаж, Солонгост очих хүртэлх VIP дэмжлэг.",
    pricePlan3Price: "₮1,500,000",
    pricePlan3F1: "Professional багц бүрэн багтсан",
    pricePlan3F2: "Нисэх онгоцны буудлаас тосох",
    pricePlan3F3: "Банкны данс, утас, ARC нээхэд туслах",
    pricePlan3F4: "Эхний 1 сарын хувийн менторшип",
    pricePopularBadge: "Хамгийн эрэлттэй",
    priceBtnSelect: "Сонгох",
    priceCustomTitle: "Тусгай үйлчилгээ хэрэгтэй юу?",
    priceCustomDesc: "Хэрэв танд дээрх багцуудад багтаагүй тусгай хэрэгцээ (жишээлбэл гэр бүлийн виз, докторантур) байгаа бол бидэнтэй холбогдож үнийн санал авна уу.",
    priceBtnContact: "Бидэнтэй холбогдох",
    priceFaqTitle: "Түгээмэл асуултууд",
    priceFaq1Q: "Төлбөрийг хэд хувааж төлж болох вэ?",
    priceFaq1A: "Premium багцын төлбөрийг 2 хувааж төлөх боломжтой. Эхний тал нь гэрээ байгуулах үед, үлдсэн тал нь сургуульд тэнцсэний дараа төлөгдөнө.",
    priceFaq2Q: "Багцын үнэд сургуулийн бүртгэлийн хураамж багтсан уу?",
    priceFaq2A: "Үгүй. Сургуулийн бүртгэлийн хураамж (Application fee) болон ЭСЯ-ны хураамжууд үйлчилгээний төлбөрт багтаагүй болно.",
    storyTitle: "Оюутнуудын амжилтын түүх",
    storySubtitle: "K-Study Bridge-ээр дамжуулан хүсэл мөрөөдөлдөө хүрсэн оюутнуудын бодит сэтгэгдлүүдтэй танилцана уу.",
    storyLabelMajor: "Мэргэжил:",
    storyLabelVisa: "Визний төрөл:",
    story1Name: "Урангоо",
    story1Meta: "Сөүлийн Үндэсний Их Сургууль (SNU) төгсөгч",
    story1Date: "2024 - Seoul National University",
    story1Major: "Компьютерын шинжлэх ухаан",
    story1Visa: "D-2 (Бакалавр)",
    story1Text: '"K-Study Bridge-ийн тусламжтайгаар TOPIK II-ын 5-р түвшинд тэнцсэн. Сургуульд бүртгүүлэх, виз мэдүүлэх бүх бичиг баримтыг найдвартай бүрдүүлж өгсөн. Одоо би Samsung компанид инженерээр ажиллаж байна."',
    story2Name: "Анар",
    story2Meta: "KAIST-ын төгсөх дамжааны оюутан",
    story2Date: "2023 - KAIST (Магистр)",
    story2Major: "Материал судлал",
    story2Visa: "D-2 (Магистр)",
    story2Text: '"Өмнө нь KAIST-д өргөдөл өгөөд тэнцээгүй байсан. K-Study Bridge миний өргөдлийн материалыг дахин сайжруулж өгснөөр амжилттай элссэн. Мөн байр олох, гадаад иргэний үнэмлэх авахад их тусалсан."',
    story3Name: "Энхжин",
    story3Meta: "Ёнсэй Их Сургуулийн оюутан",
    story3Date: "2024 - Yonsei University",
    story3Major: "Солонгос хэл, уран зохиол",
    story3Visa: "D-2 (Бакалавр)",
    story3Text: '"K-Study Bridge-ийн зөвлөсөн төлөвлөгөөний дагуу бэлдээд TOPIK II шалгалтад өндөр оноо авсан. Үүний үр дүнд Ёнсэй Их Сургуулиас 100% тэтгэлэг авч чадсан. Сөүлийн амьдралд дасан зохицоход өгсөн зөвлөгөөнүүд нь маш хэрэгтэй байлаа."',
    story4Name: "Лхагвадулам",
    story4Meta: "Ихуа Эмэгтэйчүүдийн Их Сургуулийн докторант",
    story4Date: "2022 - Ewha Womans University (Доктор)",
    story4Major: "Эмэгтэйчүүд судлал, манлайлал",
    story4Visa: "D-2 (Докторантур)",
    story4Text: '"Докторт элсэх өрсөлдөөн маш ширүүн байсан тул их санаа зовж байлаа. K-Study Bridge надад ярилцлагад хэрхэн бэлдэх, эссегээ яаж бичих талаар маш сайн чиглүүлж өгсөн. Одоо би туслах судлаачаар давхар ажиллаж байна."'
  },
  ko: {
    blogTitle: "블로그",
    blogSubtitle: "한국 유학 및 생활에 대한 최신 팁과 가이드.",
    blogPost1Title: "한국 유학 전 알아야 할 5가지",
    blogPost1Meta: "📅 2026년 5월 | ✍️ K-Study Bridge 팀",
    blogPost1Excerpt: "한국에 처음 올 때 무엇을 주의해야 할까요? 비자 조건과 문화적 차이에 대해 꼭 알아야 할 5가지를 소개합니다.",
    blogReadMore: "더 보기 ➔",
    blogPost2Title: "TOPIK 시험 준비 방법",
    blogPost2Meta: "📅 2026년 4월 | ✍️ 학업 컨설턴트",
    blogPost2Excerpt: "TOPIK 4급 이상을 달성하기 위해 어떻게 공부해야 할까요? 시험 구조 및 준비 팁.",
    blogPost3Title: "기숙사 vs 원룸, 당신의 선택은?",
    blogPost3Meta: "📅 2026년 3월 | ✍️ 생활 매니저",
    blogPost3Excerpt: "신입생을 위한 기숙사와 개인 숙소(고시원, 원룸)의 장단점 비교.",
    blogSidebarTitle: "최신 소식 받기",
    blogSidebarText: "K-Study Bridge의 최신 팁과 장학금 정보를 이메일로 받아보세요.",
    blogSidebarInput: "이메일 주소",
    blogSidebarBtn: "구독하기",
    blogCatTitle: "카테고리",
    blogCatVisa: "비자 및 서류 (12)",
    blogCatScholarship: "장학금 (8)",
    blogCatAdmission: "입학 정보 (15)",
    blogCatLife: "한국 생활 (20)",
    priceTitle: "서비스 패키지",
    priceSubtitle: "필요와 예산에 가장 적합한 패키지를 선택하세요. 모든 과정에서 함께하겠습니다.",
    pricePlan1Name: "베이직",
    pricePlan1Desc: "서류를 직접 준비하지만 전문가의 검토가 필요한 학생을 위한 패키지입니다.",
    pricePlan1Price: "₩90,000",
    pricePlan1F1: "대학 상담 (1시간)",
    pricePlan1F2: "자기소개서 및 이력서 검토",
    pricePlan1F3: "비자 서류 체크리스트",
    pricePlan2Name: "프로페셔널",
    pricePlan2Desc: "대학 입학부터 비자 신청까지 모든 과정을 대행하는 종합 서비스입니다.",
    pricePlan2Price: "₩280,000",
    pricePlan2F1: "대학 선택 및 합격 보장",
    pricePlan2F2: "전체 서류 준비 대행",
    pricePlan2F3: "대사관 비자 인터뷰 준비",
    pricePlan2F4: "주거지 탐색 서비스",
    pricePlan3Name: "프리미엄",
    pricePlan3Desc: "한국에 도착하여 정착할 때까지 제공되는 VIP 밀착 지원 서비스입니다.",
    pricePlan3Price: "₩550,000",
    pricePlan3F1: "프로페셔널 패키지 모두 포함",
    pricePlan3F2: "공항 픽업 서비스",
    pricePlan3F3: "은행, 휴대폰, ARC 개통 지원",
    pricePlan3F4: "첫 한 달 1:1 멘토링",
    pricePopularBadge: "가장 인기",
    priceBtnSelect: "선택하기",
    priceCustomTitle: "맞춤형 서비스가 필요하신가요?",
    priceCustomDesc: "위 패키지에 포함되지 않은 특별한 요구(가족 비자, 박사 과정 등)가 있다면 별도 문의를 통해 견적을 받아보세요.",
    priceBtnContact: "문의하기",
    priceFaqTitle: "자주 묻는 질문",
    priceFaq1Q: "비용은 분할 납부가 가능한가요?",
    priceFaq1A: "프리미엄 패키지는 2회 분할 납부가 가능합니다. 계약 시 절반을 지불하고, 대학 합격 후 나머지 절반을 지불합니다.",
    priceFaq2Q: "대학 전형료가 패키지 가격에 포함되어 있나요?",
    priceFaq2A: "아니요. 대학 전형료(Application fee) 및 대사관 비자 발급 수수료는 서비스 요금에 포함되지 않습니다.",
    storyTitle: "학생 성공 사례",
    storySubtitle: "K-Study Bridge를 통해 꿈을 이룬 학생들의 생생한 후기를 확인하세요.",
    storyLabelMajor: "전공:",
    storyLabelVisa: "비자 종류:",
    story1Name: "우랑고",
    story1Meta: "서울대학교 (SNU) 졸업생",
    story1Date: "2024 - Seoul National University",
    story1Major: "컴퓨터 공학",
    story1Visa: "D-2 (학사)",
    story1Text: '"K-Study Bridge의 도움으로 TOPIK II 5급에 합격했습니다. 대학 등록 및 비자 신청 서류를 완벽하게 준비해 주셨습니다. 현재는 삼성에서 엔지니어로 일하고 있습니다."',
    story2Name: "아나르",
    story2Meta: "KAIST 석사 졸업반",
    story2Date: "2023 - KAIST (석사과정)",
    story2Major: "신소재공학",
    story2Visa: "D-2 (석사)",
    story2Text: '"이전에 KAIST에 지원했다가 불합격한 경험이 있었습니다. K-Study Bridge에서 서류를 대폭 개선해 주어 성공적으로 입학할 수 있었습니다. 주거지 및 ARC 발급에도 큰 도움을 받았습니다."',
    story3Name: "엥흐진",
    story3Meta: "연세대학교 학생",
    story3Date: "2024 - Yonsei University",
    story3Major: "국어국문학",
    story3Visa: "D-2 (학사)",
    story3Text: '"K-Study Bridge의 학습 플랜 덕분에 TOPIK II에서 고득점을 받았습니다. 그 결과 연세대학교에서 100% 장학금을 받을 수 있었습니다. 서울 생활 적응을 위한 조언도 무척 유용했습니다."',
    story4Name: "락바돌람",
    story4Meta: "이화여자대학교 박사과정",
    story4Date: "2022 - Ewha Womans University (박사)",
    story4Major: "여성학 및 리더십",
    story4Visa: "D-2 (박사)",
    story4Text: '"박사 과정 입학 경쟁이 매우 치열해서 걱정이 많았습니다. K-Study Bridge에서 인터뷰 준비와 에세이 작성법을 완벽하게 지도해 주셨습니다. 현재는 연구 조교로도 일하고 있습니다."'
  }
};

let enMatch = content.indexOf('en:{');
let mnMatch = content.indexOf('mn:{');
let koMatch = content.indexOf('ko:{');

function insertKeys(content, langCode, nextLangCode) {
    let langIndex = content.indexOf(langCode + ':{');
    let nextIndex = nextLangCode ? content.indexOf(nextLangCode + ':{') : content.indexOf('};');
    
    if (nextIndex === -1) nextIndex = content.length;
    
    // Find the last '}' before the next language or end of object
    let blockEnd = content.lastIndexOf('}', nextIndex);
    
    let toInsert = '';
    const keys = Object.keys(newTranslations[langCode]);
    for (let key of keys) {
        let val = newTranslations[langCode][key];
        val = val.replace(/"/g, '\\"');
        toInsert += ',' + key + ':"' + val + '"';
    }
    
    return content.slice(0, blockEnd) + toInsert + content.slice(blockEnd);
}

// Order in file is likely en, mn, ko. 
// We must process from last to first so indices don't get messed up, or just update the object in a safer way.
// Let's do it safely using eval to read, then rewrite.
const scriptStart = content.indexOf('const translations=');
if (scriptStart !== -1) {
    const pre = content.slice(0, scriptStart);
    // Find end of translations object
    // Assuming '};' follows translations
    const scriptEnd = content.indexOf('};', scriptStart) + 2;
    const post = content.slice(scriptEnd);
    
    let transString = content.slice(scriptStart + 19, scriptEnd - 1); // just the object string
    
    // Evaluate it
    let translationsObj;
    try {
        translationsObj = eval('(' + transString + ')');
    } catch(e) {
        console.log("Eval error:", e);
    }
    
    if (translationsObj) {
        Object.assign(translationsObj.en, newTranslations.en);
        Object.assign(translationsObj.mn, newTranslations.mn);
        Object.assign(translationsObj.ko, newTranslations.ko);
        
        let newTransString = JSON.stringify(translationsObj);
        let finalContent = pre + 'const translations=' + newTransString + ';' + post;
        fs.writeFileSync(appJsPath, finalContent, 'utf8');
        console.log("Translations updated successfully!");
    } else {
        console.log("Failed to parse translations object.");
    }
} else {
    console.log("Could not find const translations=");
}
