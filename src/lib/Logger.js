/**
 * A logger object
 */

/* import chalk from 'chalk';

export default {
  info: (text) => console.log(chalk.blue(`info: ${text}`)),
  stressedInfo: (text) => console.log(chalk.bgBlue(`info: ${text}`)),
  error: (text) => console.log(chalk.redBright(`error: ${text}`)),
  stressedError: (text) => console.log(chalk.bgRedBright(`error: ${text}`)),
  warning: (text) => console.log(chalk.rgb(255, 165, 0)(`error: ${text}`)),
  stressedWarning: (text) =>
    console.log(chalk.bgRgb(255, 165, 0)(`error: ${text}`)),
  json: (json) => console.log(chalk.grey(JSON.stringify(json, null, 2))),
}; */


import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'Karelle' },
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log` blalabla
    //
    new winston.transports.File({ filename: 'warning.log', level: 'warning' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
};

export default logger;
