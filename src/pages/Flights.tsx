import { useEffect, useState } from "react";
import { getBookedFlights } from "../services/userService"
import { Flight } from "../models/flightModels";
import FlightInformation from "../components/FlightInformation";
import backIcon from "../assets/back-icon.svg"
import { useNavigate } from "react-router-dom";
const Flights = () => {
    const [flights,setFlights] = useState<Flight[]>([])
    const handleBookedFlights = () => {
        getBookedFlights().then((data) => {
            setFlights(data)
        }).catch(() => {
            alert("An error was encountered while retrieving information about booked flights")
        })
    }
    useEffect(() => {
        handleBookedFlights()
    }, [])
    useEffect(() => {
        console.log(flights);
        
    }, [flights])
    const navigate = useNavigate()
  return (
    <>
    
    <div className="w-1/2 ml-auto mr-auto mt-12">
    <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
        <img src={backIcon} width={30} alt="" />
        <span className="font-bold">Main</span>
    </div>
        {flights && flights.map((item,index) => (
            <FlightInformation flightDirection={item.flightDirection} route={item.route} prefixICAO={item.prefixICAO} key={item.flightDirection + index} scheduleDate={item.scheduleDate}
            scheduleTime={item.scheduleTime} estimatedLandingTime={item.estimatedLandingTime}/>
        ))}
    </div>
    </>
  )
}

export default Flights