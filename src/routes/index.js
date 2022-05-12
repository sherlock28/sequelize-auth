const router = require('express').Router();
const { signIn, signUp } = require('../controllers/auth.crtl');
const { index, showPost, createPost, updatePost, deletePost } = require('../controllers/post.ctrl');

const auth = require('../middlewares/auth');
const find = require('../middlewares/posts');

router.get('/', (req, res) => {
    res.json({
        msg: 'Hello World'
    });
});

// Auth routes
router.post('/signin', signIn);
router.post('/signup', signUp);

// Post routes
router.get('/posts', auth, index);
router.get('/posts/:id', auth, find, showPost);
router.post('/posts', createPost);
router.put('/posts', updatePost);
router.delete('/posts', deletePost);

module.exports = router;