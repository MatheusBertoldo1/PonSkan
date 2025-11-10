import express from 'express'
const router = express.Router()
import Auth from '../middleware/Auth.js'  

router.get('/map', Auth, (_req, res) =>{
    res.render('map', {
        // Para alterar o css do link no menu que indica em qual pagina o usuário está
        currentPage: 'map'
    })
})

export default router
