import express from 'express'
const router = express.Router()

router.get('/config-account', (_req, res) => {
    res.render('config-account', {
        currentPage:  "config-account"
    })
})

export default router