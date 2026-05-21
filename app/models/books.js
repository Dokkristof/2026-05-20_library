import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Books = sequelize.define('books', {
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
    isbn: { type: DataTypes.STRING, allowNull: false  },
    title: { type: DataTypes.STRING, allowNull: false  },
    author: { type: DataTypes.STRING, allowNull: false  },
    totalCopies: { type: DataTypes.INTEGER,  allowNull: true  },
}, {
    timestamps: true,
    freezeTableName: true
})

export default Books
