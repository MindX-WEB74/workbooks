const express = require('express')
const router = express.Router();
const userData = require('../utils/mock/user.mock');
const jwt = require('jsonwebtoken');
// Signup
/**
 *        
        uname: 'vivt',
        fname: 'Vo Tuong Vi',
        gender: 0,
        role: 'admin',
        pwd: '123'
 */
router.post('/signup', (req, res) => {
    const {uname, fname, gender=0, role='guest', pwd} = req.body || {};
    // 1. Validation request body
    if (!uname || !fname || !pwd) {
        return res.status(400).json({
            msg: 'Missing required keys',
        })
    }
    // 2. Check duplicate  username
    const existingUser = userData.find(u => u.uname === uname);
    if (existingUser) {
        return res.status(400).json({
            msg: 'Username is already taken'
        })
    }

    //  3. Create new user
    const newUser = {uname, fname, gender, role, pwd};

    // 4. Insert to DB (mock data)
    userData.push(newUser);

    return res.status(201).json({
        msg: 'Signup successfully!'
    })

})


// login
router.post('/login', (req, res) => {
    const {uname, pwd} = req.body || {};
    // 1. validation request body
    if (!uname || !pwd) {
        return res.status(400).json({
            msg: 'Mssing required keys'
        })
    }

    // 2. Check existing
    const existingUser = userData.find(
        (u) => u.uname === uname && u.pwd === pwd
    )

    if (!existingUser) {
        return res.status(404).json({
            msg: 'Username or password is wrong!'
        })
    }

    // 3. Phát hành 1 tấm vé chứa token cho user (client)
    const payload = {
        uname: existingUser.uname,
        fname: existingUser.fname,
        role: existingUser.role
    }

    const KEY = process.env.PRIVATE_KEY;
    const EXPIRED_TIME = process.env.EXPIRED_TIME;

    const token = jwt.sign(payload, KEY, {expiresIn: EXPIRED_TIME});

    // 4. Trả token về client
    return res.json({
        msg: 'Login successfully!',
        token
    })

})
module.exports = router;