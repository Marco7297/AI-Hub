import puppeteer from 'puppeteer-core';
import path from 'path';

const artifactDir = 'C:\\Users\\Mehul\\.gemini\\antigravity\\brain\\2ab729be-5dcc-4156-8427-f76bcb47100f';
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 850 });

  const pagesToCapture = [
    { url: 'http://127.0.0.1:5173/', file: 'home.png' },
    { url: 'http://127.0.0.1:5173/tools', file: 'all_tools.png' },
    { url: 'http://127.0.0.1:5173/compare', file: 'compare.png' },
    { url: 'http://127.0.0.1:5173/best-ai-tools', file: 'best_ai_tools.png' },
    { url: 'http://127.0.0.1:5173/submit', file: 'submit.png' },
  ];

  for (const item of pagesToCapture) {
    try {
      await page.goto(item.url, { waitUntil: 'networkidle0', timeout: 15000 });
      await new Promise(r => setTimeout(r, 600));
      const savePath = path.join(artifactDir, item.file);
      await page.screenshot({ path: savePath, fullPage: false });
      console.log('Saved:', savePath);
    } catch (err) {
      console.error('Error capturing', item.url, err.message);
    }
  }

  await browser.close();
  console.log('Done capturing all screenshots!');
}

run();
