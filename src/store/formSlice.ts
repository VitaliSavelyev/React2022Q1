import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CharacterInterface } from '../interfaces/character.interface';

interface IFormState {
  cards: CharacterInterface[];
  isShowPopup: boolean;
}

const initialState: IFormState = {
  cards: [],
  isShowPopup: false,
};

const formSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<{ character: CharacterInterface }>) {
      state.cards.push(action.payload.character);
      state.isShowPopup = true;
    },
    hidePopup(state) {
      state.isShowPopup = false;
    },
  },
});

export const { addCard, hidePopup } = formSlice.actions;

export default formSlice.reducer;
