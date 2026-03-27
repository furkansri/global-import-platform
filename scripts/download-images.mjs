import https from 'https'
import fs from 'fs'
import path from 'path'

const API_KEY = 'OJIXztw6iXGwfwaZBGrtjwjcPZ5tP5w6bpTp3yH5H97koW3LiYSTQBND'

async function search(query, perPage = 4) {
  return new Promise((resolve, reject) => {
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=landscape`
    https.get(url, { headers: { Authorization: API_KEY } }, (res) => {
      let data = ''
      res.on('data', chunk => data += chunk)
      res.on('end', () => resolve(JSON.parse(data)))
    }).on('error', reject)
  })
}

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    function get(u) {
      https.get(u, res => {
        if (res.statusCode === 302 || res.statusCode === 301) {
          get(res.headers.location)
        } else {
          const file = fs.createWriteStream(dest)
          res.pipe(file)
          file.on('finish', () => { file.close(); resolve() })
          file.on('error', reject)
        }
      }).on('error', reject)
    }
    get(url)
  })
}

const result = await search('global logistics shipping cargo container')
const photos = result.photos.slice(0, 4)
const names = ['hero', 'logistics-1', 'logistics-2', 'logistics-3']

for (let i = 0; i < photos.length; i++) {
  const src = photos[i].src.large2x
  const dest = path.join('public/images', `${names[i]}.jpg`)
  console.log(`Downloading ${names[i]}...`)
  await download(src, dest)
  console.log(`  Saved: ${dest}`)
}
console.log('Done!')
