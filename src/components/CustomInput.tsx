
interface CustomInputProps {
    fieldName: string;
    icon?: string;
    setInput: (input:string) => void
}
const CustomInput = ({fieldName,icon,setInput}: CustomInputProps) => {
    return (
        <div className="relative m-8" data-twe-input-wrapper-init>
            {icon && <img src={icon} alt="" className="absolute top-3 left-2"/>}
            <input
                type={fieldName}
                className="peer block min-h-[auto] w-full rounded border border-[#4A0096] bg-transparent px-10 py-3 leading-[1.6] outline-none transition-all duration-200 ease-linear"
                id="emaiInputText"
                placeholder={fieldName}
                onChange={(e) => setInput(e.target.value)}
            />
            <label
                htmlFor="emaiInputText"
                className="pointer-events-none absolute left-3 -translate-y-[0.9rem] scale-[0.8] top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] bg-white px-1 text-[#4A0096] transition-all duration-200 ease-out"
                style={{ zIndex: 1 }}
            >
                {fieldName}
            </label>
        </div>
    )
}

export default CustomInput