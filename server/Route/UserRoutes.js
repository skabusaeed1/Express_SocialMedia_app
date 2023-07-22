import express from 'express';
import {getUser} from '../Controller/UserController.js'
import {updateUser} from '../Controller/UserController.js'
import {deleteUser} from '../Controller/UserController.js'
import {followUser} from  "../Controller/UserController.js"
import {UnfollowUser} from "../Controller/UserController.js"
import { getAllUser } from '../Controller/UserController.js'; 

const router=express.Router();

router.get('/',getAllUser)
router.get("/:id", getUser)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser)
router.put("/:id/follow",followUser)
router.put("/:id/unfollow",UnfollowUser)

export default router;