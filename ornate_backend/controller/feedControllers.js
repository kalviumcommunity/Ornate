const  Feedback = require("../model/feedSchema")

const updateFeed = async (req,res) =>{
    // Getting email from user body
    const {email} = req.user; 

    const {feedmail, feed} = req.body
    try{

        // Checking if feedback mail and email used for login are same or not.
        if(feedmail==email){
            const resp = await Feedback.feed(feedmail, feed);

            res.status(200).json({ feedmail, feed });
        }
        else{
        res
          .status(400)
          .json({ error: "Email used for login and feed should be same" });

        }
        
    }catch{
        res.status(400).json({ error: error.message });
    }
}

module.exports = {updateFeed}