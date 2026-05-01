import { response } from "express";
import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({

   title :{
    type: String,
    required: true
   },

   content : {
    type: String,
    required: true,
   },

   topic: {
    type : String,
    required : true
   }

},
{
    timestamps: true
}

)

const Blogs = mongoose.model('blog' , BlogSchema);
export default Blogs