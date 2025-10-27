import Sequelize from "sequelize";
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


const SetUser = async (id, {firstName, lastName, mail, password, phone, zone, city, uf}) =>{
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

export {GetUser, SetUser}