const { Employee, Transaction } = require('../models');

const createTransaction = (req, res)=>{

    Transaction.create({
        amount: req.body.amount,
        employeeId:req.body.employeeId,
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

const createOne = (req, res)=>{
    Employee.create({
        name: req.body.name,
        email: req.body.email
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
const getAll = (req, res)=>{
    Employee.findAll()
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

const updateOne = (req, res)=>{
    Employee.update({
        name: req.body.name,
        email: req.body.email,
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
const getOne = (req, res)=>{
    Employee.findByPk( req.params.id , {
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
const deleteOne = (req, res)=>{
    Employee.destroy({
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

module.exports = {
    getAll,
    getOne,
    deleteOne,
    updateOne,
    createOne,
    createTransaction
}