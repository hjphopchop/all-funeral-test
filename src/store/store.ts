import { configureStore} from "@reduxjs/toolkit";
import { authApi } from "../services/auth";
import { companiesApi } from "../services/companies";
import { contactsApi } from "../services/contacts";
import authSlice from "./slices/authSlice";

export const store = configureStore({
  reducer: {auth: authSlice,
  [authApi.reducerPath] : authApi.reducer,
  [companiesApi.reducerPath] : companiesApi.reducer,
  [contactsApi.reducerPath] : contactsApi.reducer,
  
  }
,
middleware: (getDefaultMiddleware)=>
getDefaultMiddleware().concat(authApi.middleware, companiesApi.middleware,contactsApi.middleware)
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
