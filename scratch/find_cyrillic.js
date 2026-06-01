const fs = require('fs');
const files = ['blog.html', 'pricing.html', 'success-story.html'];
const cyrillicPattern = /[А-Яа-яЁёӨөҮү]/;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, i) => {
    if (cyrillicPattern.test(line) && !line.includes('data-translate') && !line.includes('lang="mn"') && !line.includes('<option') && !line.includes('content="') && !line.includes('title="')) {
      console.log(file + ':' + (i+1) + ': ' + line.trim());
    }
  });
});
