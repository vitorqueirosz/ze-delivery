import { Product } from '../../../pages/Product';
import { BagAction, BagState } from './types';

const INITIAL_STATE: BagState = {
  error: false,
  loadingAddToBag: false,
  products: [],
  total: '',
  removeAll: false,
};

export default function reducer(
  state = INITIAL_STATE,
  action: BagAction,
): BagState {
  switch (action.type) {
    case '@bag/ADD_TO_BAG':
      const productExists = state.products.find(
        product => product._id === action.payload.product._id,
      );

      const removedProduct = state.products.filter(
        p => p._id !== productExists?._id,
      );

      if (productExists) {
        const updatedAmount =
          productExists.amount + action.payload.product.amount;

        const updatedProduct = { ...productExists, amount: updatedAmount };

        // eslint-disable-next-line no-param-reassign
        action.payload.product = updatedProduct;
      }

      return {
        ...state,
        products: productExists
          ? removedProduct.concat(action.payload.product)
          : state.products.concat(action.payload.product),
        total: productExists
          ? removedProduct
              .concat(action.payload.product)
              .reduce(
                (t, product) =>
                  t + Number(product.price.replace(',', '.')) * product.amount,
                0,
              )
              .toFixed(2)
              .replace('.', ',')
          : state.products
              .concat(action.payload.product)
              .reduce(
                (t, product) =>
                  t + Number(product.price.replace(',', '.')) * product.amount,
                0,
              )
              .toFixed(2)
              .replace('.', ','),
      };

    case '@bag/REMOVE_TO_BAG':
      const findProduct = state.products.find(
        product => product._id === action.payload.product._id,
      );

      const filterProducts = (id: string | undefined) =>
        state.products.filter(product => product._id !== id);

      let amount = findProduct?.amount;
      let newStateProduct: Product[] = [];
      let newStateRemovedProduct: Product[] = [];

      if (action.payload.removeAll) {
        const filteredStateProducts = filterProducts(findProduct?._id);

        newStateRemovedProduct = filteredStateProducts;
      }

      if (amount && amount > 1) {
        amount -= 1;

        const filteredProducts = filterProducts(findProduct?._id);

        const updatedProduct = { ...findProduct, amount };

        newStateProduct = [...filteredProducts, updatedProduct] as Product[];
      } else {
        const filteredProducts = filterProducts(findProduct?._id);
        newStateProduct = filteredProducts;
      }

      return {
        ...state,
        products: action.payload.removeAll
          ? newStateRemovedProduct
          : newStateProduct,
        total: action.payload.removeAll
          ? newStateRemovedProduct
              .reduce(
                (t, product) =>
                  Number(product.price.replace(',', '.')) * product.amount + t,
                0,
              )
              .toFixed(2)
              .replace('.', ',')
          : newStateProduct
              .reduce(
                (t, product) =>
                  Number(product.price.replace(',', '.')) * product.amount + t,
                0,
              )
              .toFixed(2)
              .replace('.', ','),
      };

    default:
      return state;
  }
}
