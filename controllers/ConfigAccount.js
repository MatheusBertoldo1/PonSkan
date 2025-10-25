import express from 'express'
import { GetUser } from '../models/User.js'

const router = express.Router()

router.get('/config-account', async (_req, res) => {
    try {
        const user = await GetUser(1)

        res.render('config-account', {
            currentPage:  "config-account",
            user: user
        })
    } catch (error) {
        console.error("Erro na rota /configAccount", error)
        throw new Error('Erro com a busca de usuarios')
    }
    
})

export default router