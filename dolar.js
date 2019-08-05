// https://www.youtube.com/watch?v=36YwX1sD7jc

const request = require('request-promise')
const cheerio = require('cheerio')

const URL = 'https://ptax.bcb.gov.br/ptax_internet/consultarUltimaCotacaoDolar.do'

const start = async () => {
  try {
    const res = await request(URL)
    let $ = cheerio.load(res)
    let dolar = $('body > div:nth-child(3) > table > tbody > tr.fundoPadraoBClaro2 > td:nth-child(2)').text()
    console.info('dolar', dolar)
  } catch (err) {
    console.error('error', err)
  }
}

start()

/**
const crawler = require('crawler')

const craw = new crawler({
  rateLimit: 5000,
  callback: (err, res, done) => {
    if (err) {
      console.error(err)
    } else {
      let $ = res.$
      let dolar = $('#home > div > div:nth-child(1) > div.componente.cotacao > div > cotacao > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(2) > span').text()
      console.info(dolar)
    }
  }
})

craw.queue('https://www.bcb.gov.br/');
**/