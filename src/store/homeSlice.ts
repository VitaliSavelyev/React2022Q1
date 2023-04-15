import { createSlice } from '@reduxjs/toolkit';
export const defaultUrl = 'https://rickandmortyapi.com/api/character'
const homeSlice = createSlice({
    name: 'homeState',
    initialState: {
        searchInput: '',
        url: defaultUrl,
        errorCards: null,
        isPending: false,
        cards: [],
        cardIdModal: null,
        card: null,
        cardError: null,
        isPendingCard: false
    },
    reducers: {
        changeInputValue(state, action) {
            state.searchInput = action.payload.searchValue
            state.url = action.payload.searchValue ? defaultUrl + `?name=${action.payload.searchValue}` : defaultUrl
        },
        getData(state){
            state.isPending = true;
            state.errorCards = null
        },
        getDataSuccess(state, action){
            state.cards = action.payload.data
            state.isPending = false;
        },
        getDataError(state, action){
            state.errorCards = action.payload.error
            state.isPending = false;
        },
        setModalWindow(state, action){
            state.cardIdModal = action.payload.cardId
            if(!action.payload.cardId){
                state.isPendingCard = false;
                state.card = null
                state.cardError = null;
            }
        },
        getDataById(state){
            state.isPendingCard = true;
            state.cardError = null
        },
        getDataByIdSuccess(state, action){
            state.card = action.payload.data
            state.isPendingCard = false;
        },
        getDataByIdError(state, action){
            state.cardError = action.payload.error
            state.isPendingCard = false;
        },
    },
});

export const {changeInputValue, getData, getDataSuccess, getDataError, setModalWindow, getDataById, getDataByIdSuccess, getDataByIdError} = homeSlice.actions;

export default homeSlice.reducer;
