import express from 'express';
import {updateUser,deleteUser,getUser,subscribeUser,unsubscribeUser,likeVideo,dislikeVideo} from '../controllers/user.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

//update an user
router.put('/:id',verifyToken,updateUser)

//delete an user
router.delete('/:id',verifyToken,deleteUser);

//get an user
router.get('/find/:id',getUser);

//subscribe an user
router.put('/sub/:id',verifyToken,subscribeUser);

//unsubscribe an user
router.put('/unsub/:id',verifyToken,unsubscribeUser);

//like a video
router.put('/like/:videoId',verifyToken,likeVideo);

//unlike a video
router.put('/dislike/:videoId',verifyToken,dislikeVideo);

export default router;