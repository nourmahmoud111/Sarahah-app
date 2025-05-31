import { Schema, model } from "mongoose"

const schema = new Schema({
    name:String,
    email:String,
    password:String,

})

  export const User = model ('User', schema)
