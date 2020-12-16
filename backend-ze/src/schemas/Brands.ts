import { Document, model, Schema } from 'mongoose';

import { Brand } from '../interfaces/Brand';

export interface BrandModel extends Brand, Document {}

const brandsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    is_prestigious: {
      type: Boolean,
      required: false,
      default: false,
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

brandsSchema.virtual('products', {
  ref: 'products',
  localField: '_id',
  foreignField: 'brand_id',
  justOne: false,
});

export default model<BrandModel>('brands', brandsSchema);
