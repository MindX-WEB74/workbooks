const express = require('express')
const router = express.Router();

const MOCK_DATA = [
    {
        uname: 'vivt',
        fname: 'Vo Tuong Vi',
        gender: 'female'
    },
    {
        uname: 'vivt2',
        fname: 'Vo Tuong Vi 2',
        gender: 'male'
    }
]

router.get('/all', (req, res) => {
    return res.json(MOCK_DATA)
})


router.post('/create', (req, res) => {
    MOCK_DATA.push({
        fname: 'test them moi',
        uname: 'test',
        gender: 'chua xac dinh'
    })
    return res.json(MOCK_DATA)
})

module.exports = router;