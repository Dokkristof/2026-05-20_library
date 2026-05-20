import { DataTypes } from 'sequelize';

async function up({context: QueryInterface}) {
  await QueryInterface.createTable('books', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    isbn: { type: DataTypes.STRING,  allowNull: false  },
    title: { type: DataTypes.STRING,  allowNull: false  },
    author: { type: DataTypes.STRING,  allowNull: false  },
    totalCopies: { type: DataTypes.INTEGER,  allowNull: true  },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }    
  });
}

async function down({context: QueryInterface}) {
  await QueryInterface.dropTable('books');
}

export { up, down }
