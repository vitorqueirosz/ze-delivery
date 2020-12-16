import { action } from 'typesafe-actions';

import { Product } from '../../../pages/Product';

export function addToBag({ product }: { product: Product }) {
  return action('@bag/ADD_TO_BAG', { product });
}

export function removeToBag({
  product,
  removeAll,
}: {
  product: Product;
  removeAll?: boolean;
}) {
  return action('@bag/REMOVE_TO_BAG', { product, removeAll });
}
