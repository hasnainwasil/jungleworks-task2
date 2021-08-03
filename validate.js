const Joi=require('joi');

const Validation = (data) => {
	const schema = Joi.object({
	username: Joi.string().alpanum().min(3).max(30).required(),

	password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))required(,)

	//repeat_password: Joi.ref('password'),

	access_token: [Joi.string(),Joi.number()],

	email: Joi.string().email({minDoaminSegments: 2, tlds:{allow:['com','net']}})

});
	return schema.validate(data);
};

export default Validation;