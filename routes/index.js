const router = require('express').Router()
const usersRouter = require('./users')

router.get('/', function (req, res) {
  res.send('Bonjour')
})

router.get('/test', (req, res) => {
  res.send('Test')
})

router.use('/users', usersRouter)

module.exports = router;