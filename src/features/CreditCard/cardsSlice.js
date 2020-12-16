import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        cardAdded (state, action) {
            // It's allowed to use push() here, because createSlice takes care about immutablity
            state.push(action.payload);
        }
    }
})
export const { cardAdded } = cardsSlice.actions;

export default cardsSlice.reducer 