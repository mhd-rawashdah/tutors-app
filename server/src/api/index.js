import { Router } from 'express';
import { TutorsRoute } from './tutors/index.js';

const router = Router();

const routes = {
    tutorsRoute: TutorsRoute.router,
}

for (const route in routes) {
    if (routes[route]) {
      router.use('/', routes[route]);
    }
}

export default router;