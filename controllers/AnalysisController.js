import express from 'express'
const router = express.Router()

router.get('/analysis', (_req, res) =>{
    res.render('analysis', {
        currentPage: 'analysis'
    })
})

export default router
