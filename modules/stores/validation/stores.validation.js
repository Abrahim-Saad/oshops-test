const joi = require('joi');

module.exports = {
    addStoreValidation: {
        body: joi.object().required().keys({
            storeName: joi.string().empty('').required().messages({
                "string.empty": "You have to enter store name",
                "any.required": "You have to enter store name"
            }),
            storeWebsite: joi.string().empty('').required().messages({
                "string.empty": "You have to enter store website",
                "any.required": "You have to enter store website"
            }),
            storeLogoURL: joi.object().required().messages({
                "object.base": "You have to enter a store image",
                "any.required": "You have to enter a store image"
            }),
            telephoneNumber: joi.alternatives().required().try(
                joi.number().required().messages({
                    "number.base": "Please enter a valid telephone number",
                    "any.required": "You have to enter at least one telephone number"
                })
                , joi.array().min(1).required().items(joi.number().required().messages({
                    "number.base": "Please enter a valid telephone number",
                    "any.required": "You have to enter at least one telephone number"
                })).messages({
                    "array.min": "You have to enter at least one telephone number"
                })).messages({
                    "any.required": "You have to enter at least one telephone number"
                }),

            storeCategories: joi.alternatives().required().try(
                joi.string().empty('').required().messages({
                    "any.required": "You have to enter at least one category",
                    "string.empty": "You have to enter at least one category"
                })
                , joi.array().required().min(1).items(joi.string().empty('').required().messages({
                    "any.required": "You have to enter at least one category",
                    "string.empty": "You have to enter at least one category"
                })).messages({
                    "array.includesRequiredUnknowns": "You have to enter at least one category",
                    "array.min": "You have to enter at least one category"
                })).messages({
                    "any.required": "You have to enter at least one category"
                }),
            canBeAddedToCart: joi.bool().messages({
                "string.empty": "You have to enter a boolean value",
            }),
            isComparable: joi.bool().messages({
                "string.empty": "You have to enter a boolean value",
            }),
        })
    },
    updateStoreValidation: {
        body: joi.object().required().keys({
            storeName: joi.string().empty('').optional().messages({
                "string.empty": "You have to enter store name"
            }),
            storeLogoURL: joi.object().optional().messages({
                "object.empty": "You have to enter category image"
            }),
            telephoneNumber: joi.alternatives().optional().try(
                joi.number().required().messages({
                    "number.base": "Please enter a valid telephone number",
                    "any.required": "You have to enter at least one telephone number"
                })
                , joi.array().min(1).required().items(joi.number().required().messages({
                    "number.base": "Please enter a valid telephone number",
                    "any.required": "You have to enter at least one telephone number"
                })).messages({
                    "array.min": "You have to enter at least one telephone number"
                })),
            storeWebsite: joi.string().empty('').required().messages({
                "string.empty": "You have to enter store website",
                "any.required": "You have to enter store website"
            }),
            storeCategories: joi.alternatives().optional().try(
                joi.string().empty('').optional().messages({
                    "string.empty": "You have to enter at least one category"
                })
                , joi.array().optional().min(1).items(joi.string().empty('').required().messages({
                    "string.empty": "You have to enter at least one category"
                })).messages({
                    "array.includesRequiredUnknowns": "You have to enter at least one category",
                    "array.min": "You have to enter at least one category"
                })),
            canBeAddedToCart: joi.bool().messages({
                "string.empty": "You have to enter a boolean value",
            }),

            isComparable: joi.bool().messages({
                "string.empty": "You have to enter a boolean value",
            }),

        })
    }
}
