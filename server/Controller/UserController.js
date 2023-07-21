import UserModel from "../Modal/userModal.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const getUser=async(req,res)=>{
    const id=req.params.id;
    try {
        const user=await UserModel.findById(id);
        if(user){
        const {password,...otherdetails}=user._doc
        res.status(200).json(otherdetails);
        }else{
        res.status(404).json("No such user exists");
        }
    } catch (error) {
        console.log(error);
    }
}

export const updateUser = async (req, res) => {
    const id = req.params.id;
    // console.log("Data Received", req.body)
    const { _id, currentUserAdmin, password } = req.body;
    
    if (id === _id) {
      try {
        // if we also have to update password then password will be bcrypted again
        if (password) {
          const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(password, salt);
        }
        // have to change this
        const user = await UserModel.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        const token = jwt.sign(
          { username: user.username, id: user._id },
          process.env.JWT_KEY,
          { expiresIn: "1h" }
        );
        console.log({user, token})
        res.status(200).json({user, token});
      } catch (error) {
        console.log("Error agya hy")
        res.status(500).json(error);
      }
    } else {
      res
        .status(403)
        .json("Access Denied! You can update only your own Account.");
    }
  };

export const deleteUser=async(req, res)=>{
    const id=req.params.id;
    const {currentUserId,AdminStatus}=req.body;
    if(id===currentUserId || AdminStatus){
        try {
            await UserModel.findByIdAndDelete(id);
            res.status(200).json("profile deleted successfully")
        } catch (error) {
            console.log(error);
        }
    }else{
        res.status(403).json("Access Denied! you can only delete your own profile");
     }
}

export const followUser=async(req,res)=>{
    const id=req.params.id;
    const {currentUserId}=req.body;
    if(currentUserId===id){
        res.status(403).json("Action forbidden")
    }else{
        try {
            const followUser=await UserModel.findById(id)
            const followingUser=await UserModel.findById(currentUserId);

            if(!followUser.followers.includes(currentUserId)){
               await followUser.updateOne({$push :{followers:currentUserId}})
               await followingUser.updateOne({$push :{following:id}})
               res.status(200).json("User followed!")
            }else{
                res.status(403).json("user is already followed by you")
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const UnfollowUser=async(req,res)=>{
    const id=req.params.id;
    const {currentUserId}=req.body;
    if(currentUserId===id){
        res.status(403).json("Action forbidden")
    }else{
        try {
            const followUser=await UserModel.findById(id)
            const followingUser=await UserModel.findById(currentUserId);

            if(followUser.followers.includes(currentUserId)){
               await followUser.updateOne({$pull :{followers:currentUserId}})
               await followingUser.updateOne({$pull :{following:id}})
               res.status(200).json("User Unfollowed!")
            }else{
                res.status(403).json("user is not followed by you")
            }
        } catch (error) {
            console.log(error)
        }
    }
}