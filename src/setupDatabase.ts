import mongoose from 'mongoose';
import { config } from '@root/config';
import Logger from 'bunyan';

const log: Logger = config.createLogger('server Database');

export default () => {
  const connect = () => {
    mongoose.connect('mongodb://localhost:27017/chatty-backend')
      .then(() => {
        log.error('Successfully connected to database');
      })
      .catch((error) => {
        log.error('Error connecting to database', error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};
