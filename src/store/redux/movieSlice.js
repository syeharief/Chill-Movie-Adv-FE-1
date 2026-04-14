import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData, addData, updateData, deleteData } from "../../service/api";

// GET
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async () => {
    return await getData();
  }
);

// ADD
export const createMovie = createAsyncThunk(
  "movies/createMovie",
  async (movie) => {
    return await addData(movie);
  }
);

// UPDATE
export const editMovie = createAsyncThunk(
  "movies/editMovie",
  async ({ id, movie }) => {
    return await updateData(id, movie);
  }
);

// DELETE
export const removeMovie = createAsyncThunk(
  "movies/removeMovie",
  async (id) => {
    await deleteData(id);
    return id;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    data: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(createMovie.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(editMovie.fulfilled, (state, action) => {
        const index = state.data.findIndex(
          (item) => item.id === action.payload.id
        );
        state.data[index] = action.payload;
      })
      .addCase(removeMovie.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (item) => item.id !== action.payload
        );
      });
  },
});

export default movieSlice.reducer;