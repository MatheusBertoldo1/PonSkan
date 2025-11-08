import express from 'express'
const router = express.Router()
import Auth from '../middleware/Auth.js'  

router.get('/analysis', Auth, (_req, res) =>{
    res.render('analysis', {
        currentPage: 'analysis'
    })
})

export default router
