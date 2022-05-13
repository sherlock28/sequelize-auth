// Controllers
const { signIn, signUp } = require('./auth.crtl');
const { showAllPost, showPost, createPost, updatePost, deletePost } = require('./post.ctrl');

// Middlewares
const auth = require('../middlewares/auth');
const find = require('../middlewares/posts');

// Policies
const PostPolicy = require('../policies/PostPolicy');


module.exports = {
    signUpCtrls: [signUp],
    signInCtrls: [signIn],
    showAllPostCtrls: [auth, showAllPost],
    findPostByIdCtrls: [auth, find, PostPolicy.viewPost, showPost],
    createPostCtrls: [auth, PostPolicy.viewPost, createPost],
    updatePostCtrls: [auth, PostPolicy.viewPost, updatePost],
    deletePostCtrls: [auth, PostPolicy.viewPost, deletePost]
}