/** @format */
import { IFormPageState } from '../../routes/FormPage/types';
import { createSlice } from '@reduxjs/toolkit';

interface IFormSlice {
  userCards: IFormPageState[];
}

const initialState: IFormSlice = {
  userCards: [],
};

const formPageSlice = createSlice({
  name: 'formPageSlice',
  initialState,
  reducers: {
    addCard(state, { payload }) {
      state.userCards.push(payload);
    },
  },
});

export default formPageSlice.reducer;
export const { addCard } = formPageSlice.actions;
