const db = require("../database/config");
Student = db.student;
Transaction = db.transaction

exports.createTransaction = (req, res)=>{
    console.log(req.body)
    Transaction.create({
        amount: req.body.amount,
        transaction_type: req.body.transaction_type,
        student_id:req.body.student_id,
    })
    .then(data=>{
        res.status(200).json({
            status: true,
            message: `${data} was inserted successfully`
        })
    })
    .catch(err=>{
        res.status(500).json({
            status: false,
            message: `${err} Something went wrong`
        })
    })
}

exports.createOne = (req, res)=>{
    Student.create({
        name: req.body.name,
        roll: req.body.roll,
        class: req.body.class,
        department: req.body.department
    })
    .then(data=>{
        res.status(200).json({
            status: true,
            message: `${data} was inserted successfully`
        })
    })
    .catch(err=>{
        res.status(500).json({
            status: false,
            message: `${err} Something went wrong`
        })
    })
}
exports.getAll = (req, res)=>{
    Student.findAll()
    .then(data=>{
        res.status(200).json({
            status: true,
            data: data
        })
    })
    .catch(err=>{
        res.status(500).json({
            status: false,
            message: `${err} Something went wrong`
        })
    })
}

exports.updateOne = (req, res)=>{
    Student.update({
        name: req.body.name,
        roll: req.body.roll,
        class: req.body.class,
        department: req.body.department
    },
    {
        where: { id: req.params.id }
    })
    .then(data=>{
        res.status(200).json({
            status: true,
            message: `${data} was updated successfully`
        })
    })
    .catch(err=>{
        res.status(500).json({
            status: false,
            message: `${err} Something went wrong`
        })
    })
}
exports.getOne = (req, res)=>{
    Student.findByPk( req.params.id , {
        include: Transaction
    })
    .then(data=>{
        res.status(200).json({
            status: true,
            data: data
        })
    })
    .catch(err=>{
        res.status(500).json({
            status: false,
            message: `${err} Something went wrong`
        })
    })
}
exports.deleteOne = (req, res)=>{
    Student.destroy({
        where: { id: req.params.id  },
    })
    .then(data=>{
        res.status(200).json({
            status: true,
            message: `${data} was deleted successfully`
        })
    })
    .catch(err=>{
        res.status(500).json({
            status: false,
            message: `${err} Something went wrong`
        })
    })
}