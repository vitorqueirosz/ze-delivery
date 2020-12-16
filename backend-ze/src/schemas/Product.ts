import { Document, model, Schema } from 'mongoose';
import { Product } from '../interfaces/Product';

export interface ProductModel extends Product, Document {}

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    brand_id: {
      ref: 'brands',
      type: Schema.Types.ObjectId,
      required: false,
    },
    category_id: {
      ref: 'categories',
      type: Schema.Types.ObjectId,
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

export default model<ProductModel>('products', productSchema);
