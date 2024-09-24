import { Link } from "react-router-dom";

interface NavItemProps {
    icon: string;
    title: string;
    isUserInfo: boolean;
    to: string
}
const NavItems = ({ icon, title,isUserInfo,to }: NavItemProps) => { // Navbarda bulunan elementlerin tanımlandığı component
    return (
        <Link className='flex gap-2 items-center cursor-pointer' to={to}>
            <img src={icon} width={isUserInfo ? 30 : 20} height={isUserInfo ? 30 : 20} alt="" />
            <span className={`text-[14px] ${isUserInfo && "text-gray-500"}`}>{title}</span>
        </Link>
    )
}

export default NavItems