import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { movieName: "batman" },
};

const useSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovieName: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setMovieName } = useSlice.actions;

export const store = configureStore({
  reducer: {
    movie: useSlice.reducer,
  },
});
