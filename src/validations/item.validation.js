const Joi = require('joi');

const createItemm = {
    body: Joi.object().keys({
        name: Joi.string().required().messages({
            'string.base': 'Name should be a type of text',
            'string.empty': 'Name cannot be empty',
            'any.required': 'Name is a required field'
        }),
        description: Joi.string().required().messages({
            'string.base': 'Description should be a type of text',
            'string.empty': 'Description cannot be empty',
            'any.required': 'Description is a required field'
        }),
        startingPrice: Joi.number().required().messages({
            'number.base': 'Starting Price should be a type of number',
            'any.required': 'Starting Price is a required field'
        }),
        currentPrice: Joi.number().default(0).messages({
            'number.base': 'Current Price should be a type of number'
        }),
        imageUrl: Joi.string().uri().optional().messages({
            'string.base': 'Image URL should be a type of text',
            'string.uri': 'Image URL should be a valid URI'
        }),
        endTime: Joi.date().required().messages({
            'date.base': 'End Time should be a valid date',
            'any.required': 'End Time is a required field'
        })
    })
};
const updateItemSchemaa = {
    body: Joi.object().keys({
        name: Joi.string().optional(),
        description: Joi.string().optional(),
        startingPrice: Joi.number().optional(),
        currentPrice: Joi.number().optional(),
        endTime: Joi.date().optional(),
        imageUrl: Joi.string().uri().optional()

    })
}




module.exports = {
    createItemm, updateItemSchemaa
};