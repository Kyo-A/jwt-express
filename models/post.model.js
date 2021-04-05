module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define('posts', {
        title: Sequelize.STRING,

        userId: {
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'users',
                key: 'id',
                as: 'userId'
            },
        }
    });

    return Post;
}