const jwt = require('jsonwebtoken');
require('dotenv').config();
const expressJwt = require('express-jwt'); // for protected routes
const User = require('../models/user');

exports.signup = async (req, res) => {
    // Finding the user based on email
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists)
        return res.status(403).json({
            error: 'Email is taken!',
        });
    // saving user information to database
    const { name, email, password } = req.body;
    const user = await new User({ name, email, password });
    await user.save();

    // sendind respose containing user information
    user.hashed_password = undefined;
    user.salt = undefined;
    res.status(200).json({ user, message: 'Signup success! Please login.' });
};

exports.signin = (req, res) => {
    // Finding the user based on email
    const { email, password } = req.body;
    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(401).json({
                error: 'User with that email does not exist. Please signin.',
            });
        }
        // if user is found make sure the email and password match
        // create authenticate method in model and use here
        if (!user.authenticate(password)) {
            return res.status(401).json({
                error: 'Email and password do not match',
            });
        }
        // generate a token with user id and secret
        // const token = jwt.sign({ _id: user._id  }, process.env.JWT_SECRET);
        const token = jwt.sign({ _id: user._id, role: user.role }, 'secret');
        // persist the token as 'jwt' in cookie with expiry date
        res.cookie('jwt', token, { expire: new Date() + 9999 });
        // return response with user and token
        user.hashed_password = undefined;
        user.salt = undefined;
        return res.json({ token, user });
    });
};

exports.signout = (_, res) => {
    res.clearCookie('jwt');
    return res.json({ message: 'Signout success!' });
};

exports.requireSignin = expressJwt({
    // if user is signed in, it checks the secret key and token, so this should match with our requireSignin function
    secret: 'secret',
    userProperty: 'auth',
});
