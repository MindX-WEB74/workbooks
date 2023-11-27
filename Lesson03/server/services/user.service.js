const userData = require('./../utils/mock/user.mock')

const findUsersBy = (params={}) => {
    const {filters} = params;
    let findUsers = userData ? userData : [];
    if (filters) {
        const {uname, fname, gender} = filters;
        if (uname) {
            findUsers = findUsers.filter((user) => user.uname === uname)
        }
        if (fname) {
            findUsers = findUsers.filter((user) => user.fname === fname)
        }
        if (gender) {
            findUsers = findUsers.filter((user) => user.gender === gender)
        }
    }
    return findUsers;
} 

const insertUser = (params={}) => {
    const {uname, fname, gender} = params;
    const findUser = findUsersBy({
        filters: {uname}
    })
    if (findUser && findUser.length > 0) {
        return 0; // fail (existed)
    }
    userData.push({uname, fname, gender});
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