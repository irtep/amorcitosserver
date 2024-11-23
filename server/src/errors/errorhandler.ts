import express from 'express';

export class ErrorClass extends Error {
    status : number
    errMsg : string
    constructor(status? : number, errMsg? : string) {
        super();
        this.status = status || 500;
        this.errMsg = errMsg || "Unexpected error on server.";
    }
}

const errorhandler = (err : ErrorClass, req : express.Request, res : express.Response, next : express.NextFunction) => {
    res.status(err.status).json({virhe : err.errMsg});
    next();
}

export { errorhandler };
