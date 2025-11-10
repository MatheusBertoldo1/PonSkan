import express from 'express'
const router = express.Router()
import Auth from '../middleware/Auth.js'  

router.get('/help', Auth, (_req, res) =>{
    res.render('help', {
        // Para alterar o css do link no menu que indica em qual pagina o usuário está
        currentPage: 'help'
    })
})

export default router
