import express from 'express'
import { GetUser, SetUser } from '../models/User.js'

const router = express.Router()
const id = 1;

router.get('/config-account', async (_req, res) => {
    try {
        const user = await GetUser(id)

        res.render('config-account', {
            currentPage:  "config-account",
            user: user
        })
    } catch (error) {
        console.error("Erro na rota /configAccount", error)
        throw new Error('Erro com a busca de usuarios')
    }
})

router.post('/config-account/update/',  async (req, res)=> {
    const {firstName, lastName, mail, password, phone, zone, city, uf} = req.body

    await SetUser(id, {firstName, lastName, mail, password, phone, zone, city, uf})
    res.redirect('/config-account/')

})



export default router