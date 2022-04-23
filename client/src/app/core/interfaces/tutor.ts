import { User } from "./user";

export interface Tutor {
    userId?: string;
    jobTitle: string;
    yearsOfExperience: number;
    pricePerHour: number;
    overview: string;
    rating: number;
    reviewsCount: number;
    verifiedAt: string;
    profile?: User,
    subjects?: any[];
    qualifications?: any[];
}
