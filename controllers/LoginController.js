import express from 'express'
import { FindOneUser } from '../models/User.js'
import bcrypt from 'bcrypt'

const router = express.Router()

router.get('/login', (_req, res) => {
    res.render('login', {
        message: ''
    })
})

router.post('/login/login', async (req, res) =>{
    const {mail, password} = req.body
    
    try {
        const user = await FindOneUser(mail);
        const correct = bcrypt.compareSync(password, user.password)

        if(!user || !correct){
            res.render('login', {
                message: "Usuário ou senha incorretos"
            })
        }
        
        else {
            req.session.idUser = user.id
            return res.redirect('/home')
        }
    } 
    catch (error) {
        throw new Error('Erro ao fazer requisição de login')
    }
})

// ROTA DE LOGOUT
router.get('/logout', (req, res) =>{
    req.session.idUser = undefined

    res.redirect('/')
})

export default router