import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('petsAdAndTypePets', table => {
        table.increments('id').primary();
        table.integer('petAd_id')
            .notNullable()
            .references('id')
            .inTable('petsAd');

        table.integer('typePets_id')
            .notNullable()
            .references('id')
            .inTable('typePets');
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('petsAdAndTypePets');
}