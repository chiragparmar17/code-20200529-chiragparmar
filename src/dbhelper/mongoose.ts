import config from 'config';
import { connect } from 'mongoose';

export async function initialize() {
  const MONGOOSE_URL: string = config.get('mongoose.url');
  console.log(`Trying to connect to mongoose database on ${MONGOOSE_URL}`);
  await connect(
    MONGOOSE_URL,
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    () => {
      console.log('Connected to mongoose database');
    }
  );
}

export function bulkInsert() {}
