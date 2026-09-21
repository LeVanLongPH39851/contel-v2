import { useApi } from "./useApi";
import * as getChart from "../api/dashboardApi";
import { useDashboardFilters } from "./useDashboardFilters";

const createChartComposable = (apiFn: (...args: any[]) => any) => {
  return () => {
    const { appliedFilters } = useDashboardFilters();

    return useApi(apiFn, [appliedFilters]);
  };
};

export const useChart1877 = createChartComposable(getChart.chart1877);
