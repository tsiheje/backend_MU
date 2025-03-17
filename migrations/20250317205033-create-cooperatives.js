'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cooperatives', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('gen_random_uuid()'),
        allowNull: false,
        primaryKey: true
      },
      cooperative_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cooperative_address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cooperative_email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      cooperative_phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      creation_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cooperatives');
  }
};
