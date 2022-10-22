const User = require('../model/User')

exports.getAllUser = (req, res) => {
    const doc = User.findAll({
        where: req.query
    })

    res.json({doc: doc})
}

exports.getUser = (req, res) => {
    res.json({user: "Kiệt"})
}

