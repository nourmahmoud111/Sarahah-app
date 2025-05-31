import { User } from "../../../dataBase/models/user.model.js"




export const login =  (req, res) =>  { 
    res.render("login.ejs",{error:req.query.error,session:null})
}

export const handleLogin =  async (req, res) =>  { 
    let user = await User.findOne({email: req.body.email})
    if(!user || !user.password== req.body.password)
         return res.redirect('/login?error= incorrect email or password') 

    req.session.isLoggedIn = true
    req.session.userId = user._id
    req.session.name = user.name

    res.redirect("/messages")
}