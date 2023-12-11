const User = require('./../models/user')

const findUsersBy = (params={}) => {
    const {filters} = params;
    let findUsers = userData ? userData : [];
    if (filters) {
        const {uname, fname, gender} = filters;

    }
    return findUsers;
} 

const insertUser = async (params={}) => {
    const {uname, fname, gender} = params;
    const test = await User({
        uname: 'vivt',
        fname: 'Vo Tuong Vi',
        pwd: '123'
    });
    await test.save()
    return 1;
}

const updateUserBy = (params, id) => {

}

const deleteUserBy = (params, id) => {

}


module.exports = {
    insertUser,
    findUsersBy,
    updateUserBy,
    deleteUserBy
}