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
import FilterContainer from '../components/FilterContainer';
import { getFlightInfo } from '../services/flightService';

const Main = () => {
  const filters = {
    page: 0,
    fromDateTime: "2024-09-25T00:00:00",
    toDateTime: "2024-09-26T00:00:00"
  };

  const getFlights = async() => {
    getFlightInfo(filters).then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    })
    
  }
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
            <NavItems icon={userIcon} title='Log in' isUserInfo={true} to='/login' />
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
                  <BookFlightInputs icon={calendarIcon} left={true} key="departureInput"/>
                  <BookFlightInputs icon={calendarIcon} left={false} key="arrivalInput" />
                </div>
              </div>
              <button className='rounded-lg bg-[#4B0097] text-white font-bold text-[14px] p-2 mx-4 my-2' onClick={() => getFlights()}>Show flights</button>
            </div>
            <div className='flex'>
              <div className='scrollbar overflow-y-auto max-h-[600px] w-3/4'>
                <FlightInformation />
                <FlightInformation />
                <FlightInformation />
              </div>
              <div className='p-3 flex flex-col'>
                <span className='font-bold'>Sort by:</span>
                <select id="" className='py-1 pl-3 pr-28 mt-3 rounded-lg'>
                  <option value="Lowest Price">Lowest Price</option>
                  <option value="Highest Price">Highest Price</option>
                </select>
                <FilterContainer options={["5:00 AM - 11:59 AM","12:00 PM - 5:59 PM"]} title='Arrival Time'/>
                <FilterContainer options={["Nonstop","1 Stop","2+ Stops"]} title='Stops'/>
                <FilterContainer options={["Alitalia","Lufthansa","Air France","Brussels Airlines","Air Italy","Siberia"]} title='Airlines Included'/>
              </div>
            </div>
          </div>
          <div className='my-3 max-h-[100px] w-2/5'>
            <SocialFacilities icon={carIcon} image={carRental} title='CAR RENTAL' />
            <SocialFacilities icon={hotelIcon} image={hotelImage} title='HOTELS' />
            <SocialFacilities icon={vacationUmbrella} image={vacationBag} title='TRAVEL PACKAGES' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main