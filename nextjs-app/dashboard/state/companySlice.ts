// state/companySlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Company } from './dashboardState';

interface CompanyState {
  selectedCompany: Company | null;
}

const initialState: CompanyState = {
  selectedCompany: null,
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    setSelectedCompany: (state, action: PayloadAction<Company>) => {
      state.selectedCompany = action.payload;
    },
  },
});

export const { setSelectedCompany } = companySlice.actions;

export const selectSelectedCompany = (state: RootState) => state.company.selectedCompany;

export default companySlice.reducer;
