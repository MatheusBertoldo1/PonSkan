import express from "express"
import { GetUser } from "../models/User.js"

const router = express.Router()

router.get('/home', async (_req, res) => {
    try{
        const user = await GetUser(1)
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