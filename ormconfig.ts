import { DataSource } from "typeorm";

export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456789',
    database: 'postgres',
    logging: false,
    synchronize: false,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/src/migrations/**/*{.ts,.js}'],
    migrationsTableName: "migrations",
});