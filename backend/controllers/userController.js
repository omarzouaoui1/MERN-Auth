import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

//          Auth user/set token
//          POST /api/users/auth
const authUser  = asyncHandler(async (req, res) => {  
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if(user && (await user.matchPassword(password))){
        generateToken(res, user._id);
        
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    } else{
        res.status(401);
        throw new Error('Invalid email or password');
    }

});

//          Register a new user
//          POST /api/users
const registerUser  = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if(userExists){
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({
        name,
        email,
        password
    });

    if(user){
        generateToken(res, user._id);
        
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    } else{
        res.status(400);
        throw new Error('Invalid User data')
    }
});

//          Logout user
//          POST /api/users/logout
const logoutUser  = asyncHandler(async (req, res) => {  
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
    });

    res.send(200).json( 'User Logged out' );
});

//          Get user profile
//          GET /api/users/profile
const getUserProfile  = asyncHandler(async (req, res) => {  
    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email,
    }

    res.status(200).json( user );
});

//          Update user profile
//          PUT /api/users/profile
const updateUserProfile  = asyncHandler(async (req, res) => {  
    const user = await User.findById(req.user._id);

    if(user){
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        if(req.body.password){
            user.password = user.body.password;
        }

        const updatedUser = await user.save();

        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
        })
    } else{
        res.status(404);
        throw new Error('User not found')
    }
});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};