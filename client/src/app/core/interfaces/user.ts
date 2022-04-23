import { Tutor } from "./tutor";

export interface User {
    id?: string;
    firstName?: string;
    lastName?: string;
    username?: string;
    email?: string;
    age?: number;
    gender?: 'Male' | 'Female';
    imageURL?: string;
    phoneNumber?: string;
    tutor?: Tutor,
    country?: string;

}
