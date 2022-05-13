const router = require('express').Router();
const control = require('../controllers');

// Default route
router.get('/', (req, res) => {
    res.json({
        msg: 'API REST - Posts - v1.0.0'
    });
});

router.get('/doc', (req, res) => {
    res.json({
        msg: 'API documentation'
    });
});

// Auth routes
router.post('/signin', ...control.signInCtrls);
router.post('/signup', ...control.signUpCtrls);

// Post routes
router.get('/posts', ...control.showAllPostCtrls);
router.get('/posts/:id', ...control.findPostByIdCtrls);
router.post('/posts', ...control.createPostCtrls);
router.put('/posts', ...control.updatePostCtrls);
router.delete('/posts', ...control.deletePostCtrls);

module.exports = router;