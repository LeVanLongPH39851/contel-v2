export const filterProgram = {
  url: `${import.meta.env.VITE_API_DOMAIN}/api/v1/chart/data`,
  payload: {
    datasource: {
      id: 321,
      type: "table",
    },
    force: false,
    form_data: {
      enableEmptyFilter: false,
      defaultToFirstItem: false,
      multiSelect: true,
      searchAllOptions: false,
      inverseSelection: false,
      datasource: "321__table",
      groupby: ["program_name"],
      adhoc_filters: [],
      extra_filters: [],
      extra_form_data: {
        filters: [
          {
            col: "channel_name_tvd",
            op: "IN",
            val: ["VTV1"],
          },
        ],
      },
      metrics: ["count"],
      row_limit: 10000,
      showSearch: true,
      defaultValue: ["THỜI SỰ 19H"],
      url_params: {
        native_filters_key:
          "5HxWYPLvKq9NI6vSmPVeTk1Gt8L2AqpDlu6E97RY0Ou59PZfFYiZcy-GoRPFs4Kv",
      },
      inView: true,
      viz_type: "filter_select",
      type: "NATIVE_FILTER",
      dashboardId: 74,
      native_filter_id: "NATIVE_FILTER-yPgEekbJRt0iYjD3Ex4es",
      force: false,
      result_format: "json",
      result_type: "full",
    },
    queries: [
      {
        filters: [
          {
            col: "channel_name_tvd",
            op: "IN",
            val: ["VTV1"],
          },
        ],
        extras: {
          having: "",
          where: "",
        },
        applied_time_extras: {},
        columns: ["program_name"],
        metrics: [],
        orderby: [["program_name", true]],
        annotation_layers: [],
        row_limit: 1000,
        series_limit: 0,
        order_desc: true,
        url_params: {
          native_filters_key:
            "5HxWYPLvKq9NI6vSmPVeTk1Gt8L2AqpDlu6E97RY0Ou59PZfFYiZcy-GoRPFs4Kv",
        },
        custom_params: {},
        custom_form_data: {},
      },
    ],
    result_format: "json",
    result_type: "full",
  },
};
