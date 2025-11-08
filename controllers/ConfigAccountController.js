import express from 'express'
import { DeleteUser, GetUser, UpdateUser} from '../models/User.js'
import Auth from '../middleware/Auth.js'  

const router = express.Router()

router.get('/config-account', Auth, async (req, res) => {
    const idUser = req.session.idUser
    
    try {
        const user = await GetUser(idUser)

        res.render('config-account', {
            currentPage:  "config-account",
            user: user
        })
    } catch (error) {
        throw new Error('Erro com a busca de usuarios')
    }
})

router.post('/config-account/update/',  async (req, res)=> {
    const {firstName, lastName, mail, password, phone, zone, city, uf} = req.body
    const idUser = req.session.idUser


    await UpdateUser(idUser, {firstName, lastName, mail, password, phone, zone, city, uf})
    res.redirect('/config-account/')

})

router.post('/config-account/delete', async (req, res) =>{
    const idUser = req.session.idUser
    
    await DeleteUser(idUser)
    res.redirect('/')
})


export default router