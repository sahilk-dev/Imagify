import jwt from "jsonwebtoken"


const userAuth = async (req, res, next)  => {
    const {token} = req.headers;

    if(!token) {
        console.log(token);
        return res.json({ success: false, message: "Not Authorized. Login Again" });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        console.log(tokenDecode);
        

        if(tokenDecode.id) {
            req.body = req.body || {};
            req.body.userId = tokenDecode.id;
        } else {
            return res.json({ success: false, message: "Not Authorized. Login Again" });
        }

        next();

    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

export default userAuth;