const { ADDUSERLEGAL } = require('./src/addUserLegal')

describe('Test all services of User service', () => {

    it('should add Legal User', async () => {
        const user = {
            name: "Dino",
            age: "14"
        }
        const result = await ADDUSERLEGAL(user)
        expect(result.isSave).toBe(true)
    })
})