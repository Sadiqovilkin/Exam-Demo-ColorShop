const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")


const PORT = 5050
app.use(cors())
app.use(express.json())

const productSchema = new mongoose.Schema({
    title: String,
    imgSrc: String,
    price: Number,
    discount: Number
},
    { timestamps: true })

const ProductModel = new mongoose.model("Coloshop", productSchema)

app.get("/api/coloshop", async (req, res) => {
    const products = await ProductModel.find()

    if (products) {
        res.send({
            message: "succsess",
            data: products
        })
    }
    else {
        res.send({
            message: "error",
            data: null
        })
    }
})

app.get("/api/coloshop/:id", async (req, res) => {
    const { id } = req.params;
    const product = await ProductModel.findById(id)
    if (product) {
        res.send({
            message: "succsess",
            data: product
        })
    }
    else {
        res.send({
            message: "error",
            data: null
        })
    }

})

app.delete("/api/coloshop/:id", async (req, res) => {
    const { id } = req.params;
    let deleting
    try {

        deleting = await ProductModel.findByIdAndDelete(id)
    } catch (error) {
        console.log(error);
    }
    res.send({
        message: "deleted data",
        data: deleting
    })

})

app.post("/api/colorshop", async (req, res) => {
    const newProduct = new ProductModel(req.body)
    await newProduct.save()

    res({
        message: "Posted",
        data: newProduct
    })
})

mongoose.connect('mongodb+srv://Admin:Admin123@cluster.slmtzms.mongodb.net/')
    .then(() => console.log('Connected!'));

app.listen(PORT, function (err) {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})