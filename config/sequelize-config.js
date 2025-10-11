import Sequelize from "sequelize"

//Criando dados de conexão
const connection = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'ponskan',
    timezone: '-03:00'
})

export default connection