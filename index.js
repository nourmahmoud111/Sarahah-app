import express from 'express'
import { dbconn } from './dataBase/dbConnection.js'
import { resolve,join} from 'path'
import homeRouter from './src/modules/home/home.routes.js'
import loginRouter from './src/modules/login/login.routes.js'
import registerRouter from './src/modules/register/register.routes.js'
import messagesRouter from './src/modules/messages/messages.routes.js'
import userRouter from './src/modules/user/user.routes.js'
import session from 'express-session'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000

import mongoSession from 'connect-mongodb-session'
let MongoDBStore =mongoSession(session)

var store = new MongoDBStore({
    uri: 'mongodb+srv://aldennour741:FBYzHnFTVJP2dPcC@cluster0.bhllnte.mongodb.net/MvcSarahahapp?retryWrites=true&w=majority&appName=Cluster0',
    collection: 'mySessions'
});


app.use(session({
    secret: 'keyboard category',
    resave: false,
    saveUninitialized: false,
    store
}))

app.use(cors())
app.set('views','views')
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(homeRouter)
app.use(loginRouter)
app.use(registerRouter)
app.use(messagesRouter)
app.use(userRouter)



app.listen(port, () => console.log(`Example app listening on port ${port}!`))