
interface NavItemProps {
    icon: string;
    title: string;
    isUserInfo: boolean
}
const NavItems = ({ icon, title,isUserInfo }: NavItemProps) => {
    return (
        <div className='flex gap-2 items-center'>
            <img src={icon} width={isUserInfo ? 30 : 20} height={isUserInfo ? 30 : 20} alt="" />
            <span className={`text-[14px] ${isUserInfo && "text-gray-500"}`}>{title}</span>
        </div>
    )
}

export default NavItems