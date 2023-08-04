import { configureStore } from '@reduxjs/toolkit';
import heroStatsReducer from './hero_stats';

const store = configureStore({
  reducer: {
    heroStats: heroStatsReducer,
  },
});

export default store;
