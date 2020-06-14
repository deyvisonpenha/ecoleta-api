import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateAd1592090235586 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'ad_pets',
                columns: [{
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'image',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'whatsapp',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'title',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'description',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'city',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'uf',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'latitude',
                    type: 'integer',
                    isNullable: false
                },
                {
                    name: 'longitude',
                    type: 'integer',
                    isNullable: false
                }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('ad_pets');
    }

}
