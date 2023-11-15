const Joi = require('joi')


const addVechicleSchema= Joi.object().keys({
    vin:Joi.string().required(),
    details:Joi.required(),
    images:Joi.array().default([]),
    purchases:Joi.object(),
    sales: Joi.object(),
    expenses: Joi.object()

})

const updateVehicleSchema= Joi.object().keys({
    details:Joi.object(),
    images:Joi.array(),
    status:Joi.string().default("active"),
    purchases:Joi.object(),
    sales: Joi.object(),
    expenses: Joi.object()
})

module.exports= { addVechicleSchema, updateVehicleSchema }