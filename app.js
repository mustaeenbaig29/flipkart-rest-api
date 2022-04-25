let express = require('express')
let app = express()
const mongo = require('mongodb')
const MongoClient = mongo.MongoClient
let dotenv = require('dotenv')
const req = require('express/lib/request')
dotenv.config()
let port = process.env.PORT || 1989
let mongoUrl = "mongodb+srv://mustaeen:plastion@realmcluster.ecbjk.mongodb.net/flipkart-API?retryWrites=true&w=majority"
let bodyparser = require('body-parser')
let cors = require('cors')

// middlewear
app.use(bodyparser.urlencoded({extended:true })) 
app.use(bodyparser.json()) 
app.use(cors()) 

app.get('/', (req,res) => {
    res.send('Welcome to flipkart')
})

// categories
app.get('/categories', (req,res) => {
    db.collection('categories').find().toArray((err,result) => {
        if(err) throw err
        res.send(result)
    })
})

// products
app.get('/products', (req,res) => {
    db.collection('products').find().toArray((err,result) => {
        if(err) throw err
        res.send(result)
    })
})

// filter 
app.get('/filter/', (req,res) => {
    let query = {}
    let cateId = Number(req.query.category_id)
    let brand = req.query.brand
    let customeRating = Number(req.query.customer_rating)

    if(brand){
        query = {brand:brand}
    }else if(cateId){
        query = {category_id:cateId}
    }else if(customeRating){
        query = {customer_rating:customeRating}
    }

    db.collection('products').find(query).toArray((err,result) => {
        if(err) throw err
        res.send(result)
    })
})

app.get('/productDetails/:id', (req,res) => {
    let id = Number(req.params.id)
    db.collection('products').find({product_id:id}).toArray((err,result) => {
        if(err) throw err
        res.send(result)
    })
})

app.post('/productItem',(req,res) => {
    console.log(req.body);
    if(Array.isArray(req.body)){
        db.collection('products').find({product_id:{$in:req.body}}).toArray((err,result) => {
            if(err) throw err;
            res.send(result)
        })
    }else{
        res.send('Invalid Input')
    }
})

app.post('/placeorder', (req,res) => {
    db.collection('orders').insert(req.body, (err,result) => {
        if(err) throw err
        res.send('order placed')
    })
})

app.get('/vieworder/', (req,res) => {
    let query = {}
    let email = req.query.email

    if(email){
        query = {'email':email}
    }

    db.collection('orders').find(query).toArray((err,result) => {
        if(err) throw err
        res.send(result)
    })
})

// connecting with db
MongoClient.connect(mongoUrl, (err,client) => {
    if(err) console.log('Error while connecting...')
    db = client.db('flipkart-API')
    app.listen(port, () => {
        console.log(`server is running on ${port}`)
    })
})