import { computed, ref } from "vue";
import * as useCallApi from "./useCallApi";

const HOOKS = [{ hook: useCallApi.useChart1877, dataKey: "Chart1877" }];

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

  return {
    ...Object.fromEntries(
      HOOKS.map(({ dataKey }) => [
        dataKey,
        computed(() => data.value[dataKey]),
      ]),
    ),
    data,
    isLoading,
    hasError,
  };
};
