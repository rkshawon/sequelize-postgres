module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});

  Employee.addHook('beforeValidate', (employee, options) => {
    let n =  'Employee ' + employee.name
    employee.name = n;
  });

  Employee.associate = function (models) {
    // associations can be defined here
    Employee.hasMany(models.Transaction, {
      foreignKey: 'employeeId'
    })
  };
  return Employee;
};