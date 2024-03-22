import Joi from 'joi';

const authObject = Joi.object({
    name: Joi.string().required().empty().messages({
        "any.required": "name không được để trống",
        "string.empty": "name không được để trống"
    }),

    email: Joi.string().required().empty().messages({
        "any.required": "email không được để trống",
        "string.empty": "email không được để trống"
    }),

    password: Joi.string().required().empty().messages({
        "any.required": "Password không được để trống",
        "string.empty": "Password không được để trống"
    }),

   
})

export const CheckValidateAuth= (req, res, next)=>{
    const {name,email, password} = req.body;
    const {error}= authObject.validate({name,email, password})

    if(error){
        res.send({status: false, message: error.message})
    }else{
        next();
    }
}