const Sequelize = require('sequelize');
const connection = require('./database');

const assignment = connection.define('assignment', {    
        id: { 
            type: Sequelize.INTEGER, 
            primaryKey: true, 
            autoIncrement: true 
        },
        title: {
            type: Sequelize.STRING(15),
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING(40),
            allowNull: false
        },
        observation: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        taskDoer: {
            type: Sequelize.STRING(10),
            allowNull: false
        },
        estimatedTime: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        startDateTime: {
            type: Sequelize.DATE
        },
        endDateTime: {
            type: Sequelize.DATE
        },
        status: {
            type: Sequelize.ENUM('NotStart' = 1, 'InProgress' = 2, 'Paused' = 3, 'Closed' = 4),
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)

assignment.sync({ force: false }).then(() => { });

module.exports = assignment;