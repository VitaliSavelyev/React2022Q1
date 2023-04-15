import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: [],
        isShowPopup: false
    },
    reducers: {
        addCard(state, action) {
            state.cards.push(action.payload.character)
            state.isShowPopup = true
        },
        hidePopup(state){
            state.isShowPopup = false;
        }
    },
});

export const {addCard, hidePopup} = formSlice.actions;

export default formSlice.reducer;
