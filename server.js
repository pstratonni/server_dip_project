const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const db=require('./models')
const authRoutes = require('./routes/auth.route')

const PORT=8080
const app=express()

let corsOptions = {
    origin: 'http://localhost:3000'
}

app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

db.sequelize.sync()

authRoutes(app)

// require('./routes/user.routes')(app);
require('./routes/founds_pets.route')(app);
require('./routes/losts_pets.route')(app);


app.get('/',(req,res)=>{
    res.json({message: 'Hello World'})
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})