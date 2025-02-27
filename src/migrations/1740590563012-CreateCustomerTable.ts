import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCustomerTable1740590563012 implements MigrationInterface {
    name = 'CreateCustomerTable1740590563012'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "customer" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "UQ_cb485a32c0e8b9819c08c1b1a1b" UNIQUE ("username"), CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "customer"`);
    }

}
