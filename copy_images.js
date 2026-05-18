const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\vinee\\.gemini\\antigravity\\brain\\4158be76-e080-42fa-bc6e-47dfba5539cd';
const destDir = 'c:\\Users\\vinee\\OneDrive\\Desktop\\RYDEEX\\public\\evies';

const files = {
  'scooty_x1_pro_1779122649818.png': 'ev1.png',
  'scooty_city_lite_1779122670905.png': 'ev2.png',
  'scooty_rs_max_1779122689600.png': 'ev3.png',
  'scooty_eco_plus_1779122705741.png': 'ev4.png',
  'scooty_turbo_s_1779122721601.png': 'ev5.png',
  'scooty_cruiser_v_1779122743770.png': 'ev6.png'
};

for (const [srcFile, destFile] of Object.entries(files)) {
  fs.copyFileSync(path.join(srcDir, srcFile), path.join(destDir, destFile));
}
console.log('Done!');
