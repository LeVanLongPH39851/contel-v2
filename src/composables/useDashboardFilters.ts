import { inject, provide, ref, type InjectionKey, type Ref } from "vue";

interface DashboardFilterContext {
  appliedFilters: Ref<any>;
  setAppliedFilters: (filters: any) => void;
}

const DashboardFilterKey: InjectionKey<DashboardFilterContext> =
  Symbol("DashboardFilter");

export const provideDashboardFilters = () => {
  const appliedFilters = ref<any>(null);

  const setAppliedFilters = (filters: any) => {
    appliedFilters.value = filters;
  };

  const context: DashboardFilterContext = {
    appliedFilters,
    setAppliedFilters,
  };

  provide(DashboardFilterKey, context);

  return context;
};

export const useDashboardFilters = (): DashboardFilterContext => {
  const context = inject(DashboardFilterKey);

  if (!context) {
    throw new Error(
      "useDashboardFilters must be used within provideDashboardFilters",
    );
  }

  return context;
};
