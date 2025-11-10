import express from 'express'
import { CreateUser, FindOneUser } from '../models/User.js'
import bcrypt from "bcrypt"

const router = express.Router()

router.get('/make-account', (_req, res) =>{
    res.render('make-account')
})

router.post('/make-account/create', async (req, res)=>{
    const {firstName, lastName, mail, password, phone, zone, city, uf} = req.body
    
    try{
        const user = await FindOneUser(mail)
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        
        if(user == null){
            const currentUserId = await CreateUser({firstName, lastName, mail, phone, password: hash, zone, city, uf})      
            
            req.session.idUser = currentUserId
        
            res.redirect('/home')
        }
        else {
            res.redirect('/make-account')
        }
    }
    catch(error){
        console.log(error)
        throw new Error('Erro ao cadastrar')
    }

})

export default router