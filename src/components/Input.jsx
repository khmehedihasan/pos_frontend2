
function Input1({onChange, type, name, placeholder, value, lavel, id}){
    return(
        <div className=" w-full">
            <label htmlFor={id} className="block cursor-pointer mt-2 mb-1 text-gray-300">{lavel}</label>
            <input onChange={onChange} type={type} name={name} placeholder={placeholder} value={value} id={id} className=" w-full outline-none focus:bg-cyan-100 pl-2 py-1 rounded-sm text-gray-600 required:border-red-500" />
        </div>
    )
}

function Select({onChange, value, name, lavel, id, children, disable}){

    return(
        <div className=" w-full">
            <label htmlFor={id} className="block cursor-pointer mt-2 mb-1 text-gray-300">{lavel}</label>

            <select onChange={onChange} name={name} value={value} id={id} disabled={disable} className=" w-full outline-none focus:bg-cyan-100 pl-2 py-1 rounded-sm text-gray-600 required:border-red-500">
                    {children}         
            </select>

        </div>
    )
}


function Option({value, children}){
    return(
        <option value={value}>{children}</option>
    )
}

function Textarea({onChange, name, value, placeholder, lavel, id}){

    return(
        <>
            <label htmlFor={id} className="block cursor-pointer mt-2 mb-1 text-gray-300 ">{lavel}</label>
            <textarea className=" w-full outline-none focus:bg-cyan-100 pl-2 rounded-sm text-gray-600 required:border-red-500" onChange={onChange} id={id} name={name} value={value} placeholder={placeholder} cols="20" rows="6"></textarea>
        </>
    )
}

export {Input1, Select, Option, Textarea}