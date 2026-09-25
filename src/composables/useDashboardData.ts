import { computed, ref, watch } from "vue";
import * as useCallApi from "./useCallApi";

const HOOKS = [
  { hook: useCallApi.useChart1112, dataKey: "Chart1112" },
  { hook: useCallApi.useChart1113, dataKey: "Chart1113" },
  { hook: useCallApi.useChart1114, dataKey: "Chart1114" },
  { hook: useCallApi.useChart1115, dataKey: "Chart1115" },
  { hook: useCallApi.useChart1116, dataKey: "Chart1116" },
  { hook: useCallApi.useChart1117, dataKey: "Chart1117" },
  { hook: useCallApi.useChart1118, dataKey: "Chart1118" },
  { hook: useCallApi.useChart1120, dataKey: "Chart1120" },
  { hook: useCallApi.useChart1121, dataKey: "Chart1121" },
  { hook: useCallApi.useChart1125, dataKey: "Chart1125" },
];

export const useDashboardData = () => {
  const hookResults = HOOKS.map(({ hook }) => hook());

  const hasLogged = ref(false);

  const data = computed(() => {
    const result: Record<string, any> = {};

    HOOKS.forEach(({ dataKey }, index) => {
      result[dataKey] = hookResults[index].data.value;
    });

    return result;
  });

  const isLoading = computed(() => {
    const result: Record<string, boolean> = {};

    HOOKS.forEach(({ dataKey }, index) => {
      result[dataKey] = hookResults[index].loading.value;
    });

    return result;
  });

  const hasError = computed(() => {
    const result: Record<string, any> = {};

    HOOKS.forEach(({ dataKey }, index) => {
      result[dataKey] = hookResults[index].error.value;
    });

    return result;
  });

  const anyLoading = computed(() =>
    Object.values(isLoading.value).some(Boolean),
  );

  const allDataLoaded = computed(() =>
    Object.values(data.value).every((value) => value != null),
  );

  // Tương đương useEffect của React
  const checkLoaded = () => {
    if (!hasLogged.value && allDataLoaded.value && !anyLoading.value) {
      Object.entries(data.value).forEach(([key, value]) => {
        console.log(`${key}:`, value);
      });

      hasLogged.value = true;
    }
  };

  watch([data, isLoading], checkLoaded, { deep: true });

  return {
    ...Object.fromEntries(
      HOOKS.map(({ dataKey }) => [
        dataKey,
        computed(() => data.value[dataKey]),
      ]),
    ),
    isLoading,
    hasError,
  };
};
