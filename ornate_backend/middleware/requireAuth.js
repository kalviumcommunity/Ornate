const jwt = require('jsonwebtoken')
const User = require('../model/userSchema')

const requireAuth = async (req, res, next) => {
    
    // Verify Authentication
    const { autherization } = req.headers
    if (!autherization) {
        return res.status(401).json({ error: 'Authorization token required' })
        
    }

    const token = autherization.split('')[1]
    try {
        const {_id} = jwt.verify(token, process.env.SECRET)
        req.user = await User.findOne({ _id }).select('_id')
        next()


    } catch (error) {
        console.log(error)
        res.status(401).json({error : 'Request is not Authorised'})
    }

}
module.export = requireAuth;