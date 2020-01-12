const puppeteer = require('puppeteer');
const url =
  'https://movie.douban.com/explore#!type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=20&page_start=0';
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1300,
    height: 938,
  });

  await page.goto(url);
  await page.waitFor(1000);

  const result = await page.evaluate(x => {
    const $ = window.$;
    let data = [];
    let elements = $('.list-wp .list .item');
    // console.log('====>>>>', elements);

    elements.each(function(i, item) {
      //   console.log(item);
      let url = $(this)
        .find('img')
        .attr('src');

      let name = $(this)
        .find('p')
        .contents()
        .filter(function(index, content) {
          return content.nodeType === 3;
        })
        .text()
        .trim()
        .replace(/[\r\n]/g, '');

      let score = $(this)
        .find('strong')
        .text();

      data.push({
        url: url,
        name: name,
        score: score,
      });
    });
    // console.log(data);
    return data;
  });

  console.log('======>>>>result', result);

  // await page.screenshot({ path: "example.png" });

  // await browser.close();
})();
