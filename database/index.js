const mongoose = require("mongoose")
const Role = require("../model/role")

const connectDB= async()=>{
    try {
        mongoose.set('strictQuery', true);
        mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Mongodb connected")

        const roles=[
        {role:"admin", status:'active',permissions:[]},
        {role:"manager", status:'active',permissions:[]},
        {role:"sales", status:'active',permissions:[]},
        {role:"user", status:'active',permissions:[]}
        ]

        let roleCount = await Role.countDocuments()
        if(roleCount<1){
            await Role.insertMany(roles)
        }            
     
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports={
    connectDB
}