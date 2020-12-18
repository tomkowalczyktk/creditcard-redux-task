import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from '../features/CreditCard/cardsSlice';

export default configureStore({
  reducer: {
    cards: cardsReducer
  }
});
