import Joi from 'joi';

const booksObject = Joi.object({
    title: Joi.string().required().empty().messages({
        "any.required": "Title không được để trống",
        "string.empty": "Title không được để trống"
    }),

    description: Joi.string().required().empty().messages({
        "any.required": "Description không được để trống",
        "string.empty": "Description không được để trống"
    }),

    image: Joi.string().required().messages({
        "any.required": "Image không được để trống"
    }),

    author: Joi.string().required().empty().messages({
        "any.required": "Author không được để trống",
        "string.empty": "Author không được để trống"
    }),

    category: Joi.number().required().min(1).messages({
        "any.required": "Category không được để trống",
        "string.min": "Category phải lớn hơn 1"
    })
})

export const CheckValidateBooks= (req, res, next)=>{
    const {title,description, image, author, category} = req.body;
    const {error}= booksObject.validate({title,description, image, author, category})

    if(error){
        res.send({status: false, message: error.message})
    }else{
        next();
    }
}