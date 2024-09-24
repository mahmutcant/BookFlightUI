import planeDepartureBlack from "../assets/plane-departure-black.svg";
import planeArrivalBlack from "../assets/plane-arrival-black.svg";
import purplePlaneIcon from "../assets/plane-icon-purple.svg";
import { DestinationsDetail, Flight } from "../models/flightModels";
import { useEffect, useState } from "react";
import { getDestinationDetail } from "../services/flightService";
import { timeFormatter } from "../utils/dateFormatter";
import { addFlight } from "../services/userService";

const FlightInformation = ({ flightDirection, prefixICAO, scheduleTime, route,scheduleDate }: Flight) => {
    const [routeDetail, setRouteDetail] = useState<DestinationsDetail>();
    const [arrivalDetail, setArrivalDetail] = useState<DestinationsDetail>();
    useEffect(() => {
        if (route)
            getDestinationDetail(route.destinations[0]).then((data) => {
                setRouteDetail(data)
            }).catch((err) => {
                console.log(err);
            })
    }, [route])
    useEffect(() => {
        if (prefixICAO)
            getDestinationDetail(prefixICAO).then((data) => {
                setArrivalDetail(data)
            }).catch((err) => {
                console.log(err);
            })
    }, [prefixICAO])

    const handleSaveFlight = () => {
        const flightDate = new Date(`${scheduleDate}T00:00:00`);
        const now = new Date();
      
        now.setHours(0, 0, 0, 0);
        
        if (flightDate < now) {
          alert("The scheduled time is in the past. Please choose a future date."); // geçmiş tarihli kayıt için uyarı
          return;
        }
      
        addFlight(flightDirection, prefixICAO, scheduleTime, route)
          .then(() => {
            alert("Flight booked successfully");
          })
          .catch(() => {
            alert("An error was encountered while booking the flight");
          });
      };
    return (
        <>
            <div className='mt-3 bg-white pt-5 pl-5'>
                <div className="flex justify-between mx-5">
                    <div className='mb-4'><span className='font-bold text-[14px]'>{routeDetail?.publicName.english}</span></div>
                    <div className='mb-4'><span className='font-bold text-[14px]'>{arrivalDetail?.publicName.english}</span></div>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <div className='flex flex-col'>
                            <div className='flex gap-3'>
                                <img src={planeDepartureBlack} width={20} height={20} alt="" />
                                <span className='opacity-90 text-[14px]'>Departure</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='font-bold'>{timeFormatter(scheduleTime)}</span>
                                <span>Airport: {flightDirection === "A" ? prefixICAO : route.destinations[0]}</span>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 h-1 w-1/12 border-b border-black'></div>
                    <div>
                        {/* <div className='flex justify-center'><img src={exampleLogo} alt="" width={60} /></div> */}
                        <div className='flex justify-center flex-col items-center mt-2'>
                            <img src={purplePlaneIcon} width={20} height={20} alt="" />
                            {/* <div>2h 25m (Nonstop)</div> */}
                        </div>
                    </div>
                    <div className='mt-4 h-1 w-1/12 border-b border-black'></div>
                    <div>
                        <div className='flex flex-col mr-5'>
                            <div className='flex gap-3'>
                                <img src={planeArrivalBlack} width={20} height={20} alt="" />
                                <span className='opacity-90 text-[14px]'>Arrival</span>
                            </div>
                            <div className='flex flex-col'>
                                <span>Airport: {flightDirection === "A" ? route.destinations[0] : prefixICAO}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex mt-3 justify-between'>
                    <div className='flex flex-col'>
                        {/* <span className='text-[#4B0097] font-bold'>Price: $200</span> */}
                        <span className='text-sm'>Round Trip</span>
                    </div>
                    <button onClick={handleSaveFlight} className='py-6 px-10 bg-[#4B0097] text-white rounded-tl-lg rounded-br-lg font-bold text-sm'>
                        Book Flight
                    </button>
                </div>
            </div>
        </>
    )
}

export default FlightInformation