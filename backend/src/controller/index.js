import hash from '../utils/helper/HashPassword.js'
import UserModel from '../model/UserModel.js'
const SignIn =async(req,res)=>{
    try{
        const user= await UserModel.findOne({email:req.body.email}) 
        const userName= await UserModel.findOne({email:req.body.username}) 
        if(!user||!userName){
        if(await hash.hashCompare(req.body.password,user?.password||userName?.password)){
            res.status(201).send({msg:`user logged in successfully `})
        }else{
            res.status(400).send({msg:`password incoorect `})
        }
       
        }
        else
          {
         res.status(402).send({
                            message:`User does not exists`
                        })
                    }   
        }catch(err){
            res.status(500).send({msg:"Internal sever error"})
        }
}

const SignUp =async(req,res)=>{
try{
const user= await UserModel.findOne({email:req.body.email})
if(!user){
req.body.password= await hash.createHash(req.body.password)
let newUser = await UserModel.create(req.body)
res.status(201).send(`Successfully Created ${req.body.email} ${typeof newUser}`)
}
else
  {
 res.status(402).send({
                    message:`User with ${req.body.email} already exists`
                })
            }   
}catch(err){
    res.status(500).send({msg:"Internal sever error"})
}
}
export default {SignIn,SignUp}