const guest = (Sequelize, DataTypes)=>{
    return Sequelize.define(
        "guest", 
        { 
            id: { //id int not null primary key
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey : true
            },
            game: { //game varchar(10) not null,
                type: DataTypes.STRING(10),
                allowNull: false
            },
            comment: { //comment longtext not null
                type: DataTypes.TEXT,
                allowNull: false
            }
        },
        {
            tableName: "guest",
            freezeTableName: true,
            timestamps: false
        }
    )
}

module.exports = guest;