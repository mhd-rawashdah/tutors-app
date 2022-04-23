import { Observable } from "rxjs";
import { Params } from "../interfaces/params";
import { Response } from "../interfaces/response";

export abstract class TutorModel {
    
    public abstract get(params?: Params): Observable<Response>;
    public abstract getById(tutorId: string): Observable<Response>;
}


