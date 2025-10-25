import express from 'express'
const router = express.Router()

router.get('/map', (_req, res) =>{
    res.render('map', {
        currentPage: 'map'
    })
})

export default router
