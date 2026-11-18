import * as sampleData from "./sample-data";
import * as registrationsApi from "./registrationsApi";

const useSampleData = import.meta.env.VITE_USE_SAMPLE_DATA === "true";

export const getRegistrations = useSampleData
  ? sampleData.getRegistrations
  : registrationsApi.getRegistrations;

export const getSummary = useSampleData
  ? sampleData.getSummary
  : registrationsApi.getSummary;