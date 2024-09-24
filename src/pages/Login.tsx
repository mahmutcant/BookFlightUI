import { Link, useNavigate } from "react-router-dom"
import routeImage from "../assets/route-image.svg"
import CustomInput from "../components/CustomInput"
import lockIcon from "../assets/lock-icon.svg"
import mailIcon from "../assets/mail-icon.svg"
import tajMahal from "../assets/taj-mahal-icon.svg"
import pisaIcon from "../assets/pisa-icon.svg";
import { loginUser } from "../services/userService"
import { useState } from "react"
const Login = () => { // giriş sayfası
    const navigate = useNavigate()
    const [mail,setMail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const handleLogin = () => {
        loginUser(mail,password).then(() => {
            navigate("/")
        })
    }
    return (
        <>
            <div className="w-full flex justify-center h-screen items-center shadow-lg">
                <div className="bg-white w-1/4 flex flex-col items-center justify-center relative rounded-2xl shadow-xl">
                    <img src={routeImage} alt="" className="absolute top-0 right-3" />
                    <h1 className="font-bold text-[48px] text-[#4A0096]">Welcome</h1>
                    <span className="opacity-50">Login With Email</span>
                    <div className="w-full">
                        <CustomInput fieldName="Email" icon={mailIcon} setInput={setMail}/>
                        <CustomInput fieldName="Password" icon={lockIcon} setInput={setPassword}/>
                    </div>
                    <Link to="#" className="flex justify-end w-4/5"><span className="opacity-60 text-[12px] font-bold">Forgot your password ?</span></Link>
                    <button className="bg-[#4A0096] py-3 px-8 m-5 rounded-lg text-white text-[14px]" onClick={() => handleLogin()}>LOGIN</button>
                    <Link className="mb-3 opacity-60 font-bold text-[13px]" to="/register">Doesn't have an account ?</Link>
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