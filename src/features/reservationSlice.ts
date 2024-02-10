import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: [],
};

export const reservationSlice = createSlice({
	name: "reservations",
	initialState,
	reducers: {
		add: (state) => {},
	},
});

export default reservationSlice.reducer;
