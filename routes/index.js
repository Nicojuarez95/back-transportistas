import express from 'express'
import booksRouter from "../routes/book.js"
import userRouter from '../routes/adminUser.js'
let router = express.Router();

router.use('/book', booksRouter);
router.use('/admin',userRouter)

export default router