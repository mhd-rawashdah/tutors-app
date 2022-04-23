import { environment } from 'src/environments/environment';

const apiUrl =  `${environment.baseUrl}/api/v1`;


export const TUTORS_URL = (id = ''):string =>  `${apiUrl}/tutors/${id}`;
