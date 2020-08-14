const { DataTypes, Model } = require('sequelize');
module.exports = (sequelize) => {
    class message extends Model {}
    message.init(
        {
            text: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
        },
        { modelName: 'message', sequelize, paranoid: true }
    );
    message.associate = (Models) => {
        message.belongsTo(Models.user, {
            foreignKey: {
                name: 'userId',
                allowNull: false,
            },
        });
        message.belongsTo(Models.room, {
            foreignKey: {
                name: 'roomId',
                allowNull: false,
            },
        });
    };
    return message;
};
