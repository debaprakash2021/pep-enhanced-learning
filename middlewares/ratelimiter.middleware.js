import ratelimit from "express-rate-limit";

export const rateLimiter = ratelimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 2,
    message:{
        success:false,
        message:"Too many requests from this IP, please try again after 1 minute"
    },
    standardHeaders:true,
    legacyHeaders:false

});

export default ratelimit;