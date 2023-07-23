import express from 'express';
import {getUser} from '../Controller/UserController.js'
import {updateUser} from '../Controller/UserController.js'
import {deleteUser} from '../Controller/UserController.js'
import {followUser} from  "../Controller/UserController.js"
import {UnfollowUser} from "../Controller/UserController.js"
import { getAllUser } from '../Controller/UserController.js'; 
import authMiddleWare from '../middleware/AuthMiddleware.js';

const router=express.Router();

router.get('/',getAllUser)
router.get("/:id", getUser)
router.put("/:id",authMiddleWare,updateUser)
router.delete("/:id",authMiddleWare,deleteUser)
router.put("/:id/follow",authMiddleWare,followUser)
router.put("/:id/unfollow",authMiddleWare,UnfollowUser)

export default router;