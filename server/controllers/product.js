const Product = require("../model/Product")

exports.getAllProduct = async (req, res) => {
    const data = await Product.findAll({
        where: req.query
    })
    
    res.json({
        data: data
    })
}

exports.getProduct = async (req, res) => {
    const data = await Product.findOne({
        where: {id: req.params.id}
    })

    res.json({
        data: data
    })
}

exports.createProduct = async (req, res) => {
    console.log(req.body);
    const data = await Product.create(req.body);
    res.json({
        data: data
    })
}

exports.updateProduct = async (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    const oldData = await Product.findOne({
        where: {id: req.params.id}
    })
    Object.keys(req.body).map(val => 
        oldData[val] = req.body[val]
    )
    oldData.save();
    oldData.reload();
    res.json({data : oldData})
}

exports.deleteProduct = async (req, res) => {
    console.log(req.params.id);
    const data = await Product.destroy({
        where: {id: req.params.id}
    })

    res.json({data})
}