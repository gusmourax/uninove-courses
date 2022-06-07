import winston from 'winston';

export type logger = winston.Logger;

const logConfiguration = (module: string) => ({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.colorize({
      all: false,
    }),
    winston.format.label({
      label: `${module} 📦`,
    }),
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.printf(
      (info) => `[${info.level.toLowerCase()}]: ${info.label}: ${[info.timestamp]}: ${info.message}`,
    ),
  ),
});

const Logger = (module: string) => winston.createLogger(logConfiguration(module));

export default Logger;
