import { resolve } from 'path';
import { createConnection } from 'typeorm';
import { CONFIG } from './constant';

export const createMockConnection = async () => {
    const connection = await createConnection({
        name: 'test',
        url: CONFIG.db.testurl,
        database: CONFIG.db.dbname,
        type: 'postgres',
        dropSchema: true,
        logging: true,
        schema: CONFIG.db.schema,
        entities: [ `${resolve(__dirname, '../entity')}/**.{ts,js}` ],
        migrations: [`${resolve(__dirname, '../migration/test')}/**.{ts,js}`],
        cache: false,
    });

    await connection.runMigrations({ transaction: 'each' });

    await connection.createQueryRunner('master').createSchema(CONFIG.db.schema, true);
    return connection;
};
