import express from 'express'
const router = express.Router()
import Auth from '../middleware/Auth.js'  

router.get('/help', Auth, (_req, res) =>{
    res.render('help', {
        currentPage: 'help'
    })
})

export default router
