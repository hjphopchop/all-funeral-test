import { createSlice } from "@reduxjs/toolkit";
import {Images } from "../../types/images";


const initialState: Images= {
    allImages: []
};

export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    addImage: (state, action) => {
        state.allImages.push(action.payload) 
    },
    deleteImage: (state, action) => {
       const index = state.allImages.findIndex((image) => image.url === action.payload);
       state.allImages.splice(index,1)
    },
    
  },
});

export const { addImage, deleteImage } = imagesSlice.actions;

export default imagesSlice.reducer;
