interface SocialFacilitiesProps {
    image: string;
    icon: string;
    title: string
}
const SocialFacilities = ({ image, icon, title }: SocialFacilitiesProps) => {
    return (
        <div className='m-3 relative'>
            <img src={image} alt="" className='rounded-2xl' />
            <img src={icon} width={30} height={30} alt="" className='absolute bottom-16 left-5' />
            <span className='absolute bottom-4 text-white font-semibold text-3xl left-3'>{title}</span>
        </div>
    )
}

export default SocialFacilities