import Joi from 'joi';

export const userJoiSchema = Joi.object({
    source :  Joi.string().required(),
    account_number : Joi.string().required(),
    first_name :  Joi.string().required(),
    last_name :  Joi.string().allow(''),
    customer_number : Joi.string().required(),
    case_reference : Joi.number().integer().required(),
    alert_trigger_date : Joi.string(),
    triggered_by_rule : Joi.number(),
    record_type : Joi.string(),
    notes : Joi.string(),
    senior_analyst_user_id : Joi.string(),
    investigating_analyst_user_id : Joi.string(),
    case_outcome : Joi.string().required(),
    category_of_match : Joi.string().allow(''),
    attachments : Joi.string().allow('')
})