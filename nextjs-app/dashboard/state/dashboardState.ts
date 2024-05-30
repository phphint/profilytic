// state/dashboardState.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from './store';

interface Company {
  companyId: string;
  name: string;
  roles: Array<{
    roleId: string;
    title: string;
    status: string;
  }>;
}

interface DashboardState {
  companies: Company[];
  loading: boolean;
  error: string | null;
}

const initialState: DashboardState = {
  companies: [],
  loading: false,
  error: null,
};

// Utility function to get the auth token
const getAuthToken = () => {
  return localStorage.getItem('token'); // Adjust according to how you store the token
};

export const fetchDashboardData = createAsyncThunk('dashboard/fetchDashboardData', async (_, { rejectWithValue }) => {
  try {
    const token = getAuthToken();
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/dashboard`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'An error occurred');
  }
});

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.companies = action.payload.companies;
        state.loading = false;
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const selectDashboard = (state: RootState) => state.dashboard;

export default dashboardSlice.reducer;
