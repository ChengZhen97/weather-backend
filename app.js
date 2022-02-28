const express = require('express')
const app = express()
const port = 3000

app.get('/data/2.5/weather', (req, res) => {
  res.json({"coord":{"lon":-123.262,"lat":44.5646},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":276.37,"feels_like":273.88,"temp_min":275.18,"temp_max":282.23,"pressure":1020,"humidity":100},"visibility":10000,"wind":{"speed":2.57,"deg":180},"clouds":{"all":100},"dt":1642444900,"sys":{"type":1,"id":3727,"country":"US","sunrise":1642434298,"sunset":1642467661},"timezone":-28800,"id":5720727,"name":"Corvallis","cod":200})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

