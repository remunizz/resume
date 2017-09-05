const path = require('path')
const puppeteer = require('puppeteer')

const init = async () => {
		const buildPath = path.join(__dirname, '/build')
		const pageURL = `file:/\/\/${buildPath}/index.html`

	  const browser = await puppeteer.launch()
	  const page = await browser.newPage()
	  await page.goto(pageURL, {waitUntil: 'networkidle'})
		await page.waitFor(2000)
	  await page.pdf({path: 'resumé.pdf', format: 'A4'})

	  browser.close()
}

init()
