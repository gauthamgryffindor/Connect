import bcrypt from 'bcrypt'

const SALT = 10
const createHash=async(data)=>{
    let salt=await bcrypt.genSalt(SALT)
    let hash=await bcrypt.hash(data,salt)
    return hash
}

const hashCompare=async(data,hash)=>{
    return await bcrypt.compare(data,hash)
}

export default {
    createHash ,
    hashCompare
}