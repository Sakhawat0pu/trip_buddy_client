import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
	searchTerm: string;
};

export const initialState: TInitialState = {
	searchTerm: "",
};

export const searchTermSlice = createSlice({
	name: "searchTerm",
	initialState,
	reducers: {
		assignSearchTerm: (state, action: PayloadAction<string>) => {
			state.searchTerm = action.payload;
		},
	},
});

export const { assignSearchTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;
