const Sequelize = require('sequelize');
const {STRING, UUID, UUIDV4} = Sequelize;
const conn = new Sequelize('postgres://localhost/acme_login_db');

const User = conn.define('user', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },
  email: {
    type: STRING,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: STRING
  }
})

const syncAndSeed = async ()=> {
  await conn.sync({ force: true })
  const matt = {email: 'matt@yahoo.com', password: '1234'}
  User.create(matt)
}

module.exports = {
  syncAndSeed,
  User
}
