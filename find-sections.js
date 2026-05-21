const fs = require('fs');
const content = fs.readFileSync('src/app/page.tsx', 'utf8');
const lines = content.split('\n');

const keywords = ['{/* ==================== 1ST PAGE', '{/* ==================== 2ND PAGE', '{/* ==================== 3RD PAGE', '{/* ==================== 4TH PAGE', '{/* ==================== 5TH PAGE', '{/* ==================== FAQ', '{/* ==================== COMMUNITY', '{/* ==================== BOOK APPOINTMENT', '{/* ==================== FOOTER'];

keywords.forEach(kw => {
  const lineIndex = lines.findIndex(l => l.includes(kw));
  if (lineIndex !== -1) {
     console.log(`Found "${kw}" at line ${lineIndex + 1}`);
  } else {
     console.log(`Could not find "${kw}"`);
  }
});
