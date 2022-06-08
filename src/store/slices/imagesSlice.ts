import { createSlice } from "@reduxjs/toolkit";
import { Images } from "../../types/images";

const initialState: Images = {
  allImages: [],
};

export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    addImage: (state, action) => {
      state.allImages.push(action.payload);
    },
    deleteImage: (state, action) => {
      state.allImages = state.allImages.filter(
        (item) => item !== action.payload
      );
    },
  },
});

export const { addImage, deleteImage } = imagesSlice.actions;

export default imagesSlice.reducer;
