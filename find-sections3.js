const fs = require('fs');
const content = fs.readFileSync('src/app/page.tsx', 'utf8');
const lines = content.split('\n');

const markers = [
  'id="services"',
  'id="testimonials"',
  'id="faq"',
  'id="community"',
  'id="appointment"',
  '<footer'
];

markers.forEach(id => {
  const lineIndex = lines.findIndex(l => l.includes(id));
  console.log(`Found ${id} at line ${lineIndex + 1}`);
});
