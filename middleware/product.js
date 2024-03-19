import Joi from 'joi';

const productObject = Joi.object({
    name: Joi.string().required().empty().messages({
        "any.required": "tên không được để trống",
        "string.empty": "tên không đúng định dạng"
    }),

    image: Joi.string().required().empty().messages({
        "any.required": "giá không được để trống",
        "string.min": "giá không được nhỏ hơn 1000"
    }),

    price: Joi.number().required().min(1000).messages({
        "any.required": "tên không được để trống",
        "string.empty": "tên không đúng định dạng"
    })
})

export const CheckValidateProduct= (req, res, next)=>{
    const {name, image, price} = req.body;
    const {error}= productObject.validate({name, image, price})

    if(error){
        res.send({status: false, message: error.message})
    }else{
        next();
    }
}