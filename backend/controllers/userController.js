//          Auth user/set token
//          POST /api/users/auth
const authUser  = (req, res) => {    
    res.status(200).json({messzge : 'Auth User'})
}

export {
    authUser
};