import { Link } from "react-router-dom"
import routeImage from "../assets/route-image.svg"
import CustomInput from "../components/CustomInput"
import lockIcon from "../assets/lock-icon.svg"
import mailIcon from "../assets/mail-icon.svg"
import tajMahal from "../assets/taj-mahal-icon.svg"
import pisaIcon from "../assets/pisa-icon.svg";
const Login = () => {
    return (
        <>
            <div className="w-full flex justify-center h-screen items-center">
                <div className="bg-white w-1/4 flex flex-col items-center justify-center relative rounded-2xl shadow-xl">
                    <img src={routeImage} alt="" className="absolute top-0 right-3" />
                    <h1 className="font-bold text-[48px] text-[#4A0096]">Welcome</h1>
                    <span className="opacity-50">Login With Email</span>
                    <div className="w-full">
                        <CustomInput fieldName="Email" icon={mailIcon}/>
                        <CustomInput fieldName="Password" icon={lockIcon}/>
                    </div>
                    <Link to="#" className="flex justify-end w-4/5"><span className="opacity-60 text-[12px] font-bold">Forgot your password ?</span></Link>
                    <button className="bg-[#4A0096] py-3 px-8 m-5 rounded-lg text-white text-[14px]">LOGIN</button>
                    
                <div className="flex justify-between w-full">
                    <div className="mt-6"><img src={tajMahal} alt="" /></div>
                    <img src={pisaIcon} alt="" />
                </div>
                </div>
                <div>
                </div>
            </div>
        </>
    )
}

export default Login