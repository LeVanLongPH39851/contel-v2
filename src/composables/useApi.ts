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

  // Track the latest request to ignore stale responses (race condition fix)
  let requestId = 0;

  const refetch = async () => {
    if (!enabled || shouldSkip) {
      return null;
    }

    // Increment to mark this as the latest request
    const currentId = ++requestId;

    loading.value = true;
    error.value = null;

    try {
      const res = await apiFn(...params);

      // Only apply result if this is still the latest request
      if (currentId !== requestId) return null;

      data.value = res?.data;

      return res?.data;
    } catch (err) {
      if (currentId !== requestId) return null;
      error.value = err;
      throw err;
    } finally {
      if (currentId === requestId) {
        loading.value = false;
      }
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
