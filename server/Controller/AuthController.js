import UserModel from "../Modal/userModal.js";
import bcrypt from "bcrypt"


// registering new users
export const registerUser=async(req,res)=>{
   const {username,password,firstname,lastname} = req.body;

   const salt=await bcrypt.genSalt(10);
   const hashPass=await bcrypt.hash(password,salt)

   const newUser=new UserModel({username,password:hashPass,firstname,lastname})
   try {
    await newUser.save()
    res.status(200).json(newUser);
   } catch (error) {
    res.status(500);
    console.log(error)
    console.log("error");
   }
}

// login
export const loginUser=async(req, res) => {
    const {username,password}=req.body;

    try {
        const user=await UserModel.findOne({username: username})
        if(user){
            const validity=await bcrypt.compare(password,user.password);

            validity ? res.status(200).json(user) : res.status(400).json("wrong password")
        }else{
             res.status(404).json("User does not exist");
        }
    } catch (error) {
        console.log(error); 
    }
}