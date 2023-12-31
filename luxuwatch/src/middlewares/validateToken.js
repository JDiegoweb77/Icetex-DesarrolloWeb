import jwt from 'jsonwebtoken'
import { TOKEN_SECRET} from '../config.js'

export const authRequired = (req, res, next) => {
    const {token} = req.cookies
    
    if (!token) return res.status(401).json({ message: "There is no token, access denied"});

    jwt.verify(token, TOKEN_SECRET, (error, decoded) => {
        if (error) return res.status(403).json({ messagfe: "Invalid token"});

        req.decoded = decoded

        next()
    })
}