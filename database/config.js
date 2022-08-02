const Sequelize = require("sequelize")

const sequelize = new Sequelize("students", "postgres","shawon",{
    host: 'localhost',
    dialect: "postgres",
    operatorsAliases: false,
})
const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.student = require('./models/student')(sequelize,Sequelize)
db.transaction = require('./models/transaction')(sequelize,Sequelize)

db.student.hasOne(db.transaction,{
    foreignKey: 'student_id',
})


module.exports = db;