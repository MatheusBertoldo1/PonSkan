import express from 'express'
const router = express.Router()
import Auth from '../middleware/Auth.js'  

router.get('/reports', Auth, (_req, res) =>{
    res.render('reports', {
        // Para alterar o css do link no menu que indica em qual pagina o usuário está  
        currentPage: 'reports'
    })
})

export default router