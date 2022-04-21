
class TutorsController {

    constructor() {
    }
    
    create(req, res, next) {}

    get(req, res, next) {
        res.status(200).json({
            message: 'Hey this get tutors API'
        })
     }

    getById(req, res, next) {}

    delete(req, res, next) {}
}


export default new TutorsController();