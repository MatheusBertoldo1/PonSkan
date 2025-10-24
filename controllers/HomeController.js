import express from "express"
const router = express.Router()

router.get('/home', function (_req, res){
    res.render('home', {
        currentPage: 'home'
    })
})

export default router