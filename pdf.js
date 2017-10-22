const path = require('path')
const puppeteer = require('puppeteer')

const CHROME_DEFAULT_PDF_A4_MARGIN = {
  top: '0.39in',
  right: '0.38in',
  bottom: '0.38in',
  left: '0.39in'
}

const init = async () => {
  const buildPath = path.join(__dirname, '/build')
  const pageURL = `file:/\/\/${buildPath}/index.html`

  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(pageURL, { waitUntil: 'networkidle' })
  await page.waitFor(2000)
  await page.pdf({
    path: 'resumé.pdf',
    format: 'A4',
    margin: CHROME_DEFAULT_PDF_A4_MARGIN
  })

  browser.close()
}

init()
