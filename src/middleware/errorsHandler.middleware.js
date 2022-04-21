import config from "../../config.js";


class ErrorsHandlerMiddleware {

    constructor() {}

    notFound (req, res, next) {
        const error = new Error(`Not found - ${req.originalUrl}`);
        res.status(404);
        next(error);
    }
      
    errorHandle(error, req, res, next) {   
        if (error.name === 'UnauthorizedError') {
          res.status(401);
        }
        const status =  error.statusCode? error.statusCode : res.statusCode === 200? 500 : res.statusCode;
        const message = error.message || 'Something went wrong';
        const stack = config.name === 'production' ? '' : error.stack ;
        console.error('[ERROR] ', status, message, error.stack);
        const responseData = {
          success: false,
          message,
        }
        if (stack) {
          responseData.stack = stack
        }
        res.status(status).json(responseData);
      }
}

export default new ErrorsHandlerMiddleware();
