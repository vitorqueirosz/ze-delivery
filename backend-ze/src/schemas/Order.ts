import { Schema } from 'mongoose';

const orderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    total_price: {
      type: String,
      required: true,
    },
    adress: {
      type: String,
      required: true,
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: 'products',
        required: true,
      },
    ],
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

orderSchema.virtual('product', {
  ref: 'products',
  localField: 'products',
  foreignField: '_id',
  justOne: false,
});

orderSchema.virtual('users', {
  ref: 'users',
  localField: 'user',
  foreignField: '_id',
  justOne: true,
});

export default orderSchema;
