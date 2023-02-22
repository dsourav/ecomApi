const { Router } = require('express');

const { loginRules, signUpRules } = require('../validations/user_validator.js');
const { login, signup } = require('../controllers/auth_controller.js');
const validate = require('../middlewares/input_validator');

const authRouter = Router();

authRouter.post('/api/login', loginRules(), validate, login);

authRouter.post('/api/signup', signUpRules(), validate, signup);

module.exports = authRouter;
