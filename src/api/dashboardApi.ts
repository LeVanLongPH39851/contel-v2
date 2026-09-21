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
    ? buildPayloadWithFilters(basePayload, appliedFilters, disabledFilters)
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

export const chart1877 = (appliedFilters: any) =>
  postChart(payloads.chart1877, appliedFilters, [
    "programFilters",
    "dateFilters",
    "programMultipleFilters",
    "channelMultipleFilters",
    "dateMultipleFilters",
  ]);
