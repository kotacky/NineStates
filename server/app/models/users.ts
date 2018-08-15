import * as mongoose from 'mongoose';

const usersModel: mongoose.Model<mongoose.Document> = mongoose.model(
  'users',
  new mongoose.Schema({
    name: {type: String},
    address: {type: String}
  })
);

export { usersModel };
