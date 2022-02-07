import axios from 'axios';
import { RootState } from '../store';
import { API_URL, ORGANISATION_ID } from '../resources/constants';
import { ApiResponseType, ResultState } from '../resources/types';

export const fetchResultsFormAPI = (state: RootState) => {
    let uri = `${API_URL}/org/${ORGANISATION_ID}/sample?limit=${state.pagination.limit}&offset=${state.pagination.current_page - 1}&`;
    uri = uri + new URLSearchParams({ ...state.search.query });
    
    return axios.get(uri)
    .then((res): ResultState => {
        const { data, meta, included } = res.data as ApiResponseType;
        return {
            status: state.result.status,
            data: data.map((result, i) => {
                return {
                    patientName: included[i].attributes.name,
                    sampleId: result.attributes.sampleId,
                    result: result.attributes.result || '',
                    resultType: result.attributes.resultType,
                    resultTime: new Date(result.attributes.resultTime).toLocaleString(),
                    activationTime: new Date(result.attributes.activateTime).toLocaleString()
                }
            }),
            meta: {
                total: meta.total
            }
        }
    })
    .catch((err) => {
        console.log(err);
    });
};