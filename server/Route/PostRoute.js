import express from 'express';
const router=express.Router();
import {createPost} from '../Controller/PostController.js';
import {getPost} from '../Controller/PostController.js';
import {updatePost} from '../Controller/PostController.js'
import {deletePost} from '../Controller/PostController.js'
import {likePost} from '../Controller/PostController.js'
import {getTimelinePosts} from "../Controller/PostController.js"

router.post('/',createPost)
router.get("/:id",getPost);
router.put("/:id",updatePost)
router.delete("/:id",deletePost)
router.put("/:id/like",likePost);
router.get("/:id/timeline",getTimelinePosts)

export default router
