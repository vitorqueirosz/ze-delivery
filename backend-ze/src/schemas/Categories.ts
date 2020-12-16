import { Schema } from 'mongoose';

const categoriesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
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

categoriesSchema.virtual('products', {
  ref: 'products',
  localField: '_id',
  foreignField: 'category_id',
  justOne: false,
});

export default categoriesSchema;
