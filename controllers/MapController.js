import express from 'express'
const router = express.Router()
import Auth from '../middleware/Auth.js'  

router.get('/map', Auth, (_req, res) =>{
    res.render('map', {
        currentPage: 'map'
    })
})

export default router
