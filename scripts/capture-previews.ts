import { chromium } from "playwright";

const captures = [
  {
    url: "https://victor-abadie-web.vercel.app/",
    output: "public/portfolio/victor-abadie-preview.png",
  },
  {
    url: "https://market-intelligence-dashboard-pi.vercel.app/",
    output: "public/portfolio/market-intelligence-preview.png",
  },
  {
    url: process.env.NEXT_PUBLIC_DIAGNOSTICO_360_URL || "http://localhost:3000/#diagnostico-360",
    output: "public/portfolio/diagnostico-360-preview.png",
  },
];

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 960 },
    deviceScaleFactor: 1,
  });

  for (const capture of captures) {
    await page.goto(capture.url, { waitUntil: "networkidle", timeout: 60_000 });
    await page.screenshot({
      path: capture.output,
      fullPage: false,
    });
  }

  await browser.close();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
