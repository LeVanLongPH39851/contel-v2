import { useApi } from "./useApi";
import * as getChart from "../api/dashboardApi";
import { useDashboardFilters } from "./useDashboardFilters";

const createChartComposable = (apiFn: (...args: any[]) => any) => {
  return () => {
    const { appliedFilters } = useDashboardFilters();

    return useApi(apiFn, [appliedFilters]);
  };
};

export const useChart1112 = createChartComposable(getChart.chart1112);
export const useChart1113 = createChartComposable(getChart.chart1113);
export const useChart1114 = createChartComposable(getChart.chart1114);
export const useChart1115 = createChartComposable(getChart.chart1115);
export const useChart1116 = createChartComposable(getChart.chart1116);
export const useChart1117 = createChartComposable(getChart.chart1117);
export const useChart1118 = createChartComposable(getChart.chart1118);
export const useChart1120 = createChartComposable(getChart.chart1120);
export const useChart1121 = createChartComposable(getChart.chart1121);
