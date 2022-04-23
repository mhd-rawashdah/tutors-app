import { TutorsService } from '../../services/index.js'
class TutorsController {

    constructor() {
    }
    
    create(req, res, next) {}

    async get(req, res, next) {
       try {
        const result = await TutorsService.get(req.query);
        res.status(200).json({
            message: 'Hey this get tutors API',
            data: result
        })
       } catch (error) {
           next(error);
       }
     }

    getById(req, res, next) {}

    delete(req, res, next) {}
}


export default new TutorsController();