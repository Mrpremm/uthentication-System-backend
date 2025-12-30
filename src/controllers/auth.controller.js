const authService=require('../services/auth.service');
exports.register=async(req,res)=>{
  try{
    await authService.registerUser(req.body.email,req,body.password);
    res.status(201).json({message:"User registered"});
  }catch(err){
    res.status(400).json({message:err.message});
  }
};

exports.login=async(req,res)=>{
  try{
    const tokens=await authService.loginUser(
      req.body.email,
      req.body.password
    );
    res.status(200).json(tokens);
  }catch(err){
    res.status(401).json({message:err.message});
  }
}