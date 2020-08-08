import express from 'express'
import nodeHtmlToImage from 'node-html-to-image'
import path from 'path'
import fs from 'fs'

const app = express()

app.use(express.json())

app.get('/', async (request, response) => {
  const template = await fs.promises.readFile(path.resolve(__dirname, 'views', 'template.handlebars'), 'utf-8')
  return response.send(template)
})

app.post('/USDT', async (request, response) => {
  const { asset, buyPrice1, buyPrice2, target1, target2, target3, stop } = request.body
  const base = 'USDT'
  const imagePath = path.resolve(__dirname, '..', 'tmp',) + `/${base}image.png`
  const template = await fs.promises.readFile(path.resolve(__dirname, 'views', 'template.handlebars'), 'utf-8')
  await nodeHtmlToImage({
    output: imagePath,
    html: template,
    content: {
      base,
      asset,
      buyPrice1,
      buyPrice2,
      target1,
      target2,
      target3,
      stop
    }
  })
  return response.json({ ok: true })
})

app.post('/BTC', async (request, response) => {
  const { asset, buyPrice1, buyPrice2, target1, target2, target3, stop } = request.body
  const base = 'BTC'
  const imagePath = path.resolve(__dirname, '..', 'tmp',) + `/${base}image.png`
  const template = await fs.promises.readFile(path.resolve(__dirname, 'views', 'template.handlebars'), 'utf-8')
  await nodeHtmlToImage({
    output: imagePath,
    html: template,
    content: {
      base,
      asset,
      buyPrice1,
      buyPrice2,
      target1,
      target2,
      target3,
      stop
    }
  })
  return response.json({ ok: true })
})


app.listen(3333, () => {
  console.log('Server running')
})
