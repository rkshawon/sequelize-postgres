module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Employees', [{
      name: 'John',
      email: 'john@stone.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'John',
      email: 'john@stone.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'John',
      email: 'john@stone.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Employees', null, {});
  }
};