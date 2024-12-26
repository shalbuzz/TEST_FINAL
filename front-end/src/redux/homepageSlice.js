
import { createSlice } from "@reduxjs/toolkit";

const coinsSlice = createSlice({
    name: "coinss",
    initialState: {
        coinsss: [], 
        filtered: [],
        selectedCountry: "",
        searchInput: "",
        selectedMetal: "",
        selectedQuality: "",
        priceRange : {from: "", to:""},
        yearRange: {from: "", to:""},
        loading: false, 
        error: null,    
    },
    reducers: {
        startLoading(state) {
            state.loading = true;
            state.error = null;
        },
        setCoins(state, action) {
            // state.coins = Array.isArray(action.payload) ? action.payload : [];
            state.coinsss = [...action.payload]
            state.loading = false;
        },
        
        setError(state, action) {
            state.loading = false;
            state.error = action.payload;
        },

        setFiltered(state, action) {
            state.filtered = action.payload;
          },
        setSearchInput(state, action) {
            state.searchInput = action.payload;
          },
          setSelectedCountry(state, action) {
            state.selectedCountry = action.payload;
        },
        setSelectedMetal(state, action) {
            state.selectedMetal = action.payload;
        },
        setSelectedQuality(state, action) {
            state.selectedQuality = action.payload;
        },
        setPriceRange(state, action) {
            state.priceRange = action.payload;
        },
        setYearRange(state, action) {
            state.yearRange = action.payload;
        },


    },
});

export const { startLoading, setCoins, setError,setFiltered,setSearchInput,setSelectedCountry,setSelectedMetal,setPriceRange,setYearRange,setSelectedQuality } = coinsSlice.actions;

export default coinsSlice.reducer;
