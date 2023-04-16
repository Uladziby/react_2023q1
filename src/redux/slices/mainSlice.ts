/** @format */
import { ICard } from '../../components/ACard/type';
import { createSlice } from '@reduxjs/toolkit';

interface IMainState {
  searchTerm: string;
  searchResult: ICard[];
  filteredProducts: ICard[];
  selectedProduct: ICard;
}

const initialSelectedProduct: ICard = {
  price: 0,
  title: '',
  image: '',
  id: 0,
  rating: {
    count: 0,
    rate: 0,
  },
  description: '',
  category: '',
};

const initialState: IMainState = {
  searchTerm: localStorage.getItem('searchTerm') || '',
  searchResult: [],
  filteredProducts: [],
  selectedProduct: initialSelectedProduct,
};

const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    setSearchTerm(state, { payload }) {
      state.searchTerm = payload;
    },
    filterProducts(state, { payload }) {
      state.filteredProducts = payload;
    },
    setSelectedProduct(state, { payload }) {
      state.selectedProduct = payload;
    },
  },
});

export default mainSlice.reducer;
export const { setSearchTerm, filterProducts, setSelectedProduct } = mainSlice.actions;
