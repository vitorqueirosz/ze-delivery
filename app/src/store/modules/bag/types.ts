import { ActionType } from 'typesafe-actions';
import { Product } from '../../../pages/Product';

import * as actions from './actions';

export type BagAction = ActionType<typeof actions>;

export interface BagState {
  readonly loadingAddToBag: boolean;
  readonly error: boolean;
  readonly removeAll?: boolean;
  readonly products: Product[];
  readonly total: string;
}
