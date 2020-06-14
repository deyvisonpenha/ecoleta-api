# ipets-api
A marketplace that connects companies which collect organic or inorganic trash with people that have to discard it.

Para inicializar como ambiente de desenvolvimento
yarn dev

DB Postgres

para acessar o banco:
$ psql -h localhost -d postgres

para executar uma migração up/down
$ yarn typeorm migration:run
$ yarn typeorm migration:revert