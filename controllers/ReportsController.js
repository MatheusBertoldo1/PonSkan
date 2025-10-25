import express from 'express'
const router = express.Router()

router.get('/reports', (_req, res) =>{
    res.render('reports', {
        currentPage: 'reports'
    })
})

export default router