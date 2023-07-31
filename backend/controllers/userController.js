import asyncHandler from 'express-async-handler';

//          Auth user/set token
//          POST /api/users/auth
const authUser  = asyncHandler(async (req, res) => {  
    res.status(200).json({messzge : 'Auth User'})
});

//          Register a new user
//          POST /api/users
const registerUser  = asyncHandler(async (req, res) => {  
    res.status(200).json({messzge : 'Register User'})
});

//          Logout user
//          POST /api/users/logout
const logoutUser  = asyncHandler(async (req, res) => {  
    res.status(200).json({messzge : 'Logout User'})
});

//          Get user profile
//          GET /api/users/profile
const getUserProfile  = asyncHandler(async (req, res) => {  
    res.status(200).json({messzge : 'Profile User'})
});

//          Update user profile
//          PUT /api/users/profile
const updateUserProfile  = asyncHandler(async (req, res) => {  
    res.status(200).json({messzge : 'Update User Profile'})
});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};