import { Request } from 'express';
import { EntityManager } from 'typeorm';
import { Organisation } from '../entity/organisation';
import { Result } from '../entity/result';

export async function search(
    manager: EntityManager,
    organisation: Organisation,
    params: Request['params'],
    query: Request['query']
) {

    const { limit = 0, offset = 0 } = query;

    const querybuilder = await manager.createQueryBuilder()
    .select('result')
    .from(Result, 'result')
    .innerJoinAndSelect(
        'result.profile',
        'profile'
    )
    .innerJoin(
        'profile.organisation',
        'organisation',
        'organisation.organisationId = :organisationId',
        {
            organisationId: organisation.organisationId
        }
    ).offset(offset * limit).limit(limit);

    return await querybuilder.getManyAndCount();
}
