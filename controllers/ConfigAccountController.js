import express from 'express'
import { DeleteUser, GetUser, UpdateUser} from '../models/User.js'
import Auth from '../middleware/Auth.js'  
import bcrypt from 'bcrypt'

const router = express.Router()

router.get('/config-account', Auth, async (req, res) => {
    const idUser = req.session.idUser
    
    try {
        const user = await GetUser(idUser)

        res.render('config-account', {
            // Para alterar o css do link no menu que indica em qual pagina o usuário está
            currentPage:  "config-account",
            user: user
        })
    } catch (error) {
        throw new Error('Erro com a busca de usuarios')
    }
})

router.post('/config-account/update/',  async (req, res)=> {
    const {firstName, lastName, mail, password, phone, zone, city, uf} = req.body
    const idUser = req.session.idUser

    // Objeto que guardar os dados a serem atualizados, exceto a senha
    // Necessario, pois, o imput 'password' é vazio por padrão (segurança de dados)
    // Quando o update é feito o valor do imput 'password' (vazio) sobreescreve a senha atual, apagando a senha do usuário
    const toUpdate = {
        firstName, lastName, mail, phone, zone, city, uf
    }

    // Se o usuário alterar a senha adiciona o campo password ao objeto toUpdate e atribui a senha criptografada
    if(password && password.trim().length > 0){
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        toUpdate.password = hash
    }

    await UpdateUser(idUser, toUpdate)
    
    res.redirect('/config-account')
})

router.post('/config-account/delete', async (req, res) =>{
    const idUser = req.session.idUser
    
    await DeleteUser(idUser)
    res.redirect('/')
})


export default router