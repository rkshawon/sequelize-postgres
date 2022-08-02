module.exports  = (app)=>{
    const student = require('../controller/controller');

    app.post('/api/student', student.createOne);
    app.get('/api/student', student.getAll);
    app.get('/api/student/:id', student.getOne);
    app.put('/api/student/:id', student.updateOne);
    app.delete('/api/student/:id', student.deleteOne);
}