import '../App.css'
import planeIcon from "../assets/plane-icon.svg";
import planeIconBlack from "../assets/plane-icon-black.svg";
import tagIcon from "../assets/tag-icon.svg";
import earthIcon from "../assets/earth-icon.svg";
import calendarIcon from "../assets/calendar-icon.svg";
import NavItems from '../components/NavItems';
import carRental from "../assets/car-rental-image.jpg";
import hotelImage from "../assets/hotel-image.jpg";
import hotelIcon from "../assets/hotel-icon.svg";
import vacationBag from "../assets/vacation-suitcase-image.jpeg";
import vacationUmbrella from "../assets/umbrella-beach-icon.svg";
import carIcon from "../assets/car-icon.svg"
import BookFlightInputs from '../components/BookFlightInputs';
import SocialFacilities from '../components/SocialFacilities';
import userIcon from "../assets/user-icon.svg";
import FlightInformation from '../components/FlightInformation';
import purplePlaneIcon from "../assets/plane-icon-purple.svg";
import logoutIcon from "../assets/logout-icon.svg";
import { getFlightInfo } from '../services/flightService';
import { useEffect, useState } from 'react';
import { FilterModel, Flight } from '../models/flightModels';
import { formatDate } from '../utils/dateFormatter';
import { getTodayAndTomorrow } from '../utils/dateFormatter';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate()
  const [flightData, setFlightData] = useState<Flight[]>([]);
  const [filters, setFilters] = useState<FilterModel>({
    page: 0,
    ...getTodayAndTomorrow()
  })

  const changePage = (amount: number) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      page: prevFilters.page + amount,
    }));
  };

  const getFlights = async () => {
    getFlightInfo(filters).then((data) => {
      setFlightData(data)
    }).catch((err) => {
      console.log(err);
    })
  }
  useEffect(() => {
    getFlights()
  }, [filters.page])

  const updateDateRange = (newFromDate: string, newToDate: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      fromDateTime: formatDate(newFromDate),
      toDateTime: formatDate(newToDate),
    }));
  };
  return (
    <div className='w-full flex justify-center h-screen items-center'>
      <div className='w-3/4 bg-[#F6F4F8] rounded-xl flex flex-col'>
        <div className='flex items-center justify-between w-full'>
          <div className='flex items-center'>
            <div className='rounded-full bg-[#4A0096] w-[30px] h-[30px] flex justify-center m-3'>
              <img src={planeIcon} width={20} height={20} alt="" />
            </div>
            <span className='font-bold text-[18px]'>PLANE SCAPE</span>
          </div>
          <div className='flex gap-6 mx-4 bg-[#F6F4F8]'>
            <NavItems icon={tagIcon} title='Deals' isUserInfo={false} to='#' />
            <NavItems icon={earthIcon} title='Discover' isUserInfo={false} to='#' />
            <NavItems icon={localStorage.getItem("token") ? purplePlaneIcon : userIcon} title={localStorage.getItem("token") ? "Flights" : "Log in"} isUserInfo={true} to={localStorage.getItem("token") ? "/flights":'/login'} />
            {localStorage.getItem("token") && <button onClick={() => {
              localStorage.clear();
              navigate("/")
            }}>
                <img src={logoutIcon} width={30} alt="" />
            </button>}
          </div>
        </div>
        <div className='flex flex-row'>
          <div className="p-5 w-full">
            <div className='bg-white w-full rounded-xl'>
              <div className='flex justify-between'>
                <div className='flex m-3 gap-3 items-center'>
                  <img src={planeIconBlack} width={25} height={25} alt="" />
                  <span className='font-bold'>BOOK YOUR FLIGHT</span>
                </div>
              </div>
              <div className='flex'>
                <div className='m-3 flex'>
                  <BookFlightInputs icon={calendarIcon} left={true} key="departureInput" setDateTime={(newDate) => updateDateRange(newDate, filters.toDateTime || "")} />
                  <BookFlightInputs icon={calendarIcon} left={false} key="arrivalInput" setDateTime={(newDate) => updateDateRange(filters.fromDateTime || "", newDate)} />
                </div>
              </div>
              <button className='rounded-lg bg-[#4B0097] text-white font-bold text-[14px] p-2 mx-4 my-2' onClick={() => getFlights()}>Show flights</button>
            </div>
            <div className='flex'>
              <div className='scrollbar overflow-y-auto max-h-[600px] w-full mt-3'>

                {flightData && flightData.map((item, index) => (
                  <FlightInformation key={index} flightDirection={item.flightDirection} route={item.route} prefixICAO={item.prefixICAO} scheduleDate={item.scheduleDate} scheduleTime={item.scheduleTime} />
                ))}
              </div>
            </div>
          </div>
          <div className='my-3 max-h-[100px] w-2/5'>
            <SocialFacilities icon={carIcon} image={carRental} title='CAR RENTAL' />
            <SocialFacilities icon={hotelIcon} image={hotelImage} title='HOTELS' />
            <SocialFacilities icon={vacationUmbrella} image={vacationBag} title='TRAVEL PACKAGES' />
          </div>
        </div>
        <div className="flex justify-center w-3/4">
        <button onClick={() => changePage(-1)} disabled={filters.page === 0} className="mb-4 flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-[#4A0096] disabled:bg-gray-800 border border-gray-300 rounded-lg hover:bg-[#7c68a5]">
          Previous
        </button>

        <button onClick={() => changePage(1)} className="mb-4 flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-white bg-[#4A0096] border border-gray-300 rounded-lg hover:bg-[#7c68a5]">
          Next
        </button>
      </div>
      </div>
      
    </div>
  )
}

export default Main