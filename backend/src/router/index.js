import express from 'express'
import userController from '../controller/index.js'
const router=express.Router()
router.post('/signin',userController.SignIn)
router.post('/signup',userController.SignUp)
export default router;