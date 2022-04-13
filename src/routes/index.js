const router = require('express').Router();
const { signIn, signUp } = require('../controllers/auth.crtl');
const { index, create } = require('../controllers/post.ctrl');

router.get('/', (req, res) => {
    res.json({
        msg: 'Hello World'
    });
});

// Auth routes
router.post('/signin', signIn);
router.post('/signup', signUp);

// Post routes
router.get('/posts', index);
router.post('/posts/create', create);

module.exports = router;