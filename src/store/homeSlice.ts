import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CharacterInterface } from '../interfaces/character.interface';
export const defaultUrl = 'https://rickandmortyapi.com/api/character';

interface IHomeState {
  searchInput: string;
  url: string;
  cashUrl: string;
  errorCards: string;
  isPending: boolean;
  cards: CharacterInterface[];
  cardIdModal: string | null;
  card: CharacterInterface | null;
  cardError: string;
  isPendingCard: boolean;
}

const initialState: IHomeState = {
  searchInput: '',
  url: defaultUrl,
  cashUrl: '',
  errorCards: '',
  isPending: false,
  cards: [],
  cardIdModal: null,
  card: null,
  cardError: '',
  isPendingCard: false,
};

export const fetchData = createAsyncThunk(
  'data',
  async function (url: string, { rejectWithValue }) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Server Error!');
      }

      const data = await response.json();

      return data.results;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchDataById = createAsyncThunk(
  'dataById',
  async function (url: string, { rejectWithValue }) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Server Error!');
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const homeSlice = createSlice({
  name: 'homeState',
  initialState,
  reducers: {
    changeInputValue(state, action) {
      state.searchInput = action.payload.searchValue;
      state.url = action.payload.searchValue
        ? defaultUrl + `?name=${action.payload.searchValue}`
        : defaultUrl;
    },
    setModalWindow(state, action) {
      state.cardIdModal = action.payload.cardId;
      if (!action.payload.cardId) {
        state.isPendingCard = false;
        state.card = null;
        state.cardError = '';
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isPending = true;
      state.errorCards = '';
      state.cashUrl = state.url;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isPending = false;
      state.cards = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isPending = false;
      state.errorCards = action.error?.message || 'some error';
    });
    builder.addCase(fetchDataById.pending, (state) => {
      state.isPendingCard = true;
      state.cardError = '';
    });
    builder.addCase(fetchDataById.fulfilled, (state, action) => {
      state.isPendingCard = false;
      state.card = action.payload;
    });
    builder.addCase(fetchDataById.rejected, (state, action) => {
      state.isPendingCard = false;
      state.cardError = action.error?.message || 'some error';
    });
  },
});

export const { changeInputValue, setModalWindow } = homeSlice.actions;

export default homeSlice.reducer;
