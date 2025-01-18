const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectModule: require('pg'),
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
})

try {
  sequelize.authenticate()
  console.log('Conectado ao PostgreSQL!')
} catch (err) {
  console.error('Não foi possível conectar:', err)
}

module.exports = sequelize