import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { fetchDashboardData, selectDashboard } from '../state/dashboardState';

export const useDashboard = () => {
  const dispatch = useAppDispatch();
  const dashboard = useAppSelector(selectDashboard);

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, [dispatch]);

  return dashboard;
};
