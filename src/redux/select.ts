import { IGlobalState } from './state';

interface IRootState extends IGlobalState {};

export const selectorCurrency = (state: IRootState) => state.currency;