const Auth = (req, res, next) => {
    const idUsuario = req.session.idUser

    if(idUsuario != undefined){
        next()
    }else{
        res.redirect("/login")   
    }
}
export default Auth