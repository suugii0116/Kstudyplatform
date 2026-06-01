const fs = require('fs');
const path = require('path');

const basePath = path.join('c:', 'Users', 'suugi', 'OneDrive', 'Desktop', 'Kstudy-master', 'Kstudy-master');
const storyPath = path.join(basePath, 'success-story.html');
const jsPath = path.join(basePath, 'js', 'app.min.js');

let storyContent = fs.readFileSync(storyPath, 'utf8');
let jsContent = fs.readFileSync(jsPath, 'utf8');

storyContent = storyContent.replace('<div class="story-avatar" style="box-shadow: 0 4px 10px rgba(79, 70, 229, 0.3);">У</div>', '<div class="story-avatar" style="box-shadow: 0 4px 10px rgba(79, 70, 229, 0.3);" data-translate="story1Initial">У</div>');
storyContent = storyContent.replace('<div class="story-avatar" style="box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3); background: linear-gradient(135deg, #3b82f6, #06b6d4);">А</div>', '<div class="story-avatar" style="box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3); background: linear-gradient(135deg, #3b82f6, #06b6d4);" data-translate="story2Initial">А</div>');
storyContent = storyContent.replace('<div class="story-avatar" style="box-shadow: 0 4px 10px rgba(236, 72, 153, 0.3); background: linear-gradient(135deg, #ec4899, #8b5cf6);">Э</div>', '<div class="story-avatar" style="box-shadow: 0 4px 10px rgba(236, 72, 153, 0.3); background: linear-gradient(135deg, #ec4899, #8b5cf6);" data-translate="story3Initial">Э</div>');
storyContent = storyContent.replace('<div class="story-avatar" style="box-shadow: 0 4px 10px rgba(139, 92, 246, 0.3); background: linear-gradient(135deg, #8b5cf6, #4f46e5);">Л</div>', '<div class="story-avatar" style="box-shadow: 0 4px 10px rgba(139, 92, 246, 0.3); background: linear-gradient(135deg, #8b5cf6, #4f46e5);" data-translate="story4Initial">Л</div>');

const newTranslations = {
  en: { story1Initial: "U", story2Initial: "A", story3Initial: "E", story4Initial: "L" },
  mn: { story1Initial: "У", story2Initial: "А", story3Initial: "Э", story4Initial: "Л" },
  ko: { story1Initial: "우", story2Initial: "아", story3Initial: "엥", story4Initial: "라" }
};

function injectTranslations(langCode, newObj, jsCode) {
  let entries = Object.keys(newObj).map(k => `"${k}":"${newObj[k]}"`).join(',');
  return jsCode.replace(new RegExp(`${langCode}:\\{`), `${langCode}:{${entries},`);
}

jsContent = injectTranslations('en', newTranslations.en, jsContent);
jsContent = injectTranslations('mn', newTranslations.mn, jsContent);
jsContent = injectTranslations('ko', newTranslations.ko, jsContent);

fs.writeFileSync(storyPath, storyContent, 'utf8');
fs.writeFileSync(jsPath, jsContent, 'utf8');

console.log('Avatars translated.');
