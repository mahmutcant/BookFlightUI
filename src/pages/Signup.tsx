import CustomInput from '../components/CustomInput'
import { Link, useNavigate } from 'react-router-dom'
import lockIcon from "../assets/lock-icon.svg"
import mailIcon from "../assets/mail-icon.svg"
import tajMahal from "../assets/taj-mahal-icon.svg"
import pisaIcon from "../assets/pisa-icon.svg";
import routeImage from "../assets/route-image.svg"
import { useState } from 'react'
import { register } from '../services/userService'

const Signup = () => { // kayıt olma sayfası
    const [username,setUsername] = useState<string>(""); 
    const [password,setPassword] = useState<string>("");
    const [mail,setMail] = useState<string>("");
    const [firstName,setFirstName] = useState<string>("");
    const [lastName,setLastName] = useState<string>("");
    const navigate = useNavigate()
    const handleRegister = () => {
        register(username,password,mail,firstName,lastName).then(() => {
            navigate("/login")
        })
    }
    return (
        <>
            <div className="w-full flex justify-center h-screen items-center shadow-2xl">
                <div className="bg-white w-1/4 flex flex-col items-center justify-center relative rounded-2xl">
                    <img src={routeImage} alt="" className="absolute top-0 right-3" />
                    <h1 className="font-bold text-[48px] text-[#4A0096]">Welcome</h1>
                    <span className="opacity-50">Login With Email</span>
                    <div className="w-full">
                        <CustomInput fieldName="Username" setInput={setUsername}/>
                        <CustomInput fieldName="Password" icon={lockIcon} setInput={setPassword}/>
                        <CustomInput fieldName="Email" icon={mailIcon} setInput={setMail}/>
                        <CustomInput fieldName="Firstname" setInput={setFirstName}/>
                        <CustomInput fieldName="Lastname" setInput={setLastName}/>
                    </div>
                    <Link to="#" className="flex justify-end w-4/5"><span className="opacity-60 text-[12px] font-bold">Forgot your password ?</span></Link>
                    <button onClick={handleRegister} className="bg-[#4A0096] py-3 px-8 m-5 rounded-lg text-white text-[14px]">REGISTER</button>
                    <Link to="/login" className='mb-3 opacity-60 font-bold text-[13px]'>Already have an account ?</Link>
                    <div className="flex justify-between w-full">
                        <div className="mt-6"><img src={tajMahal} alt="" /></div>
                        <img src={pisaIcon} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup