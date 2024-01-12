// Create web server
// 1. Import express
const express = require('express')
// 2. Create an express server
const app = express()
// 3. Create a port
const port = 3000
// 4. Import handlebars
const exphbs = require('express-handlebars')
// 5. Import restaurant.json
const restaurantList = require('./restaurant.json')

// 6. Set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 7. Set static files
app.use(express.static('public'))

// 8. Create index route
app.get('/', (req, res) => {
  res.render('index', { restaurants: restaurantList.results })
})

// 9. Create show route
app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)
  res.render('show', { restaurant: restaurant })
})

// 10. Create search route
app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const restaurants = restaurantList.results.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(keyword.toLowerCase()) ||
      restaurant.category.toLowerCase().includes(keyword.toLowerCase())
  })
  res.render('index', { restaurants: restaurants, keyword: keyword })
})

// 11. Start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})