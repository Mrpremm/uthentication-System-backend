require('dotenv').config();
const connectDB=require('./src/config/db');
const app=require('./src/app');

const Port=process.env.PORT || 6000;


connectDB();

app.listen(Port,()=>{
  console.log(`Server running on port ${Port}`);
})







