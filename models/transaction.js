module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    amount: DataTypes.INTEGER,
    employeeId: DataTypes.INTEGER
  }, {});
  Transaction.associate = function (models) {
    // associations can be defined here
    Transaction.belongsTo(models.Employee, {
      foreignKey: 'employeeId',
      onDelete: 'CASCADE'
    })
  };
  return Transaction;
};