import Sequelize, { where } from "sequelize";
import connection from "../config/sequelize-config.js";

const User = connection.define('users', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mail: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    zone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    uf: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

User.sync({force : false})

const GetUser = async (id)=>{
    try {
        const user = await User.findByPk(id)
        return user
    } 
    catch(error){
        console.log(error)
        throw new Error("Falha ao buscar usuário")
    }
}

const UpdateUser = async (id, {firstName, lastName, mail, password, phone, zone, city, uf}) =>{
    try {
        User.update(
        { 
            firstName, 
            lastName, 
            mail, 
            phone, 
            password,
            zone, 
            city, 
            uf
        }, {where: {id}}) 

    } 
    catch (error) {
        console.error("Erro ao editar usuário", error)
        throw new Error("Erro ao editar usuário")
    }
}

const DeleteUser = async (id) =>{
    try {
        await User.destroy({
            where: {
                id
            }
        })
    } 
    
    catch (error) {
        throw new Error('Erro ao deletar usuário')
    }
    
}

const CreateUser = async ({firstName, lastName, mail, password, phone, zone, city, uf}) => {

    try {
        const userCreated= await User.create({
            firstName, 
            lastName, 
            mail, 
            password, 
            phone, 
            zone, 
            city, 
            uf
        })    

        return userCreated.id
    } 
    catch (error) {
        console.log(error)
        throw new Error('Erro ao criar usuário')
    }   
}

const FindOneUser = async (mail) => {
    try{
        const user = await User.findOne({where: {mail : mail}})
        return user
    }
    catch(error){
        throw new error("Erro ao buscar usuário")
    }
}

export {GetUser, UpdateUser, DeleteUser, CreateUser, FindOneUser}