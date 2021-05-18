module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define('comments', {
        title: Sequelize.STRING,

        postId: {
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'posts',
                key: 'id',
                as: 'postId'
            },
        }
    });

    return Comment;
}