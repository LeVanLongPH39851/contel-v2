import axiosClient from "./axiosClient";
import * as payloads from "./payloads";
import { buildPayloadWithFilters } from "./payloads/buildPayloadWithFilters";

const apiRoute = import.meta.env.VITE_API_ROUTE;

const postChart = async (
  basePayload: any,
  appliedFilters: any,
  disabledFilters: string[] = [],
) => {
  const finalPayload = appliedFilters
    ? buildPayloadWithFilters(
        basePayload,
        appliedFilters?.value,
        disabledFilters,
      )
    : basePayload;

  try {
    const userId = sessionStorage.getItem("user_id");

    const requestBody = {
      ...finalPayload,
      user_id: userId,
    };

    return await axiosClient.post(apiRoute, requestBody);
  } catch (error) {
    return { data: {} };
  }
};

const DISABLED_FILTERS = [
  "programFilters",
  "dateFilters",
  "programMultipleFilters",
  "channelMultipleFilters",
  "dateMultipleFilters",
];

export const chart1112 = (appliedFilters: any) =>
  postChart(payloads.chart1112, appliedFilters);

export const chart1113 = (appliedFilters: any) =>
  postChart(payloads.chart1113, appliedFilters);

export const chart1114 = (appliedFilters: any) =>
  postChart(payloads.chart1114, appliedFilters);

export const chart1115 = (appliedFilters: any) =>
  postChart(payloads.chart1115, appliedFilters);

export const chart1116 = (appliedFilters: any) =>
  postChart(payloads.chart1116, appliedFilters);

export const chart1117 = (appliedFilters: any) =>
  postChart(payloads.chart1117, appliedFilters);

export const chart1118 = (appliedFilters: any) =>
  postChart(payloads.chart1118, appliedFilters);

export const chart1120 = (appliedFilters: any) =>
  postChart(payloads.chart1120, appliedFilters);

export const chart1121 = (appliedFilters: any) =>
  postChart(payloads.chart1121, appliedFilters);

export const chart1125 = (appliedFilters: any) =>
  postChart(payloads.chart1125, appliedFilters);
