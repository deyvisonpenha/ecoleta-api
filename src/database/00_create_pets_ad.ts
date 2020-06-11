import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('petsAd', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('nameContact').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('petsAd');
}