const fs = require('fs');
const content = fs.readFileSync('src/app/page.tsx', 'utf8');
const lines = content.split('\n');

const sectionIds = ['id="home"', 'id="about"', 'id="mission-vision"', 'id="services"', 'id="testimonials"', 'id="faq"', 'id="community"', 'id="contact"'];

sectionIds.forEach(id => {
  const lineIndex = lines.findIndex(l => l.includes(id));
  if (lineIndex !== -1) {
     console.log(`Found ${id} at line ${lineIndex + 1}`);
  } else {
     console.log(`Could not find ${id}`);
  }
});
