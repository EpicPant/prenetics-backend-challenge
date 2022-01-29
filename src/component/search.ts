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

    const { limit = 0, offset = 0, sampleid, activatetime, patientname, resulttime } = query;

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

    patientname ? querybuilder.andWhere('profile.name = :patientname', { patientname }) : null;
    sampleid ? querybuilder.andWhere('result.sampleId = :sampleid', { sampleid }) : null;
    activatetime ? querybuilder.andWhere(` DATE_TRUNC('day', result.activateTime) = :activatetime`, { activatetime }) : null;
    resulttime ? querybuilder.andWhere(`DATE_TRUNC('day', result.resultTime) = :resulttime`, { resulttime }) : null;

    return await querybuilder.getManyAndCount();
}
