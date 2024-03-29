import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from "../features/reservationSlice";
import customerReducer from "../features/customerSlice";

export const store = configureStore({
	reducer: {
		reservations: reservationReducer,
		customers: customerReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDisptch = ReturnType<typeof store.dispatch>;
