module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Transactions', [{
      amount: 10,
      employeeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      amount: 100,
      employeeId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      amount: 100,
      employeeId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Transactions', null, {});
  }
};