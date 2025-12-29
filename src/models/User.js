const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  },
  provider:{
    type:String,
    default:'local'
  }
},
{timestamps:true}
);
module.exports=mongoose.model('User',userSchema);