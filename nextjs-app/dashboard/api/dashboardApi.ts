// api/dashboardApi.ts
import axios from 'axios';

export const fetchDashboardData = async () => {
  const response = await axios.get('/api/dashboard');
  return response.data;
};
