import axiosInstance from "../api/axiosInstance";
import { FilterModel, Flight } from "../models/flightModels";

const buildFlightUrl = (filters: FilterModel) => {
  const params = new URLSearchParams();
  params.append("flightDirection", "A");
  params.append("includedelays", "false");
  params.append("page", filters.page.toString());
  params.append("sort", "+scheduleTime");
  if (filters.fromDateTime) params.append("fromDateTime", filters.fromDateTime);
  if (filters.toDateTime) params.append("toDateTime", filters.toDateTime);

  return `/flights?${params.toString()}`;
};

export const getFlightInfo = async (
  filters: FilterModel
): Promise<Flight[]> => {
  try {
    const url = buildFlightUrl(filters);
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.error('API isteğinde hata:', error);
    throw error;
  }
};
