import { Document, model, Schema } from 'mongoose';
import { User } from '../interfaces/User';

export interface UserModel extends User, Document {}

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    cpf: {
      type: Number,
      required: true,
      unique: true,
    },
    age: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      unique: true,
      required: true,
    },
    avatar: {
      type: String,
      required: false,
    },
    created_at: {
      type: Date,
      default: Date.now(),
    },
    updated_at: {
      type: Date,
      default: Date.now(),
    },
  },
  { toJSON: { virtuals: true } },
);

userSchema.virtual('adress', {
  ref: 'adress',
  localField: '_id',
  foreignField: 'user',
  justOne: true,
  options: { sort: { created_at: -1 } },
});

export default model<UserModel>('users', userSchema);
