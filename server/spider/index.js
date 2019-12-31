const puppeteer = require('puppeteer');
const fs = require('fs');
// const puppeteer = require('puppeteer');
const url =
  'https://www.pinterest.com/search/pins/?q=web%20layout&rs=guide&term_meta[]=web%7Ctyped&add_refine=layout%7Cguide%7Cword%7C1';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setViewport({ width: 1280, height: 926 });

  let counter = 0;
  page.on('response', async response => {
    const matches = /.*\.(jpg|png|svg|gif)$/.exec(response.url());
    console.log('response===>>>>response', response);
    if (matches && matches.length === 2) {
      const extension = matches[1];
      const buffer = await response.buffer().catch(err => {
        console.log(err);
      });
      fs.writeFileSync(`${__dirname}/images/image-${counter}.${extension}`, buffer, 'base64');
      // fs.writeFileSync("./images/")
      counter += 1;
    }
  });

  await page.goto(url);
  await page.waitFor(10000);

  await browser.close();
})();

// (async () => {
//   // Set up browser and page.
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   page.setViewport({ width: 1280, height: 926 });

//   // Navigate to this blog post and wait a bit.
//   await page.goto(url);
//   await page.waitForSelector('.MIw');

//   // Select the #svg img element and save the screenshot.
//   const svgImage = await page.$('.MIw');
//   await svgImage.screenshot({
//     path: 'logo-screenshot.png',
//     omitBackground: true,
//   });

//   await browser.close();
// })();
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(url);
//   await page.screenshot({ path: 'example.png' });

//   var data = await page.$('.list-wp');

//   console.log(data);

//   await browser.close();
// })();

// async function getWelfareImage(url) {
//   // 返回解析为Promise的浏览器
//   const browser = await puppeteer.launch();

//   // 返回新的页面对象
//   const page = await browser.newPage();

//   // 页面对象访问对应的url地址
//   await page.goto(url, {
//     waitUntil: 'networkidle2',
//   });

//   // 等待3000ms，等待浏览器的加载
//   await sleep(1000);

//   // 可以在page.evaluate的回调函数中访问浏览器对象，可以进行DOM操作
//   const urls = await page.evaluate(() => {
//     let ol = document.getElementsByClassName('commentlist')[0];
//     let imgs = ol.getElementsByTagName('img');
//     let url = [];
//     for (let i = 0; i < imgs.length; i++) {
//       url.push(imgs[i].getAttribute('src'));
//     }
//     // 返回所有美女图的url地址数组
//     return url;
//   });
//   const store = oss(config.ossconfig);
//   for (let i = 0; i < urls.length; i++) {
//     // request-promise，返回一个buffer对象
//     let fetchResult = await rp({ url: urls[i], encoding: null });
//     // 通过buffer的方式上传到cdn
//     await store.put(`beauty/cp-${path.basename(urls[i])}`, fetchResult);
//   }

//   // 关闭无头浏览器
//   await browser.close();
// }
// getWelfareImage(url);
