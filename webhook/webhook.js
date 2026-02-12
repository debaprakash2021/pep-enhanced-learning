import express from 'express';

const router = express.Router();

router.post('/test', (req, res) => {
    console.log("🔥Received webhook Recieved");
    const event = req.body;
    res.status(200).json({
         success: true, 
         received:true
        }
    );

});

export default router;