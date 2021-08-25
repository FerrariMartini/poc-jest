var dbUser = []

const addUser = (user) => {
    if (!!user.name) {
        throw new Error('ERROR: No name found')
    }

    dbUser.push(user)

    Object.assign(user, { isSave: true })
    return user
};

module.exports = { addUser }