const Uploads = require('../model/uploadSchema')
const mongoose = require('mongoose')

// Getting All Posts
const getPosts = async (req, resp) => {
    const id = req._id;

    const upload = await Uploads.find({ id });

    resp.status(200).json(upload);
}

// Getting Posts by a particular User
const getUserPosts = async (req, resp) => {
    const user_id = req.user._id

    const posts = await Uploads.find({ user_id })
    
    resp.status(200).json(posts)
}

// Uploading Posts
const uploadPosts = async (req, resp) => {
    const { title, desc, tag, pic } = req.body

    
    if (!title || !desc || !tag || !pic) {
        return resp.status(400).json({error: 'Please fill in all the fields!'})
    }
    
    try {
        const user_id = req.user._id
        const upload = await Uploads.create({ title, desc, tag, pic, user_id })
        resp.status(200).json(upload)
    }
    catch (error) {
        resp.status(400).json({error: error.message})
    }
}

// Deleting Posts
const delPosts = async (req, resp) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        resp.status(400).json({error: 'Post Unavailable!'})
    }

    const upload = await Uploads.findOneAndDelete({ _id: id })
    
    if (!upload) {
        return resp.status(400).json({error: 'Unavailable Post!'})
    }

    resp.status(200).json(upload)
}

module.exports = {
    getPosts,
    getUserPosts,
    uploadPosts,
    delPosts
}