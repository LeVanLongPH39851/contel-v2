import { ref, watch } from "vue";

interface UseApiOptions {
  enabled?: boolean;
  shouldSkip?: boolean;
}

export function useApi(
  apiFn: (...params: any[]) => Promise<any>,
  params: any[] = [],
  options: UseApiOptions = {},
) {
  const { enabled = true, shouldSkip = false } = options;

  const data = ref<any>(null);
  const loading = ref<boolean>(enabled);
  const error = ref<any>(null);

  const refetch = async () => {
    if (!enabled || shouldSkip) {
      return null;
    }

    loading.value = true;
    error.value = null;

    try {
      const res = await apiFn(...params);

      data.value = res?.data;

      return res?.data;
    } catch (err) {
      error.value = err;
      throw err;
    } finally {
      loading.value = false;
    }
  };

  watch(
    () => params,
    () => {
      if (!enabled || shouldSkip) return;

      refetch();
    },
    {
      immediate: true,
      deep: true,
    },
  );

  return {
    data,
    loading,
    error,
    refetch,
  };
}
