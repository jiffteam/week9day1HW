const user = require('../models/user')

module.exports.signup_get = (req, res) => {
    res.sender('signup');
}

module.exports.login_get = (req, res) => {
    res.sender('login');
}

module.exports.signup_post = async (req, res) => {
   const {  } = req.body;

   try {
    const user = await user.create({email, password});
    res.status(201).json(user);
   }
   catch (err) {
    console.log(err);
    res.status(400).send('error, user not created');
   }
}

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;

    console.log(email, password);
    res.send('user login');
}