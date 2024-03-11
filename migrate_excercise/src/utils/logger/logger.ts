import winston from 'winston';

class Logger {
    #logger : winston.Logger;
    constructor() {
        const dateStr = (new Date()).toISOString();
        this.#logger = new winston.Logger({
            level: 'info',
            format: winston.format.json(),
            'transports': [
                new winston.transports.Console(),
                new winston.transports.File({ filename: 'log_files/migration_info_'+dateStr+'.log'}),
            ]
        });
    };

    log(message:any) {
        this.#logger.log({
            level : 'info',
            message : message
        });
    }
};

export const logger = new Logger();



  