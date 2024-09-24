import axios from "axios";
import { Flight } from "../models/flightModels";
const baseURL = import.meta.env.VITE_USER_BACKEND_BASE_URL;
export const loginUser = async (username: string, password: string): Promise<void> => {
    try {
      const response = await axios.post(`${baseURL}/api/auth/login`, { username, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  export const addFlight = async (flightDirection:string, prefixICAO:string, scheduleTime:string, route:object): Promise<void> => { // uçuş kaydı oluşturulan api çağrısı
    try {
      await axios.post(`${baseURL}/api/user/flights`, {flightDirection,prefixICAO,scheduleTime,route},{
        headers: {
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        }
      });
    } catch (error) {
      console.error('Add flight error:', error);
      throw error;
    }
  };

  export const register = async(username:string, password:string, email:string, firstName:string, lastName:string) => { 
    try{
        await axios.post(`${baseURL}/api/auth/register`, {username, password, email, firstName, lastName});
    }catch(err){
        console.error(err)
        throw err;
    }
  }

  export const getBookedFlights = async(): Promise<Flight[]> => { // kayıtlı uçuş bilgilerinin çekildiği fonksiyon
    try {
        const response = await axios.get(`${baseURL}/api/user/flights`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
        return response.data.flights;
      } catch (error) {
        console.error('Error fetching flights:', error);
        throw error;
      }
  }