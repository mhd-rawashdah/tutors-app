import { Router } from 'express';
import controller from './tutors.controller.js';

class TutorsRoute {

    constructor() {
        this.path = '/tutors';
        this.router = Router();

        this.initialize();
    }

    initialize() {
        this.router.get(this.path, controller.get);

        this.router.get(`${this.path}/:id`, controller.getById);
    }
}


export default new TutorsRoute();
