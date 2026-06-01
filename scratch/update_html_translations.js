const fs = require('fs');
const path = require('path');

const basePath = path.join('c:', 'Users', 'suugi', 'OneDrive', 'Desktop', 'Kstudy-master', 'Kstudy-master');
const blogPath = path.join(basePath, 'blog.html');
const pricingPath = path.join(basePath, 'pricing.html');
const storyPath = path.join(basePath, 'success-story.html');

let blogContent = fs.readFileSync(blogPath, 'utf8');

// Blog replacements
blogContent = blogContent.replace('<h1>Солонгост суралцах тухай шинэ мэдээлэл</h1>', '<h1 data-translate="blogTitle">Блог нийтлэлүүд</h1>');
blogContent = blogContent.replace('<p>Сургалтын зөвлөгөө, визийн үйлчилгээний шинэчлэл, байрны судалгаа, оюутны амьдрал болон солонгос соёлын тухай хэрэгтэй мэдээллүүдийг цаг алдалгүй хүргэж байна.</p>', '<p data-translate="blogSubtitle">Солонгос дахь сурлага, амьдралын талаарх хамгийн сүүлийн үеийн зөвлөгөө, мэдээлэл.</p>');

blogContent = blogContent.replace('Солонгост суралцахдаа анхаарах 5 чухал зүйл</a></h2>', 'Солонгост суралцахдаа анхаарах 5 чухал зүйл</a></h2>'.replace('Солонгост суралцахдаа анхаарах 5 чухал зүйл', '<span data-translate="blogPost1Title">Солонгост суралцахдаа анхаарах 5 чухал зүйл</span>'));
blogContent = blogContent.replace('<p class="blog-meta">📅 2026 оны 5 сар | ✍️ K-Study Bridge Баг</p>', '<p class="blog-meta" data-translate="blogPost1Meta">📅 2026 оны 5 сар | ✍️ K-Study Bridge Баг</p>');
// Replace the P tags inside post 1 content with excerpt
blogContent = blogContent.replace(/<p><strong>1\. TOPIK түвшинд анхаарах[\s\S]*?<p><strong>3\. Байраа эрт хайж эхлэх[\s\S]*?<\/p>/, '<p data-translate="blogPost1Excerpt">Солонгост анх ирэхэд юуг анхаарах хэрэгтэй вэ? Визний нөхцөл, соёлын ялгааны талаар таны мэдэх ёстой 5 чухал зүйлийг хүргэж байна.</p>');
blogContent = blogContent.replace(/"Дэлгэрэнгүй унших &rarr;"/g, '"Дэлгэрэнгүй унших &rarr;"'); // wait, let's use global replace for read more
blogContent = blogContent.replace(/>Дэлгэрэнгүй унших &rarr;</g, ' data-translate="blogReadMore">Цааш унших ➔<');

blogContent = blogContent.replace('2026 оны Солонгосын их сургуулиудын элсэлтийн мэдээлэл</a></h2>', '<span data-translate="blogPost2Title">TOPIK шалгалтад хэрхэн бэлдэх вэ?</span></a></h2>');
blogContent = blogContent.replace('<p class="blog-meta">📅 2026 оны 5 сар | ✍️ K-Study Bridge Баг</p>', '<p class="blog-meta" data-translate="blogPost2Meta">📅 2026 оны 4 сар | ✍️ Сургалтын зөвлөх</p>');
blogContent = blogContent.replace(/<p>БНСУ-ын 45\+ их дээд сургуулиуд[\s\S]*?<p><strong>TOPIK шаардлага:[\s\S]*?<\/p>/, '<p data-translate="blogPost2Excerpt">TOPIK-ийн 4 болон түүнээс дээш түвшинд хүрэхийн тулд ямар арга барилаар суралцах хэрэгтэй вэ? Шалгалтын бүтэц болон бэлтгэх зөвлөмжүүд.</p>');

blogContent = blogContent.replace('Сөүлийн амьдралд дасан зохицох нь - Гадаад иргэний үнэмлэх (ARC), утас, банк</a></h2>', '<span data-translate="blogPost3Title">Оюутны дотуур байр уу, эсвэл тусдаа байр уу?</span></a></h2>');
blogContent = blogContent.replace('<p class="blog-meta">📅 2026 оны 5 сар | ✍️ K-Study Bridge Баг</p>', '<p class="blog-meta" data-translate="blogPost3Meta">📅 2026 оны 3 сар | ✍️ Амьдрал хариуцсан менежер</p>');
blogContent = blogContent.replace(/<p>Солонгост ирснээс хойшхи[\s\S]*?<p><strong>Банкны данс:[\s\S]*?<\/p>/, '<p data-translate="blogPost3Excerpt">Шинэ оюутнуудад зориулан дотуур байр болон хувийн орон сууцны (гошивон, нэг өрөө) давуу болон сул талуудыг харьцууллаа.</p>');

// Remove article 4 to match translations
blogContent = blogContent.replace(/<!-- Article 4 -->[\s\S]*?<\/article>/, '');

blogContent = blogContent.replace('<h2 style="margin-bottom: 20px;">Илүү сонирхолтой мэдээлэл авахыг хүсэж байна уу?</h2>', '<h2 style="margin-bottom: 20px;" data-translate="blogSidebarTitle">Шинэ мэдээлэл авах</h2>');
blogContent = blogContent.replace('<p style="margin-bottom: 25px; font-size: 16px; opacity: 0.9;">Манай цахим шуудангийн жагсаалтад бүртгүүлж, Солонгост суралцахтай холбоотой хамгийн сүүлийн үеийн мэдээллүүдийг цаг алдалгүй аваарай.</p>', '<p style="margin-bottom: 25px; font-size: 16px; opacity: 0.9;" data-translate="blogSidebarText">K-Study Bridge-ийн хамгийн сүүлийн үеийн зөвлөгөө, тэтгэлгийн мэдээллийг имэйлээрээ цаг алдалгүй хүлээн аваарай.</p>');
blogContent = blogContent.replace('placeholder="Таны и-мэйл хаяг"', 'placeholder="Таны имэйл хаяг" data-translate-placeholder="blogSidebarInput"');
blogContent = blogContent.replace('>Бүртгүүлэх</button>', ' data-translate="blogSidebarBtn">Бүртгүүлэх</button>');

fs.writeFileSync(blogPath, blogContent, 'utf8');

// Pricing replacements
let priceContent = fs.readFileSync(pricingPath, 'utf8');
priceContent = priceContent.replace('<h2>Үйлчилгээний багц, үнэ тариф</h2>', '<h2 data-translate="priceTitle">Үйлчилгээний багцууд</h2>');
priceContent = priceContent.replace('<p>Бид оюутан бүрийн зорилго, төсөвт нийцсэн уян хатан, хамгийн найдвартай үйлчилгээний багцуудыг санал болгож байна.</p>', '<p data-translate="priceSubtitle">Та өөрийн хэрэгцээ, төсөвт хамгийн сайн нийцэх багцыг сонгоно уу. Бид бүх үйл явцад тантай хамт байх болно.</p>');

priceContent = priceContent.replace('<h3>"Basic" багц</h3>', '<h3 data-translate="pricePlan1Name">Basic</h3>');
priceContent = priceContent.replace('<p class="pricing-subtitle">Анхлан суралцагчдад зориулсан</p>', '<p class="pricing-subtitle" data-translate="pricePlan1Desc">Бүх зүйлээ өөрөө бэлдэж буй ч мэргэжлийн хяналт шаардлагатай оюутнуудад зориулав.</p>');
priceContent = priceContent.replace('<span class="price-amount">₩299,000</span>', '<span class="price-amount" data-translate="pricePlan1Price">₮250,000</span>');
priceContent = priceContent.replace('✓</span> Сургууль сонголтын зөвлөгөө (1 цаг)</li>', '✓</span> <span data-translate="pricePlan1F1">Сургуулийн зөвлөгөө (1 цаг)</span></li>');
priceContent = priceContent.replace('✓</span> Өргөдөл бүрдүүлэлтийн зааварчилгаа</li>', '✓</span> <span data-translate="pricePlan1F2">Эсээ болон CV хяналт</span></li>');
priceContent = priceContent.replace('✓</span> TOPIK түвшин тогтоох үнэлгээ</li>', '✓</span> <span data-translate="pricePlan1F3">Визний бичиг баримтын чеклист</span></li>');

priceContent = priceContent.replace('<h3>"Professional" багц</h3>', '<h3 data-translate="pricePlan2Name">Professional</h3>');
priceContent = priceContent.replace('ХАМГИЙН ЭРЭЛТТЭЙ', '<span data-translate="pricePopularBadge">ХАМГИЙН ЭРЭЛТТЭЙ</span>');
priceContent = priceContent.replace('<p class="pricing-subtitle">Илүү цогц үйлчилгээ авахыг хүсэгчдэд</p>', '<p class="pricing-subtitle" data-translate="pricePlan2Desc">Сургууль болон визний материалыг бүрэн хариуцаж гүйцэтгэх цогц үйлчилгээ.</p>');
priceContent = priceContent.replace('<span class="price-amount">₩799,000</span>', '<span class="price-amount" data-translate="pricePlan2Price">₮750,000</span>');
priceContent = priceContent.replace('✓</span> Сургууль сонголтын дэлгэрэнгүй зөвлөгөө (3 цаг)</li>', '✓</span> <span data-translate="pricePlan2F1">Сургууль сонголт, элсэлтийн баталгаа</span></li>');
priceContent = priceContent.replace('✓</span> Өргөдлийн бичиг баримтыг хянах, засах</li>', '✓</span> <span data-translate="pricePlan2F2">Эсээ, материалыг бүрэн бэлтгэх</span></li>');
priceContent = priceContent.replace('✓</span> Эссе болон CV-г хянах, сайжруулах</li>', '✓</span> <span data-translate="pricePlan2F3">ЭСЯ-ны визний ярилцлагын бэлтгэл</span></li>');
priceContent = priceContent.replace('✓</span> D-2/D-4 визний бичиг баримт бүрдүүлэлт</li>', '✓</span> <span data-translate="pricePlan2F4">Орон сууц хайх үйлчилгээ</span></li>');

priceContent = priceContent.replace('<h3>"Premium" багц</h3>', '<h3 data-translate="pricePlan3Name">Premium</h3>');
priceContent = priceContent.replace('<p class="pricing-subtitle">Бүх үйлчилгээг багтаасан VIP багц</p>', '<p class="pricing-subtitle" data-translate="pricePlan3Desc">Эхнээс нь дуустал бүх зүйлийг бид хариуцаж, Солонгост очих хүртэлх VIP дэмжлэг.</p>');
priceContent = priceContent.replace('<span class="price-amount">₩1,499,000</span>', '<span class="price-amount" data-translate="pricePlan3Price">₮1,500,000</span>');
priceContent = priceContent.replace('✓</span> Цогц зөвлөгөө (хязгааргүй хугацаагаар)</li>', '✓</span> <span data-translate="pricePlan3F1">Professional багц бүрэн багтсан</span></li>');
priceContent = priceContent.replace('✓</span> Сургууль сонгохоос элсэх хүртэлх бүх явц</li>', '✓</span> <span data-translate="pricePlan3F2">Нисэх онгоцны буудлаас тосох</span></li>');
priceContent = priceContent.replace('✓</span> Визний материалыг 100% хариуцан бүрдүүлэх</li>', '✓</span> <span data-translate="pricePlan3F3">Банкны данс, утас, ARC нээхэд туслах</span></li>');
priceContent = priceContent.replace('✓</span> Ярилцлагын бодит мэт бэлтгэл сургуулилт</li>', '✓</span> <span data-translate="pricePlan3F4">Эхний 1 сарын хувийн менторшип</span></li>');

priceContent = priceContent.replace(/>Сонгох<\/button>/g, ' data-translate="priceBtnSelect">Сонгох</button>');

priceContent = priceContent.replace('❓ Түгээмэл асуултууд', '❓ <span data-translate="priceFaqTitle">Түгээмэл асуултууд</span>');
priceContent = priceContent.replace('Төлбөрөө хэрхэн төлөх вэ?', '<span data-translate="priceFaq1Q">Төлбөрийг хэд хувааж төлж болох вэ?</span>');
priceContent = priceContent.replace('Монголын банкны шилжүүлэг, Wise, PayPal болон Stripe ашиглан төлбөрөө хийх боломжтой.', '<span data-translate="priceFaq1A">Premium багцын төлбөрийг 2 хувааж төлөх боломжтой. Эхний тал нь гэрээ байгуулах үед, үлдсэн тал нь сургуульд тэнцсэний дараа төлөгдөнө.</span>');
priceContent = priceContent.replace('Төлбөр буцаах нөхцөл байгаа юу?', '<span data-translate="priceFaq2Q">Багцын үнэд сургуулийн бүртгэлийн хураамж багтсан уу?</span>');
priceContent = priceContent.replace('Эхний 14 хоногийн дотор үйлчилгээгээ цуцалбал төлбөрийг 100% буцаан олгоно. Харин үүнээс хойш гүйцэтгэсэн ажлын хувиас хамаарч тодорхой хувийг суутгах нөхцөлтэй.', '<span data-translate="priceFaq2A">Үгүй. Сургуулийн бүртгэлийн хураамж (Application fee) болон ЭСЯ-ны хураамжууд үйлчилгээний төлбөрт багтаагүй болно.</span>');

fs.writeFileSync(pricingPath, priceContent, 'utf8');

// Success story replacements
let storyContent = fs.readFileSync(storyPath, 'utf8');
storyContent = storyContent.replace('<h2>Сүүлийн жилийн амжилтууд</h2>', '<h2 data-translate="storyTitle">Оюутнуудын амжилтын түүх</h2>');
storyContent = storyContent.replace('<p>Солонгосын их сургуульд элссэн, визтэй болсон, байртай амьдарч эхэлсэн үйлчлүүлэгчдийн туршлага, зөвлөгөө, дараагийн алхмуудын тухай уншаарай.</p>', '<p data-translate="storySubtitle">K-Study Bridge-ээр дамжуулан хүсэл мөрөөдөлдөө хүрсэн оюутнуудын бодит сэтгэгдлүүдтэй танилцана уу.</p>');

storyContent = storyContent.replace('<h3>Урангоо</h3>', '<h3 data-translate="story1Name">Урангоо</h3>');
storyContent = storyContent.replace('<p class="story-title" style="color: #4f46e5; font-weight: 600;">Сөүлийн Үндэсний Их Сургууль (SNU) төгсөгч</p>', '<p class="story-title" style="color: #4f46e5; font-weight: 600;" data-translate="story1Meta">Сөүлийн Үндэсний Их Сургууль (SNU) төгсөгч</p>');
storyContent = storyContent.replace('<p class="story-date">2024 - Seoul National University</p>', '<p class="story-date" data-translate="story1Date">2024 - Seoul National University</p>');
storyContent = storyContent.replace('<p><strong>Мэргэжил:</strong> Компьютерын шинжлэх ухаан</p>', '<p><strong data-translate="storyLabelMajor">Мэргэжил:</strong> <span data-translate="story1Major">Компьютерын шинжлэх ухаан</span></p>');
storyContent = storyContent.replace('<p><strong>Визний төрөл:</strong> D-2 (Бакалавр)</p>', '<p><strong data-translate="storyLabelVisa">Визний төрөл:</strong> <span data-translate="story1Visa">D-2 (Бакалавр)</span></p>');
storyContent = storyContent.replace('"K-Study Bridge-ийн тусламжтайгаар TOPIK II-ын 5-р түвшинд тэнцсэн. Сургуульд бүртгүүлэх, виз мэдүүлэх бүх бичиг баримтыг найдвартай бүрдүүлж өгсөн. Одоо би Samsung компанид инженерээр ажиллаж байна."', '<span data-translate="story1Text">"K-Study Bridge-ийн тусламжтайгаар TOPIK II-ын 5-р түвшинд тэнцсэн. Сургуульд бүртгүүлэх, виз мэдүүлэх бүх бичиг баримтыг найдвартай бүрдүүлж өгсөн. Одоо би Samsung компанид инженерээр ажиллаж байна."</span>');

storyContent = storyContent.replace('<h3>Анар</h3>', '<h3 data-translate="story2Name">Анар</h3>');
storyContent = storyContent.replace('<p class="story-title" style="color: #3b82f6; font-weight: 600;">KAIST-ын төгсөх дамжааны оюутан</p>', '<p class="story-title" style="color: #3b82f6; font-weight: 600;" data-translate="story2Meta">KAIST-ын төгсөх дамжааны оюутан</p>');
storyContent = storyContent.replace('<p class="story-date">2023 - KAIST (Магистр)</p>', '<p class="story-date" data-translate="story2Date">2023 - KAIST (Магистр)</p>');
storyContent = storyContent.replace('<p><strong>Мэргэжил:</strong> Материал судлал</p>', '<p><strong data-translate="storyLabelMajor">Мэргэжил:</strong> <span data-translate="story2Major">Материал судлал</span></p>');
storyContent = storyContent.replace('<p><strong>Визний төрөл:</strong> D-2 (Магистр)</p>', '<p><strong data-translate="storyLabelVisa">Визний төрөл:</strong> <span data-translate="story2Visa">D-2 (Магистр)</span></p>');
storyContent = storyContent.replace('"Өмнө нь KAIST-д өргөдөл өгөөд тэнцээгүй байсан. K-Study Bridge миний өргөдлийн материалыг дахин сайжруулж өгснөөр амжилттай элссэн. Мөн байр олох, гадаад иргэний үнэмлэх авахад их тусалсан."', '<span data-translate="story2Text">"Өмнө нь KAIST-д өргөдөл өгөөд тэнцээгүй байсан. K-Study Bridge миний өргөдлийн материалыг дахин сайжруулж өгснөөр амжилттай элссэн. Мөн байр олох, гадаад иргэний үнэмлэх авахад их тусалсан."</span>');

storyContent = storyContent.replace('<h3>Энхжин</h3>', '<h3 data-translate="story3Name">Энхжин</h3>');
storyContent = storyContent.replace('<p class="story-title" style="color: #ec4899; font-weight: 600;">Ёнсэй Их Сургуулийн оюутан</p>', '<p class="story-title" style="color: #ec4899; font-weight: 600;" data-translate="story3Meta">Ёнсэй Их Сургуулийн оюутан</p>');
storyContent = storyContent.replace('<p class="story-date">2024 - Yonsei University</p>', '<p class="story-date" data-translate="story3Date">2024 - Yonsei University</p>');
storyContent = storyContent.replace('<p><strong>Мэргэжил:</strong> Солонгос хэл, уран зохиол</p>', '<p><strong data-translate="storyLabelMajor">Мэргэжил:</strong> <span data-translate="story3Major">Солонгос хэл, уран зохиол</span></p>');
storyContent = storyContent.replace('<p><strong>Визний төрөл:</strong> D-2 (Бакалавр)</p>', '<p><strong data-translate="storyLabelVisa">Визний төрөл:</strong> <span data-translate="story3Visa">D-2 (Бакалавр)</span></p>');
storyContent = storyContent.replace('"K-Study Bridge-ийн зөвлөсөн төлөвлөгөөний дагуу бэлдээд TOPIK II шалгалтад өндөр оноо авсан. Үүний үр дүнд Ёнсэй Их Сургуулиас 100% тэтгэлэг авч чадсан. Сөүлийн амьдралд дасан зохицоход өгсөн зөвлөгөөнүүд нь маш хэрэгтэй байлаа."', '<span data-translate="story3Text">"K-Study Bridge-ийн зөвлөсөн төлөвлөгөөний дагуу бэлдээд TOPIK II шалгалтад өндөр оноо авсан. Үүний үр дүнд Ёнсэй Их Сургуулиас 100% тэтгэлэг авч чадсан. Сөүлийн амьдралд дасан зохицоход өгсөн зөвлөгөөнүүд нь маш хэрэгтэй байлаа."</span>');

storyContent = storyContent.replace('<h3>Лхагвадулам</h3>', '<h3 data-translate="story4Name">Лхагвадулам</h3>');
storyContent = storyContent.replace('<p class="story-title" style="color: #8b5cf6; font-weight: 600;">Ихуа Эмэгтэйчүүдийн Их Сургуулийн докторант</p>', '<p class="story-title" style="color: #8b5cf6; font-weight: 600;" data-translate="story4Meta">Ихуа Эмэгтэйчүүдийн Их Сургуулийн докторант</p>');
storyContent = storyContent.replace('<p class="story-date">2022 - Ewha Womans University (Доктор)</p>', '<p class="story-date" data-translate="story4Date">2022 - Ewha Womans University (Доктор)</p>');
storyContent = storyContent.replace('<p><strong>Мэргэжил:</strong> Эмэгтэйчүүд судлал, манлайлал</p>', '<p><strong data-translate="storyLabelMajor">Мэргэжил:</strong> <span data-translate="story4Major">Эмэгтэйчүүд судлал, манлайлал</span></p>');
storyContent = storyContent.replace('<p><strong>Визний төрөл:</strong> D-2 (Докторантур)</p>', '<p><strong data-translate="storyLabelVisa">Визний төрөл:</strong> <span data-translate="story4Visa">D-2 (Докторантур)</span></p>');
storyContent = storyContent.replace('"Докторт элсэх өрсөлдөөн маш ширүүн байсан тул их санаа зовж байлаа. K-Study Bridge надад ярилцлагад хэрхэн бэлдэх, эссегээ яаж бичих талаар маш сайн чиглүүлж өгсөн. Одоо би туслах судлаачаар давхар ажиллаж байна."', '<span data-translate="story4Text">"Докторт элсэх өрсөлдөөн маш ширүүн байсан тул их санаа зовж байлаа. K-Study Bridge надад ярилцлагад хэрхэн бэлдэх, эссегээ яаж бичих талаар маш сайн чиглүүлж өгсөн. Одоо би туслах судлаачаар давхар ажиллаж байна."</span>');

fs.writeFileSync(storyPath, storyContent, 'utf8');

console.log("HTML files updated with data-translate attributes!");
