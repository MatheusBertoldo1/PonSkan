import express from 'express'
const router = express.Router()
import Auth from '../middleware/Auth.js'  

router.get('/reports', Auth, (_req, res) =>{
    res.render('reports', {
        currentPage: 'reports'
    })
})

export default router