const express = require('express')
const app = express()

const cors = require('cors')

const User = require('./models/safari_user')

const mongoose = require('mongoose')


app.use(express.json())


app.use(cors())


//connect to db
const dbURL = "mongodb+srv://<yourUserName>:<yourpassword>@cluster0.xdxay.mongodb.net/<YourDBName>?retryWrites=true&w=majority"

mongoose.connect(dbURL)
    .then(result => {
                        console.log('Database connected!:)')
                        app.listen(process.env.PORT || 3000)
                    }
    )
        .catch(err => console.log(err))




app.post('/register', (req, res) => {
    const user = new User(req.body)
    user.save().then(result => {
        console.log(result)
        return res.send({username: result.username})
    }).catch(err => console.log(err))
    
})

app.post('/login', (req, res) => {
    const userEmail = req.body.email
    User.find({email: userEmail})
        .then(result => {
            console.log(result)
            if (result.length > 0) {
                const userDetails = result[0]
                if (userDetails.password === req.body.password){
                    res.send({loginStatus: true, loginMessage: 'Welcome', username: userDetails.username})
                }else{
                    res.send({loginStatus: false, loginMessage: 'Wrong password'})
                }      
            }else{
                res.send({loginStatus: false, loginMessage: 'user not found :('})
            }
        })
            .catch(err => console.log(err))
})