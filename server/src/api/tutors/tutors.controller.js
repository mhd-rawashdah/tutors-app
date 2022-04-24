import { TutorsService } from '../../services/index.js'
class TutorsController {

    constructor() {
    }
    
    create(req, res, next) {}

    async get(req, res, next) {
       try {
        const { count, rows} = await TutorsService.get(req.query);
        res.status(200).json({
            data: rows,
            success: true,
            count
        })
       } catch (error) {
           next(error);
       }
     }

    async getById(req, res, next) {
        try {
            const tutorId = req.params.id;
            const result = await TutorsService.getById(tutorId);
            res.status(200).json({
                data: result,
                success: true,
            })
           } catch (error) {
               next(error);
           }
    }

    delete(req, res, next) {}
}


export default new TutorsController();