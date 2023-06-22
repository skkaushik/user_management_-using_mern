const express =require('express');

const app= express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));

const cors =require('cors');
app.use(cors());



// **********************************
// Database
// *************************
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/UserManagement',{
    useNewUrlParser: true,
    useUnifiedTopology : true,
}).then(()=>{
    console.log('Connection Successfull')
}).catch((err)=>{
    console.log(err)
})

// /////////////////////////Schema////////////////////
 const userSchema = new mongoose.Schema({
    firstName: String,
    lastName : String,
    email:{
        type: String,
        required: true,
        unique : true,
    },
    password : String,
    repassword : String,
    job: String,
    address:String
 })

// //////////// model//////////////

const UserModel =new mongoose.model('Usermodel',userSchema);





// *********************************
// get and post 
// **********************************
app.get("/view",async(req,resp)=>{
    // resp.send('App is running at the backend')
    try{
        const allData= await UserModel.find({})
        resp.send(allData)
    }
    catch(err){
        console.log(err);
        
    }
})



app.post('/Register',async(req,resp)=>{
    try{
        // console.log(req.body)
    const {firstName,lastName,email,password,repassword,job,address}=req.body
   const user= await UserModel.findOne({email:email});
        if(user){
            resp.send({message : 'This email id already Register'})
        
        }
        else{
            const user  =new UserModel({
                firstName,
                lastName,
                email,
                password,
                repassword,
                job,
                address,
            })
          const result =  await user.save();
          console.log(result)
            resp.send({message : 'Successfull Register'})
            
        }
    }
    catch(err){
              console.log(err)
    }
    })

app.post('/Login',async(req,resp)=>{
    try{
        console.log(req.body)
    const {email,password}=req.body
    const user = await UserModel.findOne({email:email});
    if(user){
        if(password==user.password){
            resp.send({message : "Login Successfull",user})
        }
        else{
            resp.send({message : 'Password Did not match'});

        }

    }
    else{
        resp.send({message: "This email id does not exists"})
    }

    }
    catch(err){
        console.log(err)
    }


})




// ********************
// server listen
// // ********************

app.listen(5050,()=>{
    console.log('Server is running at port 5050')
})