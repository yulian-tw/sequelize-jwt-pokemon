'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.addConstraint('Pokemons', {
      fields: ['trainerId'],
      type: 'foreign key',
      name: 'Pokemons_trainerId_fkey',
      references: { //Required field
        table: 'Trainers',
        field: 'id'
      },
      onDelete: 'no action',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.removeConstraint('Pokemons', 'Pokemons_trainerId_fkey');
  }
};
