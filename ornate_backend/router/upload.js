const express = require("express")
const {
    getPosts,
    getUserPosts,
    uploadPosts,
    delPosts
} = require('../controller/uploadController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// Requiring Auth
router.use(requireAuth)

// Getting All Posts
router.get('/', getPosts)

// Getting Posts by a user
router.get('/userPosts', getUserPosts)

// Creating New Posts
router.post('/', uploadPosts)

// Deleting Posts
router.delete('/:id', delPosts)

module.exports = router