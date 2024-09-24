interface FilterContainerProps {
    title: string;
    options: string[];
}
const FilterContainer = ({title,options}: FilterContainerProps) => {
    return (
        <div className='mt-3'>
            <span className='mt-3 font-bold text-[15px]'>{title}</span>
            {options && options.map((item,index) => (
                <div key={item + "-"+ index} className="m-2">
                <label className="inline-flex items-center">
                    <input
                        type="radio"
                        name="option"
                        radioGroup={title}
                        className="appearance-none h-2 w-2 border border-[#E7DCFF] rounded-full checked:bg-[#4B0097] checked:border-transparent focus:outline-none"
                    />
                    <span className="ml-2">{item}</span>
                    </label>
                </div>    
            ))}
        </div>
    )
}

export default FilterContainer