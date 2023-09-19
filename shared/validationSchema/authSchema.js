const Joi = require('joi'); 

const loginSchema = Joi.object().keys({ 
   email:Joi.string().email({ tlds: { allow: false } }).required().min(5).max(40),
   password:Joi.string().required().min(8).max(40)
  }); 

const signupSchema = Joi.object().keys({ 
    email:Joi.string().email({ tlds: { allow: false } }).required().min(5).max(40),
    password:Joi.string().required().min(8).max(40),
    role: Joi.string().valid('user', 'admin').required()
}); 

const staffRegisterSchema = Joi.object().keys({
    firstName: Joi.string().required().min(3).max(40),
    lastName: Joi.string().required().min(3).max(40),
    phone:Joi.string().min(13),
    image:Joi.string(),
    email:Joi.string().email({ tlds: { allow: false } }).required().min(5).max(40),
    password: Joi.string().required().min(8).max(40),
    role: Joi.string()
})

const forgetPasswordSchema= Joi.object().keys({
    email:Joi.string().email({ tlds: { allow: false } }).required().min(5).max(40)

})

const resetPasswordSchema= Joi.object().keys({
    email:Joi.string().email({ tlds: { allow: false } }).required().min(5).max(40),
    password: Joi.string().required().min(8).max(40),
    code: Joi.string().min(6).max(6)
})

const verifyAccountSchema= Joi.object().keys({
    email:Joi.string().email({ tlds: { allow: false } }).required().min(5).max(40),
    code: Joi.string().min(6).max(6)
})


const customerRegistrationSchema = Joi.object().keys({
    firstName: Joi.string().required().min(3).max(40),
    lastName: Joi.string().required().min(3).max(40),
    middleName: Joi.string().min(1).max(40), 
    phone:Joi.string().min(13),
    image:Joi.string(),
    email:Joi.string().email({ tlds: { allow: false } }).required().min(5).max(40),
    role: Joi.string(), 
    status: Joi.string(),
    dlNumber: Joi.string().required(),
    dlExpiry: Joi.string().required(),
    address: Joi.string().required(),
    city: Joi.string(),
    postal: Joi.string()
})
module.exports={
    loginSchema,
    signupSchema,
    staffRegisterSchema,
    forgetPasswordSchema,
    verifyAccountSchema,
    resetPasswordSchema ,
    customerRegistrationSchema
}