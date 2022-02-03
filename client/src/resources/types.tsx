export interface SearchState {
    value: string;
}

export interface PaginationState {
    current_page: number;
    total_page: number;
    limit: number;
}

export interface ResultState {
    status: string;
    meta: {
        total: number
    };
    data: ResultType[]
}

export interface ResultType {
    result: string;
    activationTime: string;
    resultTime: string;
    resultType: string; 
    sampleId: string;
    patientName: string;
}