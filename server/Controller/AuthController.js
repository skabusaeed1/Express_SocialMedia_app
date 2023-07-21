import UserModel from "../Modal/userModal.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";


// registering new users
export const registerUser=async(req,res)=>{
//    const {username,password,firstname,lastname} = req.body;

   const salt=await bcrypt.genSalt(10);
   const hashPass=await bcrypt.hash(req.body.password,salt)
   req.body.password=hashPass;
   const newUser=new UserModel(req.body)
    const {username} =req.body

   try {
    const oldUser=await UserModel.findOne({username})
    if(oldUser){
      return  res.status(400).json("Username name is already registered!")
    }
    const user=await newUser.save()
    
    const token=jwt.sign({
        username:user.username,id:user._id
    },process.env.JWT_KEY,{expiresIn:"1h"})

    res.status(200).json({user,token});
   } catch (error) {
    res.status(500);
    console.log(error)
    console.log("error");
   }
}

// login
export const loginUser = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await UserModel.findOne({ username: username });
  
      if (user) {
        const validity = await bcrypt.compare(password, user.password);
  
        if (!validity) {
          res.status(400).json("wrong password");
        } else {
          const token = jwt.sign(
            { username: user.username, id: user._id },
            process.env.JWT_KEY,
            { expiresIn: "1h" }
          );
          res.status(200).json({ user, token });
        }
      } else {
        res.status(404).json("User not found");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };