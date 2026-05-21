import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Patrons = sequelize.define('patrons', {
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
    idNumber: { type: DataTypes.STRING,  allowNull: false  },
    fullname: { type: DataTypes.STRING,  allowNull: false  },
    email: { type: DataTypes.STRING,  allowNull: false  }
}, {
    timestamps: true,
    freezeTableName: true
})

export default Patrons
