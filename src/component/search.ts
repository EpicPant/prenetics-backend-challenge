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

    const { limit = 0, offset = 0, sampleid = '', activatetime = '', patientname = '', resulttime = '' } = query;

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

    if (patientname) { querybuilder.andWhere('profile.name = :patientname', { patientname }); }
    if (sampleid) { querybuilder.andWhere('result.sampleId = :sampleid', { sampleid }); }
    if (activatetime) { querybuilder.andWhere(` DATE_TRUNC('day', result.activateTime) = :activatetime`, { activatetime }); }
    if (resulttime) { querybuilder.andWhere(`DATE_TRUNC('day', result.resultTime) = :resulttime`, { resulttime }); }

    const result = await querybuilder.getManyAndCount();

    return {
        meta: {
            total: result[1]
        },
        data: result[0].map(({ result, resultId, sampleId, type, activateTime, resultTime, profile }) => ({
            id: resultId,
            type: 'sample',
            attributes: {
                result,
                sampleId,
                type: organisation.name === 'Circle' ? type : undefined,
                activateTime,
                resultTime,
            },
            relationships: {
                profile: {
                    data: {
                        type: 'profile',
                        id: organisation.name === 'Circle' ? profile.profileId : undefined
                    }
                }
            }
        })),
        included: result[0].map(({ profile }) => ({
            type: 'profile',
            id: profile.profileId,
            attributes: {
                id: organisation.name === 'Circle' ? profile.profileId : undefined,
                name: profile.name
            }
        }))
    };
}
