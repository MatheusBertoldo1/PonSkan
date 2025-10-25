import express from 'express'
const router = express.Router()

router.get('/help', (_req, res) =>{
    res.render('help', {
        currentPage: 'help'
    })
})

export default router
