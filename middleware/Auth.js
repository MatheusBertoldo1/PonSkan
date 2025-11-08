const Auth = (req, res, next) => {
    const idUsuario = req.session.idUser

    if(idUsuario != undefined){
        next()
    }else{
        res.render("login", {
            loggedOut : true
        })
    }
}
export default Auth