import axiosInstance from "../api/axiosInstance";
import { DestinationsDetail, FilterModel, Flight } from "../models/flightModels";

const buildFlightUrl = (filters: FilterModel) => {
  const params = new URLSearchParams();
  params.append("flightDirection", "D"); // uçuş yönü için atanan filtre değeri default olarak departure tercih ettim.
  params.append("includedelays", "false"); // gecikmeler varsa dahil edilmemesi için tanımlanan filtre
  params.append("page", filters.page.toString()); // sayfa değeri
  params.append("sort", "+scheduleTime");
  if (filters.fromDateTime) params.append("fromDateTime", filters.fromDateTime); // tarih aralığı başlangıcı
  if (filters.toDateTime) params.append("toDateTime", filters.toDateTime); // tarih aralığı bitişi

  return `/flights?${params.toString()}`; // tüm filtrelerin toplu halde geri döndürülmesi
};

export const getFlightInfo = async (
  filters: FilterModel
): Promise<Flight[]> => {
  try {
    const url = buildFlightUrl(filters);
    const response = await axiosInstance.get(url); // burda header değerlerini her bir istekte tek tek atamak yerine instance değeri oluşturdum.
    return response.data.flights;
  } catch (error) {
    console.error('API Call Error:', error);
    throw error;
  }
};

export const getDestinationDetail = async(iataCode: string): Promise<DestinationsDetail> => {
  try{
    const response = await axiosInstance.get("/destinations/"+iataCode); // iata koduna göre varış yerinin detayını veren api çağrısı 
    return response.data;
  }catch(err){
    console.error(err)
    throw err;
  }
}