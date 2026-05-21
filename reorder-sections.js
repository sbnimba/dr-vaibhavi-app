const fs = require('fs');
const content = fs.readFileSync('src/app/page.tsx', 'utf8');
const lines = content.split('\n');

// Javascript slice ends BEFORE the end index, so we add 1 to the end line number (0-indexed logic)
// lines array is 0-indexed.
// 0 to 946 (inclusive) -> lines.slice(0, 946)
// 947 to 988 -> lines.slice(946, 988)
// 989 to 1111 -> lines.slice(988, 1111)
// 1112 to 1290 -> lines.slice(1111, 1290)
// 1291 to end -> lines.slice(1290)

const before = lines.slice(0, 946); // Up to end of Services
const testimonials = lines.slice(946, 988);
const faq = lines.slice(988, 1111);
const community = lines.slice(1111, 1290);
const appointment = lines.slice(1290);

const reassembled = [
  ...before,
  ...community,
  ...testimonials,
  ...faq,
  ...appointment
];

fs.writeFileSync('src/app/page.tsx', reassembled.join('\n'));
console.log('Reordered successfully!');
