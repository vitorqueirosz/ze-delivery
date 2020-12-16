import { Document, model, Schema } from 'mongoose';
import { Adress } from '../interfaces/Adress';

export interface AdressModel extends Adress, Document {}

const adressSchema = new Schema(
  {
    street: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    neighborhood: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
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
adressSchema.virtual('users', {
  ref: 'users',
  localField: 'user',
  foreignField: '_id',
  justOne: false,
});

export default model<AdressModel>('adress', adressSchema);
