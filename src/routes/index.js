const router = require('express').Router();
const { signIn, signUp } = require('../controllers/auth.crtl');

router.get('/', (req, res) => {
    res.json({
        msg: 'Hello World'
    });
});

router.post('/signin', signIn);
router.post('/signup', signUp);

module.exports = router;