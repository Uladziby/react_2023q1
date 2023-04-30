/** @format */
import { RootState } from '../store';

export const filteredProductsSelector = (state: RootState) => state.main.filteredProducts;
export const mainSelector = (state: RootState) => state.main;
export const formPageSelector = (state: RootState) => state.form;
