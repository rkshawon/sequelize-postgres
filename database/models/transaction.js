module.exports = (sequelize, Sequelize)=>{

    const Transaction = sequelize.define("transaction",{
        amount:{
            type: Sequelize.INTEGER
        },
        transaction_type:{
            type: Sequelize.STRING(100)
        }},
        {
            timestamps: false
        }
    );
    return Transaction
};