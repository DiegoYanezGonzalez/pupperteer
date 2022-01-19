const puppeteer = require('puppeteer')

describe('Test Puppeteer',()=>{

    it('Debe abrir y cerrar el navegador',async ()=>{
        const browser = await puppeteer.launch({
            headless: false
    
          })
          const page = await browser.newPage()
          await page.goto('http://automationpractice.com/index.php')
          await page.waitForTimeout(10000)
          await browser.close()
    },30000)
})

