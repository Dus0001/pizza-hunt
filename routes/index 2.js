const router = require('express').Router();

const apiRoutes = require('./api');
const htmlRoutes = require('./html/html-routes')

// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/api', apiRoutes)
router.use('/', htmlRoutes);

router.use((req, res) => {
    res.status(404).send('<h1> Error 🫤 </h1>')
});

module.exports = router;