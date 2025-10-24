import express from 'express'
const router = express.Router()

router.get('/make-account', (_req, res) =>{
    res.render('make-account', {
        currentPage: 'make-account'
    })
})

export default router