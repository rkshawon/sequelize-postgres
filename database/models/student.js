module.exports = (sequelize, Sequelize)=>{
    const Student = sequelize.define("student",{
        
        name: {
            type: Sequelize.STRING(50)
        },
        roll:{
            type: Sequelize.INTEGER
        },
        class:{
            type: Sequelize.INTEGER
        },
        department:{
            type: Sequelize.STRING(100)
        }},

    {
        timestamps: false
    }
    );
    return Student
};