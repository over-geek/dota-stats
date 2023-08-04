import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialState, URL } from '../utils/config';

const FETCHSTATS = 'stats/FETCHSTATS';

export const fetchStats = createAsyncThunk(FETCHSTATS, async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
});

const heroStatsSlice = createSlice({
  name: 'heroStats',
  initialState,
  reducers: {
    searchHeroes: (state, { payload }) => {
      const filterdHeroes = state.filteredHeroStats.filter((stat) => {
        const heroName = stat.localized_name.toLowerCase();
        return heroName.includes(payload.toLowerCase());
      });
      return {
        ...state,
        heroStats: payload.length > 0 ? filterdHeroes : [...state.heroStats],
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStats.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(fetchStats.fulfilled, (state, { payload }) => ({
      ...state,
      heroStats: payload,
      filteredHeroStats: payload,
      loading: false,
    }));
  },
});

export const { searchHeroes } = heroStatsSlice.actions;

export default heroStatsSlice.reducer;
