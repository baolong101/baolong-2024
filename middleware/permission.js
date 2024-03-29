import jwt from 'jsonwebtoken';

const permission= (req, res, next)=>{
    console.log(req.headers);
    try {
        let token= req.headers.authorization
        token=token.split(' ')[1]
        const verify= jwt.verify(token, '123456')
        console.log(verify);
        next()
    } catch (error) {
        // console.log(error);
        res.status(403).json({status: '403 Forbidden', message: "bạn không có quền truy cập"})
    }

}

export default permission