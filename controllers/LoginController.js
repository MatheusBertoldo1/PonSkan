import express from 'express'
import User from '../models/User.js'

const router = express.Router()

router.get('/login', (req, res) => {
    res.render('login', {
        message: req.flash(),
        currentPage: 'login'
    })
})

router.post('/login/login', async (req, res) =>{
    const {mail, password} = req.body

    
    try {
        const user = await User.findOne({ where: { mail: mail } });

        if (!user) {
            return res.redirect('/login')
        }
        else {
            if(user.password === password){
                req.session.idUser = user.id;
                return res.redirect('/home')
            }
            else {
                return res.redirect('/login')
            }
        }
    } 
    catch (error) {
        throw new Error('Erro ao fazer requisição de login')
    }
})


export default router