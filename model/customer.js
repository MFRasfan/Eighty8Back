const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },
    middleName: {
        type: String,
        default: "",
      },
      email: {
        type: String,
        require:true,
        unique:true
      },
      phone:{
        type:String,
        default:""
    },
    dlNumber:{
        type:String,
      require: true,
      default:""
    },
    dlExpiry:{
        type:Date,
      require: true,
      default:""
    },
    address:{
        type:String,
      require: true,
      default:""
    },
    city:{
        type:String,
        default:""
    },
    postal:{
        type:String,
        default:""
    },
    role:{
        // type:mongoose.Schema.Types.ObjectId,
        type: String ,
      require: true,
    
    //   ref:"role"
    },
    status:{
      require: true,
      type:String,
        default:"active"
   },


    //     email:{
    //         type:String,
    //         require:true,
    //         unique:true
    //     },
    //     firstName:{
    //         type:String,
    //         default:""
    //     },
    //     lastName:{
    //         type:String,
    //         default:""

    //     },
    //     phone:{
    //         type:String,
    //         default:""
    //     },
    //     image:{
    //         type:String,
    //         default:""
    //     },
    //     role:{
    //         type:mongoose.Schema.Types.ObjectId,
    //         ref:"role"
    //     },
    //     status:{
    //         type:String,
    //         default:"active"
    //    },
    //    isEmailVerified:{
    //     type:Boolean,
    //     default:false
    //    },
    //    emailToken: {
    //     code: {
    //       type: String,
    //       default: null,
    //     },
    //     expiresAt: {
    //       type: Date,
    //       default: null,
    //     },
    //   },
  },
  { timestamps: true }
);

module.exports = mongoose.model("customer", customerSchema);
