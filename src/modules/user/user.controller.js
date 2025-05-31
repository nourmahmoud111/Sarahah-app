import { Message } from "../../../dataBase/models/messages.model.js"




export const user =  (req, res) =>  { 
    res.render("user.ejs",{userId: req.params.id,session:null})
}

export const sendMsg =  async (req, res) =>  { 

    req.body.user= req.params.id
    await Message.insertMany(req.body)
    res.redirect('/user/' + req.params.id)
}


export const logout =  async (req, res) =>  { 
    req.session.destroy(function(err) {
    res.redirect('/login')
})

}
