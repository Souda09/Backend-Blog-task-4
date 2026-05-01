import express from "express";
import{addblog,  allBlogs, getBlogs, getByTopic} from '../controllers/AuthControllers.js';

const authroute = express.Router()

authroute.post('/blog', addblog);   //addblogs 
authroute.get('/blog', allBlogs)     //all bolgs
authroute.get("/blog/topic/:topic", getByTopic)     //  topics syblog aly k aye ga
authroute.get('/blog/:id',getBlogs)     //id se blog aly k aye ga

export default authroute;