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
    try{
        const user = await User.findByPk(id)
        return user
    }
    catch(error){
        console.log(error)
        throw new Error("Falha ao buscar usuário")
    }
}

export {GetUser}