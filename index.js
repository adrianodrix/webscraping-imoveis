// https://www.youtube.com/watch?feature=youtu.be&v=TvExPmkfKGA&app=desktop

const request = require('request-promise')
const cheerio = require('cheerio')
const crawler = require('crawler')

const crawpgFilha = new crawler({
  rateLimit: 5000,
  callback: (err, res, done) => {
    if (err) {
      console.error(err)
    } else {
      let $ = res.$
      let nome = $('#main > div.wrapper.wrapper-extra.wraspper-big > header.visualizar-header > h1').text().trim()
      let preco = $('#main > div.wrapper.wrapper-extra.wraspper-big > section > div > div > div.visualizar-info > div > header > div > strong').text().trim()
      let quartos = $('#main > div.wrapper.wrapper-extra.wraspper-big > section > div > div > div.visualizar-info > div > div > ol > li:nth-child(1) > strong').text().trim()
      let m2Util = $('#main > div.wrapper.wrapper-extra.wraspper-big > section > div > div > div.visualizar-info > div > div > ol > li:nth-child(4) > strong').text().trim()
      console.info(nome, preco, quartos, m2Util)
    }
  }
})

crawpgFilha.queue('https://www.imoveis-sc.com.br/balneario-camboriu/comprar/apartamento/centro/apartamento-balneario-camboriu-centro-653728.html?isc_source=SD');