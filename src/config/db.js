import mongoose from "mongoose";

const connectdb = async() =>{
    try{
        console.log("check string", process.env.MONGOURI);

        await mongoose.connect(process.env.MONGOURI);
        console.log("mongo db connectd");
        
    }
    catch(error){
        console.log("error in database ---->", error);
        
    }
}
export default connectdb