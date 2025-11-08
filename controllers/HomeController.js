import express from "express"
import { GetUser } from "../models/User.js"
import Auth from '../middleware/Auth.js'  

const router = express.Router()


router.get('/home', Auth, async (req, res) => {
    const idUser = req.session.idUser

    try{
        const user = await GetUser(idUser)
        res.render('home', {
            currentPage: 'home',
            user: user
        })
    }
    catch(error){
        console.error("Erro na rota /home", error)
    }
})

export default router