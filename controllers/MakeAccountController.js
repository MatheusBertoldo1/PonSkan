import express from 'express'
import { CreateUser } from './UserController.js'

const router = express.Router()

router.get('/make-account', (_req, res) =>{
    res.render('make-account', {
        currentPage: 'make-account'
    })
})

router.post('/make-account/create', async (req, res)=>{
    const {firstName, lastName, mail, password, phone, zone, city, uf} = req.body

    const currentUserId = await CreateUser({
        firstName, lastName, mail, phone, password, zone, city, uf
    })

    req.session.idUser = currentUserId

    res.redirect('/home/?' + currentUserId)
})

export default router