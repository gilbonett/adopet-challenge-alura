'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.STRING
      },
      personality: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      adopted: {
        type: Sequelize.BOOLEAN
      },
      shelters_id:{
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {model: 'Shelters', key:'id' }
      },
      img: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pets');
  }
};