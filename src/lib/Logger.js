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
const {
  createLogger,
  format,
  transports
} = winston;
const {
  combine,
  timestamp,
  label,
  prettyPrint
} = format;

const logger = createLogger({
  format: format.combine(
    label({
      label: 'by Karelle'
    }),
    timestamp(),
    format.json()),
  transports: [new winston.transports.File({
    filename: 'combined.log'
  }), ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: combine(
      label({
        label: 'by Karelle'
      }),
      timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
      prettyPrint()
    )
  }));
}

export default logger;