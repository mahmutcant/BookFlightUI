import planeDepartureBlack from "../assets/plane-departure-black.svg";
import exampleLogo from "../assets/example-logo.png"
import purplePlaneIcon from "../assets/plane-icon-purple.svg";
import { Link } from 'react-router-dom';
const FlightInformation = () => {
    return (
        <>
        <div className='mt-3 bg-white pt-5 pl-5'>
            <div className='mb-4'><span className='font-bold text-[14px]'>Milano - Madrid</span></div>
            <div className='flex justify-between'>
                <div>
                    <div className='flex flex-col'>
                        <div className='flex gap-3'>
                            <img src={planeDepartureBlack} width={20} height={20} alt="" />
                            <span className='opacity-90 text-[14px]'>Departure</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='font-bold'>9:55 AM</span>
                            <span>Airport: MXP</span>
                        </div>
                    </div>
                </div>
                <div className='mt-4 h-1 w-1/12 border-b border-black'></div>
                <div>
                    <div className='flex justify-center'><img src={exampleLogo} alt="" width={60} /></div>
                    <div className='flex justify-center flex-col items-center mt-2'>
                        <img src={purplePlaneIcon} width={20} height={20} alt="" />
                        <div>2h 25m (Nonstop)</div>
                    </div>
                </div>
                <div className='mt-4 h-1 w-1/12 border-b border-black'></div>
                <div>
                    <div className='flex flex-col mr-5'>
                        <div className='flex gap-3'>
                            <img src={planeDepartureBlack} width={20} height={20} alt="" />
                            <span className='opacity-90 text-[14px]'>Departure</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='font-bold'>9:55 AM</span>
                            <span>Airport: MXP</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex mt-3 justify-between'>
                <div className='flex flex-col'>
                    <span className='text-[#4B0097] font-bold'>Price: $200</span>
                    <span className='text-sm'>Round Trip</span>
                </div>
                <button className='py-6 px-10 bg-[#4B0097] text-white rounded-tl-lg rounded-br-lg font-bold text-sm'>
                    Book Flight
                </button>
            </div>
        </div>
        <div className='py-3 px-6 bg-[#E7DCFF] w-fit rounded-b-lg'><Link className='underline text-[#4B0097]' to="#">Check the details</Link></div>
        </>
    )
}

export default FlightInformation