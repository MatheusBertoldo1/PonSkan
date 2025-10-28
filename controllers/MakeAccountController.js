import express from 'express'
import { CreateUser } from '../models/User.js'

const router = express.Router()

router.get('/make-account', (_req, res) =>{
    res.render('make-account', {
        currentPage: 'make-account'
    })
})

router.post('/make-account/create', async (req, res)=>{
    const {firstName, lastName, mail, password, phone, zone, city, uf} = req.body

    await CreateUser({firstName, lastName, mail, phone, password, zone, city, uf})
    res.redirect('/home/')
})

export default router