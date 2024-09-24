interface BookFlightInputProps {
    left: boolean;
    icon: string;
}
const BookFlightInputs = ({left,icon}: BookFlightInputProps) => {
    return (
        <div className='relative flex items-center'>
            <img src={icon} width={16} height={16} alt="" className='absolute m-3' />
            <input className={`${left ? "rounded-l-full" : "rounded-r-full"} border-[2px] border-[#E1E1E1] p-1 px-7`} type={"date"}/>
        </div>
    )
}

export default BookFlightInputs