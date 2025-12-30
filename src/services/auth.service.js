const User=require('../models/User');
const RefreshToken=require('../models/RefreshToken');
const {hashPassword,comparePassword}=require('../utils/password');
const {generateAccessToken,generateRefreshToken}=require('../utils/jwt');

//Register
const registerUser=async(email, password)=>{
  const exists=await User.findOne({email});
  if(exists) throw new Error("User already exists");
  const match=await comparePassword(password,user.password);
  if(!match) throw new Error("Invalid credentials")
  const hashed=await hashPassword(password);
  return User.create({email,password:hashed});
};

//Login

const loginUser=async(email,password)=>{
  const user=await User.findOne({email});
  if(!user) throw new Error("Invalid credentials");

  const accessToken=generateAccessToken({id:user._id});
  const refreshToken =generateRefreshToken({id:user._id});
await RefreshToken.create({
  user:user._id,
  token:refreshToken,
  expiresAt:new Date(Date.now()+7*24*60*60*1000)
})
return {accessToken,refreshToken};
}
module.exports={registerUser,loginUser};