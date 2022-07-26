const router = require('express').Router()

router.get('/new', (req, res) => {
    res.render('places/new')
})


//POST /places
router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
})

//Get /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/jerome-jome-Ga3ziG9jCno-unsplash.jpg'

    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/bobotaks-kTATJGIbtOE-unsplash.jpg'
    }]

    res.render('places/index', { places })
})




module.exports = router
