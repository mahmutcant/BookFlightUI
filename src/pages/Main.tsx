import '../App.css'
import planeIcon from "../assets/plane-icon.svg";
import planeIconBlack from "../assets/plane-icon-black.svg";
import tagIcon from "../assets/tag-icon.svg";
import earthIcon from "../assets/earth-icon.svg";
import planeDeparture from "../assets/plane-departure-icon.svg";
import planeArrival from "../assets/plane-arrival.svg";
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
const Main = () => {
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
              <NavItems icon={tagIcon} title='Deals' isUserInfo={false} to='#'/>
              <NavItems icon={earthIcon} title='Discover' isUserInfo={false} to='#'/>
              <NavItems icon={userIcon} title='Log in' isUserInfo={true} to='/login'/>
            </div>
          </div>
          <div className='flex flex-row'>
          <div className='bg-white w-9/12 rounded-xl m-5'>
            <div className=' flex justify-between'>
              <div className='flex m-3 gap-3 items-center'>
                <img src={planeIconBlack} width={25} height={25} alt="" />
                <span className='font-bold'>BOOK YOUR FLIGHT</span>
              </div>
              <div className='flex my-3 mx-8'>
                <button className='bg-[#4B0097] p-2 rounded-l-full text-white'>Round trip</button>
                <button className='bg-[#E6E0EB] p-2 rounded-r-full text-[#4B0097]'>One Way</button>
              </div>
            </div>
            <div className='flex'>
              <div className='m-3 flex'>
                <BookFlightInputs icon={planeDeparture} left={true} key="departureInput" />
                <BookFlightInputs icon={planeArrival} left={false} key="arrivalInput" />
              </div>
              <div className='m-3 flex'>
                <BookFlightInputs icon={calendarIcon} left={true} key="departureInput" isCalendar />
                <BookFlightInputs icon={calendarIcon} left={false} key="arrivalInput" isCalendar />
              </div>
            </div>
            <button className='rounded-lg bg-[#4B0097] text-white font-bold text-[14px] p-2 mx-4 my-2'>Show flights</button>
          </div>
            <div className='my-3'>
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