// module.exports  = (app)=>{
//     const student = require('../controller/controller');
//     const transaction = require('../controller/controller');

//     app.post('/api/student', student.createOne);
//     app.get('/api/student', student.getAll);
//     app.get('/api/student/:id', student.getOne);
//     app.put('/api/student/:id', student.updateOne);
//     app.delete('/api/student/:id', student.deleteOne);


//     app.post('/api/transaction', transaction.createTransaction);
// }

const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

    router.post('/employee', controllers.createOne);
    router.get('/employee', controllers.getAll);
    router.get('/employee/:id', controllers.getOne);
    router.put('/employee/:id', controllers.updateOne);
    router.delete('/employee/:id', controllers.deleteOne);


    router.post('/transaction', controllers.createTransaction);

module.exports = router